'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { focusFirstInvalid, submitJson } from '@/lib/client';
import { CONTACT_TOPICS, contactSchema, fieldErrors, type FieldErrors } from '@/lib/schemas';
import { Icon } from '../Icon';
import { ConsentField, Honeypot, SelectField, TextAreaField, TextField } from './fields';

const EMPTY = { name: '', email: '', topic: '', message: '', consent: false, hp: '' };
type Values = typeof EMPTY;

export function ContactForm() {
  const started = useRef(Date.now());
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [message, setMessage] = useState('');

  const bind = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setV((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'busy') return;
    const parsed = contactSchema.safeParse({ ...v, startedAt: started.current });
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setMessage('Please fix the highlighted fields.');
      focusFirstInvalid();
      return;
    }
    setStatus('busy');
    setMessage('');
    const result = await submitJson('/api/contact', { ...v, startedAt: started.current });
    if (result.ok) return setStatus('done');
    setStatus('idle');
    setErrors(result.errors ?? {});
    setMessage(result.message);
    if (result.errors) focusFirstInvalid();
  }

  if (status === 'done') {
    return (
      <div className="done" role="status">
        <div className="tick"><Icon name="check" /></div>
        <h3>Message sent</h3>
        <p className="muted">Thank you. A member of the Havenly Solutions team will review your message and reply.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <Honeypot value={v.hp} onChange={(hp) => setV((p) => ({ ...p, hp }))} />
      <div className="row2">
        <TextField id="name" label="Your name" autoComplete="name" placeholder="e.g. Jane Smith" value={v.name} onChange={bind('name')} error={errors.name} />
        <TextField id="email" label="Email address" type="email" autoComplete="email" placeholder="e.g. jane@example.com" value={v.email} onChange={bind('email')} error={errors.email} />
      </div>
      <SelectField id="topic" label="What is your enquiry about?" placeholder="Choose a topic" options={CONTACT_TOPICS} value={v.topic} onChange={bind('topic')} error={errors.topic} />
      <TextAreaField id="message" label="Message" placeholder="Write your message here…" value={v.message} onChange={bind('message')} error={errors.message} />
      <ConsentField id="consent" checked={v.consent} onChange={bind('consent')} error={errors.consent}>
        I agree that Havenly Solutions may contact me about this enquiry.
      </ConsentField>
      <div className="form-msg" role="alert">{message}</div>
      <button className="btn btn-dark" type="submit" disabled={status === 'busy'}>{status === 'busy' ? 'Sending…' : 'Send message'}</button>
    </form>
  );
}
