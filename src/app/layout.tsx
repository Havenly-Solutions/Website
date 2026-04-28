import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: { default: 'Havenly Solutions — Your Haven. Your Community. Always On.', template: '%s | Havenly Solutions' },
  description: 'South Africa\'s first Stoic Guardian protocol. Professional personal safety, community protection, and legal evidence chain — built for the South African reality.',
  keywords: ['safety app', 'South Africa', 'community safety', 'SOS', 'emergency', 'NGO', 'POPIA', 'Havenly Solutions'],
  openGraph: {
    title: 'Havenly Solutions — Your Haven. Your Community. Always On.',
    description: 'South Africa\'s first Stoic Guardian protocol. Join the pre-registration for the elite safety tier.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#F9F9F9]`}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
