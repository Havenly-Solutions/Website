'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/nextjs'
import { toast } from 'sonner'

export default function PartnerApplicationForm() {
  const [form, setForm] = useState({
    orgName: '',
    liaisonName: '',
    liaisonPhone: '',
    orgType: 'Registered NGO',
    email: '',
    regNumber: '',
    operatingRegion: '',
    missionStatement: '',
    _honeypot: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  // Rate Limiting Cooldown Timer
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [cooldown])

  // TODO: Verify backend checks the Origin header on this endpoint.
  // If not, implement a CSRF token flow before go-live.
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form._honeypot) return // Bot detected
    if (cooldown > 0) { toast.error(`Please wait ${cooldown}s before submitting again`); return }
    if (!agreed) {
      toast.error('Please acknowledge the terms to proceed.')
      return
    }

    // Validation
    const phoneRegex = /^(\+27|0)[0-9]{9}$/
    if (!phoneRegex.test(form.liaisonPhone.replace(/\s+/g, ''))) {
      toast.error('Please enter a valid South African phone number (+27 or 0 followed by 9 digits)')
      return
    }

    setLoading(true)
    
    try {
      const sanitizedForm = {
        orgName: DOMPurify.sanitize(form.orgName),
        liaisonName: DOMPurify.sanitize(form.liaisonName),
        liaisonPhone: DOMPurify.sanitize(form.liaisonPhone),
        orgType: DOMPurify.sanitize(form.orgType),
        email: DOMPurify.sanitize(form.email),
        regNumber: DOMPurify.sanitize(form.regNumber),
        operatingRegion: DOMPurify.sanitize(form.operatingRegion),
        missionStatement: DOMPurify.sanitize(form.missionStatement)
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions'
      const res = await fetch(`${apiUrl}/api/ngo-partners/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedForm)
      })
      
      if (res.status === 201) {
        setSuccess(true)
        setCooldown(30)
        toast.success('Application submitted successfully!')
        return
      }

      const data = await res.json().catch(() => ({}));

      if (res.status === 409) {
        toast.error('This organisation is already registered.')
      } else if (res.status === 422) {
        const firstError = data.errors?.[0]?.message || data.message || 'Validation failed';
        toast.error(firstError);
      } else {
        throw new Error(data.message || `API error: ${res.status}`);
      }
    } catch (err: any) {
      Sentry.captureException(err)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center">
        <div className="w-14 h-14 bg-[#0B6E4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-[#0B6E4F]" />
        </div>
        <h3 className="font-display font-bold text-[#1A1A2E] text-2xl mb-2">Application Received</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Thank you for applying to the Havenly Solutions Gold Tier Partner network. Our team will review your application and be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
      <input type="text" name="_honeypot" className="hidden" title="Do not fill this field" tabIndex={-1} autoComplete="off" onChange={e => setForm(f => ({ ...f, _honeypot: e.target.value }))} />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Organisation Name</label>
          <input 
            id="org-name"
            name="orgName"
            required
            value={form.orgName}
            onChange={e => setForm(f => ({...f, orgName: e.target.value}))}
            placeholder="Legal Entity Name" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Primary Liaison Name</label>
          <input 
            id="liaison-name"
            name="liaisonName"
            required
            value={form.liaisonName}
            onChange={e => setForm(f => ({...f, liaisonName: e.target.value}))}
            placeholder="Full Name" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Contact Phone (SMS Confirmation)</label>
          <input 
            id="liaison-phone"
            name="liaisonPhone"
            required
            type="tel"
            value={form.liaisonPhone}
            onChange={e => setForm(f => ({...f, liaisonPhone: e.target.value}))}
            placeholder="+27712345678" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Type of Organisation</label>
          <select 
            id="org-type"
            name="orgType"
            title="Organisation Type"
            value={form.orgType}
            onChange={e => setForm(f => ({...f, orgType: e.target.value}))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C0392B] transition-colors"
          >
            {['Registered NGO', 'Community Watch', 'First Responder', 'University Safety', 'Government Department'].map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Official Email</label>
          <input 
            id="org-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({...f, email: e.target.value}))}
            placeholder="liaison@org.co.za" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Registration Number (NPO/Company)</label>
          <input 
            id="org-reg-number"
            name="regNumber"
            value={form.regNumber}
            onChange={e => setForm(f => ({...f, regNumber: e.target.value}))}
            placeholder="e.g. 2023/123456/08" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Operating Region</label>
          <input 
            id="operating-region"
            name="operatingRegion"
            required
            value={form.operatingRegion}
            onChange={e => setForm(f => ({...f, operatingRegion: e.target.value}))}
            placeholder="e.g. Gauteng, Cape Town Metro" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>

        <div className="col-span-2">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Brief Mission Statement & Capabilities</label>
          <textarea
            id="mission-statement"
            name="missionStatement"
            rows={4}
            value={form.missionStatement}
            onChange={e => setForm(f => ({...f, missionStatement: e.target.value}))}
            placeholder="Describe your organisation's primary focus and active response assets..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] resize-none transition-colors"
          />
        </div>

      </div>

      <div className="flex items-start gap-3 mb-4">
          <input 
            id="partner-agreement"
            name="agreed"
            type="checkbox" 
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            className="mt-0.5 accent-[#C0392B]" 
          />
        <label htmlFor="partner-agreement" className="text-xs text-gray-400 leading-relaxed cursor-pointer">
          We acknowledge that partnership status is subject to rigorous background verification
          and adherence to the Stoic Guardian Protocol standards.
        </label>
      </div>

      <button disabled={loading || cooldown > 0} className="w-full btn-shimmer text-white font-display font-bold py-4 rounded-xl flex items-center justify-center gap-2">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : cooldown > 0 ? `Wait ${cooldown}s` : <>Submit Early Access Application <ArrowRight size={16} /></>}
      </button>
    </form>
  )
}
