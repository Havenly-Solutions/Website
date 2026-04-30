'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const dismiss = () => {
      setIsFading(true)
      setTimeout(() => setIsVisible(false), 800) // Match transition duration
    }

    // Short fail-safe for slow internet
    const forceTimer = setTimeout(dismiss, 1500)

    const handleLoad = () => {
      // Dismiss immediately when ready
      dismiss()
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(forceTimer)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      id="havenly-loading-screen"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F9F9F9] transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
        <div className="relative group">
          <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-1000 animate-pulse" />
          <Image
            src="/favicon.ico"
            alt="Havenly Shield"
            width={120}
            height={120}
            className="relative z-10 drop-shadow-[0_0_15px_rgba(192,57,43,0.3)]"
            priority
          />
        </div>
        
        {/* Minimal Progress Line */}
        <div className="mt-8 w-32 h-[1px] bg-black/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#C0392B] animate-shimmer" />
        </div>

      <style jsx global>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.05); }
          30% { transform: scale(1); }
          45% { transform: scale(1.08); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }

        @keyframes heartbeat-outer {
          0% { transform: scale(1.2); opacity: 0; }
          10% { transform: scale(1.2); opacity: 0.1; }
          45% { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes heartbeat-inner {
          0% { transform: scale(1.1); opacity: 0; }
          10% { transform: scale(1.1); opacity: 0.2; }
          45% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.1); opacity: 0; }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-heartbeat-outer {
          animation: heartbeat-outer 1.5s ease-out infinite;
        }

        .animate-heartbeat-inner {
          animation: heartbeat-inner 1.5s ease-out infinite;
        }
      `}</style>
    </div>
  )
}

