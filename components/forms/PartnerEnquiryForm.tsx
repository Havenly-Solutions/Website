'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { focusFirstInvalid, getApiUrl, submitJson, trackFormView } from '@/lib/client';
import {
  CONTACT_METHODS, COUNTRIES, DISPATCH_ANSWERS, ORG_TYPES, PARTNERSHIP_TYPES,
  fieldErrors, partnerSchema, phoneValid, type FieldErrors,
} from '@/lib/schemas';
import { Icon } from '../Icon';
import { ConsentField, Honeypot, RadioChips, SelectField, TextAreaField, TextField } from './fields';

const EMPTY = {
  orgName: '', orgType: '', regNo: '', country: 'South Africa', region: '', serviceArea: '', website: '',
  contactName: '', email: '', phone: '', preferredContact: '',
  partnershipType: '', description: '', support: '', dispatch: '', consent: false, hp: '',
};
type Values = typeof EMPTY;

const STEPS = [
  { name: 'Your organization', fields: ['orgName', 'orgType', 'regNo', 'country', 'region', 'serviceArea', 'website'] },
  { name: 'Contact details', fields: ['contactName', 'email', 'phone', 'preferredContact'] },
  { name: 'Your partnership', fields: ['partnershipType', 'description', 'support', 'dispatch', 'consent'] },
];

export function PartnerEnquiryForm() {
  const started = useRef(Date.now());
  const top = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [message, setMessage] = useState('');
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const isCooldownActive = cooldownUntil !== null && Date.now() < cooldownUntil;

  useEffect(() => {
    trackFormView('partner_application');
  }, []);

  useEffect(() => {
    if (!cooldownUntil) return;
    const timeout = window.setTimeout(() => setCooldownUntil(null), Math.max(0, cooldownUntil - Date.now()));
    return () => window.clearTimeout(timeout);
  }, [cooldownUntil]);

  const set = (key: keyof Values, value: string | boolean) => {
    setV((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };
  const bind = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    set(key, e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value);

  function validate(): FieldErrors {
    const parsed = partnerSchema.safeParse({ ...v, startedAt: started.current });
    const all: FieldErrors = parsed.success ? {} : fieldErrors(parsed.error);
    if (!all.phone && v.phone && !phoneValid(v.phone, v.country)) all.phone = 'Enter a valid phone number, for example 011 000 0000.';
    return all;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'busy' || isCooldownActive) return;
    if ((v.hp ?? '').length > 0) return;

    const all = validate();
    const mine = Object.fromEntries(Object.entries(all).filter(([k]) => STEPS[step].fields.includes(k)));
    if (Object.keys(mine).length) {
      setErrors(mine);
      setMessage('Please fix the highlighted fields to continue.');
      focusFirstInvalid();
      return;
    }
    setMessage('');
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
      return;
    }
    if (Object.keys(all).length) {
      setErrors(all);
      const first = STEPS.findIndex((s) => s.fields.some((f) => all[f]));
      if (first >= 0) setStep(first);
      setMessage('Please fix the highlighted fields.');
      focusFirstInvalid();
      return;
    }

    setStatus('busy');
    const result = await submitJson('/api/partner-enquiry', { ...v, startedAt: started.current }, 'partner_application');

    if (result.ok) {
      setStatus('done');
      setCooldownUntil(Date.now() + 60000);
      toast.success('Your partnership application has been submitted.');
      return;
    }

    setStatus('idle');
    setErrors(result.errors ?? {});
    setMessage(result.message);
    toast.error(result.message);
    if (result.errors) focusFirstInvalid();
  }

  if (status === 'done') {
    return (
      <div className="done" role="status">
        <div className="tick"><Icon name="check" /></div>
        <h3>Thank you.</h3>
        <p className="muted">A member of the Havenly Solutions team will review your enquiry and contact you.</p>
        <p style={{ marginTop: 18 }}><Link className="btn btn-line" href="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <div ref={top}>
      <div className="progress" aria-hidden="true">
        {STEPS.map((s, i) => <i key={s.name} className={i <= step ? 'on' : ''} />)}
      </div>
      <div className="stepname"><b>{STEPS[step].name}</b><span>Step {step + 1} of {STEPS.length}</span></div>
      <form onSubmit={onSubmit} noValidate aria-label="Partnership enquiry">
        <Honeypot value={v.hp} onChange={(hp) => set('hp', hp)} />

        {step === 0 && (
          <>
            <TextField id="orgName" label="Organization name" autoComplete="organization" placeholder="e.g. Hope Foundation" value={v.orgName} onChange={bind('orgName')} error={errors.orgName} />
            <div className="row2">
              <SelectField id="orgType" label="Organization type" placeholder="Choose type" options={ORG_TYPES} value={v.orgType} onChange={bind('orgType')} error={errors.orgType} />
              <TextField id="regNo" label="Organization registration number" optional placeholder="e.g. 2023/123456/08" value={v.regNo} onChange={bind('regNo')} error={errors.regNo} />
            </div>
            <div className="row2">
              <SelectField id="country" label="Country" options={COUNTRIES} value={v.country} onChange={bind('country')} error={errors.country} />
              <TextField id="region" label="Province / region" placeholder="e.g. Gauteng or Western Cape" value={v.region} onChange={bind('region')} error={errors.region} />
            </div>
            <div className="row2">
              <TextField id="serviceArea" label="Service area" placeholder="e.g. Gauteng, Cape Town, or eThekwini" value={v.serviceArea} onChange={bind('serviceArea')} error={errors.serviceArea} />
              <TextField id="website" label="Website" optional inputMode="url" placeholder="e.g. www.example.org" value={v.website} onChange={bind('website')} error={errors.website} />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <TextField id="contactName" label="Contact person" autoComplete="name" placeholder="e.g. Jane Smith" value={v.contactName} onChange={bind('contactName')} error={errors.contactName} />
            <div className="row2">
              <TextField id="email" label="Email address" type="email" autoComplete="email" placeholder="e.g. jane@example.com" value={v.email} onChange={bind('email')} error={errors.email} />
              <TextField id="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 011 000 0000" value={v.phone} onChange={bind('phone')} error={errors.phone} />
            </div>
            <RadioChips id="preferredContact" name="preferredContact" legend="Preferred contact method" options={CONTACT_METHODS} value={v.preferredContact} onChange={(x) => set('preferredContact', x)} error={errors.preferredContact} />
          </>
        )}

        {step === 2 && (
          <>
            <SelectField id="partnershipType" label="What type of partnership are you interested in?" placeholder="Choose one" options={PARTNERSHIP_TYPES} value={v.partnershipType} onChange={bind('partnershipType')} error={errors.partnershipType} />
            <TextAreaField id="description" label="Describe your organization" placeholder="Briefly describe your organization's mission and operations…" value={v.description} onChange={bind('description')} error={errors.description} />
            <TextAreaField id="support" label="How could your organization support Havenly Solutions users?" placeholder="Describe the services or support you can offer…" value={v.support} onChange={bind('support')} error={errors.support} />
            <RadioChips id="dispatch" name="dispatch" legend="Do you currently operate an emergency-response or service dispatch system?" options={DISPATCH_ANSWERS} value={v.dispatch} onChange={(x) => set('dispatch', x)} error={errors.dispatch} />
            <ConsentField id="consent" checked={v.consent} onChange={bind('consent')} error={errors.consent}>
              I agree that Havenly Solutions may contact me regarding this partnership enquiry.
            </ConsentField>
          </>
        )}

        <div className="form-msg" role="alert">{message}</div>
        <div className="actions">
          {step > 0 ? <button className="btn btn-line" type="button" onClick={() => { setMessage(''); setStep(step - 1); }}>Back</button> : <span />}
          <button className="btn btn-dark" type="submit" disabled={status === 'busy' || isCooldownActive}>
            {status === 'busy' ? 'Sending…' : isCooldownActive ? 'Already sent — please wait' : step === STEPS.length - 1 ? 'Submit Partnership Enquiry' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
}
