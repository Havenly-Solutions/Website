'use client'

import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

//  App Types & Shared Styles 
export type AppScreen = 'home' | 'community' | 'chat' | 'cases' | 'profile'
const noScroll = "no-scrollbar"

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
  shield: (color = '#0B6E4F') => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={color}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
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

//  Animation Variants 
const screenVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
}

const listVariants = {
  animate: { transition: { staggerChildren: 0.05 } }
}

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
}

//  Mobile Screens 
function HomeScreen({ onSOS }: { onSOS: () => void }) {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#F4F5F7]" 
    >
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
      <div className={`flex-1 overflow-y-auto pb-20 ${noScroll}`}>
        <motion.div variants={itemVariants} className="mx-2.5 mt-2.5 rounded-2xl p-3 mb-2 bg-[#1A1A2E]">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] animate-pulse" />
            <span className="text-[6.5px] text-[#4ade80] font-semibold uppercase tracking-widest">Sentinel Live Update</span>
            <span className="text-[6px] text-gray-500 ml-auto">Last checked 2M ago</span>
          </div>
          <p className="text-[17px] font-black text-white leading-[1.15] mb-2">
            Your area is<br />
            <span className="text-[#7B5EA7]">quiet.</span>
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-[#0b6e4f]/[0.18] border border-[#0b6e4f]/30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F]" />
            <span className="text-[6.5px] text-[#4ade80] font-semibold tracking-wide">All Systems Optimal</span>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mx-2.5 mb-2 grid grid-cols-3 gap-1.5">
          {[
            { v: '-', l: 'Active Threats' },
            { v: '-', l: 'Avg Response' },
            { v: '-', l: 'Neighbors Online' },
          ].map(s => (
            <div key={s.l} className="bg-white rounded-xl p-2 text-center border border-gray-100">
              <p className="text-[12px] font-black text-[#1A1A2E]">{s.v}</p>
              <p className="text-[5.5px] text-gray-400 leading-tight mt-0.5">{s.l}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center py-3">
          <p className="text-[6px] text-gray-400 uppercase tracking-[0.2em] mb-2.5">Emergency Response</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-36 rounded-2xl p-4 flex flex-col items-center cursor-pointer"
            style={{
              background: 'linear-gradient(145deg, #7a1717 0%, #96281B 40%, #C0392B 100%)',
              boxShadow: '0 8px 28px rgba(192,57,43,0.45)',
            }}
          >
            <div className="flex items-center gap-1 mb-2.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              <span className="text-[6px] text-white/50 font-semibold tracking-widest uppercase">Immediate Help</span>
            </div>
            <div className="relative flex items-center justify-center mb-2.5">
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute w-14 h-14 rounded-full bg-white/20" 
              />
              <div className="absolute w-12 h-12 rounded-full bg-white/[0.12]" />
              <button
                onClick={onSOS}
                className="relative w-10 h-10 rounded-full flex items-center justify-center z-10 active:scale-95 transition-transform duration-100 cursor-pointer bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.2),rgba(255,255,255,0.04))] border-[2px] border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                <span className="text-white text-[10px] font-black tracking-wider">SOS</span>
              </button>
            </div>
            <p className="text-white text-[9px] font-bold mb-0.5">Immediate Help</p>
            <p className="text-white/50 text-[6px] tracking-wide">Long press for emergency protocol</p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mx-2.5 mb-2 bg-white rounded-xl p-2.5 border border-gray-100 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] shrink-0" />
          <span className="text-[8px] text-[#0B6E4F] font-medium flex-1">Mesh Network Connected</span>
          {IC.check()}
        </motion.div>

        <motion.div variants={itemVariants} className="mx-2.5 mb-3 flex items-center gap-1.5 px-0.5">
          {IC.pin()}
          <span className="text-[7px] text-gray-400">Sandton, Johannesburg · Zone 3</span>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-2.5 flex items-center justify-between mb-1.5">
          <span className="text-[8px] font-bold text-[#1A1A2E] uppercase tracking-widest">Recent Activity</span>
          <span className="text-[6.5px] text-[#C0392B] font-semibold cursor-pointer">View All</span>
        </motion.div>

        <motion.div variants={listVariants} className="space-y-1.5">
          {[
            { bg: 'bg-[#E8F5E9]', ic: '', title: 'System Provisioned', time: 'Just now', desc: 'Awaiting launch date for live telemetry.' },
            { bg: 'bg-[#E8F0FE]', ic: '', title: 'Network Ready', time: 'Just now', desc: 'Secure connection established.' },
            { bg: 'bg-[#FFF3E0]', ic: '', title: 'Telemetry Standby', time: 'Just now', desc: 'Live data available after launch.' },
          ].map((i, idx) => (
            <motion.div key={idx} variants={itemVariants} className="mx-2.5 bg-white rounded-xl p-2.5 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${i.bg}`}>{i.ic}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <span className="text-[8px] font-bold text-[#1A1A2E] leading-tight">{i.title}</span>
                    <span className="text-[6px] text-gray-400 whitespace-nowrap shrink-0">{i.time}</span>
                  </div>
                  <p className="text-[6.5px] text-gray-400 mt-0.5 leading-tight">{i.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

function CommunityScreen() {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]" 
    >
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Community Feed</h1>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
        </div>
      </div>
      <motion.div 
        variants={listVariants}
        className={`flex-1 overflow-y-auto p-4 space-y-4 ${noScroll}`} 
      >
        {[
          {
            type: 'Incident Report',
            title: 'Unusual Perimeter Activity',
            desc: 'Anonymous Sentinel reports suspicious vehicle activity near 4th and Main. Neighbors advised to verify exterior lighting.',
            time: '2m ago',
            color: '#34D399',
            bg: 'bg-[#34D399]',
          },
          {
            type: 'Security',
            title: 'Neighborhood Patrol Active',
            desc: 'Volunteer patrol is currently active in Sector 7. All sectors currently reporting green status.',
            time: '3h ago',
            color: '#1A1A2E',
            bg: 'bg-[#1A1A2E]',
          }
        ].map((post, idx) => (
          <motion.div key={idx} variants={itemVariants} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${post.bg}`} />
                 <span className="text-[8.5px] font-black text-gray-400 uppercase tracking-widest">{post.type}</span>
              </div>
              <span className="text-[7.5px] font-bold text-gray-400 uppercase tracking-tighter">{post.time}</span>
            </div>
            <h2 className="text-[15px] font-black text-[#1A1A2E] leading-tight mb-2">{post.title}</h2>
            <p className="text-[11px] text-gray-500 leading-relaxed">{post.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function ChatScreen() {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]" 
    >
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Community Chat</h1>
        <p className="text-[9px] text-gray-500 font-medium">Sandton Central District · Zone 3</p>
      </div>
      <motion.div 
        variants={listVariants}
        className={`flex-1 overflow-y-auto p-4 space-y-6 ${noScroll}`} 
      >
        <motion.div variants={itemVariants} className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFE2E2] shrink-0 border border-[#FFD2D2] flex items-center justify-center text-xs"></div>
          <div className="bg-white rounded-[20px] rounded-tl-none p-3.5 border border-gray-100 shadow-sm">
            <p className="text-[11.5px] text-gray-700 leading-relaxed">Suspicious vehicle parked near Oak Ridge. White sedan. Any neighbors recognize it?</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-start gap-3 justify-end">
          <div className="bg-[#1A1A2E] rounded-[20px] rounded-tr-none p-3.5 shadow-md">
            <p className="text-[11.5px] text-white leading-relaxed">No recognition. I&apos;ve activated my outer sentinel cams to track pathing.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#E9ECEF] shrink-0 border border-gray-100 flex items-center justify-center text-xs"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function CasesScreen() {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]" 
    >
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-[0.2em] text-center">Submit a Concern</h1>
      </div>
      <div className={`flex-1 overflow-y-auto p-6 ${noScroll}`}>
        <motion.h2 variants={itemVariants} className="text-[24px] font-black text-[#1A1A2E] leading-tight mb-4">Report an Incident</motion.h2>
        <motion.p variants={itemVariants} className="text-[12px] text-gray-500 mb-8">All reports are encrypted and strictly anonymous by default.</motion.p>
        <div className="space-y-4">
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <span className="text-[10px] font-black text-gray-300 uppercase block mb-1">Category</span>
            <span className="text-[14px] font-bold text-[#1A1A2E]">Suspicious Activity</span>
          </motion.div>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1A1A2E] text-white rounded-2xl py-4 font-black uppercase tracking-widest text-[12px] mt-4 shadow-xl"
          >
            Submit Initial Draft
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function ProfileScreen() {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col overflow-hidden bg-[#F8F9FB]" 
    >
      <div className="bg-white/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 shrink-0">
        <h1 className="text-[20px] font-black text-[#1A1A2E] tracking-tight">Profile</h1>
      </div>
      <div className={`flex-1 overflow-y-auto p-6 flex flex-col items-center ${noScroll}`}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 rounded-full bg-[#1A1A2E] flex items-center justify-center text-white text-2xl font-black mb-4 border-2 border-white shadow-xl">DS</motion.div>
        <motion.h2 variants={itemVariants} className="text-[18px] font-black text-[#1A1A2E]">Demo Sentinel</motion.h2>
        <motion.p variants={itemVariants} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 mb-10">Johannesburg · Zone 3</motion.p>
        <motion.div variants={listVariants} className="w-full space-y-2">
          {['Emergency Contacts', 'Privacy Settings', 'Help & Security Guide'].map(opt => (
            <motion.div 
              key={opt} 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer"
            >
              <span className="text-[13px] font-bold text-[#1A1A2E]">{opt}</span>
              <ArrowRight size={14} className="text-gray-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black" 
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-full border-4 border-[#C0392B] flex items-center justify-center mb-6 animate-pulse">
           <span className="text-white text-2xl font-black">SOS</span>
        </div>
        <h2 className="text-white text-xl font-black uppercase mb-2">Emergency Signal</h2>
        <motion.p 
          key={countdown}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[#C0392B] text-[10px] font-black tracking-widest uppercase mb-10 text-center"
        >
          {countdown > 0 ? `Broadcasting in 0${countdown}s` : 'Dispatched to Mesh'}
        </motion.p>
        <button onClick={onClose} className="bg-white/10 text-white/40 text-[10px] font-black px-8 py-3 rounded-full uppercase tracking-widest border border-white/5">Hold to Cancel</button>
      </motion.div>
    </motion.div>
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
          <button 
            key={t.key} 
            onClick={() => onChange(t.key)} 
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer focus:outline-none"
          >
            <motion.div 
              animate={{ color: isActive ? '#C0392B' : '#9B9B9B', scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {t.icon(isActive)}
            </motion.div>
            <span className={`text-[7px] font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>{t.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function HavenlySolutionsApp() {
  const [screen, setScreen] = useState<AppScreen>('home')
  const [sos, setSos] = useState(false)
  
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === 'home' && <HomeScreen key="home" onSOS={() => setSos(true)} />}
        {screen === 'community' && <CommunityScreen key="community" />}
        {screen === 'chat' && <ChatScreen key="chat" />}
        {screen === 'cases' && <CasesScreen key="cases" />}
        {screen === 'profile' && <ProfileScreen key="profile" />}
      </AnimatePresence>
      <BottomNav active={screen} onChange={setScreen} />
      <AnimatePresence>
        {sos && <SOSOverlay onClose={() => setSos(false)} />}
      </AnimatePresence>
    </div>
  )
}

function IPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[234px] h-[488px] shrink-0">
      <div className="absolute inset-0 rounded-[44px] bg-[#1a1a1a] p-1 shadow-2xl border border-white/5">
        <div className="w-full h-full rounded-[40px] bg-black overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-between px-6 z-20">
             <span className="text-[8px] font-bold">9:41</span>
             <div className="w-16 h-5 rounded-full bg-black mx-auto mt-1" />
             <span className="text-[8px] font-bold">5G</span>
          </div>
          <div className="w-full h-full pt-8">{children}</div>
        </div>
      </div>
      <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">iPhone 15 Pro</p>
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
      <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Pixel 8 Pro</p>
    </div>
  )
}

//  Main Demo Section 
export function HavenlySolutionsDemoSection() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-3 bg-[#1A1A2E] text-white px-6 py-3 rounded-full shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest">Coming Soon</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-[#D4A017] font-bold text-xs whitespace-nowrap">24 November 2026</span>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-gray-900 text-5xl mb-5 leading-tight"
            >
              Designed for Focus.<br />Engineered for Action.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 text-base mb-10 leading-relaxed"
            >
              The Havenly Solutions platform is an intelligent safety hub built for personal security and community resilience.
            </motion.p>
            <div className="space-y-6">
              {[
                { title: 'Low-Latency Intelligence', desc: 'Alerts reach our mesh network in milliseconds.' },
                { title: 'MESH-Centric Network', desc: 'Secure communication even without cellular service.' }
              ].map((f, i) => (
                <motion.div 
                  key={f.title} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">{IC.shield()}</div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-1">{f.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, rotateY: 15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <IPhoneFrame><HavenlySolutionsApp /></IPhoneFrame>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <PixelFrame><HavenlySolutionsApp /></PixelFrame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
