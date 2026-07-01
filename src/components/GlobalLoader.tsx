'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import LoadingHS from '@/components/ui/LoadingHS'
import { AnimatePresence } from 'framer-motion'

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Handle initial site entry
  useEffect(() => {
    // Show loader for at least 3 seconds to let the glitch cycle play once
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Handle page transitions
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800) // Shorter duration for internal navigation

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingHS key="loader" />}
      </AnimatePresence>
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  )
}
