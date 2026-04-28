import type { Metadata } from 'next'
import { Shield, Users, BarChart2, Radio, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import PartnerApplicationForm from '@/components/ui/PartnerApplicationForm'

export const metadata: Metadata = { title: 'Partners — Protecting the Protectors' }

export default function PartnersPage() {
  return (
    <div className="pt-16 bg-[#dee2e6]">

      {/*  HERO  */}
      <section className="relative min-h-[80vh] flex items-center bg-[#dee2e6]">
        <div className="absolute inset-0 map-grid" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#1A1A2E]/10 bg-white rounded-full mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
              <span className="text-[10px] text-[#1A1A2E]/50 uppercase tracking-widest">Institutional Alliance</span>
            </div>

            <h1 className="font-display font-black text-[#1A1A2E] leading-[0.9] mb-6">
              <span className="block text-[clamp(3rem,6vw,5.5rem)]">Protecting</span>
              <span className="block text-[clamp(3rem,6vw,5.5rem)]">the</span>
              <span className="block text-[clamp(3rem,6vw,5.5rem)] text-[#C0392B]">Protectors.</span>
            </h1>

            <p className="text-[#1A1A2E]/50 text-base leading-relaxed mb-8 max-w-lg">
              A specialised framework for NGOs, Community Watch groups, and First Responders.
              Harness the power of the Stoic Guardian Protocol to scale your impact and ensure
              every citizen is reached.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-shimmer text-white font-display font-bold px-8 py-4 rounded-xl flex items-center gap-2">
                Apply for Partnership <ArrowRight size={16} />
              </a>
              <a href="#gold" className="px-8 py-4 border border-[#1A1A2E]/10 rounded-xl text-sm text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors bg-white/50">
                Explore Gold Tier
              </a>
            </div>
          </div>

          {/* Right — image with floating stat card */}
          <div className="relative h-[440px] lg:h-[500px]">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image src="/office.jpg" alt="Command Centre" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/*  GOLD TIER  */}
      <section id="gold" className="py-24 bg-[#dee2e6]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-[#D4A017] text-xs uppercase tracking-widest font-semibold mb-3">Gold Tier Protocol</p>
            <h2 className="font-display font-black text-[#1A1A2E] text-5xl mb-3">The Gold Tier Protocol</h2>
            <p className="text-[#1A1A2E]/40 max-w-lg mx-auto">
              Unlocking advanced operational capabilities for registered organisations
              and legitimate community watch initiatives.
            </p>

            {/* Launch notice banner */}
            <div className="mt-8 inline-flex items-start gap-3 bg-[#1A1A2E] text-left rounded-2xl px-5 py-4 max-w-xl mx-auto border border-white/5">
              <div className="w-7 h-7 rounded-lg bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <p className="text-white/90 text-sm font-semibold leading-snug">
                  Gold Tier goes live on <span className="text-[#D4A017]">24 November 2026</span>
                </p>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">
                  These features are not yet active. Pre-register your organisation below to secure
                  priority access and skip the queue on launch day — before the public gets in.
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">

            {/* Card 1 — Multi-User Dashboards */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
              <span className="absolute top-4 right-4 text-[9px] bg-[#1A1A2E]/5 text-[#1A1A2E]/40 border border-[#1A1A2E]/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">
                Coming Soon
              </span>
              <div>
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-5">
                  <Users size={20} className="text-[#1A1A2E]" />
                </div>
                <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">Multi-User Case Dashboards</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[55%]">
                  Centralised command for your entire team. Assign cases, track response times,
                  and manage dispatcher workloads in real-time.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-[45%] h-[60%] rounded-tl-2xl overflow-hidden opacity-60">
                <Image src="/office.jpg" alt="Dashboard preview" fill className="object-cover blur-[1px] scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent" />
              </div>
            </div>

            {/* Card 2 — SAPS/DSD Priority */}
            <div className="bg-[#1A1A2E] rounded-2xl p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
              <span className="absolute top-4 right-4 text-[9px] bg-white/5 text-white/30 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">
                Coming Soon
              </span>
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#C0392B]/20 rounded-xl flex items-center justify-center mb-5">
                    <Radio size={20} className="text-[#C0392B]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">SAPS/DSD Priority</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Direct-line escalation protocols ensuring official emergency services receive
                    verified data instantly.
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 self-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-white/40 text-[10px] uppercase tracking-widest">Activates at Launch</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Data-Driven Reports */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[260px] flex relative">
              <span className="absolute top-4 right-4 z-10 text-[9px] bg-[#1A1A2E]/5 text-[#1A1A2E]/40 border border-[#1A1A2E]/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">
                Coming Soon
              </span>
              <div className="relative w-[45%] flex-shrink-0">
                <Image src="/office.jpg" alt="Analytics" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                  <BarChart2 size={20} className="text-[#1A1A2E]" />
                </div>
                <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">Data-Driven Reports</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Monthly analytical breakdowns of regional safety trends to inform your
                  strategic deployment and resource allocation.
                </p>
              </div>
            </div>

            {/* Card 4 — Inter-Agency Cooperation */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
              <span className="absolute top-4 right-4 text-[9px] bg-[#1A1A2E]/5 text-[#1A1A2E]/40 border border-[#1A1A2E]/10 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">
                Coming Soon
              </span>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                    <Shield size={20} className="text-[#1A1A2E]" />
                  </div>
                  <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">Inter-Agency Cooperation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Connect with other partners in the HAVENLY SOLUTIONS network to create a seamless
                    security mesh for your district.
                  </p>
                </div>
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
                  <Image src="/winner.jpg" alt="Partnership" width={112} height={112} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex -space-x-2">
                  {['#C0392B', '#1A1A2E', '#D4A017'].map((color, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: color }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400 text-xs font-semibold">+24 pre-registered partners</span>
              </div>
            </div>

          </div>

          {/* Pricing banner */}
          <div className="mt-10 bg-gradient-to-r from-[#D4A017]/10 to-[#D4A017]/5 border border-[#D4A017]/20 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-[#D4A017] text-xs uppercase tracking-widest font-semibold mb-1">Gold Tier Pricing</div>
              <div className="font-display font-black text-[#1A1A2E] text-3xl">
                R 1,999 <span className="text-gray-400 text-base font-sans font-normal">/ month</span>
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Founding Partner offer: 12 months free in exchange for co-branding partnership
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <a href="#apply" className="btn-shimmer text-white font-display font-bold px-8 py-3.5 rounded-xl flex items-center gap-2">
                Pre-Register as Partner <ArrowRight size={16} />
              </a>
              <span className="text-[#1A1A2E]/30 text-[10px] uppercase tracking-widest">Billing starts at launch · No card required now</span>
            </div>
          </div>

        </div>
      </section>

      {/*  APPLICATION FORM  */}
      <section id="apply" className="py-24 bg-[#dee2e6] border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">

          {/* Early access callout */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0d0d1a] rounded-2xl p-6 mb-10 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-widest">Early Access Programme</span>
                  <span className="text-[9px] bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Limited Spots</span>
                </div>
                <p className="text-white/80 text-sm font-semibold leading-snug">
                  Secure your organisation&apos;s place before public launch.
                </p>
                <p className="text-white/40 text-xs mt-1.5 leading-relaxed">
                  Gold Tier is not yet active — but approved partners are onboarded first on
                  <span className="text-white/60 font-medium"> 24 November 2026</span>, ahead of the general public.
                  Priority order is based on application date and organisation type.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { tier: 'NGOs & Shelters', badge: '1st Priority', color: '#D4A017' },
                { tier: 'Community Watch', badge: '2nd Priority', color: '#C0392B' },
                { tier: 'Gov & University', badge: '3rd Priority', color: '#0B6E4F' },
              ].map(({ tier, badge, color }) => (
                <div key={tier} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-center">
                  <div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{badge}</div>
                  <div className="text-white/50 text-[11px]">{tier}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl mb-2">Partner Early Access</h2>
            <p className="text-[#1A1A2E]/40 text-sm">No commitment yet. We&apos;ll contact you before launch to confirm your onboarding slot.</p>
          </div>

          <PartnerApplicationForm />
        </div>
      </section>

    </div>
  )
}