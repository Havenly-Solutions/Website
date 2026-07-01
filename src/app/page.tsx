'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight, Zap, Wifi, Database, Radio, Phone } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Updated launch date to 13 October 2026
    const targetDate = new Date('2026-10-13T00:00:00')
    const timer = setInterval(() => {
      const difference = +targetDate - +new Date()
      if (difference <= 0) {
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white/90 font-sans antialiased selection:bg-nixtio-primary/50 selection:text-white">
      
      {/* Immersive Hero Section - Nixtio Style */}
      <section className="relative z-[2] flex w-full min-h-screen p-1 md:p-2 lg:p-4 pb-0">
        <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-[#111]">
          {/* Background Media Placeholder (like Nixtio video) */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <Image
              src="/police.jpg"
              alt="Havenly Solutions Protocol"
              fill
              priority
              className="object-cover opacity-20 filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 z-10" />
            <div className="absolute inset-0 bg-nixtio-gradient opacity-30 z-10 mix-blend-overlay" />
          </div>

          {/* Hero Content positioned at bottom */}
          <div className="relative z-10 flex flex-col justify-end w-full max-w-[95rem] h-full mx-auto px-6 py-12 md:py-24 lg:py-32 xl:pb-24">
            <div className="w-full flex flex-col items-start gap-8 mt-auto">
              {/* Header / Intro */}
              <div className="w-full max-w-4xl animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-nixtio-primary/30 bg-nixtio-primary/10 backdrop-blur-md mb-6">
                  <span className="w-2 h-2 rounded-full bg-nixtio-primary animate-pulse shadow-[0_0_8px_#ff6633]"></span>
                  <span className="text-[10px] text-nixtio-primary font-bold uppercase tracking-widest">PROTOCOL STATUS: INITIALIZING</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                  Your Haven. <br />
                  <span className="text-white/40">Your Community.</span>
                </h1>
              </div>

              {/* Bottom bar area */}
              <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/10 animate-fade-up-delay-1">
                {/* Description */}
                <div className="w-full max-w-md text-white/60 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                  South Africa&apos;s first real emergency response platform built for local realities.
                </div>
                
                {/* Stats / Countdown */}
                <div className="flex items-center justify-start gap-10 text-white">
                  <div>
                    <span className="text-[10px] text-nixtio-primary font-bold uppercase tracking-widest block mb-2">LAUNCH DATE</span>
                    <div className="text-xl md:text-2xl font-semibold tracking-tight">
                      13 October 2026
                    </div>
                  </div>
                  <div className="flex gap-4 tabular-nums text-xl md:text-2xl font-semibold tracking-tight">
                    <div className="flex flex-col items-center">
                      <span>{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Days</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                      <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Hrs</span>
                    </div>
                    <span>:</span>
                    <div className="flex flex-col items-center">
                      <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <RevealOnScroll className="bg-[#0a0a0a] py-8 overflow-hidden border-b border-white/5 relative mt-4">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(4).fill([
            'SOS Protocol Active',
            'POPIA Compliant',
            'Offline First Architecture',
            'Legal Evidence Chain',
            '99.9% Uptime',
            'End-to-End Encrypted',
            'SA Built for SA Reality',
            'Guardian Mesh Network',
            'Zero Third Party Sharing'
          ]).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mr-20 text-white/40 text-sm uppercase tracking-[0.2em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-nixtio-primary flex-shrink-0"></span>
              {item}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      {/* Core Safety Architecture Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="mb-20 space-y-4">
            <span className="text-nixtio-primary text-xs uppercase tracking-widest font-bold block">BUILT FOR SOUTH AFRICA</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
              We build digital safety that feels effortless, because the best experiences always do.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevealOnScroll delay={0.1} className="lg:col-span-2 glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[320px] group border-white/10 hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-nixtio-primary/5 via-transparent to-transparent pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-nixtio-primary/10 border border-nixtio-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-nixtio-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">One Press SOS</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Hold for 2 seconds to trigger an encrypted SOS emergency signal. Instantly alerts nearby family members, community responders, and law enforcement.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="glass-panel rounded-3xl p-10 md:p-12 flex flex-col justify-between min-h-[320px] group border-white/10 hover:border-white/20 transition-colors">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Offline First</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Critical data is buffered locally and transmitted via SMS/Mesh protocols when cellular networks fail.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <RevealOnScroll delay={0.1} className="glass-panel rounded-3xl p-10 md:p-12 flex flex-col justify-between min-h-[320px] group border-white/10 hover:border-white/20 transition-colors">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Evidence Chain</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Auto-recorded audio and location logs are cryptographically signed for court readiness.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="lg:col-span-2 glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[320px] group border-white/10 hover:border-white/20 transition-colors">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Safety Network</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Hyper-local community grids that bypass slow centralized dispatch systems. Neighbors watching over neighbors with immediate response times.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Waitlist Registration Form */}
      <section id="register" className="py-32 relative bg-[#0a0a0a]">
        <div className="max-w-[95rem] mx-auto px-6">
          <div className="border-t border-white/10 pt-32">
            <RevealOnScroll className="glass-panel rounded-[2rem] p-8 md:p-16 max-w-4xl mx-auto border-white/10">
              <div className="text-center space-y-4 mb-12">
                <span className="text-nixtio-primary text-xs uppercase tracking-widest font-bold block">SECURE RESERVATION</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Register for early access</h2>
                <p className="text-white/60 text-lg max-w-md mx-auto">Provide your details below to reserve access when the platform goes live.</p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="full-name" className="block text-[11px] text-white/50 font-bold uppercase tracking-wider mb-3">FULL NAME</label>
                    <input id="full-name" type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-nixtio-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone-number" className="block text-[11px] text-white/50 font-bold uppercase tracking-wider mb-3">SA PHONE NUMBER</label>
                    <input id="phone-number" type="tel" required placeholder="+27 XX XXX XXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-nixtio-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email-address" className="block text-[11px] text-white/50 font-bold uppercase tracking-wider mb-3">EMAIL ADDRESS</label>
                    <input id="email-address" type="email" required placeholder="name@domain.co.za" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-nixtio-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="region-select" className="block text-[11px] text-white/50 font-bold uppercase tracking-wider mb-3">PRIMARY PROVINCE</label>
                    <select id="region-select" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-nixtio-primary transition-colors text-white/60">
                      <option value="" disabled className="bg-[#111] text-white/50">Select your province</option>
                      <option value="Gauteng">Johannesburg / Gauteng</option>
                      <option value="Western Cape">Cape Town / Western Cape</option>
                      <option value="KZN">Durban / KwaZulu-Natal</option>
                      <option value="Eastern Cape">Gqeberha / Eastern Cape</option>
                      <option value="Free State">Bloemfontein / Free State</option>
                      <option value="Limpopo">Polokwane / Limpopo</option>
                      <option value="Mpumalanga">Mbombela / Mpumalanga</option>
                      <option value="North West">Mahikeng / North West</option>
                      <option value="Northern Cape">Kimberley / Northern Cape</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1.5 accent-nixtio-primary" required />
                  <label htmlFor="consent" className="text-sm text-white/50 leading-relaxed">
                    I agree to Havenly Solutions&apos;s <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link> and consent to my data being processed for safety services.
                  </label>
                </div>

                <button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
                  Secure My Free Account <ArrowRight size={20} />
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Downloader Section */}
      <section className="py-32 text-center bg-[#0a0a0a]">
        <RevealOnScroll className="max-w-[95rem] mx-auto px-6 space-y-10">
          <span className="text-[11px] uppercase font-bold tracking-widest text-white/40 block">AVAILABLE ON ALL DEVICES</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Safety in your hands. Anywhere.</h2>
          <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed">
            From flagship smartphones to feature phones with zero data — Havenly works on every device South Africans own. No one gets left behind.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <button className="px-8 py-4 bg-white text-black hover:bg-white/90 font-bold rounded-full text-sm transition-colors">Download on App Store</button>
            <button className="px-8 py-4 bg-white text-black hover:bg-white/90 font-bold rounded-full text-sm transition-colors">Get it on Google Play</button>
            <button className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-full text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" /> No data? Dial *120*0000#
            </button>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  )
}
