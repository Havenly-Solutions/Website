import type { Metadata } from 'next'
import PartnerApplicationForm from '@/components/ui/PartnerApplicationForm'
import { Shield, Users, Globe, Heart } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'NGO Portal — Havenly Solutions',
  description: 'Join the Havenly Solutions NGO partner network. Apply to become a verified Havenly Solutions community safety partner.',
}

export default function NGOPortalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <div className="max-w-[95rem] mx-auto px-6">
        
        {/* Hero Section */}
        <RevealOnScroll className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 bg-nixtio-primary/10 border border-nixtio-primary/20 text-nixtio-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mx-auto">
            <Shield size={14} />
            <span>Gold Tier Partner Network</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Join the Havenly Solutions NGO Network
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium tracking-tight">
            Partner with us to protect communities across South Africa. 
            Together, we&apos;re building a safer future through technology and collaboration.
          </p>
        </RevealOnScroll>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              icon: Shield,
              title: 'Real time Incident Access',
              desc: 'Get instant alerts for emergencies in your operating region.'
            },
            {
              icon: Users,
              title: 'Resource Sharing',
              desc: 'Connect with other verified partners for mutual support.'
            },
            {
              icon: Globe,
              title: 'Verified Partner Badge',
              desc: 'Display your verified status on your organisation website.'
            },
            {
              icon: Heart,
              title: 'Rapid Support',
              desc: 'Direct line to our team for urgent partner assistance.'
            }
          ].map((benefit, idx) => (
            <RevealOnScroll key={idx} delay={0.1 * idx} className="glass-panel border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-nixtio-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon size={24} className="text-white/80" />
                </div>
                <h3 className="font-bold text-white text-2xl mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{benefit.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Application Form */}
        <RevealOnScroll className="max-w-4xl mx-auto mb-16">
          <div className="glass-panel border-white/10 rounded-[2rem] p-8 md:p-16">
            <h2 className="font-extrabold text-white text-4xl mb-4 tracking-tight">Apply Now</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Complete the form below to begin your partnership journey. 
              Our team will review your application and be in touch within 48 hours.
            </p>
            <PartnerApplicationForm />
          </div>
        </RevealOnScroll>

        {/* Existing Partners */}
        <RevealOnScroll className="text-center mt-16">
          <p className="text-white/60 text-lg">
            Already a partner?{' '}
            <a href="https://dashboard.havenly.solutions" className="text-white hover:text-nixtio-primary font-bold underline transition-colors">
              Log in to your portal →
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </div>
  )
}