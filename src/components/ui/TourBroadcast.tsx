'use client';
import { useState, useEffect } from 'react';
import { Megaphone, X, ArrowRight, Loader2, CheckCircle, MapPin, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import * as Sentry from '@sentry/nextjs';
import { toast } from 'sonner';

export default function TourBroadcast() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    venueType: 'School',
    location: '',
    _honeypot: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  // TODO: Verify backend checks the Origin header on this endpoint.
  // If not, implement a CSRF token flow before go-live.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honeypot) return; // Bot detected
    if (cooldown > 0) {
      toast.error(`Please wait ${cooldown}s before submitting again`);
      return;
    }

    if (!form.name || !form.email || !form.location) {
      toast.error('All fields are required.');
      return;
    }

    setLoading(true);

    try {
      const sanitizedData = {
        name: DOMPurify.sanitize(form.name),
        email: DOMPurify.sanitize(form.email),
        venueType: DOMPurify.sanitize(form.venueType),
        location: DOMPurify.sanitize(form.location),
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions';
      
      const res = await fetch(`${apiUrl}/api/tour-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });

      if (res.status === 201) {
        setSuccess(true);
        setCooldown(60);
        toast.success('Tour request submitted! We will be in touch.');
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (res.status === 409) {
        toast.error('You are already on the tour list.');
      } else {
        throw new Error(data.message || `API error: ${res.status}`);
      }
    } catch (err: any) {
      Sentry.captureException(err);
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[340px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {success ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">Spot Secured!</h3>
                <p className="text-gray-500 text-sm">Thank you! We&apos;ve noted your request for the July National Tour. We&apos;ll be in touch soon.</p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-6 text-sm font-bold text-[#C0392B] uppercase tracking-widest"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-black text-[#1A1A2E] text-lg tracking-tight leading-tight">
                      JULY NATIONAL TOUR 🇿🇦
                    </h3>
                    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mt-1">
                      Request a Visit
                    </p>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-600 transition-colors">
                    <X size={18} />
                  </button>
                </div>
                
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Join the movement. Request a stop at your venue during our nationwide tour this July.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="text" name="_honeypot" className="hidden" title="Do not fill this field" tabIndex={-1} autoComplete="off" onChange={e => setForm(f => ({ ...f, _honeypot: e.target.value }))} />
                  
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm(f => ({...f, name: e.target.value}))}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
                  />

                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm(f => ({...f, email: e.target.value}))}
                    placeholder="Email Address"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
                  />

                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <select
                      value={form.venueType}
                      onChange={(e) => setForm(f => ({...f, venueType: e.target.value}))}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#C0392B] appearance-none"
                    >
                      <option value="School">School</option>
                      <option value="College">College / University</option>
                      <option value="Community">Community Centre</option>
                      <option value="Business">Business / Office</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text" 
                      required
                      value={form.location}
                      onChange={(e) => setForm(f => ({...f, location: e.target.value}))}
                      placeholder="Venue Location / City"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#C0392B] transition-colors"
                    />
                  </div>
                  
                  <button 
                    disabled={loading || cooldown > 0}
                    className="w-full bg-[#C0392B] hover:bg-[#a93226] text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : cooldown > 0 ? `Wait ${cooldown}s` : <>Request Visit <ArrowRight size={16} /></>}
                  </button>
                </form>
                <p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-[0.1em]">
                  July 2026 Nationwide Tour
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-[#1A1A2E] rotate-90' : 'bg-white'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <div className="relative">
            <Megaphone className="text-[#C0392B]" size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
