'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/site';
import { Icon } from './Icon';

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={open ? 'nav open' : 'nav'}>
      <Link className="brand" href="/" aria-label="Havenly Solutions home">
        <Image src="/images/brand/logo.png" alt="" width={26} height={30} priority />
        <span className="wm">Havenly Solutions</span>
      </Link>
      <nav className="links" id="site-menu" aria-label="Main">
        {NAV_LINKS.filter((l) => l.href !== '/pre-register').map((l) => (
          <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="nav-r">
        <Link className="btn btn-light btn-sm" href="/pre-register">Register</Link>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </div>
    </div>
  );
}
