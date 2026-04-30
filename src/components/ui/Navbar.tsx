'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, X, Megaphone } from 'lucide-react'
import Image from "next/image";
import TourModal from './TourModal';

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
  const [tourOpen, setTourOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F9F9F9] border-b border-black/5 shadow-sm mt-4 mx-4 md:mt-8 md:mx-10 lg:mt-10 lg:mx-20 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <Image
                src="/favicon.ico"
                alt="Havenly Shield"
                width={48}
                height={48}
                className="relative z-10 transition-transform group-hover:scale-110 duration-500"
            />
            <div className="absolute inset-0 bg-red-500/5 rounded-full blur-lg group-hover:bg-red-500/10 transition-colors" />
          </div>
          <span className="font-display font-bold text-[#1A1A2E] text-base md:text-lg tracking-tight hidden sm:block">
            HAVENLY SOLUTIONS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith(href) ? 'text-[#C0392B]' : 'text-[#1A1A2E]/60 hover:text-[#1A1A2E]'}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => setTourOpen(true)}
            className="p-2 text-[#C0392B] hover:bg-red-50 rounded-lg transition-colors group relative z-20 cursor-pointer"
            title="July 2026 Tour"
            aria-label="July 2026 Tour Notification"
          >
            <Megaphone size={20} className="group-hover:scale-110 transition-transform" />
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
          </button>
          <Link href="/#register" className="px-4 py-2 bg-[#C0392B] text-white text-sm font-semibold rounded-lg hover:bg-[#a93226] transition-colors">
            Get Help Now
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#1A1A2E]">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A1A2E]/70 hover:bg-gray-50 transition-colors">
              {label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-gray-100 mt-2">
            <button
              onClick={() => { setTourOpen(true); setOpen(false); }}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold text-[#C0392B] bg-red-50 rounded-lg"
            >
              <Megaphone size={16} /> July 2026 Tour
            </button>
            <Link href="/#register" onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-center bg-[#C0392B] text-white rounded-lg">
              Get Help Now
            </Link>
          </div>
        </div>
      )}
      <TourModal forceOpen={tourOpen} onClose={() => setTourOpen(false)} />
    </header>
  )
}
