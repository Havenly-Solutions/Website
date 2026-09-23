export const SITE = {
  name: 'Havenly Solutions',
  legalName: 'Havenly Solutions (Pty) Ltd',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.havenly.solutions').replace(/\/$/, ''),
  email: 'info@havenly.solutions',
  reportEmail: 'report@havenly.solutions',
  phone: '070 368 7327',
  phoneHref: 'tel:+27703687327',
  locality: 'Johannesburg',
  region: 'Gauteng',
  country: 'South Africa',
  launchIso: '2026-10-13T20:30:00+02:00',
  launchLabel: '13 October 2026 • 20:30 SAST',
  tagline: 'Connected safety. Trusted communication. Stronger communities.',
  creditName: 'Theblacksheeptechcorp.com',
  creditUrl: 'https://theblacksheeptechcorp.com',
} as const;

export const LAUNCH_MS = new Date(SITE.launchIso).getTime();

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/features', label: 'Features' },
  { href: '/communities', label: 'For Communities' },
  { href: '/safe-hub', label: 'Safe Hub' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
