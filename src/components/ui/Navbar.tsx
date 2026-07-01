'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from "next/image"

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/partners', label: 'Partners' },
  { href: '/resources', label: 'Resources' },
  { href: '/safety-hub', label: 'Safety Hub' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full border ${
        scrolled 
          ? 'bg-[#0a0a0a]/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-2 px-4 w-[95%] max-w-6xl'
          : 'bg-[#0a0a0a]/30 backdrop-blur-md border-transparent py-4 px-6 w-full max-w-7xl'
      }`}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-250 h-25 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Havenly Solutions Shield"
              width={52}
              height={52}
              className="relative z-10 transition-transform group-hover:scale-110 duration-500"
            />
          </div>
          <span className="font-extrabold text-white text-sm md:text-base tracking-tight hidden sm:block uppercase transition-colors group-hover:text-nixtio-primary">
            Havenly Solutions
          </span>
        </Link>

        {/* Desktop Links - Pill Container */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname.startsWith(href)
            return (
              <Link 
                key={href} 
                href={href}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? 'bg-nixtio-primary text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Get Help CTA */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/#register" 
            className="px-6 py-2.5 bg-white text-black text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Help Now
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 bg-[#0a0a0a]/95 border border-white/10 p-6 space-y-4 shadow-2xl rounded-3xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname.startsWith(href)
              return (
                <Link 
                  key={href} 
                  href={href} 
                  onClick={() => setOpen(false)} 
                  className={`px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive 
                      ? 'bg-nixtio-primary text-white' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <div className="pt-4 border-t border-white/10">
            <Link 
              href="/#register" 
              onClick={() => setOpen(false)}
              className="block w-full py-4 text-center text-xs font-extrabold uppercase tracking-widest bg-white text-black rounded-2xl hover:bg-gray-200 transition-all"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
