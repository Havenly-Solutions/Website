import type { FieldErrors } from './schemas';

export type SubmitResult = { ok: true } | { ok: false; message: string; errors?: FieldErrors; status?: number };

export type FormEventName = 'pre_registration' | 'newsletter_signup' | 'helpdesk_ticket' | 'partner_application';

const API_BASE = () => (process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions').replace(/\/+$/, '');

export function getApiUrl(path: string) {
  return `${API_BASE()}${path}`;
}

export function trackFormView(name: FormEventName) {
  if (typeof window === 'undefined') return;
  const posthog = (window as Window & { posthog?: { capture: (event: string, props?: Record<string, unknown>) => void } }).posthog;
  posthog?.capture('form_viewed', { form_name: name });
}

export function trackFormSubmit(name: FormEventName, extras?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const posthog = (window as Window & { posthog?: { capture: (event: string, props?: Record<string, unknown>) => void } }).posthog;
  posthog?.capture('form_submitted', { form_name: name, ...extras });
}

export function captureException(error: unknown, context?: string) {
  if (typeof window === 'undefined') {
    console.error(context ?? 'Form submission failed', error);
    return;
  }

  const sentry = (window as Window & { Sentry?: { captureException: (error: unknown) => void } }).Sentry;
  if (sentry?.captureException) sentry.captureException(error);
  else console.error(context ?? 'Form submission failed', error);
}

async function sanitizeString(value: string): Promise<string> {
  const trimmed = value.trim();
  if (!trimmed || typeof window === 'undefined') return trimmed;

  try {
    const { default: createDOMPurify } = await import('dompurify');
    return createDOMPurify(window).sanitize(trimmed, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      USE_PROFILES: { html: true },
    }).trim();
  } catch {
    return trimmed.replace(/<[^>]*>/g, '').trim();
  }
}

async function normalisePayload(payload: Record<string, unknown>) {
  const next: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (key === '_honeypot' || key === 'hp' || key === 'startedAt' || key === 'privacyAccepted' || key === 'termsAccepted') continue;
    if (value === undefined || value === null) continue;
    if (typeof value === 'string') next[key] = await sanitizeString(value);
    else next[key] = value;
  }

  return next;
}

/** Posts JSON directly to the external backend API and normalises server responses. */
export async function submitJson(url: string, body: unknown, formName?: FormEventName): Promise<SubmitResult> {
  try {
    const payload = await normalisePayload((body ?? {}) as Record<string, unknown>);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const raw = await res.text();
    const data = raw ? (JSON.parse(raw) as { ok?: boolean; message?: string; errors?: FieldErrors }) : {};

    if (res.ok && (res.status === 200 || res.status === 201)) {
      if (formName) trackFormSubmit(formName);
      return { ok: true };
    }

    if (res.status === 409) {
      return { ok: false, message: data.message ?? 'This request already exists.', status: 409 };
    }

    if (res.status === 422) {
      return { ok: false, message: data.message ?? 'Please check the highlighted fields.', errors: data.errors, status: 422 };
    }

    return { ok: false, message: data.message ?? 'Something went wrong.', status: res.status };
  } catch (error) {
    captureException(error, 'Form submission failed');
    return { ok: false, message: 'Something went wrong.' };
  }
}

export function focusFirstInvalid() {
  requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
}
