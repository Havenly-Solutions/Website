export type NewsletterStatus = 'active' | 'unsubscribed';

export type NewsletterState = {
  emailNormalized: string;
  status: NewsletterStatus;
  source: string;
  consentGiven: boolean;
  consentVersion: string;
  consentedAt: string | null;
  firstSubscribedAt: string | null;
  lastSubscribedAt: string | null;
  unsubscribedAt: string | null;
};

export function normalizeEmail(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    throw new Error('Enter a valid email address.');
  }
  return normalized;
}

function nowIso(): string {
  return new Date().toISOString();
}

export const newsletterSubscriptionService = {
  createState(input: {
    email: string;
    consentGiven: boolean;
    source: string;
    consentVersion?: string;
    consentedAt?: string | null;
    firstSubscribedAt?: string | null;
    lastSubscribedAt?: string | null;
    unsubscribedAt?: string | null;
  }): NewsletterState {
    const emailNormalized = normalizeEmail(input.email);
    const consentTimestamp = input.consentedAt ?? (input.consentGiven ? nowIso() : null);
    return {
      emailNormalized,
      status: input.unsubscribedAt ? 'unsubscribed' : 'active',
      source: input.source,
      consentGiven: input.consentGiven,
      consentVersion: input.consentVersion ?? 'v1',
      consentedAt: consentTimestamp,
      firstSubscribedAt: input.firstSubscribedAt ?? consentTimestamp,
      lastSubscribedAt: input.lastSubscribedAt ?? consentTimestamp,
      unsubscribedAt: input.unsubscribedAt ?? null,
    };
  },
  updateSubscription(state: NewsletterState, input: { consentGiven?: boolean; source?: string; consentVersion?: string; consentedAt?: string | null; unsubscribedAt?: string | null }): NewsletterState {
    const next: NewsletterState = {
      ...state,
      consentGiven: input.consentGiven ?? state.consentGiven,
      source: input.source ?? state.source,
      consentVersion: input.consentVersion ?? state.consentVersion,
      consentedAt: input.consentedAt ?? state.consentedAt,
      unsubscribedAt: input.unsubscribedAt ?? state.unsubscribedAt,
      lastSubscribedAt: input.unsubscribedAt ? state.lastSubscribedAt : state.lastSubscribedAt ?? state.consentedAt,
    };

    if (input.unsubscribedAt) {
      next.status = 'unsubscribed';
      next.unsubscribedAt = input.unsubscribedAt;
    } else if (next.consentGiven) {
      next.status = 'active';
      next.lastSubscribedAt = next.consentedAt ?? next.lastSubscribedAt ?? nowIso();
    }

    return next;
  },
};
