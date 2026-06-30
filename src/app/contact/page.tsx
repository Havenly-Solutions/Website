'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">Let&apos;s Talk</h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Have questions about our protocols or partnership tiers? Our team is ready to assist in securing your community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C0392B] mb-1">Email Inquiry</div>
                  <a href="mailto:info@havenly.solutions" className="text-xl font-medium text-white hover:text-[#C0392B] transition-colors">info@havenly.solutions</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C0392B] mb-1">Support Line</div>
                  <a href="tel:+27703687327" className="text-xl font-medium text-white hover:text-[#C0392B] transition-colors">+27 (0)70 368 7327</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C0392B] mb-1">Headquarters</div>
                  <div className="text-xl font-medium text-white">Johannesburg, Sandton, 2010, South Africa</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
