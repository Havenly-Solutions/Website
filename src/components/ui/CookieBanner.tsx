'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ShieldCheck, Cookie, BarChart3, Megaphone } from 'lucide-react'
import { usePostHog } from 'posthog-js/react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES)
  const posthog = usePostHog()

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    } else {
      try {
        setPreferences(JSON.parse(consent))
      } catch (e) {
        setPreferences(DEFAULT_PREFERENCES)
      }
    }
  }, [])

  const accept = () => {
    const allPrefs: CookiePreferences = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookie-consent', JSON.stringify(allPrefs))

    // Opt-in to PostHog tracking
    posthog.opt_in_capturing()

    setShow(false)
    setShowPreferences(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(DEFAULT_PREFERENCES))

    // Opt-out of PostHog tracking
    posthog.opt_out_capturing()

    setShow(false)
    setShowPreferences(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))

    // Update PostHog tracking based on analytics preference
    if (preferences.analytics) {
      posthog.opt_in_capturing()
    } else {
      posthog.opt_out_capturing()
    }

    setShow(false)
    setShowPreferences(false)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!show) return null

  // Main Banner - Left Corner
  if (!showPreferences) {
    return (
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:w-[450px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl z-[100] animate-in slide-in-from-bottom-10 duration-500 overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-nixtio-primary to-transparent opacity-50" />
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <ShieldCheck size={16} className="text-nixtio-primary" />
              <span className="font-bold text-white text-[10px] uppercase tracking-widest">Privacy & Trust</span>
            </div>
            <button 
              onClick={() => setShow(false)} 
              className="text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              aria-label="Close cookie banner"
            >
              <X size={16} />
            </button>
          </div>
          
          <h3 id="cookie-banner-title" className="font-extrabold text-white text-2xl mb-3 tracking-tight">We respect your haven.</h3>
          <p className="text-sm text-white/60 leading-relaxed mb-8 font-medium">
            Havenly Solutions uses essential cookies to ensure system stability and secure authentication. 
            By continuing to use our platform, you agree to our{' '}
            <Link href="/cookie-policy" className="text-white hover:text-nixtio-primary font-bold underline transition-colors">Cookie Policy</Link> and{' '}
            <Link href="/privacy-policy" className="text-white hover:text-nixtio-primary font-bold underline transition-colors">Privacy Policy</Link> in accordance with POPIA.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={accept}
              className="flex-1 bg-white text-black text-xs font-extrabold py-3.5 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] uppercase tracking-widest"
            >
              Accept All
            </button>
            <button 
              onClick={reject}
              className="flex-1 bg-white/5 border border-white/10 text-white font-extrabold text-xs py-3.5 rounded-xl hover:bg-white/10 transition-all active:scale-[0.98] uppercase tracking-widest"
            >
              Reject
            </button>
            <button 
              onClick={() => setShowPreferences(true)}
              className="sm:px-4 text-white/40 font-bold text-xs hover:text-white transition-colors uppercase tracking-widest py-3 text-center"
              aria-label="Manage cookie preferences"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Preferences Modal
  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center z-[200] p-4"
    >
      <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-nixtio-primary to-transparent opacity-50" />
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Cookie size={20} className="text-white" />
              </div>
              <span id="cookie-preferences-title" className="font-extrabold text-white text-xl tracking-tight">Cookie Preferences</span>
            </div>
            <button 
              onClick={() => setShowPreferences(false)} 
              className="text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2.5 rounded-full"
              aria-label="Close cookie preferences"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Necessary Cookies */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-white/80" />
                <span className="font-bold text-lg text-white tracking-tight">Necessary</span>
              </div>
              <span className="text-[10px] bg-white/10 text-white px-3 py-1 rounded-full font-extrabold uppercase tracking-widest">Required</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Essential for the website to function properly. Cannot be disabled. Used for session management and basic security configurations.
            </p>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-not-allowed">
                <input type="checkbox" checked={preferences.necessary} disabled className="sr-only peer" />
                <div className="w-12 h-7 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white/50 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/10"></div>
              </label>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BarChart3 size={20} className="text-white/80" />
                <span className="font-bold text-lg text-white tracking-tight">Analytics</span>
              </div>
              <span className="text-[10px] bg-nixtio-primary/10 text-nixtio-primary border border-nixtio-primary/20 px-3 py-1 rounded-full font-extrabold uppercase tracking-widest">Performance</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Help us understand how visitors interact with our website by collecting anonymous statistics on page views, load times, and traffic sources.
            </p>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={preferences.analytics} 
                  onChange={() => handlePreferenceChange('analytics')}
                  className="sr-only peer" 
                />
                <div className="w-12 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white/40 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
              </label>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Megaphone size={20} className="text-white/80" />
                <span className="font-bold text-lg text-white tracking-tight">Marketing</span>
              </div>
              <span className="text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1 rounded-full font-extrabold uppercase tracking-widest">Optional</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Used to track visitors across websites to measure campaign performance and deliver personalized content or co-branded partnerships.
            </p>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={() => handlePreferenceChange('marketing')}
                  className="sr-only peer" 
                />
                <div className="w-12 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white/40 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setShowPreferences(false)}
            className="flex-1 bg-white/5 border border-white/10 text-white font-extrabold py-4 rounded-xl hover:bg-white/10 transition-all text-xs uppercase tracking-widest"
          >
            Cancel
          </button>
          <button 
            onClick={savePreferences}
            className="flex-1 bg-white text-black text-xs font-extrabold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] shadow-lg uppercase tracking-widest"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}
