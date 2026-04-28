'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, X } from 'lucide-react'
import Image from "next/image";

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
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F9F9F9] border-b border-black/5 shadow-sm mt-4 mx-4 md:mt-8 md:mx-10 lg:mt-10 lg:mx-20 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
                src="/logo.png"
                alt="logo"
                width={48}
                height={48}
                className="rounded-lg object-cover"
            />
          </div>
          <span className="font-display font-bold text-[#1A1A2E] text-lg tracking-tight">
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
            <Link href="/#register" onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-center bg-[#C0392B] text-white rounded-lg">
              Get Help Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
