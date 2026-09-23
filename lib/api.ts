import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import type { ZodTypeAny, z } from 'zod';
import { fieldErrors } from './schemas';
import { forwardSubmission, NotConfiguredError, type SubmissionKind } from './forward';
import { rateLimit } from './rate-limit';

const MAX_BODY = 20_000;
const MIN_FILL_MS = 1500;

function json(body: Record<string, unknown>, status = 200, headers?: Record<string, string>) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}

/** Shared handler for the three public forms: origin check, rate limit, size limit, honeypot, validation, delivery. */
export async function handleSubmission<S extends ZodTypeAny>(req: NextRequest, kind: SubmissionKind, schema: S) {
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, message: 'Request not allowed.' }, 403);
    } catch {
      return json({ ok: false, message: 'Request not allowed.' }, 403);
    }
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
  const limited = rateLimit(`${kind}:${ip}`, 6, 10 * 60_000);
  if (!limited.ok) {
    return json({ ok: false, message: 'Too many attempts. Please wait a few minutes and try again.' }, 429, {
      'Retry-After': String(limited.retryAfter),
    });
  }

  if (!(req.headers.get('content-type') ?? '').includes('application/json')) {
    return json({ ok: false, message: 'Unsupported request.' }, 415);
  }
  const raw = await req.text();
  if (raw.length > MAX_BODY) return json({ ok: false, message: 'Your message is too long.' }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: 'Invalid request.' }, 400);
  }

  // Honeypot filled, or the form was submitted faster than a person could fill it: pretend success, deliver nothing.
  const probe = body as { hp?: unknown; startedAt?: unknown };
  const tooFast = typeof probe.startedAt === 'number' && Date.now() - probe.startedAt < MIN_FILL_MS;
  if ((typeof probe.hp === 'string' && probe.hp.length > 0) || tooFast) return json({ ok: true });

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return json({ ok: false, message: 'Please check the highlighted fields.', errors: fieldErrors(parsed.error) }, 422);
  }

  const { hp: _hp, startedAt: _startedAt, ...data } = parsed.data as z.infer<S> & { hp?: string; startedAt?: number };
  try {
    await forwardSubmission(kind, data as Record<string, unknown>);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof NotConfiguredError) console.error('[forms] ' + error.message);
    else console.error(`[forms] delivery of "${kind}" failed.`);
    return json({ ok: false, message: 'We could not send this right now. Please try again shortly.' }, 503);
  }
}
