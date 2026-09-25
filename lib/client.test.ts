import { describe, expect, it, vi } from 'vitest';
import { submitJson } from './client';

describe('submitJson', () => {
  it('preserves the consent checkbox value in the payload', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ ok: true }),
    });

    vi.stubGlobal('fetch', fetchSpy);

    const result = await submitJson('https://example.com/api/contact', {
      email: 'hello@example.com',
      message: 'Hello there',
      consent: true,
    }, 'helpdesk_ticket');

    expect(result.ok).toBe(true);
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const [, options] = fetchSpy.mock.calls[0];
    expect(options).toMatchObject({ method: 'POST' });
    expect(JSON.parse(String(options?.body))).toMatchObject({
      email: 'hello@example.com',
      message: 'Hello there',
      consent: true,
    });

    vi.unstubAllGlobals();
  });
});
