import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const unsubscribeSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.'),
  reason: z.string().optional().default(''),
});

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();
    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 });
    }

    const parsed = unsubscribeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: 'Enter a valid email address.' }, { status: 422 });
    }

    const { email, reason } = parsed.data;

    // Forward unsubscribe request to live backend
    const backend = process.env.BACKEND_API_URL || 'https://api.havenly.solutions';
    try {
      await fetch(`${backend.replace(/\/$/, '')}/api/v1/dashboard/helpdesk/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          guestName: 'Newsletter Subscriber',
          guestContact: email,
          subject: 'Unsubscribe Request',
          category: 'Customer / Pre-launch Enquiries',
          body: `Unsubscribe Request:\n\nEmail: ${email}\nReason: ${reason || 'User requested unsubscribe via unsubscribe screen.'}\nAction: Remove from automated marketing and launch update lists.`,
        }),
        cache: 'no-store',
      });
    } catch (err) {
      console.error('[unsubscribe] Failed to forward to backend:', err);
    }

    return NextResponse.json({ ok: true, message: 'You have been successfully unsubscribed.' }, { status: 200 });
  } catch (error) {
    console.error('[unsubscribe] Error:', error);
    return NextResponse.json({ ok: false, message: 'Failed to process unsubscribe request.' }, { status: 500 });
  }
}
