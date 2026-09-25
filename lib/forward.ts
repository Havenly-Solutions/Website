import 'server-only';

export type SubmissionKind = 'pre-register' | 'partner-enquiry' | 'contact';

export class NotConfiguredError extends Error {
  constructor() {
    super('No backend form destination is configured (set BACKEND_API_URL).');
  }
}

const BACKEND_PATHS: Record<SubmissionKind, string> = {
  'pre-register': '/api/v1/dashboard/helpdesk/tickets',
  'partner-enquiry': '/api/v1/dashboard/ngo-partners/apply',
  contact: '/api/v1/dashboard/helpdesk/tickets',
};

async function post(url: string, headers: Record<string, string>, body: unknown): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Destination responded with ${res.status}`);
  } finally {
    clearTimeout(timer);
  }
}

function buildBackendPayload(kind: SubmissionKind, data: Record<string, unknown>): Record<string, unknown> {
  if (kind === 'pre-register') {
    return {
      guestName: `${data.firstName ?? ''} ${data.lastName ?? ''}`.trim(),
      guestContact: data.email,
      subject: `Pre-registration: ${data.interest ?? 'Havenly Solutions Launch'}`,
      category: 'Customer / Pre-launch Enquiries',
      body: `Pre-registration submission:\n\nFirst Name: ${data.firstName}\nLast Name: ${data.lastName}\nEmail: ${data.email}\nMobile: ${data.mobile}\nCountry: ${data.country}\nCity: ${data.city || 'N/A'}\nInterest: ${data.interest}`,
    };
  }
  if (kind === 'contact') {
    return {
      guestName: data.name,
      guestContact: data.email,
      subject: data.topic || 'Customer / Pre-launch Enquiries',
      category: data.topic || 'Customer / Pre-launch Enquiries',
      body: data.message,
    };
  }
  if (kind === 'partner-enquiry') {
    return {
      organisationName: data.orgName,
      liaisonName: data.contactName,
      organisationType: data.orgType,
      email: data.email,
      registrationNumber: data.regNo || 'N/A',
      operatingRegion: data.region,
      missionStatement: `${data.description}\n\nSupport offered: ${data.support}`,
      liaisonPhone: data.phone,
    };
  }
  return data;
}

/**
 * Delivers a validated submission to the configured destination.
 * Personal information is never written to the server log.
 */
export async function forwardSubmission(kind: SubmissionKind, data: Record<string, unknown>): Promise<void> {
  const payload = buildBackendPayload(kind, data);
  const backend = process.env.BACKEND_API_URL || 'https://api.havenly.solutions';
  if (backend) {
    const key = process.env.BACKEND_API_KEY;
    await post(`${backend.replace(/\/$/, '')}${BACKEND_PATHS[kind]}`, key ? { Authorization: `Bearer ${key}` } : {}, payload);
    return;
  }

  const webhook = process.env.FORMS_WEBHOOK_URL;
  if (webhook) {
    const secret = process.env.FORMS_WEBHOOK_SECRET;
    await post(webhook, secret ? { 'X-Webhook-Secret': secret } : {}, payload);
    return;
  }

  if (process.env.NODE_ENV === 'production') throw new NotConfiguredError();
  console.info(`[forms] "${kind}" submission received (development: no destination configured, nothing was sent).`);
}
