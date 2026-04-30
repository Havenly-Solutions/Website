import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact Support — Havenly Solutions' }

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-[#1A1A2E] text-4xl mb-4">Contact Support</h1>
        <p className="text-gray-600 mb-12">We&apos;re here to help. Reach out via any channel below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#C0392B]/10 rounded-xl flex items-center justify-center mb-4">
              <Mail size={24} className="text-[#C0392B]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Email</h2>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-500 mb-1">General Inquiries</p>
                <a href="mailto:info@havenly.solutions" className="text-[#C0392B] hover:underline font-medium">info@havenly.solutions</a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#C0392B]/10 rounded-xl flex items-center justify-center mb-4">
              <Phone size={24} className="text-[#C0392B]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Phone</h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-gray-500">Main Line:</span><br />
                <a href="tel:+27703687327" className="text-[#C0392B] hover:underline font-medium">+27 (0)70 368 7327</a>
              </p>
              <p className="text-xs text-gray-500 mt-4">
                Available: Mon–Fri 08:00–17:00 SAST<br />
                Emergency: 24/7
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#C0392B]/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin size={24} className="text-[#C0392B]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Office</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Johannesburg<br />
              Gauteng, South Africa<br />
              <br />
              <span className="text-gray-500">A product of<br /></span>
              The Black Sheep Tech Corp (Pty) LTD
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="w-12 h-12 bg-[#C0392B]/10 rounded-xl flex items-center justify-center mb-4">
              <Clock size={24} className="text-[#C0392B]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Hours</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Monday – Friday: 08:00 – 17:00</p>
              <p>Saturday: 09:00 – 12:00</p>
              <p>Sunday: Closed</p>
              <p className="text-xs text-gray-500 mt-3">SAST (South African Standard Time)</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A2E] mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">What is Havenly Solutions?</h3>
              <p className="text-gray-600 text-sm">Havenly Solutions is a community safety platform that combines emergency alerting, mesh network infrastructure, and institutional partnerships to protect communities across South Africa.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">When does Havenly Solutions launch?</h3>
              <p className="text-gray-600 text-sm">Public launch is scheduled for November 24, 2026. Pre-registrations are open now.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">How do I report an emergency?</h3>
              <p className="text-gray-600 text-sm">Download the Havenly Solutions mobile app and use the SOS button. You can also SMS HAVENLY SOLUTIONS to our shortcode (available after launch).</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">Can my organisation become a partner?</h3>
              <p className="text-gray-600 text-sm">Yes! Visit our <a href="/partners" className="text-[#C0392B] hover:underline">Partners page</a> to apply for the Gold Tier network.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">Is my data safe?</h3>
              <p className="text-gray-600 text-sm">Absolutely. We use AES-256 encryption, comply with POPIA, and conduct regular security audits. See our <a href="/Privacypolicy" className="text-[#C0392B] hover:underline">Privacy Policy</a> for details.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#C0392B]/5 to-[#0B6E4F]/5 border border-[#C0392B]/20 rounded-2xl p-8 text-center">
          <h3 className="font-semibold text-[#1A1A2E] text-lg mb-3">Ready to Join?</h3>
          <p className="text-gray-600 mb-6">Pre-register now to be the first to know when Havenly Solutions launches.</p>
          <a href="/#pre-register" className="inline-block bg-[#C0392B] text-white font-semibold px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">Pre-Register Today</a>
        </div>
      </div>
    </div>
  )
}
