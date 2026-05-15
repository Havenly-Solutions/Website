'use client';
import { useState, useEffect } from 'react';
import { X, MapPin, Users, ArrowRight, GraduationCap, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Sentry from '@sentry/nextjs';

export default function TourModal({ forceOpen, onClose }: { forceOpen?: boolean; onClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({ count: 0, goal: 10000 });
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }
    // Show modal after 3 seconds or based on session storage
    const hasSeen = sessionStorage.getItem('havenly_tour_modal_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [forceOpen]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.havenly.solutions';
    fetch(`${apiUrl}/api/pre-registrations/count`, { cache: 'no-store' })
      .then(async r => {
        if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
        return await r.json();
      })
      .then(data => {
        // Robust handling for various API response structures
        const count = typeof data.count === 'number' ? data.count : data.data?.count;
        const goal = typeof data.goal === 'number' ? data.goal : data.data?.goal || 10000;

        if (typeof count === 'number') {
          setStats({ count, goal });
        }
      })
      .catch(err => {
        console.error('Stats fetch error:', err);
        Sentry.captureException(err);
      })
      .finally(() => setStatsLoading(false));
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
    sessionStorage.setItem('havenly_tour_modal_seen', 'true');
  };

  const percentage = Math.min((stats.count / stats.goal) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="tour-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            {/* Header Visual */}
            <div className="relative pt-10 pb-6 px-8 text-center bg-gray-50 border-b border-gray-100">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-300 transition-all z-20"
                aria-label="Close Tour Modal"
              >
                <X size={16} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-2 flex justify-center"
              >
                <div className="w-12 h-12 bg-[#C0392B] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                  <MapPin size={24} className="text-white" />
                </div>
              </motion.div>
              
              <motion.h2
                id="tour-modal-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-1"
              >
                Havenly Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-xs font-bold uppercase tracking-widest"
              >
                Building community tech for the moments that matter most.
              </motion.p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 bg-white">
              <div className="space-y-6">
                <p className="text-gray-700 text-[15px] leading-relaxed text-center font-medium">
                  We are traveling across South Africa for our <strong>July 2026 Tour</strong>—visiting schools, colleges, communities, and businesses—to show you our app. Join the movement and see how we are building a safer future together.
                </p>

                {/* Progress Section */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sign Up Progress</span>
                    <span className="text-[#C0392B] font-black text-xs tabular-nums">
                      {statsLoading ? 'Loading...' : `${stats.count.toLocaleString()} / ${stats.goal.toLocaleString()}`}
                    </span>
                  </div>

                  <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: statsLoading ? '0%' : `${percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#C0392B]"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium text-center">
                    {statsLoading
                      ? 'Fetching registration data...'
                      : <>Join <span className="text-gray-800 font-bold">{stats.count.toLocaleString()}</span> others who have already registered!</>
                    }
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeModal();
                    const el = document.getElementById('register');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-[#1A1A2E] hover:bg-black text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10"
                >
                  Sign Up for the Tour <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
