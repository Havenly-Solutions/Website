'use client'
import { useState } from 'react'
import { Loader2, CheckCircle, Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    guestName: '',
    guestContact: '',
    subject: '',
    category: 'GENERAL',
    body: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false); return
      }
      setSuccess(true)
    } catch {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  if (success) return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-12 text-center">
      <div className="w-16 h-16 bg-[#C0392B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={32} className="text-[#C0392B]" />
      </div>
      <h3 className="font-display font-bold text-[#1A1A2E] text-2xl mb-3">Message Sent</h3>
      <p className="text-gray-500 leading-relaxed mb-6">
        Thank you, <strong>{form.guestName}</strong>. Your support ticket has been created.<br />
        Our team will respond to <strong>{form.guestContact}</strong> as soon as possible.
      </p>
      <button onClick={() => setSuccess(false)} className="text-[#C0392B] font-semibold text-sm hover:underline">Send another message</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Your Name</label>
          <input required placeholder="Full Name"
            value={form.guestName} onChange={e => setForm(f => ({ ...f, guestName: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Contact Detail (Email/Phone)</label>
          <input required placeholder="How can we reach you?"
            value={form.guestContact} onChange={e => setForm(f => ({ ...f, guestContact: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Subject</label>
        <input required placeholder="What is this regarding?"
          value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] transition-colors" />
      </div>
      <div>
        <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Category</label>
        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#C0392B]">
          <option value="GENERAL">General Inquiry</option>
          <option value="TECHNICAL">Technical Support</option>
          <option value="PARTNERSHIP">Partnership Query</option>
          <option value="LEGAL">Legal / POPIA</option>
        </select>
      </div>
      <div>
        <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Message</label>
        <textarea required rows={5} placeholder="Describe your request in detail..."
          value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#C0392B] resize-none" />
      </div>
      {error && <p className="text-[#C0392B] text-xs mb-4">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full btn-shimmer text-white font-display font-bold py-4 rounded-xl flex items-center justify-center gap-2">
        {loading ? <Loader2 className="animate-spin" size={20} /> : 'Send Message'}
        {!loading && <Send size={16} />}
      </button>
    </form>
  )
}
