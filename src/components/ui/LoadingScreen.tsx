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

    // FORCE DISMISSAL: Ensure the screen disappears after 2.5 seconds 
    const forceTimer = setTimeout(dismiss, 2500)

    const handleLoad = () => {
      setTimeout(dismiss, 400)
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F9F9F9] transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative">
        {/* Heartbeat pulse circles */}
        <div className="absolute inset-0 scale-150 opacity-20 bg-[#C0392B] rounded-full animate-heartbeat-outer" />
        <div className="absolute inset-0 scale-125 opacity-40 bg-[#C0392B] rounded-full animate-heartbeat-inner" />
        
        {/* Main Logo */}
        <div className="relative animate-heartbeat">
          <Image
            src="/Havenly_Solutions.png"
            alt="Havenly Solutions"
            width={180}
            height={60}
            priority
            className="drop-shadow-2xl"
            style={{ height: 'auto' }}
          />
        </div>
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

