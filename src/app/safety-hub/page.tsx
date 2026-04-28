import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Zap, AlertTriangle, Users, Home, ChevronRight, ArrowRight, MapPin, Radio, Heart, BookOpen, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Safety Hub — South African Emergency Guide',
  description: 'Essential South African emergency contacts, load-shedding preparedness, neighbourhood watch integration, and GBV helplines. Always on — even offline.',
}

const EMERGENCY_CONTACTS = [
  { service: 'SAPS Emergency', number: '10111', desc: 'Police emergency line — available 24/7 nationally', color: 'bg-[#C0392B]', critical: true },
  { service: 'ER24', number: '084 124', desc: 'Private emergency medical services and trauma response', color: 'bg-[#4c2a85]', critical: false },
  { service: 'Netcare 911', number: '082 911', desc: 'Medical emergencies, ambulance dispatch, trauma care', color: 'bg-[#4c2a85]', critical: false },
  { service: 'GBV Helpline', number: '0800 428 428', desc: 'Gender-Based Violence Command Centre — free, 24/7, confidential', color: 'bg-[#0B6E4F]', critical: false },
  { service: 'Childline SA', number: '116', desc: 'Child abuse, crisis counselling, and referral services', color: 'bg-[#4c2a85]', critical: false },
  { service: 'Suicide Crisis Line', number: '0800 567 567', desc: 'SADAG 24-hour mental health crisis support line', color: 'bg-[#4c2a85]', critical: false },
  { service: 'Fire & Rescue', number: '10177', desc: 'Municipal fire, rescue, and disaster management', color: 'bg-[#4c2a85]', critical: false },
  { service: 'National Sea Rescue', number: '082 990 5911', desc: 'Maritime search and rescue — coastal emergencies', color: 'bg-[#4c2a85]', critical: false },
]

const LOADSHEDDING_CHECKLIST = [
  { category: 'Perimeter Security', items: ['Test battery backup on electric fence during power', 'Confirm gate motor has manual override and you know how to use it', 'Ensure all exterior lights are on UPS or solar backup', 'Check that CCTV system has at least 4 hours battery runtime'] },
  { category: 'Alarm System', items: ['Verify alarm system switches to battery automatically', 'Test panic buttons work during load-shedding', 'Confirm armed response has your current contact numbers', 'Ensure backup SIM in alarm communicator has airtime'] },
  { category: 'Communication', items: ['Keep a fully charged powerbank dedicated to emergencies', 'Download Havenly Solutions before the next outage — works offline', 'Have your emergency contacts saved to SMS-accessible contacts', 'Know your SAPS station number for your area (not just 10111)'] },
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
    title: 'Load-Shedding Stage 6 Protocol',
    badge: 'CRITICAL',
    badgeColor: 'bg-[#4c2a85]/10 text-[#4c2a85] border-[#4c2a85]/20',
    desc: 'Extended Stage 6 and beyond creates prolonged security vulnerabilities. Criminals plan around outage schedules. Here\'s how to maintain a secure perimeter across a 4-hour outage window.',
    tips: ['Electric fences need 6+ hour battery backup minimum at Stage 6', 'Solar gate motors outperform battery-only during consecutive outage days', 'Inform your armed response company of extended outage windows', 'Candles and open flames increase accidental fire risk — use LED torches only'],
  },
  {
    title: 'Car Hijacking Prevention',
    badge: 'HIGH RISK',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    desc: 'South Africa averages over 40 hijackings per day. Most occur within 200m of your home. The approach and driveway moment is your highest-risk point.',
    tips: ['Arrive and depart during daylight hours where possible', 'Don\'t stop with a vehicle immediately behind you — leave exit space', 'Keep windows up and doors locked in slow traffic and at red lights', 'If followed, drive to the nearest police station — do not stop at home'],
  },
  {
    title: 'Home Invasion Response',
    badge: 'EMERGENCY',
    badgeColor: 'bg-[#C0392B]/10 text-[#C0392B] border-[#C0392B]/20',
    desc: 'If your home is being invaded, your only priority is getting your family safe. Possessions are replaceable. The following protocol keeps you out of harm\'s way.',
    tips: ['Designate a safe room in advance — ideally with a solid door, a phone, and a torch', 'Comply with demands for possessions — never escalate over property', 'Use Havenly Solutions silent SOS the moment you can — no sound, screen dims automatically', 'Do not attempt to disarm or engage — wait and witness for police statement'],
  },
  {
    title: 'GBV Safety Planning',
    badge: 'CONFIDENTIAL',
    badgeColor: 'bg-[#0B6E4F]/10 text-[#0B6E4F] border-[#0B6E4F]/20',
    desc: 'If you are in an abusive situation, safety planning can save your life. Havenly Solutions\'s silent SOS and evidence vault were built specifically for this scenario.',
    tips: ['Store the GBV Helpline (0800 428 428) under a safe name in your contacts', 'Havenly Solutions\'s evidence vault captures and legally protects media evidence automatically', 'A packed bag hidden at a trusted location can give you an immediate exit option', 'Your local SAPS can issue a Protection Order — you do not need a lawyer to apply'],
  },
]

export default function SafetyHubPage() {
  return (
    <main className="min-h-screen bg-[#adb5bd] selection:bg-red-100 selection:text-red-900 font-sans pb-0">
      {/*  HERO  */}
      <section className="relative bg-[#1A1A2E] pt-40 pb-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img src="/police.jpg" alt="Safety Hub Background" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-[#1A1A2E]/80 to-[#1A1A2E]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C0392B]/20 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-lg mb-8">
              <div className="w-2 h-2 rounded-full bg-[#0B6E4F] animate-pulse" />
              <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em]">Safety Protocol Active</span>
            </div>
            <h1 className="font-display font-black text-white leading-[0.92] mb-6 tracking-tighter">
              <span className="block text-[clamp(3.5rem,8vw,6.5rem)] text-white/90">Safety</span>
              <span className="block text-[clamp(4rem,9vw,7rem)] text-[#C0392B]">Hub.</span>
            </h1>
            <p className="text-white/60 font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              South African emergency contacts, load-shedding preparedness protocols, neighbourhood watch integration, and critical safety guides — all in one place. Always on, even offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacts" className="w-full sm:w-auto bg-[#C0392B] text-white font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-2 text-base hover:bg-[#A93226] transition-all shadow-[0_20px_40px_-10px_rgba(192,57,43,0.5)]">
                Emergency Contacts <ArrowRight size={18} />
              </a>
              <a href="#loadshedding" className="w-full sm:w-auto px-8 py-5 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl text-base hover:bg-white/10 transition-colors flex items-center justify-center text-center">
                Load-Shedding Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  EMERGENCY CONTACTS  */}
      <section id="contacts" className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.3em] font-black mb-4">South Africa</p>
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl mb-6">Emergency Contacts</h2>
            <p className="text-[#1A1A2E]/60 text-lg max-w-2xl leading-relaxed">
              Save these now. Print them. Tell your family. These numbers work from any South African mobile phone — with or without data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {EMERGENCY_CONTACTS.map(({ service, number, desc, critical }) => (
              <div key={service} className={`rounded-xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all ${critical ? 'bg-[#C0392B] text-center' : 'bg-white shadow-sm'}`}>
                <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${critical ? 'text-white/60' : 'text-gray-400'}`}>{service}</div>
                <a href={`tel:${number.replace(/\s/g, '')}`}
                  className={`font-display font-black text-3xl block mb-4 hover:opacity-80 transition-opacity ${critical ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  {number}
                </a>
                <p className={`text-sm leading-relaxed ${critical ? 'text-white/80' : 'text-gray-500 font-medium'}`}>{desc}</p>
                {critical && (
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">24/7 National</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#4c2a85] rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-display font-black text-white text-3xl mb-4">Save all contacts to your phone now.</h3>
              <p className="text-white/70 text-base leading-relaxed">These numbers work without data. They work when your Havenly Solutions app is offline. They work when everything else fails.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/#register" className="btn-shimmer text-white font-bold px-8 py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl bg-[#C0392B]">
                Get Havenly Solutions Free <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  LOAD-SHEDDING PREPAREDNESS  */}
      <section id="loadshedding" className="py-24 bg-[#dee2e6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C0392B]/10 rounded-full mb-6">
                <Zap size={14} className="text-[#C0392B]" />
                <span className="text-[#C0392B] text-[10px] uppercase tracking-[0.2em] font-black">Critical Protocol</span>
              </div>
              <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl mb-6">Load-Shedding<br />Preparedness Checklist.</h2>
              <p className="text-[#1A1A2E]/60 text-lg leading-relaxed">
                Stage 6 and beyond creates predictable security windows criminals exploit. This checklist closes every vulnerability before the lights go out.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center min-w-[200px] shadow-sm">
              <div className="font-display font-black text-[#C0392B] text-6xl mb-2">40+</div>
              <div className="text-gray-500 text-sm font-bold leading-relaxed uppercase tracking-widest">Hijackings per day<br />in South Africa</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOADSHEDDING_CHECKLIST.map(({ category, items }) => (
              <div key={category} className="bg-white rounded-xl shadow-sm p-10 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-[#C0392B] transition-colors">
                    <Shield size={20} className="text-[#4c2a85] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-black text-[#1A1A2E] text-2xl">{category}</h3>
                </div>
                <div className="space-y-5">
                  {items.map((item, idx) => (
                    <label key={idx} className="flex items-start gap-4 cursor-pointer group/item">
                      <div className="w-6 h-6 rounded bg-gray-100 flex-shrink-0 mt-0.5 group-hover/item:bg-[#C0392B]/10 transition-colors flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-sm bg-transparent group-hover/item:bg-[#C0392B] transition-colors" />
                      </div>
                      <span className="text-base text-gray-500 font-medium leading-relaxed group-hover/item:text-[#1A1A2E] transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#4c2a85] rounded-xl p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: 'Download Havenly Solutions', desc: 'Works offline. SOS sends via SMS when there\'s no data. Your safety protocol before the next outage.', cta: 'Pre-Register Free', href: '/#register' },
              { label: 'Stage 6 Guide', desc: 'Full technical guide on securing your property through extended multi-day outage windows.', cta: 'Read Guide', href: '/resources' },
              { label: 'NGO / Watch Group?', desc: 'Get the Gold Tier Protocol — community-wide coverage for your entire watch area.', cta: 'Apply for Partnership', href: '/partners' },
            ].map(({ label, desc, cta, href }) => (
              <div key={label} className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors">
                <h4 className="font-display font-black text-white text-xl mb-3">{label}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">{desc}</p>
                <Link href={href} className="inline-flex items-center gap-2 text-[#C0392B] text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
                  {cta} <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  NEIGHBOURHOOD WATCH  */}
      <section id="neighbourhood-watch" className="py-24 bg-[#adb5bd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.3em] font-black mb-4">Community Protection</p>
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl mb-6">Neighbourhood Watch<br />Integration.</h2>
            <p className="text-[#1A1A2E]/60 max-w-2xl text-lg leading-relaxed">
              How to connect your existing watch structure to the Havenly Solutions Guardian Grid — turning volunteer patrols into a data-driven, coordinated safety network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {NEIGHBOURHOOD_WATCH.map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="relative bg-[#F8F9FB] rounded-xl p-8 hover:bg-[#FDFCFB] transition-colors group">
                <div className="font-display font-black text-8xl text-gray-200 leading-[0.8] mb-6 select-none opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-[#4c2a85]/10">{step}</div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={20} className="text-[#4c2a85]" />
                </div>
                <h3 className="font-display font-black text-[#1A1A2E] text-xl mb-4">{title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#4c2a85] rounded-xl shadow-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A017]/10 rounded-lg mb-6">
                <span className="text-[#D4A017] text-[10px] uppercase tracking-widest font-black">Gold Tier</span>
              </div>
              <h3 className="font-display font-black text-white text-3xl mb-6">Already running a watch?<br />Scale it with Havenly Solutions.</h3>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Founding Partner offer: 12 months Gold Tier free in exchange for co-branding and community feedback. Limited to the first 20 watch groups nationally.
              </p>
              <Link href="/partners#apply" className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] shadow-xl text-white font-bold px-8 py-4 rounded-lg text-base w-full sm:w-auto transition-colors">
                Apply for Founding Partnership <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-xl p-8 space-y-4">
              {[
                { label: 'Community dashboard', included: true },
                { label: 'Group SOS alerts', included: true },
                { label: 'SAPS direct escalation', included: true },
                { label: 'Monthly safety reports', included: true },
                { label: 'Evidence chain access', included: true },
                { label: 'Multi-user accounts', included: true },
              ].map(({ label, included }) => (
                <div key={label} className="flex items-center gap-4 bg-white/5 rounded-lg p-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${included ? 'bg-[#0B6E4F]/20' : 'bg-gray-800'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${included ? 'bg-[#0B6E4F]' : 'bg-gray-600'}`} />
                  </div>
                  <span className={`text-base font-medium ${included ? 'text-white' : 'text-gray-500'}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  SAFETY GUIDES  */}
      <section id="guides" className="py-24 bg-[#dee2e6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#C0392B] text-[10px] uppercase tracking-[0.3em] font-black mb-4">Knowledge Library</p>
            <h2 className="font-display font-black text-[#1A1A2E] text-4xl md:text-5xl mb-6">South African Safety Guides.</h2>
            <p className="text-[#1A1A2E]/60 max-w-2xl text-lg leading-relaxed">Practical, no-nonsense protocols for real South African safety scenarios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SA_SAFETY_GUIDES.map(({ title, badge, badgeColor, desc, tips }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm p-10 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="font-display font-black text-[#1A1A2E] text-xl leading-tight">{title}</h3>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded flex-shrink-0 border bg-opacity-5 ${badgeColor}`}>{badge}</span>
                </div>
                <p className="text-gray-500 text-base font-medium leading-relaxed mb-8">{desc}</p>
                <div className="space-y-4 bg-gray-50 rounded-lg p-6">
                  {tips.map(tip => (
                    <div key={tip} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded bg-[#4c2a85] flex-shrink-0 mt-2" />
                      <span className="text-sm font-medium text-gray-600 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  GBV RESOURCES  */}
      <section className="py-16 bg-[#0B6E4F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Heart size={18} className="text-white/80" />
                <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">You are not alone</span>
              </div>
              <h2 className="font-display font-black text-white text-4xl md:text-5xl mb-6 leading-tight">GBV Helpline — Free.<br />24/7. Confidential.</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-xl mb-6 font-medium">
                The GBV Command Centre helpline connects you to trained counsellors, emergency shelters, legal assistance, and safe evacuation. No report required. You just need to call.
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Havenly Solutions's silent SOS and encrypted evidence vault were built with GBV survivors in mind. Your evidence is protected the moment you activate it — even before you're ready to report.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <a href="tel:0800428428" className="inline-block w-full sm:w-auto bg-white rounded-xl p-10 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Phone size={18} className="text-[#0B6E4F] animate-bounce" />
                  <div className="text-[#0B6E4F] text-[10px] font-black uppercase tracking-widest">Call Now</div>
                </div>
                <div className="font-display font-black text-[#1A1A2E] text-4xl mb-3 tracking-tighter">0800 428 428</div>
                <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">Free · Toll-free · 24 hours</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
