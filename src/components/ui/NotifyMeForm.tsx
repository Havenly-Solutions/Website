'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/nextjs'
import { toast } from 'sonner'

export default function NotifyMeForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [cooldown])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (cooldown > 0) { toast.error(`Please wait ${cooldown}s before submitting again`); return }

    setLoading(true)

    try {
      const sanitizedData = {
        firstName: 'Resources Page Notify', // Placeholder name
        email: DOMPurify.sanitize(email.trim()),
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions'
      const res = await fetch(`${apiUrl}/api/v1/marketing/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      })

      if (res.status === 201 || res.status === 200) {
        setEmail('')
        setCooldown(60)
        toast.success('You will be notified as soon as we launch!')
        return
      }

      const data = await res.json().catch(() => ({}))

      if (res.status === 409) {
        toast.error('This email is already on our list.')
      } else {
        throw new Error(data.message || `API error: ${res.status}`)
      }
    } catch (err: any) {
      Sentry.captureException(err)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto sm:min-w-[360px]">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.co.za"
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#D4A017]/40 transition-colors"
      />
      <button
        type="submit"
        disabled={loading || cooldown > 0}
        className="btn-shimmer text-white font-display font-bold px-5 py-3 rounded-xl text-sm flex items-center gap-2 flex-shrink-0"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : cooldown > 0 ? `Wait ${cooldown}s` : <>Notify Me <ArrowRight size={14} /></>}
      </button>
    </form>
  )
}
