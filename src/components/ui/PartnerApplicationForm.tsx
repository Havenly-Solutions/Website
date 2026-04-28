'use client'
import { useState } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'

export default function PartnerApplicationForm() {
  const [form, setForm] = useState({
    orgName: '',
    liaisonName: '',
    liaisonPhone: '',
    orgType: 'Registered NGO',
    email: '',
    regNumber: '',
    operatingRegion: '',
    missionStatement: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!agreed) {
      setError('Please acknowledge the terms to proceed.')
      return
    }
    setLoading(true)
    setError('')
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.havenly.solutions'
      const res = await fetch(`${apiUrl}/api/ngo-partners/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      
      setSuccess(true)
    } catch (err) {
      setError('Network error. Please try again.')
    }
    setLoading(false)
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
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Organisation Name</label>
          <input 
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
            value={form.regNumber}
            onChange={e => setForm(f => ({...f, regNumber: e.target.value}))}
            placeholder="e.g. 2023/123456/08" 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" 
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Operating Region</label>
          <input 
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
          type="checkbox" 
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
          className="mt-0.5 accent-[#C0392B]" 
        />
        <p className="text-xs text-gray-400 leading-relaxed cursor-pointer" onClick={() => setAgreed(!agreed)}>
          We acknowledge that partnership status is subject to rigorous background verification
          and adherence to the Stoic Guardian Protocol standards.
        </p>
      </div>

      {error && <p className="text-[#C0392B] text-xs mb-4">{error}</p>}

      <button disabled={loading} className="w-full btn-shimmer text-white font-display font-bold py-4 rounded-xl flex items-center justify-center gap-2">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <>Submit Early Access Application <ArrowRight size={16} /></>}
      </button>
    </form>
  )
}
