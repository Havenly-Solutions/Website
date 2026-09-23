'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { focusFirstInvalid, submitJson } from '@/lib/client';
import { COUNTRIES, INTERESTS, fieldErrors, phoneValid, preRegisterSchema, type FieldErrors } from '@/lib/schemas';
import { SITE } from '@/lib/site';
import { Icon } from '../Icon';
import { ConsentField, Honeypot, SelectField, TextField } from './fields';
import { ShareButton } from './ShareButton';

const EMPTY = { firstName: '', lastName: '', email: '', mobile: '', country: 'South Africa', city: '', interest: '', consent: false, hp: '' };
type Values = typeof EMPTY;

export function PreRegisterForm() {
  const started = useRef(Date.now());
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [message, setMessage] = useState('');

  const bind = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setV((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'busy') return;
    const parsed = preRegisterSchema.safeParse({ ...v, startedAt: started.current });
    const found: FieldErrors = parsed.success ? {} : fieldErrors(parsed.error);
    if (!found.mobile && v.mobile && !phoneValid(v.mobile, v.country)) {
      found.mobile = v.country === 'South Africa' ? 'Enter a South African mobile number, for example 082 000 0000.' : 'Enter your mobile number with the country code, for example +267 71 234 567.';
    }
    if (Object.keys(found).length) {
      setErrors(found);
      setMessage('Please fix the highlighted fields.');
      focusFirstInvalid();
      return;
    }
    setStatus('busy');
    setMessage('');
    const result = await submitJson('/api/pre-register', { ...v, startedAt: started.current });
    if (result.ok) return setStatus('done');
    setStatus('idle');
    setErrors(result.errors ?? {});
    setMessage(result.message);
    if (result.errors) focusFirstInvalid();
  }

  if (status === 'done') {
    return (
      <div className="done" role="status">
        <div className="tick"><Icon name="check" className="" /></div>
        <h3>You’re on the list.</h3>
        <p className="muted">Thank you for registering your interest in Havenly Solutions. We’ll keep you informed as we prepare for launch.</p>
        <p style={{ marginTop: 10, fontWeight: 500 }}>Launch: {SITE.launchLabel}</p>
        <ShareButton />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Pre-registration">
      <Honeypot value={v.hp} onChange={(hp) => setV((p) => ({ ...p, hp }))} />
      <div className="row2">
        <TextField id="firstName" label="First name" autoComplete="given-name" placeholder="e.g. Jane" value={v.firstName} onChange={bind('firstName')} error={errors.firstName} />
        <TextField id="lastName" label="Last name" autoComplete="family-name" placeholder="e.g. Doe" value={v.lastName} onChange={bind('lastName')} error={errors.lastName} />
      </div>
      <TextField id="email" label="Email address" type="email" autoComplete="email" placeholder="e.g. jane@example.com" value={v.email} onChange={bind('email')} error={errors.email} />
      <TextField id="mobile" label="Mobile number" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 082 000 0000" value={v.mobile} onChange={bind('mobile')} error={errors.mobile} />
      <div className="row2">
        <SelectField id="country" label="Country" options={COUNTRIES} value={v.country} onChange={bind('country')} error={errors.country} />
        <TextField id="city" label="City / area" optional autoComplete="address-level2" placeholder="e.g. Johannesburg or Sandton" value={v.city} onChange={bind('city')} error={errors.city} />
      </div>
      <SelectField id="interest" label="What are you most interested in?" placeholder="Choose an option" options={INTERESTS} value={v.interest} onChange={bind('interest')} error={errors.interest} />
      <ConsentField id="consent" checked={v.consent} onChange={bind('consent')} error={errors.consent}>
        I agree to receive Havenly Solutions launch and product information.
      </ConsentField>
      <div className="form-msg" role="alert">{message}</div>
      <button className="btn btn-dark" type="submit" disabled={status === 'busy'}>
        {status === 'busy' ? 'Sending…' : 'Pre-Register for Havenly Solutions'}
      </button>
    </form>
  );
}
