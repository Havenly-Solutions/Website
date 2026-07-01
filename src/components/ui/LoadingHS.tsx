'use client'

import { motion } from 'framer-motion'

export default function LoadingHS() {
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
            0.04,  // 130ms
            0.05,  // 160ms (130+30)
            0.07,  // 220ms (160+60)
            0.09,  // 280ms (220+60)
            0.13,  // 410ms (280+130)
            0.70,  // 2310ms (410+1900)
            0.74,  // 2440ms (2310+130)
            0.75,  // 2470ms (2440+30)
            0.87,  // 2870ms (2470+400)
            0.97,  // 3190ms (2870+320)
            1      // 3290ms (3190+100)
          ],
          ease: "linear"
        }}
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
