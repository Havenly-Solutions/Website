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
    <footer className="bg-white text-black border-t border-gray-200 mt-0 relative overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" aria-label="Havenly Solutions Home">
                <Image
                  src="/logo.png"
                  alt="Havenly Solutions Shield"
                  width={70}
                  height={70}
                  className="transition-transform hover:scale-105 duration-300"
                />
              </Link>
              <span className="font-extrabold text-2xl tracking-tight text-black uppercase">HAVENLY<br/>SOLUTIONS</span>
            </div>

            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8 font-medium">
              <strong className="text-black">Havenly Solutions technology that never sleeps.</strong> Pioneering safety tech for South African communities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-black/60 hover:text-nixtio-primary transition-colors">
                <Phone size={18} className="text-black/40" />
                <a href="tel:+27703687327" className="font-bold">+27 (70) 368 7327</a>
              </div>
              <div className="flex items-center gap-3 text-black/60 hover:text-nixtio-primary transition-colors">
                <Mail size={18} className="text-black/40" />
                <a href="mailto:info@havenly.solutions" className="font-bold">info@havenly.solutions</a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <div className="text-black text-xs uppercase tracking-widest font-extrabold mb-6">Platform</div>
            <div className="space-y-4">
              {[
                ['Features', '/features'],
                ['Partners', '/partners'],
                ['Resources', '/resources'],
                ['Safety Hub', '/safety-hub']
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block text-black/60 hover:text-nixtio-primary text-base transition-colors font-bold">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Support Links */}
          <div>
            <div className="text-black text-xs uppercase tracking-widest font-extrabold mb-6">Legal & Support</div>
            <div className="space-y-4">
              {[
                ['Privacy Policy', '/privacy-policy'],
                ['Cookie Policy', '/cookie-policy'],
                ['Terms of Service', '/terms'],
                ['Contact Support', '/contact'],
                ['Emergency Protocol', '/emergency-protocol']
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`block text-base transition-colors font-bold ${
                    label === 'Emergency Protocol'
                      ? 'text-nixtio-primary hover:text-[#ff855c]'
                      : 'text-black/60 hover:text-nixtio-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gray-100 rounded-[2rem] p-8 border border-gray-200">
            <div className="text-nixtio-primary text-xs uppercase tracking-widest font-extrabold mb-3">Stay Protected</div>
            <p className="text-sm text-black/60 mb-6 leading-relaxed font-medium">
              Get protocol updates and safety briefings directly from our command centre.
            </p>
            
            {success ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <CheckCircle size={40} className="text-green-600 mb-3" />
                <p className="text-lg font-bold text-black">You&apos;re Subscribed!</p>
                <p className="text-sm text-black/50 mt-1">Check your inbox for a welcome message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input type="text" name="_honeypot" className="hidden" title="Do not fill this field" tabIndex={-1} autoComplete="off" onChange={(e) => setHoneypot(e.target.value)} />
                <input 
                  id="newsletter-first-name"
                  name="firstName"
                  type="text" 
                  placeholder="First Name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-nixtio-primary focus:ring-1 focus:ring-nixtio-primary text-black transition-colors placeholder-black/30 shadow-sm"
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
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-nixtio-primary focus:ring-1 focus:ring-nixtio-primary text-black transition-colors pr-12 placeholder-black/30 shadow-sm"
                  />
                  <button 
                    type="submit" 
                    disabled={loading || cooldown > 0}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-black text-white rounded-lg hover:bg-nixtio-primary transition-colors disabled:opacity-50 flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </div>
                <p className="text-xs text-black/40 font-medium">
                  By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-nixtio-primary">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-black/50 text-sm font-medium">
              © {currentYear} Havenly Solutions · <span className="text-black font-bold">Your Haven. Your Community.</span> <span className="text-nixtio-primary font-bold">Always On.</span>
            </p>
            <p className="text-black/50 text-sm font-medium text-center sm:text-right">
              A product of <a href="https://theblacksheeptechcorp.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-nixtio-primary underline transition-colors font-bold">The Black Sheep Tech Corp</a>
            </p>
          </div>

          <p className="text-black/40 text-xs mt-6 text-center leading-relaxed font-medium">
            Havenly Solutions (Pty) Ltd is a registered security technology provider. For emergencies, contact <strong className="text-black">10111</strong> (SAPS) or <strong className="text-black">10177</strong> (Emergency Services).
          </p>
        </div>
      </div>
    </footer>
  )
}
