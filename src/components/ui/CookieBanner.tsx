'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ShieldCheck, Cookie, BarChart3, Megaphone } from 'lucide-react'

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

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000)
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
    setShow(false)
    setShowPreferences(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(DEFAULT_PREFERENCES))
    setShow(false)
    setShowPreferences(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
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
      <div className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-[380px] bg-white border border-black/10 rounded-2xl shadow-2xl z-[100] animate-in slide-in-from-bottom-10 duration-500">
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2 text-[#C0392B]">
              <ShieldCheck size={18} />
              <span className="font-display font-bold text-xs uppercase tracking-wider">Privacy & Trust</span>
            </div>
            <button onClick={() => setShow(false)} className="text-black/30 hover:text-black transition-colors">
              <X size={16} />
            </button>
          </div>
          
          <h3 className="font-display font-bold text-[#1A1A2E] text-base mb-2">We respect your haven.</h3>
          <p className="text-xs text-black/60 leading-relaxed mb-4">
            Havenly Solutions uses essential cookies to ensure system stability and secure authentication. 
            By continuing to use our platform, you agree to our{' '}
            <Link href="/cookie-policy" className="text-[#C0392B] font-semibold hover:underline">Cookie Policy</Link> and{' '}
            <Link href="/Privacypolicy" className="text-[#C0392B] font-semibold hover:underline">Privacy Policy</Link> in accordance with POPIA.
          </p>

          <div className="flex gap-2">
            <button 
              onClick={accept}
              className="flex-1 bg-[#1A1A2E] text-white text-xs font-bold py-2.5 rounded-lg hover:bg-black transition-all active:scale-[0.98]"
            >
              Accept All
            </button>
            <button 
              onClick={reject}
              className="flex-1 bg-gray-100 text-black/60 text-xs font-bold py-2.5 rounded-lg hover:bg-gray-200 transition-all"
            >
              Reject
            </button>
            <button 
              onClick={() => setShowPreferences(true)}
              className="px-3 bg-transparent text-black/40 text-xs font-medium hover:text-black transition-colors underline"
            >
              Preferences
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Preferences Modal
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-5 border-b border-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#C0392B]">
              <Cookie size={18} />
              <span className="font-display font-bold text-sm uppercase tracking-wider">Cookie Preferences</span>
            </div>
            <button onClick={() => setShowPreferences(false)} className="text-black/30 hover:text-black transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Necessary Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C0392B]" />
                <span className="font-semibold text-sm text-[#1A1A2E]">Necessary Cookies</span>
              </div>
              <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Required</span>
            </div>
            <p className="text-xs text-black/60">
              Essential for the website to function properly. Cannot be disabled.
            </p>
            <label className="relative inline-flex items-center cursor-not-allowed">
              <input type="checkbox" checked={preferences.necessary} disabled className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1A1A2E]"></div>
            </label>
          </div>

          {/* Analytics Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-[#C0392B]" />
                <span className="font-semibold text-sm text-[#1A1A2E]">Analytics Cookies</span>
              </div>
            </div>
            <p className="text-xs text-black/60">
              Help us understand how visitors interact with our website by collecting anonymous information.
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.analytics} 
                onChange={() => handlePreferenceChange('analytics')}
                className="sr-only peer" 
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1A1A2E]"></div>
            </label>
          </div>

          {/* Marketing Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Megaphone size={16} className="text-[#C0392B]" />
                <span className="font-semibold text-sm text-[#1A1A2E]">Marketing Cookies</span>
              </div>
            </div>
            <p className="text-xs text-black/60">
              Used to track visitors across websites to display relevant advertisements.
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.marketing} 
                onChange={() => handlePreferenceChange('marketing')}
                className="sr-only peer" 
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1A1A2E]"></div>
            </label>
          </div>
        </div>

        <div className="p-5 border-t border-black/10 flex gap-2">
          <button 
            onClick={() => setShowPreferences(false)}
            className="flex-1 bg-gray-100 text-black/60 text-xs font-bold py-2.5 rounded-lg hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={savePreferences}
            className="flex-1 bg-[#1A1A2E] text-white text-xs font-bold py-2.5 rounded-lg hover:bg-black transition-all"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
