import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import { Toaster } from 'sonner'
import SmoothScroll from '@/components/SmoothScroll'
import GlobalLoader from '@/components/GlobalLoader'
import { Suspense } from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://havenly.solutions'),
  title: {
    default: 'Havenly Solutions — Your Haven. Your Community. Always On.',
    template: '%s | Havenly Solutions'
  },
  description: 'South Africa\'s first GBV response platform. Professional personal safety, community protection, and legal evidence chain — built for the South African reality.',
  keywords: ['safety app', 'South Africa', 'community safety', 'SOS', 'emergency', 'NGO', 'POPIA', 'Havenly Solutions', 'Sandton Security', 'Guardian Node'],
  authors: [{ name: 'The Black Sheep Tech Corp' }],
  creator: 'The Black Sheep Tech Corp',
  publisher: 'The Black Sheep Tech Corp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Havenly Solutions — Your Haven. Your Community. Always On.',
    description: 'South Africa\'s first GBV response platform. Join the pre registration for the elite safety tier.',
    url: 'https://havenly.solutions',
    siteName: 'Havenly Solutions',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Havenly Solutions',
    description: 'Professional personal safety and community protection for South Africa.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-nixtio-gradient text-white system-font-stack`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Havenly Solutions',
              url: 'https://havenly.solutions',
              logo: 'https://havenly.solutions/favicon.ico',
              description: 'South Africa\'s first GBV response platform and community safety mesh network.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Johannesburg',
                addressRegion: 'Sandton',
                postalCode: '2196',
                addressCountry: 'ZA'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+27703687327',
                contactType: 'customer service',
                email: 'info@havenly.solutions'
              }
            })
          }}
        />
        <Suspense fallback={null}>
          <GlobalLoader>
            <Navbar />
            <CookieBanner />
            <Toaster position="top-center" richColors />
            <SmoothScroll>
              <main>{children}</main>
            </SmoothScroll>
            <Footer />
          </GlobalLoader>
        </Suspense>
      </body>
    </html>
  )
}
