'use client'
import { useState, useEffect } from 'react'
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/nextjs'
import { toast } from 'sonner'
import { usePostHog } from 'posthog-js/react'

const REGIONS = [
  'Johannesburg / Gauteng', 'Cape Town / Western Cape', 'Durban / KZN',
  'Pretoria / Gauteng', 'Port Elizabeth / Eastern Cape', 'Bloemfontein / Free State',
  'Polokwane / Limpopo', 'Nelspruit / Mpumalanga', 'Kimberley / Northern Cape',
  'Rustenburg / North West', 'East London / Eastern Cape',
]

export default function PreRegForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', region: '', _honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [consent, setConsent] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture('form_viewed', { form_name: 'pre_registration' })
  }, [posthog])

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
    if (!consent) { toast.error('You must agree to the Privacy Policy'); return }
    if (!form.region) { toast.error('Please select your region'); return }
    
    // Validation
    const phoneRegex = /^(\+27|0)[0-9]{9}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!phoneRegex.test(form.phone.replace(/\s+/g, ''))) {
      toast.error('Please enter a valid South African phone number')
      return
    }

    setLoading(true)
    try {
      const names = form.name.trim().split(/\s+/)
      const firstName = names[0] || 'Unknown'
      const surname = names.slice(1).join(' ') || 'User'

      const sanitizedForm = {
        firstName: DOMPurify.sanitize(firstName),
        surname: DOMPurify.sanitize(surname),
        email: DOMPurify.sanitize(form.email),
        phone: DOMPurify.sanitize(form.phone),
        province: DOMPurify.sanitize(form.region),
        tierInterest: 'FREE'
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions'
      const res = await fetch(`${apiUrl}/api/v1/marketing/pre-registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedForm),
      })

      if (res.status === 201 || res.status === 200) {
        setSuccess(true)
        setCooldown(30)
        posthog.capture('form_submitted', { form_name: 'pre_registration' })
        toast.success('You have been successfully pre registered!')
        return
      }

      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error('Failed to parse API response as JSON:', text.substring(0, 100));
      }

      if (res.status === 409) {
        toast.error('This email is already registered.')
      } else if (res.status === 422) {
        const firstError = data.errors?.[0]?.message || data.message || 'Validation failed';
        toast.error(firstError);
      } else {
        throw new Error(`API error ${res.status}: ${data.message || 'Unknown error'}`)
      }
    } catch (err) {
      Sentry.captureException(err)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

   //Confirmation//

    if (success) return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center">
      <div className="w-14 h-14 bg-[#0B6E4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-[#0B6E4F]" />
      </div>
      <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">You&apos;re on the list.</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        We&apos;ll notify you the moment Havenly Solutions launches on <strong>13 October 2026</strong>.<br />
        Tell someone who needs to know.
          WE ARE BRINGING CHANGE TO THE ECONOMY!!!
      </p>
      <div className="mt-4 px-4 py-2 bg-gray-50 rounded-lg inline-block">
        <p className="text-xs text-gray-600 font-mono">{form.email}</p>
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black shadow-lg p-6 space-y-2">
      <input type="text" name="_honeypot" className="hidden" title="Do not fill this field" tabIndex={-1} autoComplete="off" onChange={e => setForm(f => ({ ...f, _honeypot: e.target.value }))} />
      <div>
        <label htmlFor="full-name" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">FULL NAME</label>
        <input 
          id="full-name" 
          name="name"
          type="text" 
          value={form.name} 
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
          required
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-500 focus:outline-none focus:border-[#C0392B] transition-colors" />
      </div>
      <div>
        <label htmlFor="phone-number" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">SA PHONE NUMBER</label>
        <input 
          id="phone-number" 
          name="phone"
          type="tel" 
          value={form.phone} 
          onChange={e => setForm(f => ({ ...f, phone : e.target.value }))} 
          required
          placeholder="+27 XX XXX XXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-500 focus:outline-none focus:border-[#C0392B] transition-colors" />
        <p className="text-[10px] text-gray-700 mt-1">South African mobile number format</p>
      </div>
      <div>
        <label htmlFor="email-address" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">EMAIL ADDRESS</label>
        <input 
               id="email-address" 
               name="email"
               type="email" 
               value={form.email} 
               onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
               required
               placeholder="thabo@email.co.za"
               className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-500 focus:outline-none focus:border-[#C0392B] transition-colors" />
      </div>
      <div>
        <label htmlFor="region-select" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">Primary Region</label>
        <select 
          id="region-select" 
          name="region"
          value={form.region} 
          onChange={e => setForm(f => ({ ...f, region: e.target.value }))}
          className={`w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors ${form.region ? 'text-[#1A1A2E]' : 'text-gray-600'}`}>
          <option value="" disabled>Select your region</option>
          {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <input 
          type="checkbox" 
          id="consent" 
          name="consent"
          checked={consent} 
          onChange={e => setConsent(e.target.checked)} 
          className="mt-1" />
        <label htmlFor="consent" className="text-xs text-gray-600">
          I agree to Havenly Solutions&apos;s <a href="/privacy-policy" className="underline hover:text-black">Privacy Policy</a> and consent to my data being processed for safety services.
        </label>
      </div>
      <button type="submit" disabled={loading || cooldown > 0}
        className="w-full btn-shimmer text-white font-display font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-2">
        {loading ? <><Loader2 size={16} className="animate-spin" />Securing your spot...</>
          : cooldown > 0 ? `Wait ${cooldown}s` : <>Secure My Free Account<ArrowRight size={16} /></>}
      </button>
      <p className="text-[10px] text-black text-center">End to end encrypted enrollment · No third-party sharing</p>
    </form>
  )
}
