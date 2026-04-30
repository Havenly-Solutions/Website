import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://havenly.co.za'),
  title: { 
    default: 'Havenly Solutions — Your Haven. Your Community. Always On.', 
    template: '%s | Havenly Solutions' 
  },
  description: 'South Africa\'s first Stoic Guardian protocol. Professional personal safety, community protection, and legal evidence chain — built for the South African reality.',
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
    canonical: '/',
  },
  openGraph: {
    title: 'Havenly Solutions — Your Haven. Your Community. Always On.',
    description: 'South Africa\'s first Stoic Guardian protocol. Join the pre-registration for the elite safety tier.',
    url: 'https://havenly.co.za',
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#F9F9F9] system-font-stack">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
