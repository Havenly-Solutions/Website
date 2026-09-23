import 'server-only';

export type SubmissionKind = 'pre-register' | 'partner-enquiry' | 'contact';

export class NotConfiguredError extends Error {
  constructor() {
    super('No form destination is configured (set FORMS_WEBHOOK_URL or BACKEND_API_URL).');
  }
}

const BACKEND_PATHS: Record<SubmissionKind, string> = {
  'pre-register': '/public/pre-registrations',
  'partner-enquiry': '/public/partner-enquiries',
  contact: '/public/contact-messages',
};

async function post(url: string, headers: Record<string, string>, body: unknown): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Destination responded with ${res.status}`);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Delivers a validated submission to the configured destination.
 * Personal information is never written to the server log.
 */
export async function forwardSubmission(kind: SubmissionKind, data: Record<string, unknown>): Promise<void> {
  const payload = { kind, receivedAt: new Date().toISOString(), source: 'havenly-solutions-website', data };
  const webhook = process.env.FORMS_WEBHOOK_URL;
  const backend = process.env.BACKEND_API_URL;

  if (webhook) {
    const secret = process.env.FORMS_WEBHOOK_SECRET;
    await post(webhook, secret ? { 'X-Webhook-Secret': secret } : {}, payload);
    return;
  }
  if (backend) {
    const key = process.env.BACKEND_API_KEY;
    await post(`${backend.replace(/\/$/, '')}${BACKEND_PATHS[kind]}`, key ? { Authorization: `Bearer ${key}` } : {}, payload);
    return;
  }
  if (process.env.NODE_ENV === 'production') throw new NotConfiguredError();
  console.info(`[forms] "${kind}" submission received (development: no destination configured, nothing was sent).`);
}
