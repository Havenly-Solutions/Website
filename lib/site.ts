export const SITE = {
  name: 'Havenly Solutions',
  legalName: 'Havenly Solutions (Pty) Ltd',
  description: 'South Africa’s First Civic Technology Software Company',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.havenly.solutions').replace(/\/$/, ''),
  email: 'info@havenly.solutions',
  reportEmail: 'report@havenly.solutions',
  phone: '060 444 9364',
  phoneHref: 'tel:+27604449364',
  locality: 'Johannesburg',
  region: 'Gauteng',
  country: 'South Africa',
  launchIso: '2026-10-13T00:00:00+02:00',
  launchLabel: '13 October 2026',
  tagline: 'Your Haven. Your Community. Always On',
  creditName: 'The Black Sheep Tech Corp',
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
  { href: '/pre-register', label: 'Register' },
] as const;
