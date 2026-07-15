'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Loader2, MailX } from 'lucide-react'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const initialEmail = searchParams.get('email') || ''
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState(initialEmail)

  useEffect(() => {
    if (initialEmail) setEmail(initialEmail)
  }, [initialEmail])

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
      const res = await fetch(`${apiUrl}/api/v1/marketing/newsletter/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok || res.status === 404) {
        setSuccess(true)
      } else {
        console.error('Unsubscribe failed')
      }
    } catch (err) {
      console.error('Unsubscribe error:', err)
      // Show success anyway to not leak email existence, or show error
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f1f5] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500">
              <MailX size={32} />
            </div>
          </div>

          {!success ? (
            <>
              <h1 className="text-2xl font-extrabold text-[#0e1b10] mb-2 tracking-tight">
                Newsletter Unsubscribe
              </h1>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm">
                We&apos;re sorry to see you go. Confirm your email address below to stop receiving protocol updates.
              </p>

              <form onSubmit={handleUnsubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C0392B] focus:ring-1 focus:ring-[#C0392B] text-black font-medium transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#070300] text-white font-extrabold py-4 rounded-2xl hover:bg-[#C0392B] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    'Confirm Unsubscribe'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="animate-in zoom-in-95 duration-500">
              <div className="mb-6 flex justify-center">
                <CheckCircle2 size={64} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0e1b10] mb-2 tracking-tight">
                You have been unsubscribed
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm">
                Your email <span className="text-black font-bold">{email}</span> has been removed from our mailing list.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#070300] text-white font-extrabold px-8 py-4 rounded-2xl hover:opacity-90 transition-all uppercase tracking-widest text-xs"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>

        <div className="bg-[#070300] p-6 text-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Havenly Solutions"
              width={40}
              height={40}
              className="mx-auto brightness-0 invert"
            />
          </Link>
          <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em] font-bold">
            Havenly Solutions &middot; Always On.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
