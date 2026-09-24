'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAV_LINKS } from '@/lib/site';
import { Icon } from './Icon';

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="nav">
        <Link className="brand" href="/" aria-label="Havenly Solutions home" onClick={() => setOpen(false)}>
          <Image src="/images/brand/logo.png" alt="" width={26} height={30} priority />
          <span className="wm">Havenly Solutions</span>
        </Link>
        <nav className="links nav-desk-links" id="site-menu" aria-label="Main">
          {NAV_LINKS.filter((l) => l.href !== '/register').map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-r">
          <Link className="btn btn-light btn-sm nav-desk-reg" href="/register">Register</Link>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      {mounted && open
        ? createPortal(
            <div className="mobile-drawer-portal" role="dialog" aria-modal="true" aria-label="Navigation Menu">
              <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
              <div className="mobile-drawer-content">
                <div className="mobile-drawer-header">
                  <Link className="brand" href="/" aria-label="Havenly Solutions home" onClick={() => setOpen(false)}>
                    <Image src="/images/brand/logo.png" alt="" width={26} height={30} />
                    <span className="wm">Havenly Solutions</span>
                  </Link>
                  <button
                    className="burger"
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <Icon name="x" />
                  </button>
                </div>
                <nav className="mobile-drawer-links" id="mobile-drawer" aria-label="Mobile Navigation">
                  {NAV_LINKS.filter((l) => l.href !== '/register').map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      aria-current={pathname === l.href ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    className="btn btn-light nav-mobile-reg"
                    href="/register"
                    aria-current={pathname === '/register' ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    Register
                  </Link>
                </nav>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
