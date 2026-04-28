'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import { Shield, Mail, Phone, MapPin, Loader2, CheckCircle, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';
      const res = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Subscription failed');
      
      setSuccess(true);
      setEmail('');
      setFirstName('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-[#e0e1dd] text-black border-t border-black/50 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Havenly Solutions Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
              </Link>
              <span className="font-display font-bold text-lg tracking-tight">HAVENLY SOLUTIONS</span>
            </div>

            <p className="text-black/60 text-sm leading-relaxed max-w-sm mb-4">
              <strong>Havenly Solutions technology that never sleeps.</strong> Pioneering safety tech for South African communities.
            </p>

            <div className="space-y-2 text-sm mb-5">
              <div className="flex items-center gap-3 text-black/50">
                <Phone size={16} />
                <a href="tel:+27703687327" className="hover:text-black transition-colors">+27 (0)70 368 7327</a>
              </div>
              <div className="flex items-center gap-3 text-black/50">
                <Mail size={16} />
                <a href="mailto:info@havenly.solutions" className="hover:text-black transition-colors">info@havenly.solutions</a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <div className="text-black/50 text-xs uppercase tracking-widest font-semibold mb-4">Platform</div>
            <div className="space-y-3">
              {[
                ['Features', '/features'],
                ['Partners', '/partners'],
                ['Resources', '/resources'],
                ['Safety Hub', '/safety-hub']
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block text-black/50 hover:text-black text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Support Links */}
          <div>
            <div className="text-black/50 text-xs uppercase tracking-widest font-semibold mb-4">Legal & Support</div>
            <div className="space-y-3">
              {[
                ['Privacy Policy', '/privacy-policy'],
                ['Terms of Service', '/terms-of-service'],
                ['Contact Support', '/contact'],
                ['Emergency Protocol', '/emergency-protocol']
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`block text-sm transition-colors ${label === 'Emergency Protocol'
                    ? 'text-[#C0392B] hover:text-red-600 font-semibold'
                    : 'text-black/50 hover:text-black'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-black/5">
            <div className="text-black/50 text-xs uppercase tracking-widest font-semibold mb-4">Stay Protected</div>
            <p className="text-[11px] text-black/60 mb-4 leading-relaxed">
              Get protocol updates and safety briefings directly from our command centre.
            </p>
            
            {success ? (
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <CheckCircle size={32} className="text-[#0B6E4F] mb-2" />
                <p className="text-sm font-bold text-[#1A1A2E]">You&apos;re Subscribed!</p>
                <p className="text-[10px] text-gray-500 mt-1">Check your inbox for a welcome message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#C0392B] transition-colors"
                />
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#C0392B] transition-colors pr-10"
                  />
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="absolute right-1 top-1 bottom-1 px-2 bg-[#1A1A2E] text-white rounded-md hover:bg-black transition-colors disabled:opacity-50"
                  >
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  </button>
                </div>
                {error && <p className="text-[#C0392B] text-[10px]">{error}</p>}
                <p className="text-[9px] text-black/30">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-black/40 text-xs">
              © {currentYear} Havenly Solutions · <span className="text-black font-semibold">Your Haven. Your Community.</span> <span className="text-red-600 font-bold">Always On.</span>
            </p>
            <p className="text-black/40 text-xs">
              A product of <a href="https://theblacksheeptechcorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-black underline decoration-red-500/30">The Black Sheep Tech Corp</a>
            </p>
          </div>

          <p className="text-black/30 text-xs mt-4 text-center">
            Havenly Solutions is committed to safeguarding South African communities. For emergencies, always contact emergency services directly: <strong>10177</strong> (SAPS) or <strong>112</strong> (Ambulance).
          </p>
        </div>
      </div>
    </footer>
  )
}
