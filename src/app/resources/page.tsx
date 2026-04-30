import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Resources — For the Stoic Guardian' }

const FAQS = [
  {
    q: 'Does Havenly Solutions SOLUTIONS work during Stage 6 load-shedding?',
    a: 'Yes. Our backend infrastructure is hosted in Tier-4 data centres with multiple redundancies. The app uses low-bandwidth protocols to ensure reliability even during cellular tower congestion caused by power outages.',
  },
  {
    q: 'What is the average response time?',
    a: 'HAVENLY SOLUTIONS SOS latency is under 400ms from activation to Guardian Grid notification. Physical responder dispatch varies by region and partner density, with an average of 4 minutes in covered urban areas.',
  },
  {
    q: 'How is my location data protected?',
    a: 'Your location is only captured and transmitted when you explicitly activate the SOS protocol or check in. All data is AES-256 encrypted at rest and in transit. We hold zero-knowledge of your logs outside emergency events.',
  },
  {
    q: 'Can I add family members to my plan?',
    a: 'Yes. The Pro tier includes up to 5 emergency contacts with real time location sharing and automatic SOS notification. Family plans with group pricing are launching in Phase 2 (mid-2027).',
  },
]

const DEPLOYMENT_STEPS = [
  {
    num: '01',
    title: 'Rapid Onboarding',
    desc: 'Download the application. Our system performs a 12-point security audit of your location and integrates with local SAPS and private security data feeds.',
  },
  {
    num: '02',
    title: 'Always-On Watch',
    desc: 'Set your geofence. The Havenly Solutions core engine monitors your proximity to high-risk zones and alerts you before potential threats manifest.',
  },
  {
    num: '03',
    title: 'Instant Response',
    desc: 'One press activation. Havenly Solutions dispatches the closest tactical responder unit via GPS precision, maintaining a live voice link until the scene is secured.',
  },
]

const UPDATES = [
  { date: 'MAY 12, 2026', title: 'Neighbourhood Watch Integration' },
  { date: 'APR 30, 2026', title: 'Security Infrastructure Report: Gauteng' },
  { date: 'FEB 20, 2026', title: 'AI Threat Detection Launch' },
]

const APP_GUIDE_STEPS = ['Initial Setup', 'Security Check-in', 'SOS Activation']

function ComingSoonBadge({ dark = false }: { dark?: boolean }) {
  return (
      <span
          className={`text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest font-bold border ${
              dark
                  ? 'bg-white/5 text-white/30 border-white/10'
                  : 'bg-[#1A1A2E]/5 text-[#1A1A2E]/40 border-[#1A1A2E]/10'
          }`}
      >
      Coming Soon
    </span>
  )
}

export default function ResourcesPage() {
  return (
      <div className="pt-16 bg-[#dee2e6]">

        {/*  HERO  */}
        <section className="relative bg-[#dee2e6] py-28">
          <div className="absolute inset-0 map-grid" />
          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#1A1A2E]/10 bg-white rounded-full mb-6 shadow-sm">
                <span className="text-[10px] text-[#1A1A2E]/50 uppercase tracking-widest">Knowledge Base</span>
              </div>
              <h1 className="font-display font-black text-[#1A1A2E] text-5xl lg:text-6xl leading-tight mb-4">
                Resources for<br />the Stoic<br />Guardian.
              </h1>
              <p className="text-[#1A1A2E]/50 text-base leading-relaxed max-w-lg mb-8">
                Safety is not a passive state; it is an active protocol. Access technical
                documentation, emergency strategies, and South African safety insights.
              </p>

              <div className="inline-flex items-start gap-3 bg-[#1A1A2E] text-left rounded-2xl px-5 py-4 max-w-lg border border-white/5">
                <div className="w-7 h-7 rounded-lg bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/90 text-sm font-semibold leading-snug">
                    Full knowledge base launches <span className="text-[#D4A017]">24 November 2026</span>
                  </p>
                  <p className="text-white/40 text-xs mt-1 leading-relaxed">
                    Protocols and guides are being finalised. Pre register below to receive
                    early access to all documentation before the public launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image src="/Havenly_Solutions.png" alt="Havenly Solutions logo" width={400} height={400} style={{ height: 'auto' }} />
            </div>
          </div>
        </section>

        {/*  EMERGENCY INTELLIGENCE  */}
        <section className="py-20 bg-[#dee2e6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-[#1A1A2E] text-2xl">Emergency Intelligence</h2>
              <ComingSoonBadge />
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 opacity-80">

              {/* Card 1 — Load-Shedding */}
              <div className="bg-[#1A1A2E] rounded-2xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-end dot-grid-light">
              <span className="absolute top-4 right-4 z-10">
                <ComingSoonBadge dark />
              </span>
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image src="/loadshedding.jpg" alt="Load-shedding preparedness" fill className="object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/80 to-transparent" />
                </div>
                <span className="relative z-10 text-[#C0392B] text-[10px] font-bold uppercase tracking-widest mb-2">Critical Protocol</span>
                <h3 className="relative z-10 font-display font-black text-white text-2xl mb-2">Load-Shedding Preparedness</h3>
                <p className="relative z-10 text-white/40 text-sm leading-relaxed mb-4">
                  Maintaining perimeter integrity during grid failure. Learn how to secure gate
                  motors and alarm systems for extended outages.
                </p>
                <button className="relative z-10 inline-flex items-center gap-2 text-white/40 text-sm w-fit cursor-not-allowed">
                  Coming Soon <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2 — User Guide */}
              <div className="bg-purple-300 border border-gray-100 rounded-2xl p-8 shadow-sm relative">
              <span className="absolute top-4 right-4">
                <ComingSoonBadge />
              </span>
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/Havenly_Solutions.png" alt="Havenly Solutions logo" width={100} height={100} style={{ height: 'auto' }} />
                  <span className="font-display font-bold text-[#1A1A2E]">The Havenly Solutions App: User Guide</span>
                </div>
                <p className="text-black text-sm leading-relaxed mb-5">
                  A step-by-step technical breakdown of activating SOS, geo-fencing, and armed
                  response dispatch.
                </p>
                <div className="space-y-2">
                  {APP_GUIDE_STEPS.map((step, i) => (
                      <div key={step} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                        <div className="w-6 h-6 rounded-full bg-[#1A1A2E]/10 flex items-center justify-center text-[#1A1A2E]/40 text-[10px] font-bold flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <span className="text-sm text-[#1A1A2E]/40">{step}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">

              {/* Card 3 — Latest Updates */}
              <div className="bg-gray-300 border border-gray-100 rounded-2xl p-6 shadow-sm relative">
              <span className="absolute top-4 right-4">
                <ComingSoonBadge />
              </span>
                <h3 className="font-display font-bold text-[#1A1A2E] mb-4">Latest Updates</h3>
                <div className="space-y-3">
                  {UPDATES.map(({ date, title }) => (
                      <div key={title} className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
                        <span className="text-[#C0392B]/50 text-[10px] uppercase tracking-widest font-bold flex-shrink-0 mt-0.5">{date}</span>
                        <span className="text-sm text-[#1A1A2E]/40">{title}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* Card 4 — NGO Portal */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm overflow-hidden relative min-h-[180px] flex items-stretch">
                <div className="absolute right-0 top-0 bottom-0 w-2/5">
                  <div className="relative w-full h-full">
                    <Image src="/community ngo.jpg" alt="NGO Portal" fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col justify-between flex-1 pr-4">
                  <div>
                    <h3 className="font-display font-bold text-[#1A1A2E] mb-2">NGO & Public Safety Portal</h3>
                    <p className="text-gray-400 text-sm mb-5">
                      Direct access for public safety officers and accredited security partners
                      to HAVENLY SOLUTIONS protocols.
                    </p>
                  </div>
                  <Link
                      href="/partners#apply"
                      className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#0f0f1f] transition-colors w-fit"
                  >
                    Request Early Access
                  </Link>
                </div>
              </div>
            </div>
          </div>{/*  closes max-w-7xl (Emergency Intelligence)  */}
        </section>

        {/*  DEPLOYMENT CYCLE  */}
        <section className="py-20 bg-[#ced4da] border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-[#C0392B] text-xs uppercase tracking-widest font-semibold mb-2">Implementation</p>
              <div className="flex items-end justify-between">
                <h2 className="font-display font-black text-[#1A1A2E] text-4xl">The Havenly Solutions Deployment Cycle.</h2>
                <span className="hidden md:block font-display font-black text-gray-400 text-5xl">PROTOCOL</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DEPLOYMENT_STEPS.map(({ num, title, desc }) => (
                  <div key={num}>
                    <div className="font-display font-black text-6xl text-red-200 leading-none">{num}</div>
                    <h3 className="font-display font-bold text-[#1A1A2E] text-lg mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/*  FAQs  */}
        <section className="py-20 bg-[#f2e3bc] border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl text-center mb-12">Frequently Asked Protocols</h2>
            <div className="space-y-3">
              {FAQS.map(({ q, a }, i) => (
                  <details
                      key={q}
                      className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                      open={i === 0}
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                      <span className="font-display font-semibold text-[#1A1A2E] text-sm pr-4">{q}</span>
                      <ChevronDown size={16} className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">{a}</div>
                  </details>
              ))}
            </div>
          </div>
        </section>

        {/*  EARLY NOTIFY + DOWNLOAD CTA  */}
        <section className="w-full mb-0">

          {/* Early notify strip — sits above the dark banner */}
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0d0d1a] rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                {/* Icon + copy */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-widest">Early Access Notify</span>
                      <span className="text-[9px] bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Free</span>
                    </div>
                    <p className="text-white/80 text-sm font-semibold leading-snug">Be first to access guides &amp; protocols.</p>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">
                      Drop your email and we&apos;ll notify you the moment the knowledge base goes live on{' '}
                      <span className="text-white/60 font-medium">24 November 2026</span>.
                    </p>
                  </div>
                </div>

                {/* Email input */}
                <div className="flex gap-2 w-full sm:w-auto sm:min-w-[360px]">
                  <input
                      type="email"
                      placeholder="your@email.co.za"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4A017]/40 transition-colors"
                  />
                  <button className="btn-shimmer text-white font-display font-bold px-5 py-3 rounded-xl text-sm flex items-center gap-2 flex-shrink-0">
                    Notify Me <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Download CTA — full-width dark banner, matching screenshot */}
          <div className="bg-[#0f0f1a] w-full py-24 px-6 text-center relative overflow-hidden">

            {/* Subtle dot-grid texture */}
            <div className="absolute inset-0 dot-grid opacity-10" />

            {/* Red glow blob */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C0392B]/20 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Launch pill */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">App Launches 24 Nov 2026</span>
              </div>

              <h2 className="font-display font-black text-white text-5xl lg:text-6xl leading-tight mb-4">
                Secure your<br />perimeter today.
              </h2>
              <p className="text-white/40 text-sm mb-10">
                Pre register now — be first in line when the app goes live.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                {/* iOS — white outlined */}
                <button
                    disabled
                    title="Available at launch"
                    className="px-8 py-4 bg-white text-[#0f0f1a] font-display font-black rounded-xl border border-white cursor-not-allowed text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
                >
                  Download for iOS
                </button>

                {/* Android — red filled */}
                <button
                    disabled
                    title="Available at launch"
                    className="px-8 py-4 bg-[#C0392B] text-white font-display font-black rounded-xl border border-[#C0392B]/50 cursor-not-allowed text-sm uppercase tracking-widest hover:bg-[#a93226] transition-colors"
                >
                  Get Android App
                </button>
              </div>

              <p className="text-white/20 text-[10px] uppercase tracking-widest mt-8">
                No download yet · Notify me above instead
              </p>
            </div>
          </div>
        </section>
      </div>
  )
}

