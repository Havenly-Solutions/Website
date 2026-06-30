'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  duration?: number
}

export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  className = '', 
  y = 40,
  duration = 0.8
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  )
}
