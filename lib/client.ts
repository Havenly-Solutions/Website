import type { FieldErrors } from './schemas';

export type SubmitResult = { ok: true } | { ok: false; message: string; errors?: FieldErrors };

/** POSTs JSON to one of our own API routes and normalises every failure into a readable message. */
export async function submitJson(url: string, body: unknown): Promise<SubmitResult> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: FieldErrors };
    if (res.ok && data.ok) return { ok: true };
    return { ok: false, message: data.message ?? 'Something went wrong. Please try again.', errors: data.errors };
  } catch {
    return { ok: false, message: 'We could not reach the server. Check your connection and try again.' };
  }
}

export function focusFirstInvalid() {
  requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
}
