"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Database, ChevronRight, Lock, ArrowRight, Radio, Share2, Satellite } from 'lucide-react'

const GuardianMap = dynamic(() => import('@/components/GuardianMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white/30 text-xs uppercase tracking-widest">
      Loading map...
    </div>
  ),
})

// Moved outside the component so it's defined before FeaturesPage renders
const NETWORK_NODES = [
  {
    icon: Radio,
    label: 'Primary Cell',
    status: 'Online',
    ringColor: 'ring-[#C0392B]/60',
    bgColor: 'bg-[#C0392B]/20',
    iconColor: 'text-[#C0392B]',
    pulse: true,
  },
  {
    icon: Share2,
    label: 'Mesh Relay',
    status: 'Active',
    ringColor: 'ring-white/20',
    bgColor: 'bg-white/10',
    iconColor: 'text-white/60',
    pulse: false,
  },
  {
    icon: Satellite,
    label: 'Secondary Sat',
    status: 'Standby',
    ringColor: 'ring-white/20',
    bgColor: 'bg-white/10',
    iconColor: 'text-white/40',
    pulse: false,
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-16 bg-[#dee2e6]">

      {/*  Hero  */}
      <section className="relative min-h-[80vh] flex items-center bg-[#dee2e6]">
        <div className="absolute inset-0 map-grid" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left copy */}
          <div>
            <span className="text-[#C0392B] text-[10px] uppercase tracking-widest font-bold mb-3 block">
              Security Protocol A6.8
            </span>
            <h1 className="font-display font-black text-[#1A1A2E] leading-[0.9] mb-6">
              <span className="block text-[clamp(3rem,9vw,7rem)]">THE</span>
              <span className="block text-[clamp(3rem,9vw,7rem)]">STOIC</span>
              <span className="block text-[clamp(3rem,9vw,7rem)]">GUARDIAN.</span>
            </h1>
            <p className="text-[#1A1A2E]/50 text-lg leading-relaxed mb-6 max-w-lg">
              Designed for the South African context. High-trust security architecture that works even when the network fails.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0B6E4F]/10 border border-[#0B6E4F]/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
            <span className="text-[#0B6E4F] text-[10px] uppercase tracking-widest font-semibold">
              Global Protection Active
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full">
            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-semibold">
              POPIA Compliant
            </span>
          </div>
        </div>
    </div>

            {/* Right — interactive map card */ }
  <div className="relative">
    <div className="absolute -inset-8 bg-[#1A1A2E]/5 rounded-3xl blur-2xl" />
    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
      <div className="bg-[#1A1A2E] rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse" />
          <span className="text-white/40 text-xs uppercase tracking-widest">Guardian Active</span>
        </div>
        <div className="h-64 rounded-lg overflow-hidden border border-white/10">
          <GuardianMap />
        </div>
      </div>
      <div className="bg-[#0B6E4F]/10 border border-[#0B6E4F]/20 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={16} className="text-[#0B6E4F]" />
          <div className="font-semibold text-[#1A1A2E] text-sm">National Coverage Map</div>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="text-[8px] bg-[#0B6E4F]/20 px-2 py-0.5 rounded-full text-[#0B6E4F]">JHB</span>
          <span className="text-[8px] bg-[#0B6E4F]/20 px-2 py-0.5 rounded-full text-[#0B6E4F]">CPT</span>
          <span className="text-[8px] bg-[#0B6E4F]/20 px-2 py-0.5 rounded-full text-[#0B6E4F]">DUR</span>
          <span className="text-[8px] bg-gray-200 px-2 py-0.5 rounded-full text-gray-500">PE</span>
          <span className="text-[8px] bg-gray-200 px-2 py-0.5 rounded-full text-gray-500">BLOEM</span>
        </div>
      </div>
    </div>
  </div>
          </div >
        </section >

    {/*  One-Press SOS  */ }
    < section className = "py-24 bg-[#dee2e6]" >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="w-12 h-12 bg-[#C0392B]/10 rounded-2xl flex items-center justify-center mb-5">
            <Shield size={24} className="text-[#C0392B]" />
          </div>
          <h3 className="font-display font-bold text-[#1A1A2E] text-xl mb-2">The 2-Second Hold</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Accidental triggers are eliminated by our tactile haptic protocol. A sustained 2-second hold initiates the silent alert cycle.
          </p>
          <div className="space-y-2">
            {['Haptic feedback confirms contact', 'Silent transmission begins'].map(s => (
              <div key={s} className="flex items-center gap-2 text-sm text-[#1A1A2E]/60">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[#C0392B] text-xs uppercase tracking-widest font-bold mb-3">Critical Response</p>
          <h2 className="font-display font-black text-[#1A1A2E] text-5xl leading-tight mb-4">
            ONE-PRESS SOS.<br />ZERO LATENCY.
          </h2>
          <p className="text-[#1A1A2E]/50 text-base leading-relaxed mb-6">
            When seconds matter, navigation is a liability. HAVENLY SOLUTIONS bypasses menus, delivering your precise location and environmental audio to the Guardian Grid instantly.
          </p>
          <Link
            href="/#register"
            className="inline-flex items-center gap-2 text-[#C0392B] font-semibold text-sm hover:gap-3 transition-all"
          >
            Explore the Response Cycle <ChevronRight size={16} />
          </Link>
        </div>
      </div>
        </section >

    {/*  Legal Evidence Chain  */ }
    < section className = "py-24 bg-[#dee2e6] relative overflow-hidden" >
          <div className="absolute inset-0 dot-grid-light opacity-30" />

          <div className="relative max-w-7xl mx-auto px-6 text-center mb-16">
            <p className="text-black text-xs uppercase tracking-widest mb-3">The Forensic Standard</p>
            <h2 className="font-display font-black text-black text-5xl lg:text-6xl">LEGAL EVIDENCE CHAIN.</h2>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/*  Left: full-height image box with text overlay  */}
            <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
              <Image
                  src="/court.jpg"
                  alt="Evidence Chain"
                  fill
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#C0392B] text-[10px] uppercase tracking-widest font-bold mb-2">
                  Court-Ready Logs
                </p>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  Unlike standard recordings,
                  <br />
                  HAVENLY SOLUTIONS data is timestamped and cryptographically hashed,
                  ensuring it remains{' '}
                  <span className="text-white font-semibold not-italic">untampered and admissible in court.</span>
                </p>
              </div>
            </div>

            {/*  Right: two cards stacked  */}
            <div className="flex flex-col gap-4 bg-[#dee2e6]">
              {[
                {
                  icon: Database,
                  title: 'Immutable Hashing',
                  desc: 'Every second of audio and GPS data is signed with a unique digital fingerprint.',
                },
                {
                  icon: Shield,
                  title: 'Officer Access',
                  desc: 'Direct portal for law enforcement to access emergency event history with verified credentials.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex-1 bg-gray-400 border border-white rounded-2xl p-5 flex items-center">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white/60" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-red-600 mb-1">{title}</h3>
                        <p className="text-white text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section >

    {/*  Community Mesh  */ }
    < section className = "py-24 bg-[#1A1A2E]" >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display font-black text-white text-5xl leading-tight mb-6">
            COMMUNITY<br />MESH NETWORK.
          </h2>
          <div className="space-y-5 font-semibold">
            {[
              {
                title: 'Offline SMS Fallback',
                desc: 'No signal? HAVENLY SOLUTIONS automatically switches to encrypted low-bandwidth SMS packets to relay your SOS.',
              },
              {
                title: 'Device-to-Device Mesh',
                desc: 'Leverage the Guardian Web — other HAVENLY SOLUTIONS devices act as relays to push signals to the cloud even in dead zones.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div>
                  <div className="font-black text-white text-xl mb-0.5">{title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Network node visualiser  */}
        <div className="bg-[#1A1A2E] rounded-2xl p-8 relative overflow-hidden dot-grid-light">
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="33%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="67%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          <div className="relative z-10 flex items-center justify-around gap-4 py-6">
            {NETWORK_NODES.map(({ icon: Icon, label, ringColor, bgColor, iconColor, pulse }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className={`relative w-16 h-16 rounded-full ring-2 ${ringColor} ${bgColor} flex items-center justify-center`}>
                  {pulse && (
                    <span className="absolute inset-0 rounded-full bg-[#C0392B]/20 animate-ping" />
                  )}
                  <Icon size={22} className={iconColor} />
                </div>
                <div className="text-center">
                  <div className="text-white/30 text-[9px] uppercase tracking-widest leading-tight">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </section >

    {/*  POPIA  */ }
    < section className = "py-24 bg-[#adb5bd] border-t border-gray-500" >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#C0392B] text-xs uppercase tracking-widest font-bold mb-3">Ethics & Law</p>
          <h2 className="font-display font-black text-[#1A1A2E] text-5xl leading-tight mb-4">
            POPIA<br />COMPLIANCE<br />BY DESIGN.
          </h2>
          <p className="text-black/50 text-base leading-relaxed mb-6">
            Security shouldn&apos;t come at the cost of privacy. We&apos;ve built the world&apos;s most transparent personal safety data policy, adhering strictly to South African POPIA regulations.
          </p>
          <div className="space-y-3">
            {[
              'No background location tracking without active alerts',
              'Automatic data deletion after 30 days of inactivity',
              "User-owned encryption keys (We can&apos;t see your logs)",
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#1A1A2E]/60">
                <div className="w-5 h-5 rounded-full border border-[#0B6E4F]/30 bg-[#0B6E4F]/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-4 border-[#1A1A2E]/10 flex flex-col items-center justify-center text-center">
            <Lock size={40} className="text-[#1A1A2E] mb-2" />
            <div className="font-display font-black text-[#1A1A2E] text-sm uppercase tracking-widest">POPIA</div>
            <div className="font-display font-black text-[#1A1A2E] text-sm uppercase tracking-widest">Certified</div>
            <div className="text-gray-400 text-[10px] mt-1">2026</div>
          </div>
        </div>
      </div>
        </section >

    {/*  CTA  */ }
    < section className = "py-20 bg-[#dee2e6] text-center relative overflow-hidden" >
          <div className="absolute inset-0 map-grid-dark" />
          <div className="relative max-w-2xl mx-auto px-6">
            <h2 className="font-display font-black text-black text-5xl mb-4">
              RECLAIM YOUR<br />SENSE OF SECURITY.
            </h2>
            <p className="text-black text-base mb-8">The Stoic Guardian Protocol is ready. Join the network that protects thousands of south africans every day</p>
            <Link
                href="/#register"
                className="inline-flex items-center gap-2 btn-shimmer text-white font-display font-bold px-10 py-4 rounded-xl"
            >
              Download Protocol <ArrowRight size={16} />
            </Link>
          </div>
        </section >

      </div >
  )
}