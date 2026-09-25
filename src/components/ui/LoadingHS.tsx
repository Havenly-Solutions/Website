'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function LoadingHS() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-4 px-4" aria-live="polite" aria-label="Loading Havenly Solutions">
          <span className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
            Havenly
          </span>
          <span className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
            Solutions
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      <motion.div
        className="flex items-center gap-4 px-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.8, 0.1, 0.9, 0.2, 1, 1, 0.4, 1, 1, 0, 0],
          x: [0, -2, 2, -1, 0, 0, 1, -1, 0, 0, 0],
          y: [0, 1, -1, 2, 0, 0, -1, 1, 0, 0, 0],
          skewX: [0, 10, -10, 5, 0, 0, -5, 5, 0, 0, 0]
        }}
        transition={{
          duration: 3.3,
          repeat: Infinity,
          times: [
            0.04,
            0.05,
            0.07,
            0.09,
            0.13,
            0.70,
            0.74,
            0.75,
            0.87,
            0.97,
            1
          ],
          ease: "linear"
        }}
        aria-live="polite"
        aria-label="Loading Havenly Solutions"
      >
        <span className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
          Havenly
        </span>
        <span className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
          Solutions
        </span>
      </motion.div>
    </div>
  )
}
