import 'server-only';

export type SubmissionKind = 'pre-register' | 'partner-enquiry' | 'contact';

export class NotConfiguredError extends Error {
  constructor() {
    super('No backend form destination is configured (set BACKEND_API_URL).');
  }
}

const BACKEND_PATHS: Record<SubmissionKind, string> = {
  'pre-register': '/api/v1/marketing/pre-registrations',
  'partner-enquiry': '/api/v1/marketing/customer-service',
  contact: '/api/v1/marketing/customer-service',
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

export function buildBackendPayload(kind: SubmissionKind, data: Record<string, unknown>): Record<string, unknown> {
  if (kind === 'pre-register') {
    return {
      email: data.email,
      firstName: data.firstName,
      surname: data.lastName ?? '',
      province: (data.country as string | undefined) ?? 'Other',
      phone: data.mobile ?? '',
      source: 'website',
      tierInterest: 'FREE',
    };
  }
  if (kind === 'contact') {
    return {
      name: data.name,
      email: data.email,
      subject: data.topic || 'General Enquiry',
      category: data.topic || 'GENERAL',
      message: data.message,
      phone: data.phone ?? '',
    };
  }
  if (kind === 'partner-enquiry') {
    return {
      name: data.contactName ?? data.orgName,
      email: data.email,
      subject: `Partnership enquiry: ${data.orgName ?? 'New partner application'}`,
      category: 'PARTNERSHIP',
      message: [
        `Organisation: ${data.orgName ?? 'N/A'}`,
        `Type: ${data.orgType ?? 'N/A'}`,
        `Region: ${data.region ?? 'N/A'}`,
        `Service area: ${data.serviceArea ?? 'N/A'}`,
        `Website: ${data.website ?? 'N/A'}`,
        `Description: ${data.description ?? 'N/A'}`,
        `Support offered: ${data.support ?? 'N/A'}`,
        `Preferred contact: ${data.preferredContact ?? 'N/A'}`,
        `Partnership type: ${data.partnershipType ?? 'N/A'}`,
      ].join('\n'),
      phone: data.phone ?? '',
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
