'use client';

import { useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Icon } from '../Icon';
import { SelectField, TextField } from './fields';

const REASONS = [
  'I no longer want to receive these emails',
  'I never signed up for this mailing list',
  'The emails are too frequent',
  'The content is not relevant to me',
  'Other',
] as const;

export function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams?.get('email') ?? '';

  const [email, setEmail] = useState(initialEmail);
  const [reason, setReason] = useState<string>(REASONS[0]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [unsubscribedEmail, setUnsubscribedEmail] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('busy');
    setError('');

    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, reason }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setUnsubscribedEmail(trimmed);
        setStatus('done');
      } else {
        setError(data.message || 'Failed to unsubscribe. Please try again.');
        setStatus('idle');
      }
    } catch {
      setError('Something went wrong. Please check your connection.');
      setStatus('idle');
    }
  }

  function handleResubscribe() {
    setStatus('idle');
    setEmail(unsubscribedEmail);
  }

  if (status === 'done') {
    return (
      <div className="done" role="status" style={{ textAlign: 'center', padding: '32px 16px' }}>
        <div className="tick" style={{ margin: '0 auto 16px' }}>
          <Icon name="check" />
        </div>
        <h3 style={{ fontSize: 'var(--t-xl)', marginBottom: 8 }}>You are unsubscribed</h3>
        <p className="muted" style={{ maxWidth: '44ch', margin: '0 auto 20px', fontSize: 'var(--t-sm)' }}>
          We have updated the email preferences for <strong>{unsubscribedEmail}</strong>. You will no longer receive automated marketing or announcement emails from Havenly Solutions.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <Link className="btn btn-dark" href="/">
            Return to Home Screen
          </Link>
          <button className="btn btn-line" type="button" onClick={handleResubscribe}>
            Re-subscribe
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Unsubscribe form" style={{ maxWidth: 520, margin: '0 auto' }}>
      <TextField
        id="email"
        label="Email address"
        type="email"
        autoComplete="email"
        placeholder="e.g. jane@example.com"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
          if (error) setError('');
        }}
        error={error}
      />
      <SelectField
        id="reason"
        label="Reason for unsubscribing (optional)"
        options={REASONS}
        value={reason}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setReason(e.target.value as typeof REASONS[number])}
      />
      <p className="muted" style={{ fontSize: 'var(--t-xs)', margin: '14px 0 20px' }}>
        Unsubscribing will stop automated promotional emails and launch announcements. Essential transactional service notifications (if configured) will not be affected.
      </p>
      <button className="btn btn-dark" type="submit" disabled={status === 'busy'} style={{ width: '100%', justifyContent: 'center' }}>
        {status === 'busy' ? 'Unsubscribing…' : 'Unsubscribe from emails'}
      </button>
    </form>
  );
}
