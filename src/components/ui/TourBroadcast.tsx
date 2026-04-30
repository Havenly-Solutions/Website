'use client'
import { useState, useEffect } from 'react'
import { Megaphone, X, Send, Loader2, MapPin, Building2, User, Mail, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/nextjs'

export default function TourBroadcast() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    location: '',
    message: '',
    _honeypot: ''
  })

  useEffect(() => {
    // Optional: Pulse the button after a delay to grab attention
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form._honeypot) return
    
    setLoading(true)
    setError('')
    
    try {
      const sanitizedData = {
        name: DOMPurify.sanitize(form.name),
        email: DOMPurify.sanitize(form.email),
        institution: DOMPurify.sanitize(form.institution),
        location: DOMPurify.sanitize(form.location),
        message: DOMPurify.sanitize(form.message)
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions'
      const res = await fetch(`${apiUrl}/api/tour-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      })

      if (!res.ok) throw new Error('Failed to submit tour request')
      
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setIsOpen(false)
        setForm({ name: '', email: '', institution: '', location: '', message: '', _honeypot: '' })
      }, 3000)
    } catch (err) {
      Sentry.captureException(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#C0392B] text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 group"
        title="Request a July Tour Visit"
      >
        <Megaphone size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-white text-[#C0392B] text-[10px] font-black rounded-full flex items-center justify-center animate-bounce shadow-sm">!</span>
      </motion.button>

      {/* Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:items-end sm:justify-end sm:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
            />
            
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-[#1A1A2E] p-6 text-white relative">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-600 rounded-lg">
                    <Megaphone size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg leading-tight">July National Tour</h3>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Request a school or community visit</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {success ? (
                  <div className="py-8 text-center animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h4>
                    <p className="text-gray-500 text-sm">We&apos;ve received your interest. Our tour coordinator will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="_honeypot" className="hidden" tabIndex={-1} onChange={e => setForm({...form, _honeypot: e.target.value})} />
                    
                    <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input 
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input 
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          placeholder="Email Address"
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                          <input 
                            required
                            value={form.institution}
                            onChange={e => setForm({...form, institution: e.target.value})}
                            placeholder="Institution"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                          <input 
                            required
                            value={form.location}
                            onChange={e => setForm({...form, location: e.target.value})}
                            placeholder="Location"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={14} />
                        <textarea 
                          rows={2}
                          value={form.message}
                          onChange={e => setForm({...form, message: e.target.value})}
                          placeholder="Any specific questions or dates?"
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all resize-none"
                        />
                      </div>
                    </div>

                    {error && <p className="text-red-600 text-[10px] text-center font-bold">{error}</p>}

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-[#C0392B] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                    >
                      {loading ? <Loader2 size={16} className="animate-spin" /> : <>Request Visit <Send size={14} /></>}
                    </button>
                    
                    <p className="text-[9px] text-center text-gray-400">
                      Joining the tour broadcast chain · July 2025 National Initiative
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
