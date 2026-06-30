import type { Metadata } from 'next'
import { Shield, Users, BarChart2, Radio, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import PartnerApplicationForm from '@/components/ui/PartnerApplicationForm'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = { title: 'Partners — Protecting the Protectors' }

export default function PartnersPage() {
  return (
    <div className="pt-24 bg-[#0a0a0a] min-h-screen">
      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-center max-w-[95rem] mx-auto px-6 py-24 gap-16 min-h-[80vh]">
        
        {/* Left — copy */}
        <RevealOnScroll className="w-full md:w-1/2 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-nixtio-primary/30 bg-nixtio-primary/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-nixtio-primary animate-pulse shadow-[0_0_8px_#ff6633]"></span>
            <span className="text-[10px] text-nixtio-primary font-bold uppercase tracking-widest">Institutional Alliance</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Protecting <br/>
            <span className="text-white/40">the Protectors.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium tracking-tight">
            A specialised framework for NGOs, Community Watch groups, and First Responders.
            Harness the power of the Stoic Guardian Protocol to scale your impact and ensure
            every citizen is reached.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#apply" className="bg-white text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/90 transition-colors">
              Apply for Partnership <ArrowRight size={16} />
            </a>
            <a href="#gold" className="px-8 py-4 border border-white/10 rounded-xl text-white/60 hover:text-white transition-colors bg-white/5">
              Explore Gold Tier
            </a>
          </div>
        </RevealOnScroll>

        {/* Right — image */}
        <RevealOnScroll delay={0.2} className="w-full md:w-1/2 relative h-[500px] lg:h-[650px] rounded-[1.5rem] overflow-hidden">
          <Image src="/office.jpg" alt="Command Centre" fill className="object-cover opacity-60 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
        </RevealOnScroll>
      </section>

      {/* GOLD TIER */}
      <section id="gold" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="mb-20">
            <span className="text-nixtio-primary text-xs uppercase tracking-widest font-bold block mb-4">Gold Tier Protocol</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6">
              Advanced operational capabilities for legitimate initiatives.
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Unlocking advanced operational capabilities for registered organisations
              and legitimate community watch initiatives.
            </p>

            {/* Launch notice banner */}
            <div className="mt-10 inline-flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl">
              <div className="w-10 h-10 rounded-xl bg-nixtio-primary/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6633" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <p className="text-white text-lg font-bold tracking-tight mb-2">
                  Gold Tier goes live on <span className="text-nixtio-primary">13 October 2026</span>
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  These features are not yet active. Pre register your organisation below to secure
                  early access before the public launch.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            
            {/* Card 1 — Multi-User Dashboards */}
            <RevealOnScroll delay={0.1} className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] group border-white/10 hover:border-white/20 transition-colors">
              <span className="absolute top-6 right-6 text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold">
                Coming Soon
              </span>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <Users size={24} className="text-white/80" />
                </div>
                <h3 className="font-bold text-white text-3xl tracking-tight">Multi-User Dashboards</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-[80%]">
                  Centralised command for your entire team. Assign cases, track response times,
                  and manage dispatcher workloads in real time.
                </p>
              </div>
            </RevealOnScroll>

            {/* Card 2 — SAPS/DSD Priority */}
            <RevealOnScroll delay={0.2} className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] group border-white/10 hover:border-white/20 transition-colors">
              <span className="absolute top-6 right-6 text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold z-10">
                Coming Soon
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-nixtio-primary/5 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-nixtio-primary/10 rounded-xl flex items-center justify-center border border-nixtio-primary/20">
                    <Radio size={24} className="text-nixtio-primary" />
                  </div>
                  <h3 className="font-bold text-white text-3xl tracking-tight">SAPS/DSD Escalation</h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-[80%]">
                    Direct-line escalation protocols ensuring official emergency services receive
                    verified data instantly.
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 bg-nixtio-primary/10 border border-nixtio-primary/20 rounded-lg px-4 py-2 self-start">
                  <div className="w-2 h-2 rounded-full bg-nixtio-primary animate-pulse" />
                  <span className="text-nixtio-primary text-[11px] font-bold uppercase tracking-widest">Activates at Launch</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 3 — Data-Driven Reports */}
            <RevealOnScroll delay={0.1} className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] group border-white/10 hover:border-white/20 transition-colors">
              <span className="absolute top-6 right-6 text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold z-10">
                Coming Soon
              </span>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <BarChart2 size={24} className="text-white/80" />
                </div>
                <h3 className="font-bold text-white text-3xl tracking-tight">Data-Driven Reports</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-[80%]">
                  Monthly analytical breakdowns of regional safety trends to inform your
                  strategic deployment and resource allocation.
                </p>
              </div>
            </RevealOnScroll>

            {/* Card 4 — Inter-Agency Cooperation */}
            <RevealOnScroll delay={0.2} className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] group border-white/10 hover:border-white/20 transition-colors">
              <span className="absolute top-6 right-6 text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold z-10">
                Coming Soon
              </span>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <Shield size={24} className="text-white/80" />
                </div>
                <h3 className="font-bold text-white text-3xl tracking-tight">Inter-Agency Cooperation</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-[80%]">
                  Connect with other partners in the HAVENLY SOLUTIONS network to create a seamless
                  security mesh for your district.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-3">
                    {['#ff6633', '#333333', '#111111'].map((color, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: color }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">+24 pre registered</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Pricing banner */}
          <RevealOnScroll delay={0.3} className="mt-12 glass-panel bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="text-nixtio-primary text-[10px] uppercase tracking-widest font-bold mb-2">Gold Tier Pricing</div>
              <div className="font-extrabold text-white text-4xl tracking-tight">
                R 2,500 <span className="text-white/40 text-lg font-medium">/ month</span>
              </div>
              <div className="text-white/50 text-sm">
                Founding Partner offer: 12 months free in exchange for co-branding partnership
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
              <a href="#apply" className="w-full md:w-auto bg-white text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                Pre Register as Partner <ArrowRight size={16} />
              </a>
              <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Billing starts at launch · No card required now</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative">
        <RevealOnScroll className="max-w-[95rem] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Early access callout */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 mb-16 border-white/10 relative overflow-hidden flex flex-col md:flex-row items-start gap-8">
              <div className="absolute inset-0 bg-gradient-to-br from-nixtio-primary/5 to-transparent pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-nixtio-primary/10 flex items-center justify-center flex-shrink-0 border border-nixtio-primary/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6633" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-nixtio-primary text-[10px] font-bold uppercase tracking-widest">Early Access Programme</span>
                  <span className="text-[9px] bg-nixtio-primary/10 text-nixtio-primary border border-nixtio-primary/20 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">Limited Spots</span>
                </div>
                <h4 className="text-white text-2xl font-bold tracking-tight mb-3">
                  Secure your organisation&apos;s place before public launch.
                </h4>
                <p className="text-white/50 text-base leading-relaxed">
                  Gold Tier is not yet active — but approved partners are onboarded first on
                  <span className="text-white font-semibold"> 13 October 2026</span>, ahead of the general public.
                </p>
              </div>
            </div>

            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Partner Early Access</h2>
              <p className="text-white/50 text-lg">No commitment yet. We&apos;ll contact you before launch to confirm your onboarding slot.</p>
            </div>

            {/* We assume PartnerApplicationForm is styled somewhat agnostically, but if it has hardcoded light theme classes, we'll let it be for now, or it will adapt if it uses globals. */}
            <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/10">
              <PartnerApplicationForm />
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}