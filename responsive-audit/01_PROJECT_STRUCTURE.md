# 01 Project Structure & Technical Architecture Audit

## 1. Technical Stack Inventory
- **Framework**: Next.js 14.2.35 (App Router, Server Components + Client Components)
- **Language**: TypeScript 5.5.0
- **UI Toolkit & Styling**: Pure CSS with Custom Properties / CSS Variables (`app/globals.css`), CSS Modules / Utility classes
- **Typography Fonts**: `@fontsource-variable/inter` (Body UI), `@fontsource-variable/outfit` (Headings)
- **Image Processing**: Next.js `<Image />` component (`next/image`) with local static assets (`public/images/`)
- **Package Manager**: `npm` (v10+, `package-lock.json`)
- **Validation**: `zod` 3.23.8
- **Toasts**: `sonner` 2.0.0
- **Speed Insights**: `@vercel/speed-insights` 2.0.0
- **Sanitization**: `dompurify` 3.0.0

## 2. Directory Layout & Module Structure
```
/home/founder/Documents/Website
├── app/                        # Next.js App Router root
│   ├── about/page.tsx
│   ├── acceptable-use-policy/page.tsx
│   ├── api/                    # Serverless API routes (contact, partner-enquiry, pre-register)
│   ├── communities/page.tsx
│   ├── contact/page.tsx
│   ├── cookie-policy/page.tsx
│   ├── disclaimer/page.tsx
│   ├── error.tsx
│   ├── eula/page.tsx
│   ├── faq/page.tsx
│   ├── features/page.tsx
│   ├── globals.css             # Centralized design system & responsive rules (36KB)
│   ├── how-it-works/page.tsx
│   ├── layout.tsx              # Root HTML/Body layout wrapper
│   ├── not-found.tsx
│   ├── page.tsx                # Homepage
│   ├── partners/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── register/page.tsx
│   ├── safe-hub/page.tsx
│   └── terms/page.tsx
├── components/                 # React UI Components
│   ├── CookieConsent.tsx
│   ├── Countdown.tsx
│   ├── FeatureGrid.tsx
│   ├── HelplineDirectory.tsx
│   ├── HeroSlider.tsx
│   ├── HomeHero.tsx
│   ├── PageHero.tsx
│   ├── Photo.tsx
│   ├── SafetyStrip.tsx
│   ├── Sections.tsx           # Major page sections (13KB)
│   ├── SiteFooter.tsx
│   ├── SiteNav.tsx
│   └── forms/                  # ContactForm, PartnerEnquiryForm, RegisterForm
└── lib/                        # Core schemas, API clients, SEO, site constants
```
