'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { Mail, Phone, Loader2, CheckCircle, Send } from 'lucide-react'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/nextjs'
import { toast } from 'sonner'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Rate Limiting Cooldown Timer
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [cooldown])

  // TODO: Verify backend checks the Origin header on this endpoint.
  // If not, implement a CSRF token flow before go-live.
  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // Bot detected
    if (cooldown > 0) { toast.error(`Please wait ${cooldown}s before submitting again`); return; }
    
    setLoading(true);
    
    try {
      const sanitizedData = {
        firstName: DOMPurify.sanitize(firstName.trim()),
        email: DOMPurify.sanitize(email.trim()),
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions';
      const res = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
      
      if (res.status === 201) {
        setSuccess(true);
        setEmail('');
        setFirstName('');
        setCooldown(30);
        toast.success('Subscription successful! Welcome to Havenly Solutions.');
        return;
      }

      const data = await res.json().catch(() => ({}));
      
      if (res.status === 409) {
        toast.error('This email is already subscribed.');
      } else if (res.status === 422) {
        const firstError = data.errors?.[0]?.message || data.message || 'Validation failed';
        toast.error(firstError);
      } else {
        throw new Error(data.message || `API error: ${res.status}`);
      }
    } catch (err: any) {
      Sentry.captureException(err);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-[#e0e1dd] text-black border-t border-black/50 rounded-t-3xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Link href="/" aria-label="Havenly Solutions Home">
                <Image
                src="/logo.png"
                alt="Havenly Solutions Shield"
                width={48}
                height={48}
                className="relative z-10 transition-transform group-hover:scale-110 duration-500"
            />
              </Link>
              <span className="font-display font-bold text-lg tracking-tight">HAVENLY SOLUTIONS</span>
            </div>

            <p className="text-black/80 text-sm leading-relaxed max-w-sm mb-4">
              <strong>Havenly Solutions technology that never sleeps.</strong> Pioneering safety tech for South African communities.
            </p>

            <div className="space-y-2 text-sm mb-5">
              <div className="flex items-center gap-3 text-black/75 hover:text-black transition-colors">
                <Phone size={16} />
                <a href="tel:+27703687327">+27 (0)70 368 7327</a>
              </div>
              <div className="flex items-center gap-3 text-black/75 hover:text-black transition-colors">
                <Mail size={16} />
                <a href="mailto:info@havenly.solutions">info@havenly.solutions</a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <div className="text-black/85 text-xs uppercase tracking-widest font-semibold mb-4 text-red-600">Platform</div>
            <div className="space-y-3">
              {[
                ['Features', '/features'],
                ['Partners', '/partners'],
                ['Resources', '/resources'],
                ['Safety Hub', '/safety-hub']
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block text-black/75 hover:text-black text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Support Links */}
          <div>
            <div className="text-black/85 text-xs uppercase tracking-widest font-semibold mb-4 text-red-600">Legal & Support</div>
            <div className="space-y-3">
              {[
                ['Privacy Policy', '/Privacypolicy'],
                ['Cookie Policy', '/cookie-policy'],
                ['Terms of Service', '/Terms'],
                ['Contact Support', '/contact'],
                ['Emergency Protocol', '/emergency-protocol']
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`block text-sm transition-colors ${label === 'Emergency Protocol'
                    ? 'text-red-600 hover:text-red-700 font-bold'
                    : 'text-black/75 hover:text-black'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-black/5">
            <div className="text-black/80 text-xs uppercase tracking-widest font-semibold mb-4 text-red-600">Stay Protected</div>
            <p className="text-[11px] text-black/80 mb-4 leading-relaxed">
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
                <input type="text" name="_honeypot" className="hidden" title="Do not fill this field" tabIndex={-1} autoComplete="off" onChange={(e) => setHoneypot(e.target.value)} />
                <input 
                  id="newsletter-first-name"
                  name="firstName"
                  type="text" 
                  placeholder="First Name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 transition-colors"
                />
                <div className="relative">
                  <input 
                    id="newsletter-email"
                    name="email"
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-black/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-red-600 transition-colors pr-10"
                  />
                  <button 
                    type="submit" 
                    disabled={loading || cooldown > 0}
                    className="absolute right-1 top-1 bottom-1 px-2 bg-[#1A1A2E] text-white rounded-md hover:bg-black transition-colors disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  </button>
                </div>
                <p className="text-[9px] text-black/75">
                  By subscribing, you agree to our <Link href="/Privacypolicy" className="underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-black/75 text-xs">
              © {currentYear} Havenly Solutions · <span className="text-black font-semibold">Your Haven. Your Community.</span> <span className="text-red-600 font-bold">Always On.</span>
            </p>
            <p className="text-black/75 text-xs text-center sm:text-right">
              A product of <a href="https://theblacksheeptechcorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-black underline decoration-red-500/30">The Black Sheep Tech Corp</a>
            </p>
          </div>

          <p className="text-black/75 text-xs mt-4 text-center">
            Havenly Solutions (Pty) Ltd is a registered security technology provider. For emergencies, contact <strong>10111</strong> (SAPS) or <strong>10177</strong> (Emergency Services).
          </p>
        </div>
      </div>
    </footer>
  )
}
