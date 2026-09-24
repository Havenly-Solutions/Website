import { describe, expect, it } from 'vitest';
import { normalizeEmail, newsletterSubscriptionService } from './newsletter';

describe('newsletterSubscriptionService', () => {
  it('normalizes and validates email addresses consistently', () => {
    expect(normalizeEmail('  Jane.Doe@Example.COM  ')).toBe('jane.doe@example.com');
    expect(() => normalizeEmail('not-an-email')).toThrow(/valid email/i);
  });

  it('tracks consent and prevents duplicate active subscriptions', () => {
    const initial = newsletterSubscriptionService.createState({ email: 'Jane@Example.com', consentGiven: true, source: 'register' });
    const duplicate = newsletterSubscriptionService.createState({ email: 'jane@example.com', consentGiven: true, source: 'contact' });

    expect(initial.emailNormalized).toBe('jane@example.com');
    expect(initial.status).toBe('active');
    expect(duplicate.emailNormalized).toBe('jane@example.com');
    expect(duplicate.status).toBe('active');
    expect(duplicate.source).toBe('contact');
  });
});
