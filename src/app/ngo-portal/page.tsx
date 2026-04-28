import type { Metadata } from 'next'
import Link from 'next/link'
import PartnerApplicationForm from '@/components/ui/PartnerApplicationForm'
import { Shield, Users, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'NGO Portal — Havenly Solutions',
  description: 'Join the Havenly Solutions NGO partner network. Apply to become a verified Havenly Solutions community safety partner.',
}

export default function NGOPortalPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C0392B]/10 text-[#C0392B] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={16} />
            <span>Gold Tier Partner Network</span>
          </div>
          <h1 className="font-display font-black text-[#1A1A2E] text-5xl mb-4">
            Join the Havenly Solutions NGO Network
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us to protect communities across South Africa. 
            Together, we&apos;re building a safer future through technology and collaboration.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: 'Real-time Incident Access',
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
              title: 'Priority Support',
              desc: 'Direct line to our team for urgent partner assistance.'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="w-12 h-12 bg-[#0B6E4F]/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-[#0B6E4F]" />
              </div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h2 className="font-display font-bold text-[#1A1A2E] text-2xl mb-2">Apply Now</h2>
            <p className="text-gray-600 mb-8">
              Complete the form below to begin your partnership journey. 
              Our team will review your application and be in touch within 48 hours.
            </p>
            <PartnerApplicationForm />
          </div>
        </div>

        {/* Existing Partners */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Already a partner?{' '}
            <Link href="/dashboard" className="text-[#C0392B] hover:underline font-medium">
              Log in to your portal →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}