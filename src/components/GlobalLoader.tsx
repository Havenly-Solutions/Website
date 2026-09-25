'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import LoadingHS from '@/components/ui/LoadingHS'
import { AnimatePresence } from 'framer-motion'

export function GlobalLoader({ children }: { children?: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [hasMounted, pathname, searchParams])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingHS key="loader" />}
      </AnimatePresence>
      <div
        className={loading ? 'pointer-events-none opacity-0' : 'opacity-100 transition-opacity duration-500'}
        aria-busy={loading}
        aria-live="polite"
        aria-hidden={loading}
      >
        {children ?? null}
      </div>
    </>
  )
}

export default GlobalLoader;
