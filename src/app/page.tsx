"use client"

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Radio, Database, Wifi, MapPin, Users, ChevronRight, ArrowRight, Lock, Zap, Globe } from 'lucide-react'
import PreRegForm from '@/components/ui/PreRegForm'
import TourModal from '@/components/ui/TourModal'

/*  Optimized Countdown Hook  */
function useCountdown(targetDate: string | Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const tick = () => {
      const diff = target - Date.now()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

/*  Countdown Tile — glass style with tabular nums  */
function Tile({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-center backdrop-blur-xl min-w-[72px] transition-all hover:border-red-500/30">
      <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-bold">{label}</div>
    </div>
  )
}

const TICKER_ITEMS = [
  'SOS Protocol Active', 'POPIA Compliant', 'Offline-First Architecture',
  'Legal Evidence Chain', '99.9% Uptime', 'End-to-End Encrypted',
  'SA-Built for SA Reality', 'Guardian Mesh Network', 'Zero Third-Party Sharing',
]

//  App Types & Shared Styles 
type AppScreen = 'home' | 'community' | 'chat' | 'cases' | 'profile'

//  Icons 
const IC = {
  home: (a: boolean) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={a ? '#C0392B' : '#9B9B9B'}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  comm: (a: boolean) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={a ? '#C0392B' : '#9B9B9B'}>
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  chat: (a: boolean) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={a ? '#C0392B' : '#9B9B9B'}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  ),
  case: (a: boolean) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={a ? '#C0392B' : '#9B9B9B'}>
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  ),
  prof: (a: boolean) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={a ? '#C0392B' : '#9B9B9B'}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  menu: () => (
    <svg width="14" height="11" viewBox="0 0 20 14" fill="#1A1A2E">
      <rect y="0" width="20" height="2" rx="1" />
      <rect y="6" width="14" height="2" rx="1" />
      <rect y="12" width="20" height="2" rx="1" />
    </svg>
  ),
  shield: (size = 13) => (
    <img src="/logo.png" alt="Havenly Logo" width={size} height={size} className="rounded-sm object-cover" />
  ),
  pin: () => (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="#9B9B9B">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  check: (color = '#0B6E4F') => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill={color}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  ),
}

function PageTop({ countdown }: { countdown: any }) {
  return (
    <>
      {/*  HERO  */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background — photo + overlays */}
        <div className="absolute inset-0">
          <Image src="/pexel.jpg" alt="bg" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            {/* Protocol badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/40 bg-black/40 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/80 tracking-wide">Protocol Status: Initializing</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05]">
              Your Haven.<br />
              Your Community.<br />
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Always On.
              </span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mt-5 mb-10 max-w-lg">
              South Africa&apos;s first real emergency response platform
              built for our realities. From load shedding fallbacks to
              local community grids.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/#register"
                className="btn-shimmer text-white font-display font-bold px-8 py-4 rounded-xl text-base flex items-center gap-2 hover:shadow-lg transition-shadow">
                Pre-Register Free <ArrowRight size={18} />
              </Link>
              <Link href="/features"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ChevronRight size={14} />
                </div>
                View Protocol Specs
              </Link>
            </div>

            {/* Countdown tiles */}
            <div className="flex gap-3 mb-10">
              <Tile value={countdown.days} label="Days" />
              <Tile value={countdown.hours} label="Hours" />
              <Tile value={countdown.minutes} label="Mins" />
              <Tile value={countdown.seconds} label="Secs" />
            </div>
          </div>

          {/* Right — Clean form with no backdrop */}
          <div className="relative" id="register">
            <PreRegForm />
          </div>
        </div>
      </section>

      {/*  TICKER  */}
      <div className="bg-[#0d0d1a] py-4 overflow-hidden border-y border-white/10 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(2).fill(TICKER_ITEMS).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-16 text-white/80 text-xs uppercase tracking-[0.2em] font-semibold font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 shadow-[0_0_6px_#ef4444]" />
              {item}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      </div>

      {/*  BUILT FOR SA  */}
      <section className="py-24 bg-[#dee2e6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-600 text-xs uppercase tracking-widest font-bold mb-3">Built for the South African Reality</p>
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl">Core Safety Architecture</h2>
            <p className="text-[#1A1A2E]/40 mt-3 text-base max-w-xl mx-auto">
              The foundation of high-trust security — engineered for environments where failure is not an option.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SOS — RECTANGLE (2 columns) */}
            <div className="md:col-span-2 bg-[#0d0d1a] rounded-2xl p-8 relative overflow-hidden border border-white/5 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                  <Zap size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">One-Press SOS.</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Hold for 2 seconds to trigger an encrypted SOS emergency signal.
                  Instantly alerts nearby family members, community responders, and law enforcement.
                  <br /><br />
                  <span className="text-purple-500 font-semibold">
                    Lets Stand Together and Say No More Violence, No More GBV!
                  </span>
                </p>
                <div className="flex gap-2 mt-6">
                  <span className="text-[10px] bg-white/5 text-white/40 border border-white/10 px-3 py-1.5 rounded-lg font-bold uppercase tracking-widest">
                    ACTIVE PROTECTION ENABLED
                  </span>
                </div>
              </div>
            </div>

            {/* OFFLINE — SQUARE */}
            <div className="md:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm aspect-square flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:border-red-200 group">
              <div className="w-10 h-10 bg-[#1A1A2E]/5 group-hover:bg-red-50 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Wifi size={18} className="text-[#1A1A2E] group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="font-display font-bold text-[#1A1A2E] text-lg mb-1">Offline-First Logic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Critical data is buffered locally and transmitted via SMS/Mesh protocols when cellular fails.
                Never disconnected.
              </p>
            </div>
          </div>

          {/* Feature highlights row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: Database,
                title: 'Evidence Chain',
                desc: 'Auto recorded audio and location logs are court ready and cryptographically signed for legal validity',
                badge: 'Court Ready'
              },
              {
                icon: Radio,
                title: 'Safety Network',
                desc: 'Hyper local community grids that bypass slow centralized dispatch. Neighbors watching over neighbors.',
                image: '/winner.jpg'
              },
            ].map(({ icon: Icon, title, desc, badge, image }) => {
              if (title === 'Safety Network') {
                return (
                  <div key={title} className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between gap-6 min-h-[220px] hover:shadow-lg hover:border-red-200 transition-all group">
                    <div className="flex-1">
                      <div className="w-10 h-10 bg-[#1A1A2E]/5 group-hover:bg-red-50 rounded-xl flex items-center justify-center mb-4 transition-colors">
                        <Icon size={18} className="text-[#1A1A2E] group-hover:text-red-600 transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-[#1A1A2E] text-lg mb-2">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )
              }
              return (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all group">
                  <div className="w-10 h-10 bg-[#1A1A2E]/5 group-hover:bg-red-50 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon size={18} className="text-[#1A1A2E] group-hover:text-red-600 transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-[#1A1A2E] text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                  {badge && (
                    <span className="inline-flex text-[10px] bg-gray-50 text-gray-400 border border-gray-100 px-3 py-1.5 rounded-lg font-bold uppercase tracking-widest">
                      {badge}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function HomeScreen({ onSOS }: { onSOS: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F4F5F7]">
      <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-100 shrink-0 z-10">
        <div className="flex items-center gap-2">
          {IC.menu()}
          <span className="text-[10px] font-black text-[#1A1A2E] tracking-widest">HAVENLY SOLUTIONS.</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-[#C0392B] text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full tracking-wider">DEMO</span>
          <div className="w-5 h-5 rounded-full bg-[#1A1A2E] flex items-center justify-center">
            {IC.prof(false)}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        <div className="mx-2.5 mt-2.5 rounded-2xl p-3 mb-2 bg-[#1A1A2E]">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] animate-pulse" />
            <span className="text-[6.5px] text-[#4ade80] font-semibold uppercase tracking-widest">Sentinel Live Update</span>
            <span className="text-[6px] text-gray-500 ml-auto">Last checked 2M ago</span>
          </div>
          <p className="text-[17px] font-black text-white leading-[1.15] mb-2">
            Your area is<br />
            <span className="text-[#7B5EA7]">quiet.</span>
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-[#0B6E4F]/20 border border-[#0B6E4F]/30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
            <span className="text-[6.5px] text-[#4ade80] font-semibold tracking-wide">All Systems Optimal</span>
          </div>
        </div>
        <div className="mx-2.5 mb-2 grid grid-cols-3 gap-1.5">
          {[
            { v: '0', l: 'Active Threats' },
            { v: '<3m', l: 'Avg Response' },
            { v: '42', l: 'Neighbors Online' },
          ].map(s => (
            <div key={s.l} className="bg-white rounded-xl p-2 text-center border border-gray-100">
              <p className="text-[12px] font-black text-[#1A1A2E]">{s.v}</p>
              <p className="text-[5.5px] text-gray-400 leading-tight mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center py-3">
          <p className="text-[6px] text-gray-400 uppercase tracking-[0.2em] mb-2.5">Emergency Response</p>
          <div
            className="w-36 rounded-2xl p-4 flex flex-col items-center bg-[linear-gradient(145deg,#7a1717_0%,#96281B_40%,#C0392B_100%)] shadow-[0_8px_28px_rgba(192,57,43,0.45)]"
          >
            <div className="flex items-center gap-1 mb-2.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              <span className="text-[6px] text-white/50 font-semibold tracking-widest uppercase">Immediate Help</span>
            </div>
            <div className="relative flex items-center justify-center mb-2.5">
              <div className="absolute w-14 h-14 rounded-full animate-ping bg-white/10 [animation-duration:2.2s]" />
              <div className="absolute w-12 h-12 rounded-full bg-white/15" />
              <button
                onClick={onSOS}
                className="relative w-10 h-10 rounded-full flex items-center justify-center z-10 active:scale-95 transition-transform duration-100 cursor-pointer bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.2),rgba(255,255,255,0.04))] border-2 border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                <span className="text-white text-[10px] font-black tracking-wider">SOS</span>
              </button>
            </div>
            <p className="text-white text-[9px] font-bold mb-0.5">Immediate Help</p>
            <p className="text-white/50 text-[6px] tracking-wide">Long press for emergency protocol</p>
          </div>
        </div>
        <div className="mx-2.5 mb-2 bg-white rounded-xl p-2.5 border border-gray-100 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] shrink-0" />
          <span className="text-[8px] text-[#0B6E4F] font-medium flex-1">Mesh Network Connected</span>
          {IC.check()}
        </div>
        <div className="mx-2.5 mb-3 flex items-center gap-1.5 px-0.5">
          {IC.pin()}
          <span className="text-[7px] text-gray-400">Sandton, Johannesburg · Zone 3</span>
        </div>
        <div className="mx-2.5 flex items-center justify-between mb-1.5">
          <span className="text-[8px] font-bold text-[#1A1A2E] uppercase tracking-widest">Recent Activity</span>
          <span className="text-[6.5px] text-[#C0392B] font-semibold cursor-pointer">View All</span>
        </div>
        {[
          { bg: '#E8F5E9', ic: '', title: 'Scheduled Check-in', time: '12m ago', desc: 'Status verified in Central District.' },
          { bg: '#E8F0FE', ic: '', title: 'Community Safety Alert', time: '1h ago', desc: 'Path safety rating up by 12%.' },
          { bg: '#FFF3E0', ic: '', title: 'Contact Updated', time: '4h ago', desc: 'Sarah M. added to Emergency Contacts.' },
        ].map((i, idx) => (
          <div key={idx} className="mx-2.5 mb-1.5 bg-white rounded-xl p-2.5 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px]" style={{ backgroundColor: i.bg }}>{i.ic}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-1">
                  <span className="text-[8px] font-bold text-[#1A1A2E] leading-tight">{i.title}</span>
                  <span className="text-[6px] text-gray-400 whitespace-nowrap shrink-0">{i.time}</span>
                </div>
                <p className="text-[6.5px] text-gray-400 mt-0.5 leading-tight">{i.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunityScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]">
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Community Feed</h1>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
        {[
          {
            type: 'Incident Report',
            title: 'Unusual Perimeter Activity',
            desc: 'Anonymous Sentinel reports suspicious vehicle activity near 4th and Main. Neighbors advised to verify exterior lighting.',
            time: '2m ago',
            color: '#34D399',
          },
          {
            type: 'Security',
            title: 'Neighborhood Patrol Active',
            desc: 'Volunteer patrol is currently active in Sector 7. All sectors currently reporting green status.',
            time: '3h ago',
            color: '#1A1A2E',
          }
        ].map((post, idx) => (
          <div key={idx} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  post.color === '#C0392B' ? 'bg-[#C0392B]' : post.color === '#1A1A2E' ? 'bg-[#1A1A2E]' : 'bg-[#0B6E4F]'
                }`} />
                <span className="text-[8.5px] font-black text-gray-400 uppercase tracking-widest">{post.type}</span>
              </div>
              <span className="text-[7.5px] font-bold text-gray-400 uppercase tracking-tighter">{post.time}</span>
            </div>
            <h2 className="text-[15px] font-black text-[#1A1A2E] leading-tight mb-2">{post.title}</h2>
            <p className="text-[11px] text-gray-500 leading-relaxed">{post.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]">
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Community Chat</h1>
        <p className="text-[9px] text-gray-500 font-medium">Sandton Central District · Zone 3</p>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFE2E2] shrink-0 border border-[#FFD2D2] flex items-center justify-center text-xs"></div>
          <div className="bg-white rounded-[20px] rounded-tl-none p-3.5 border border-gray-100 shadow-sm">
            <p className="text-[11.5px] text-gray-700 leading-relaxed">Suspicious vehicle parked near Oak Ridge. White sedan. Any neighbors recognize it?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-[#1A1A2E] rounded-[20px] rounded-tr-none p-3.5 shadow-md">
            <p className="text-[11.5px] text-white leading-relaxed">No recognition. I&apos;ve activated my outer sentinel cams to track pathing.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#E9ECEF] shrink-0 border border-gray-100 flex items-center justify-center text-xs"></div>
        </div>
      </div>
    </div>
  )
}

function CasesScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]">
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-[0.2em] text-center">Submit a Concern</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
        <h2 className="text-[24px] font-black text-[#1A1A2E] leading-tight mb-4">Report an Incident</h2>
        <p className="text-[12px] text-gray-500 mb-8">All reports are encrypted and strictly anonymous by default.</p>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <span className="text-[10px] font-black text-gray-300 uppercase block mb-1">Category</span>
            <span className="text-[14px] font-bold text-[#1A1A2E]">Suspicious Activity</span>
          </div>
          <button className="w-full bg-[#1A1A2E] text-white rounded-2xl py-4 font-black uppercase tracking-widest text-[12px] mt-4 shadow-xl">Submit Initial Draft</button>
        </div>
      </div>
    </div>
  )
}

function ProfileScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]">
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Profile</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center no-scrollbar">
        <div className="w-20 h-20 rounded-full bg-[#1A1A2E] flex items-center justify-center text-white text-2xl font-black mb-4 border-2 border-white shadow-xl">DS</div>
        <h2 className="text-[18px] font-black text-[#1A1A2E]">Demo Sentinel</h2>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 mb-10">Johannesburg · Zone 3</p>
        <div className="w-full space-y-2">
          {['Emergency Contacts', 'Privacy Settings', 'Help & Security Guide'].map(opt => (
            <div key={opt} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#1A1A2E]">{opt}</span>
              <ArrowRight size={14} className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SOSOverlay({ onClose }: { onClose: () => void }) {
  const [countdown, setCountdown] = useState(3)
  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(onClose, 2000)
      return () => clearTimeout(t)
    }
  }, [countdown, onClose])
  return (
    <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border-4 border-[#C0392B] flex items-center justify-center mb-6 animate-pulse">
          <span className="text-white text-2xl font-black">SOS</span>
        </div>
        <h2 className="text-white text-xl font-black uppercase mb-2">Emergency Signal</h2>
        <p className="text-[#C0392B] text-[10px] font-black tracking-widest uppercase mb-10">
          {countdown > 0 ? `Broadcasting in 0${countdown}s` : 'Dispatched to Mesh'}
        </p>
        <button onClick={onClose} className="bg-white/10 text-white/40 text-[10px] font-black px-8 py-3 rounded-full uppercase tracking-widest border border-white/5">Hold to Cancel</button>
      </div>
    </div>
  )
}

function BottomNav({ active, onChange }: { active: AppScreen; onChange: (s: AppScreen) => void }) {
  const tabs: { key: AppScreen; label: string; icon: (a: boolean) => ReactNode }[] = [
    { key: 'home', label: 'Home', icon: IC.home },
    { key: 'community', label: 'Sentinel', icon: IC.comm },
    { key: 'chat', label: 'Chat', icon: IC.chat },
    { key: 'cases', label: 'Reports', icon: IC.case },
    { key: 'profile', label: 'Profile', icon: IC.prof },
  ]
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center px-1 z-20">
      {tabs.map(t => {
        const isActive = active === t.key
        return (
          <button key={t.key} onClick={() => onChange(t.key)} className="flex-1 flex flex-col items-center justify-center gap-1">
            {t.icon(isActive)}
            <span className={`text-[7px] font-black uppercase tracking-tighter ${isActive ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function HavenlySolutionsApp() {
  const [screen, setScreen] = useState<AppScreen>('home')
  const [sos, setSos] = useState(false)
  const screens: Record<AppScreen, ReactNode> = {
    home: <HomeScreen onSOS={() => setSos(true)} />,
    community: <CommunityScreen />,
    chat: <ChatScreen />,
    cases: <CasesScreen />,
    profile: <ProfileScreen />,
  }
  return (
    <div className="relative w-full h-full overflow-hidden">
      {screens[screen]}
      <BottomNav active={screen} onChange={setScreen} />
      {sos && <SOSOverlay onClose={() => setSos(false)} />}
    </div>
  )
}

function IPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[234px] h-[488px] shrink-0">
      {/* External Chassis */}
      <div className="absolute inset-0 rounded-[44px] bg-[#1a1a1a] p-1 shadow-2xl border border-white/5">
        <div className="w-full h-full rounded-[40px] bg-black overflow-hidden relative">
          {/* Internal Display */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-between px-6 z-20">
            <span className="text-[8px] font-bold">9:41</span>
            <div className="w-16 h-5 rounded-full bg-black mx-auto mt-1" />
            <span className="text-[8px] font-bold">5G</span>
          </div>
          <div className="w-full h-full pt-8">{children}</div>
        </div>
      </div>
      <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">iPhone 15 Pro</p>
    </div>
  )
}

function PixelFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[234px] h-[488px] shrink-0">
      <div className="absolute inset-0 rounded-[36px] bg-[#111111] p-1 shadow-2xl">
        <div className="w-full h-full rounded-[33px] bg-black overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-center z-20">
            <div className="w-2 h-2 rounded-full bg-black/10" />
          </div>
          <div className="w-full h-full pt-6">{children}</div>
        </div>
      </div>
      <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Pixel 8 Pro</p>
    </div>
  )
}

//  Main Demo Section 
function HavenlySolutionsDemoSection() {
  return (
    <section className="py-24 bg-[#dee2e6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-3 bg-[#1A1A2E] text-white px-6 py-3 rounded-full shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest">Coming Soon</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-[#D4A017] font-bold text-xs">24 November 2026</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <h2 className="font-display font-black text-gray-900 text-4xl md:text-5xl mb-5 leading-tight">Designed for Focus.<br />Engineered for Action.</h2>
            <p className="text-gray-700 text-base mb-10 leading-relaxed">The Havenly Solutions platform is more than an app. it&apos;s an intelligent shield that adapts to your environment.</p>
            <div className="space-y-6">
              {[
                {
                  title: 'Load Shedding Intelligence', desc: 'Automatically prioritizes critical low bandwidth alerts when local towers are congested.'
                },
                { title: 'AMBER Alerts Integration', desc: 'Immediate broadcasting for missing children within a 10km radius of your current location' },
                { title: 'POPIA Compliant Logs', desc: 'Data is stored with military grade encryption and only shared with responders during active emergencies' }
              ].map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">{IC.shield()}</div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-1">{f.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-8">
            <IPhoneFrame><HavenlySolutionsApp /></IPhoneFrame>
            <PixelFrame><HavenlySolutionsApp /></PixelFrame>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const countdown = useCountdown('2026-11-24T00:00:00+02:00')
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900">
      <PageTop countdown={countdown} />
      <TourModal />
      <HavenlySolutionsDemoSection />

      {/*  DESIGNED FOR  */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white text-4xl md:text-5xl mb-4">Designed for our reality.</h2>
          <p className="text-white/40 text-base mb-14 max-w-lg mx-auto">We didn&apos;t just build another app. We built a platform that works when everything else fails.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Simple Safety', desc: 'Zero complex menus. One gesture activation because in a crisis, muscle memory is everything.' },
              { label: 'SA Families', desc: 'Built to withstand stage 6 load shedding, limited data coverage, and high latency areas.' },
              { label: 'Community Mesh', desc: 'Leveraging the power of local responders. neighborhood watches, and trusted community leaders' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-red-500/40 hover:bg-black/60 transition-all group">
                <h3 className="font-display font-bold text-red-600 text-lg mb-2">{label}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/*  NGO / COMMUNITY WATCH  */}
      <section className="py-24 bg-[#dee2e6] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl p-6 md:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-red-600 text-xs uppercase tracking-widest font-bold mb-3">PARTNER PROGRAM</p>
              <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl leading-tight mb-6">Empowering NGOs &<br />Community Watch.</h2>
              <p className="text-[#1A1A2E]/60 text-base leading-relaxed mb-8">
                The Havenly Solutions Gold Tier provides NGOs with a specialized case dashboard, real-time escalation to SAPS/DSD, and encrypted victim evidence management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-4 text-left">
                  <h3 className="font-display font-bold text-black text-lg mb-2">01.</h3>
                  <p className="text-black/70 text-sm leading-relaxed ">LIVE DASHBOARD</p>
                </div>
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-4 text-left">
                  <h3 className="font-display font-bold text-black text-lg mb-2">02.</h3>
                  <p className="text-black/70 text-sm leading-relaxed">SAPS ESCALATION</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/partners" className="bg-red-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-red-700 mt-27 transition">
                  Apply for Partnership →
                </Link>
                <Link href="/partners#gold" className="px-6 py-3 border border-[#1A1A2E]/10 rounded-xl text-sm text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
                  Explore Gold Tier
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/pexels-lee-campbell-18167-115655.jpg" alt="Security Command" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/*  LAUNCH CTA  */}
      <section className="py-24 bg-[#dee2e6] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display font-bold text-black/70 text-4xl md:text-5xl mb-5 leading-tight">Join Havenly Solutions<br />before launch day.</h2>
          <p className="text-gray-500 font-medium text-base mb-10 leading-relaxed">
            Be part of the founding community. Secure your lifetime free access and
            help us build a safer South Africa together.
          </p>
          <Link href="/#register" className="inline-flex items-center gap-2 bg-red-600 text-white font-display font-bold px-10 py-4 rounded-xl text-base hover:bg-red-700 transition-all">
            Pre-Register Free <ArrowRight size={18} />
          </Link>
          <p className="text-gray-500 font-medium text-sm mt-6">LIMITED SPACES AVAILABLE FOR PHASE 1 ROLLOUT</p>
        </div>
      </section>
    </div>
  )
}