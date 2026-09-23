import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { CookieSettingsButton } from './CookieSettingsButton';

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div>
          <Link className="brand" href="/" aria-label="Havenly Solutions home">
            <Image src="/images/brand/logo.png" alt="" width={26} height={30} />
            <span>Havenly Solutions</span>
          </Link>
          <p className="tagline">{SITE.tagline}</p>
          <p className="about">Planned Launch: {SITE.launchLabel}</p>
          <div className="contact-list" style={{ color: 'var(--on-dark-2)' }}>
            <a href={`mailto:${SITE.email}`} style={{ color: '#fff' }}>{SITE.email}</a>
            <a href={SITE.phoneHref} style={{ color: '#fff' }}>{SITE.phone}</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/communities">For Communities</Link></li>
            <li><Link href="/safe-hub">Safe Hub</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pre-register">Pre-Register</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/eula">End User Licence Agreement</Link></li>
            <li><Link href="/acceptable-use-policy">Acceptable Use Policy</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><CookieSettingsButton className="linklike" /></li>
          </ul>
        </div>
      </div>
      <div className="foot-legal">
        <span>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
        <span>Havenly Solutions does not replace emergency services.</span>
      </div>
      <a className="made" href={SITE.creditUrl} target="_blank" rel="noopener noreferrer">
        <Image src="/images/brand/black-sheep-white.png" alt="The Black Sheep Tech Corp logo" width={28} height={21} style={{ height: 21, width: 'auto', objectFit: 'contain' }} />
        <span>Created by <b>{SITE.creditName}</b></span>
      </a>
    </footer>
  );
}
