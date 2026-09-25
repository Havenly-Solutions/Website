import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/outfit';
import './globals.css';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookieConsent } from '../components/CookieConsent';
import { GlobalLoader } from '../components/GlobalLoader';
import { SafetyStrip } from '../components/SafetyStrip';
import { SiteFooter } from '../components/SiteFooter';
import { AppToaster } from '../components/ui/toaster';
import { SITE } from '../lib/site';

const DESCRIPTION =
  'South Africa’s First Civic Technology Software Company. Your Haven. Your Community. Always On. Planned launch 13 October 2026. Pre-register today.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Havenly Solutions | Connected safety for the people and communities that matter', template: '%s | Havenly Solutions' },
  description: DESCRIPTION,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_ZA', url: '/', title: 'Havenly Solutions', description: DESCRIPTION },
  twitter: { card: 'summary_large_image', title: 'Havenly Solutions', description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#141416' };

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/images/brand/logo.png`,
  email: SITE.email,
  telephone: '+27604449364',
  address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: 'ZA' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>
        <GlobalLoader />
        <a className="skip" href="#main">Skip to content</a>
        <SafetyStrip />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <AppToaster />
        <SpeedInsights />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }} />
      </body>
    </html>
  );
}
