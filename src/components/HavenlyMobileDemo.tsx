'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

//  App Types & Shared Styles 
export type AppScreen = 'splash'

//  Icons 
const IC = {
  shield: (size = 120) => (
    <div className="relative" style={{ width: size, height: size }}>
       <Image
        src="/logo.png"
        alt="Havenly Solutions Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  ),
}

//  Animation Variants 
const screenVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

//  Mobile Screens 
function SplashScreen() {
  return (
    <motion.div 
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#FDFCFB] px-6 text-center"
    >
      <div className="mb-8">
        {IC.shield(140)}
      </div>

      <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2 tracking-tight">
        Havenly Solutions
      </h1>

      <p className="text-sm text-gray-500 font-medium tracking-wide mb-32">
        Your Haven. Your Community. Always On.
      </p>

      <button className="w-full max-w-[200px] bg-black text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 font-bold text-sm hover:bg-gray-900 transition-colors">
        Get Started
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </motion.div>
  )
}

export function HavenlySolutionsApp() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <SplashScreen />
    </div>
  )
}

function IPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[260px] h-[560px] shrink-0">
      {/* Side buttons */}
      <div className="absolute left-[-3px] top-[100px] w-[3px] h-[24px] bg-[#2c2c2e] rounded-sm z-0" />
      <div className="absolute left-[-3px] top-[140px] w-[3px] h-[44px] bg-[#2c2c2e] rounded-sm z-0" />
      <div className="absolute left-[-3px] top-[194px] w-[3px] h-[44px] bg-[#2c2c2e] rounded-sm z-0" />
      <div className="absolute right-[-3px] top-[160px] w-[3px] h-[70px] bg-[#2c2c2e] rounded-sm z-0" />

      <div className="absolute inset-0 rounded-[54px] bg-[#000] p-[8px] shadow-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8e8e93] via-[#48484a] to-[#1c1c1e] pointer-events-none" />
        <div className="relative w-full h-full rounded-[46px] bg-black overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-black rounded-[20px] z-[100] flex items-center justify-end px-[12px]">
             <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] shadow-inner" />
          </div>
          {/* Status Bar */}
          <div className="absolute top-[18px] left-0 right-0 flex justify-between px-8 z-[90] pointer-events-none">
            <span className="text-[10px] font-bold text-black">9:41</span>
            <div className="flex gap-1 items-center">
              <svg width="12" height="10" viewBox="0 0 24 24" fill="black"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
              <svg width="12" height="10" viewBox="0 0 24 24" fill="black"><path d="M2 22h20V2z"/></svg>
              <svg width="14" height="10" viewBox="0 0 24 24" fill="black"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
            </div>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-gray-500 uppercase tracking-widest whitespace-nowrap">iPhone 15 Pro</p>
    </div>
  )
}

function PixelFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[250px] h-[540px] shrink-0">
      {/* Side buttons */}
      <div className="absolute right-[-3px] top-[160px] w-[3px] h-[60px] bg-[#2c2c2e] rounded-sm z-0" />
      <div className="absolute right-[-3px] top-[230px] w-[3px] h-[40px] bg-[#2c2c2e] rounded-sm z-0" />

      <div className="absolute inset-0 rounded-[40px] bg-[#111] p-[6px] shadow-2xl overflow-hidden border border-white/5">
        <div className="relative w-full h-full rounded-[34px] bg-black overflow-hidden">
          {/* Hole Punch Camera */}
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-black rounded-full z-[100] border border-white/5 shadow-inner" />
          {/* Status Bar */}
          <div className="absolute top-[18px] left-0 right-0 flex justify-between px-8 z-[90] pointer-events-none">
            <span className="text-[10px] font-bold text-black">9:41</span>
            <div className="flex gap-1 items-center">
              <svg width="12" height="10" viewBox="0 0 24 24" fill="black"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
              <svg width="12" height="10" viewBox="0 0 24 24" fill="black"><path d="M2 22h20V2z"/></svg>
              <svg width="14" height="10" viewBox="0 0 24 24" fill="black"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
            </div>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-gray-500 uppercase tracking-widest whitespace-nowrap">Pixel 8 Pro</p>
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
            <span className="text-[#D4A017] font-bold text-xs whitespace-nowrap">13 October 2026</span>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-gray-900 text-5xl mb-5 leading-tight"
            >
              The App.<br />Simplified for Action.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 text-base mb-10 leading-relaxed"
            >
              In a crisis, muscle memory is everything. We&apos;ve removed the noise to give you the most direct path to safety.
            </motion.p>
            <div className="space-y-6">
              {[
                { title: 'Immediate Activation', desc: 'One gesture protocol for emergency dispatch.' },
                { title: 'Offline Architecture', desc: 'Works without data or cellular service via Mesh protocols.' }
              ].map((f, i) => (
                <motion.div 
                  key={f.title} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-1">{f.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex items-center justify-center gap-8 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <IPhoneFrame><HavenlySolutionsApp /></IPhoneFrame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
