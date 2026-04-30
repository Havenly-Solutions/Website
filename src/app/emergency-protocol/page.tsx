import type { Metadata } from 'next'
import { Shield, AlertCircle, Phone, Radio, Users, Clock } from 'lucide-react'

export const metadata: Metadata = { title: 'Emergency Protocol — Havenly Solutions' }

export default function EmergencyProtocolPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C0392B] bg-[#C0392B]/10 rounded-full mb-6">
          <AlertCircle size={16} className="text-[#C0392B]" />
          <span className="text-sm font-semibold text-[#C0392B]">Emergency Protocols</span>
        </div>

        <h1 className="font-display font-black text-[#1A1A2E] text-4xl mb-8">The Stoic Guardian Protocol</h1>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-12">
          <p className="text-gray-600 mb-6">
            The Stoic Guardian Protocol is the operational framework that guides all emergency response actions on the Havenly Solutions platform. This document outlines procedures, escalation paths, and communication standards for critical incidents.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-[#C0392B]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A2E]">Protocol Tiers</h2>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl border border-red-200 p-5 pl-8 relative">
                <span className="absolute left-3 top-5 text-2xl"></span>
                <h3 className="font-semibold text-[#1A1A2E] mb-1">CRITICAL (Tier 1)</h3>
                <p className="text-sm text-gray-600">Active threat to life. Immediate dispatch of all available responders. Direct contact with SAPS, emergency services.</p>
              </div>

              <div className="bg-white rounded-xl border border-amber-200 p-5 pl-8 relative">
                <span className="absolute left-3 top-5 text-2xl"></span>
                <h3 className="font-semibold text-[#1A1A2E] mb-1">WARNING (Tier 2)</h3>
                <p className="text-sm text-gray-600">Potential threat. Activate community watch and partner NGOs. Monitor development closely.</p>
              </div>

              <div className="bg-white rounded-xl border border-blue-200 p-5 pl-8 relative">
                <span className="absolute left-3 top-5 text-2xl">ℹ</span>
                <h3 className="font-semibold text-[#1A1A2E] mb-1">ADVISORY (Tier 3)</h3>
                <p className="text-sm text-gray-600">General safety information or low-risk incident. Share with relevant stakeholders.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
                <Phone size={20} className="text-[#C0392B]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A2E]">Escalation Path</h2>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#C0392B] min-w-6">1.</span>
                  <span className="text-gray-600"><strong>Incident Report</strong> — Received via SOS app or SMS</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#C0392B] min-w-6">2.</span>
                  <span className="text-gray-600"><strong>Verification</strong> — Havenly Solutions Operations Team confirms details</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#C0392B] min-w-6">3.</span>
                  <span className="text-gray-600"><strong>Dispatch</strong> — Alert sent to registered responders in area</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#C0392B] min-w-6">4.</span>
                  <span className="text-gray-600"><strong>External Coordination</strong> — SAPS, ambulance, and NGO partners if needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#C0392B] min-w-6">5.</span>
                  <span className="text-gray-600"><strong>Resolution & Logging</strong> — Incident record created with RSA signature</span>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
                <Radio size={20} className="text-[#C0392B]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A2E]">Communication Standards</h2>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-[#1A1A2E] mb-2">Tone & Language</h4>
                <p className="text-gray-600 text-sm">All communications must be clear, concise, and jargon-free. Avoid alarmism while maintaining urgency for critical incidents.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A1A2E] mb-2">Response Times</h4>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  <li>CRITICAL: Responder alert within 30 seconds</li>
                  <li>WARNING: Community notification within 2 minutes</li>
                  <li>ADVISORY: Public broadcast within 5 minutes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
                <Clock size={20} className="text-[#C0392B]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A2E]">Follow-Up & Accountability</h2>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#C0392B] font-semibold">•</span>
                  <span>Every incident generates an immutable audit log with RSA signature</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C0392B] font-semibold">•</span>
                  <span>Response times and outcomes are tracked for performance improvement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C0392B] font-semibold">•</span>
                  <span>False alarms are logged and investigated</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C0392B] font-semibold">•</span>
                  <span>Community feedback is collected within 24 hours</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
                <Users size={20} className="text-[#C0392B]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#1A1A2E]">For Responders & Partners</h2>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-gray-600 mb-4">
                If you are a registered responder, emergency service, or NGO partner, you will receive alerts in real time through:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li> <strong>SMS</strong> — For immediate critical alerts</li>
                <li> <strong>Push Notification</strong> — To mobile and web dashboard</li>
                <li> <strong>Email</strong> — For detailed incident summaries</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To register as a responder, visit the <a href="/partners" className="text-[#C0392B] hover:underline">Partner Network</a> page.
              </p>
            </div>
          </section>

          <div className="bg-[#C0392B]/5 border border-[#C0392B]/20 rounded-xl p-6 mt-12">
            <p className="text-gray-600">
              <strong>Questions?</strong> For more information about emergency protocols, contact our Operations Team at <a href="mailto:info@havenly.solutions" className="text-[#C0392B] hover:underline">info@havenly.solutions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}