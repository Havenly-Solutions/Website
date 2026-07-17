import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Shield, Zap, AlertTriangle, Users, Home, ChevronRight, ArrowRight, MapPin, Radio, Heart, BookOpen, Smartphone } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Safety Hub — South African Emergency Guide',
  description: 'Essential South African emergency contacts, load shedding preparedness, neighbourhood watch integration, and GBV helplines. Always on — even offline.',
}

const EMERGENCY_CONTACTS = [
  { service: 'SAPS Emergency', number: '10111', desc: 'Police emergency line — available 24/7 nationally', color: 'bg-nixtio-primary', critical: true },
  { service: 'ER24', number: '084 124', desc: 'Private emergency medical services and trauma response', color: 'bg-white/5', critical: false },
  { service: 'Netcare 911', number: '082 911', desc: 'Medical emergencies, ambulance dispatch, trauma care', color: 'bg-white/5', critical: false },
  { service: 'GBV Helpline', number: '0800 428 428', desc: 'Gender-Based Violence Command Centre — free, 24/7, confidential', color: 'bg-white/5', critical: false },
  { service: 'Childline SA', number: '116', desc: 'Child abuse, crisis counselling, and referral services', color: 'bg-white/5', critical: false },
  { service: 'Suicide Crisis Line', number: '0800 567 567', desc: 'SADAG 24 hour mental health crisis support line', color: 'bg-white/5', critical: false },
  { service: 'Fire & Rescue', number: '10177', desc: 'Municipal fire, rescue, and disaster management', color: 'bg-white/5', critical: false },
  { service: 'National Sea Rescue', number: '082 990 5911', desc: 'Maritime search and rescue — coastal emergencies', color: 'bg-white/5', critical: false },
]

const LOADSHEDDING_CHECKLIST = [
  { category: 'Perimeter Security', items: ['Test battery backup on electric fence during power', 'Confirm gate motor has manual override and you know how to use it', 'Ensure all exterior lights are on UPS or solar backup', 'Check that CCTV system has at least 4 hours battery runtime'] },
  { category: 'Alarm System', items: ['Verify alarm system switches to battery automatically', 'Test panic buttons work during load shedding', 'Confirm armed response has your current contact numbers', 'Ensure backup SIM in alarm communicator has airtime'] },
  { category: 'Communication', items: ['Keep a fully charged powerbank dedicated to emergencies', 'Download Havenly Solutions before the next outage — works offline', 'Have your emergency contacts saved to SMS accessible contacts', 'Know your SAPS station number for your area (not just 10111)'] },
  { category: 'Family Plan', items: ['Every family member knows the rally point if separated', 'Children over 8 can dial SAPS 10111 independently', 'Medical equipment with power dependency has a backup plan', 'Torch in every bedroom — battery tested monthly'] },
]

const NEIGHBOURHOOD_WATCH = [
  { step: '01', title: 'Register Your Watch', desc: 'Register your Neighbourhood Watch with your local SAPS station. This gives you direct communication with officers on the beat and access to the CPF (Community Policing Forum).', icon: Users },
  { step: '02', title: 'Connect to Havenly Solutions', desc: 'Apply for the Gold Tier Partnership. Your watch group gets a shared command dashboard, group SOS protocols, and direct escalation to SAPS Digital through the Havenly Solutions NGO Portal.', icon: Shield },
  { step: '03', title: 'Map Your Area', desc: 'Use the Havenly Solutions community feed to map incident hotspots in your area. Every verified report builds a data picture that informs where your volunteers patrol and when.', icon: MapPin },
  { step: '04', title: 'Coordinate Response', desc: 'When an SOS fires in your zone, your watch WhatsApp group is notified automatically via the Havenly Solutions mesh alert layer — before SAPS arrives, your people are already moving.', icon: Radio },
]

const SA_SAFETY_GUIDES = [
  {
    title: 'Load Shedding Stage 6 Protocol',
    badge: 'CRITICAL',
    badgeColor: 'bg-nixtio-primary/10 text-nixtio-primary border-nixtio-primary/20',
    desc: 'Extended Stage 6 and beyond creates prolonged security vulnerabilities. Criminals plan around outage schedules. Here\'s how to maintain a secure perimeter across a 4 hour outage window.',
    tips: ['Electric fences need 6+ hour battery backup minimum at Stage 6', 'Solar gate motors outperform battery only during consecutive outage days', 'Inform your armed response company of extended outage windows', 'Candles and open flames increase accidental fire risk — use LED torches only'],
  },
  {
    title: 'Car Hijacking Prevention',
    badge: 'HIGH RISK',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    desc: 'South Africa averages over 40 hijackings per day. Most occur within 200m of your home. The approach and driveway moment is your highest-risk point.',
    tips: ['Arrive and depart during daylight hours where possible', 'Don\'t stop with a vehicle immediately behind you — leave exit space', 'Keep windows up and doors locked in slow traffic and at red lights', 'If followed, drive to the nearest police station — do not stop at home'],
  },
  {
    title: 'Home Invasion Response',
    badge: 'EMERGENCY',
    badgeColor: 'bg-red-500/10 text-red-500 border-red-500/20',
    desc: 'If your home is being invaded, your only priority is getting your family safe. Possessions are replaceable. The following protocol keeps you out of harm\'s way.',
    tips: ['Designate a safe room in advance — ideally with a solid door, a phone, and a torch', 'Comply with demands for possessions — never escalate over property', 'Use Havenly Solutions silent SOS the moment you can — no sound, screen dims automatically', 'Do not attempt to disarm or engage — wait and witness for police statement'],
  },
  {
    title: 'GBV Safety Planning',
    badge: 'CONFIDENTIAL',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    desc: 'If you are in an abusive situation, safety planning can save your life. Havenly Solutions\'s silent SOS and evidence vault were built specifically for this scenario.',
    tips: ['Store the GBV Helpline (0800 428 428) under a safe name in your contacts', 'Havenly Solutions\'s evidence vault captures and legally protects media evidence automatically', 'A packed bag hidden at a trusted location can give you an immediate exit option', 'Your local SAPS can issue a Protection Order — you do not need a lawyer to apply'],
  },
]

export default function SafetyHubPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-nixtio-primary/30 selection:text-white font-sans pb-0">
      {/*  HERO  */}
      <section className="relative z-[2] flex w-full min-h-[90vh] p-1 md:p-2 lg:p-4 pb-0">
        <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-[#111] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/police.jpg" 
              alt="Safety Hub Background" 
              fill 
              className="object-cover opacity-20 mix-blend-overlay filter brightness-50 grayscale" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            <div className="absolute inset-0 bg-nixtio-gradient opacity-40 mix-blend-overlay" />
          </div>

          <div className="relative z-10 w-full max-w-[95rem] mx-auto px-6 py-24 flex flex-col items-start justify-end h-full">
            <RevealOnScroll className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-nixtio-primary/30 bg-nixtio-primary/10 backdrop-blur-md rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-nixtio-primary animate-pulse shadow-[0_0_8px_#ff6633]" />
                <span className="text-[10px] font-bold text-nixtio-primary uppercase tracking-widest">Safety Protocol Active</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Safety <br />
                <span className="text-white/40">Hub.</span>
              </h1>
              <p className="text-white/60 font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-2xl tracking-tight">
                South African emergency contacts, load shedding preparedness protocols, neighbourhood watch integration, and critical safety guides — all in one place. Always on, even offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacts" className="w-full sm:w-auto bg-white text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all text-base">
                  Emergency Contacts <ArrowRight size={18} />
                </a>
                <a href="#loadshedding" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-xl text-base hover:bg-white/10 transition-colors flex items-center justify-center">
                  Load Shedding Guide
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/*  EMERGENCY CONTACTS  */}
      <section id="contacts" className="py-32">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="mb-20">
            <p className="text-nixtio-primary text-xs uppercase tracking-widest font-bold mb-4">South Africa</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">Emergency Contacts</h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Save these now. Print them. Tell your family. These numbers work from any South African mobile phone — with or without data.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {EMERGENCY_CONTACTS.map(({ service, number, desc, critical }, idx) => (
              <RevealOnScroll key={service} delay={0.05 * idx} className={`glass-panel border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all ${critical ? 'bg-nixtio-primary/10 border-nixtio-primary/20 text-center' : 'bg-white/5'}`}>
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${critical ? 'text-nixtio-primary' : 'text-white/40'}`}>{service}</div>
                <a href={`tel:${number.replace(/\s/g, '')}`}
                  className={`font-extrabold text-4xl block mb-4 tracking-tight hover:opacity-80 transition-opacity ${critical ? 'text-white' : 'text-white'}`}>
                  {number}
                </a>
                <p className={`text-base leading-relaxed ${critical ? 'text-white/80' : 'text-white/60'}`}>{desc}</p>
                {critical && (
                  <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 bg-nixtio-primary/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-nixtio-primary animate-pulse" />
                    <span className="text-nixtio-primary text-[10px] font-bold uppercase tracking-widest">24/7 National</span>
                  </div>
                )}
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/*  LOAD SHEDDING PREPAREDNESS  */}
      <section id="loadshedding" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="flex flex-col md:flex-row items-start justify-between gap-10 mb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-nixtio-primary/10 border border-nixtio-primary/20 rounded-full mb-6">
                <Zap size={14} className="text-nixtio-primary" />
                <span className="text-nixtio-primary text-[10px] uppercase tracking-widest font-bold">Critical Protocol</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">Load Shedding<br />Preparedness Checklist.</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
                Stage 6 and beyond creates predictable security windows criminals exploit. This checklist closes every vulnerability before the lights go out.
              </p>
            </div>
            <div className="glass-panel border-white/10 rounded-3xl p-10 text-center min-w-[240px]">
              <div className="font-extrabold text-white text-7xl tracking-tighter mb-2">40+</div>
              <div className="text-white/40 text-xs font-bold leading-relaxed uppercase tracking-widest">Hijackings per day<br />in South Africa</div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOADSHEDDING_CHECKLIST.map(({ category, items }, idx) => (
              <RevealOnScroll key={category} delay={0.1 * idx} className="glass-panel border-white/10 rounded-3xl p-10 md:p-12 hover:border-white/20 transition-all group">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-nixtio-primary/10 transition-colors">
                    <Shield size={24} className="text-white/80 group-hover:text-nixtio-primary transition-colors" />
                  </div>
                  <h3 className="font-extrabold text-white text-3xl tracking-tight">{category}</h3>
                </div>
                <div className="space-y-6">
                  {items.map((item, i) => (
                    <label key={i} className="flex items-start gap-4 cursor-pointer group/item">
                      <div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex-shrink-0 mt-1 group-hover/item:border-nixtio-primary/50 transition-colors flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-sm bg-transparent group-hover/item:bg-nixtio-primary transition-colors" />
                      </div>
                      <span className="text-lg text-white/60 leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/*  NEIGHBOURHOOD WATCH  */}
      <section id="neighbourhood-watch" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="mb-20">
            <p className="text-nixtio-primary text-xs uppercase tracking-widest font-bold mb-4">Community Protection</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">Neighbourhood Watch<br />Integration.</h2>
            <p className="text-white/60 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">
              How to connect your existing watch structure to the Havenly Solutions Guardian Grid — turning volunteer patrols into a data-driven, coordinated safety network.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {NEIGHBOURHOOD_WATCH.map(({ step, title, desc, icon: Icon }, idx) => (
              <RevealOnScroll key={step} delay={0.1 * idx} className="relative glass-panel border-white/10 rounded-3xl p-10 hover:border-white/20 transition-colors group overflow-hidden">
                <div className="absolute -top-4 -right-4 font-extrabold text-9xl text-white/[0.02] leading-none select-none group-hover:text-white/[0.05] transition-colors">{step}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8">
                    <Icon size={24} className="text-white/80" />
                  </div>
                  <h3 className="font-bold text-white text-2xl tracking-tight mb-4">{title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/*  SAFETY GUIDES  */}
      <section id="guides" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[95rem] mx-auto px-6">
          <RevealOnScroll className="mb-20">
            <p className="text-nixtio-primary text-xs uppercase tracking-widest font-bold mb-4">Knowledge Library</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">South African Safety Guides.</h2>
            <p className="text-white/60 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">Practical, no-nonsense protocols for real South African safety scenarios.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SA_SAFETY_GUIDES.map(({ title, badge, badgeColor, desc, tips }, idx) => (
              <RevealOnScroll key={title} delay={0.1 * idx} className="glass-panel border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="font-bold text-white text-3xl tracking-tight leading-tight">{title}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 border ${badgeColor}`}>{badge}</span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed mb-10">{desc}</p>
                <div className="space-y-5 bg-white/5 border border-white/10 rounded-2xl p-8">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/40 flex-shrink-0 mt-2" />
                      <span className="text-base text-white/80 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/*  GBV RESOURCES  */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-nixtio-primary/10 to-transparent pointer-events-none" />
        <RevealOnScroll className="max-w-[95rem] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Heart size={20} className="text-nixtio-primary" />
                <span className="text-nixtio-primary text-[10px] font-bold uppercase tracking-widest">You are not alone</span>
              </div>
              <h2 className="font-extrabold text-white text-5xl md:text-7xl mb-8 leading-[1.1] tracking-tight">GBV Helpline — Free.<br />24/7. Confidential.</h2>
              <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-8 font-medium">
                The GBV Command Centre helpline connects you to trained counsellors, emergency shelters, legal assistance, and safe evacuation. No report required. You just need to call.
              </p>
              <p className="text-white/50 text-base leading-relaxed max-w-2xl">
                Havenly Solutions&apos;s silent SOS and encrypted evidence vault were built with GBV survivors in mind. Your evidence is protected the moment you activate it — even before you&apos;re ready to report.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <a href="tel:0800428428" className="inline-block w-full sm:w-auto glass-panel border-white/10 rounded-3xl p-12 hover:-translate-y-2 hover:border-nixtio-primary/30 transition-all group">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Phone size={24} className="text-nixtio-primary group-hover:animate-bounce" />
                  <div className="text-nixtio-primary text-xs font-bold uppercase tracking-widest">Call Now</div>
                </div>
                <div className="font-extrabold text-white text-5xl mb-4 tracking-tighter">0800 428 428</div>
                <div className="text-white/40 font-bold text-[10px] uppercase tracking-widest">Free · Toll-free · 24 hours</div>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  )
}
