'use client'
import { useState } from 'react'
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react'

const REGIONS = [
  'Johannesburg / Gauteng', 'Cape Town / Western Cape', 'Durban / KZN',
  'Pretoria / Gauteng', 'Port Elizabeth / Eastern Cape', 'Bloemfontein / Free State',
  'Polokwane / Limpopo', 'Nelspruit / Mpumalanga', 'Kimberley / Northern Cape',
  'Rustenburg / North West', 'East London / Eastern Cape',
]

export default function PreRegForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', region: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) { setError('You must agree to the Privacy Policy'); return }
    if (!form.region) { setError('Please select your region'); return }
    setLoading(true); setError('')
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
      const res = await fetch(`${apiUrl}/api/pre-registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      const data = await res.json()
      if (res.status === 409) { setError('This email is already registered. You\'re on the list!'); setLoading(false); return }
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); setLoading(false); return }
      setSuccess(true)
    } catch {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

   //Confirmation//

    if (success) return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center">
      <div className="w-14 h-14 bg-[#0B6E4F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-[#0B6E4F]" />
      </div>
      <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">You're on the list.</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        We'll notify you the moment Havenly Solutions launches on <strong>24 November 2026</strong>.<br />
        Tell someone who needs to know.
          WE ARE BRINGING CHANGE TO THE ECONOMY!!!
      </p>
      <div className="mt-4 px-4 py-2 bg-gray-50 rounded-lg inline-block">
        <p className="text-xs text-gray-400 font-mono">{form.email}</p>
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black shadow-lg p-6 space-y-2">
      <div>
        <label htmlFor="full-name" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">FULL NAME</label>
        <input id="full-name" type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
      </div>
      <div>
        <label htmlFor="phone-number" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">SA PHONE NUMBER</label>
        <input id="phone-number" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone : e.target.value }))} required
          placeholder="+27 XX XXX XXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
        <p className="text-[10px] text-gray-500 mt-1">South African mobile number format</p>
      </div>
      <div>
        <label htmlFor="email-address" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">EMAIL ADDRESS</label>
        <input id="email-address" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required
               placeholder="thabo@email.co.za"
               className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
      </div>
      <div>
        <label htmlFor="region-select" className="block text-[10px] text-black font-bold uppercase tracking-widest mb-1.5">Primary Region</label>
        <select id="region-select" value={form.region} onChange={e => setForm(f => ({ ...f, region: e.target.value }))}
          className={`w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors ${form.region ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>
          <option value="" disabled>Johannesburg / Gauteng</option>
          {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      {error && <p className="text-[#C0392B] text-xs">{error}</p>}
      <div className="flex items-start gap-2 mt-2">
        <input type="checkbox" id="consent" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1" />
        <label htmlFor="consent" className="text-xs text-gray-600">
          I agree to Havenly Solutions's <a href="/privacy" className="underline hover:text-black">Privacy Policy</a> and consent to my data being processed for safety services.
        </label>
      </div>
      <button type="submit" disabled={loading}
        className="w-full btn-shimmer text-white font-display font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-2">
        {loading ? <><Loader2 size={16} className="animate-spin" />Securing your spot...</>
          : <>Secure My Free Account<ArrowRight size={16} /></>}
      </button>
      <p className="text-[10px] text-black text-center">End-to-end encrypted enrollment · No third-party sharing</p>
    </form>
  )
}
