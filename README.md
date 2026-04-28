# HAVENLY SOLUTIONS — Marketing Website

> **The Black Sheep Tech Corp LTD (PTY)**  
> Public-facing marketing site for the Havenly Solutions mobile application.  
> Version: `1.0.0` · Live at: `havenly.co.za` · Launch: `24 November 2026`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Pages & Routes](#3-pages--routes)
4. [Components](#4-components)
5. [Environment Variables](#5-environment-variables)
6. [Local Development Setup](#6-local-development-setup)
7. [Deployment — Vercel + GitHub](#7-deployment--vercel--github)
8. [Connecting to the Backend API](#8-connecting-to-the-backend-api)
9. [Design System](#9-design-system)
10. [Folder Structure](#10-folder-structure)
11. [Build Roadmap](#11-build-roadmap)

---

## 1. Project Overview

The Havenly Solutions marketing website is the public face of the Havenly Solutions platform. It serves two audiences simultaneously:

- **Citizens** — pre-register for the app before the 24 November 2026 launch
- **Investors, NGOs, and institutional partners** — understand the product, the business strategy, and apply for partnership

The site is designed to work as the primary acquisition channel for the July 2026 national tour across all 9 provinces. Every pre-registration collected here feeds directly into the Guardian Command Centre dashboard.

---

## 2. Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR + SSG, fast page loads, built-in API routes |
| Styling | Tailwind CSS | Custom Havenly Solutions design tokens |
| Fonts | DM Sans + Space Grotesk | Via Google Fonts (next/font) |
| Icons | Lucide React | Consistent across all Havenly Solutions products |
| Countdown | Custom React hook | Updates every second, SSR-safe |
| Form | Custom PreRegForm component | Posts to backend API, handles errors |
| Hosting | Vercel | Auto-deploy from GitHub main, region jnb1 |

---

## 3. Pages & Routes

### `/` — Homepage
The primary landing and pre-registration page.

**Sections:**
- **Hero** — Display heading "Your Haven. Your Community. Always On." with animated map grid background, live countdown timer to 24 November 2026, and the pre-registration form inline
- **Ticker** — Scrolling dark banner with protocol keywords
- **Core Safety Architecture** — 6 feature cards: One-Press SOS, Offline-First Logic, Safety Network, Evidence Chain, POPIA Compliance, Unified Command
- **Designed for our reality** — Dark section with 3 pillars: Simple Safety, SA Families, Community Mesh
- **Empowering NGOs & Community Watch** — Left/right grid with live dashboard mockup
- **Testimonials** — 3 cards with star ratings from security professionals
- **The Collective Shield** — 4 social proof stats: 12,482+ guardians, 9 provinces, 142 partners, 24 Nov 2026
- **Launch CTA** — Dark section with pre-register CTA
- **Footer**

---

### `/features` — The Stoic Guardian
Detailed product feature breakdown for technically-minded visitors and investors.

**Sections:**
- **Hero** — "THE STOIC GUARDIAN." with protocol status badges and location widget mockup
- **One-Press SOS / Zero Latency** — 2-second hold mechanic, haptic protocol explainer
- **Legal Evidence Chain** — Immutable hashing, officer access portal
- **Community Mesh Network** — Offline SMS fallback, device-to-device mesh
- **POPIA Compliance by Design** — 3 privacy commitments, certification badge
- **CTA** — "Reclaim your sense of security"

---

### `/partners` — Protecting the Protectors
For NGOs, Community Watch groups, and First Responders.

**Sections:**
- **Hero** — "Protecting the Protectors." with 142 active partners live widget
- **The Gold Tier Protocol** — 4 feature cards: Multi-User Dashboards, SAPS/DSD Priority, Data-Driven Reports, Inter-Agency Cooperation
- **Pricing** — R 1,999/month with Founding Partner offer (12 months free)
- **Partner Application Form** — Posts to `/api/ngo-partners` on backend

---

### `/resources` — For the Stoic Guardian
Educational content and technical documentation.

**Sections:**
- **Hero** — "Resources for the Stoic Guardian." with animated circular badge
- **Emergency Intelligence** — Load-Shedding Preparedness featured article, Havenly Solutions App User Guide, Latest Updates feed, NGO Portal card
- **The Havenly Solutions Deployment Cycle** — 3 steps: Rapid Onboarding, Always-On Watch, Instant Response
- **Frequently Asked Protocols** — 4 FAQ accordions using native `<details>` elements (no JS required)

---

### `/privacy-policy` — Privacy Policy
Legal document covering POPIA compliance and data protection.

**Sections:**
- Information We Collect — Name, email, phone, organisation, location, device info
- How We Use Your Data — Service delivery, notifications, compliance
- Data Protection — AES-256 encryption, secure storage
- Third-Party Services — Twilio, Resend, AWS partnerships
- Your Rights (POPIA) — Data access, corrections, deletion, opt-outs
- Contact for privacy concerns

---

### `/terms-of-service` — Terms of Service
Standard terms binding users to the platform agreement.

**Sections:**
- Agreement to Terms
- Use License (what you can/cannot do)
- Disclaimer (no warranties)
- Limitations of liability
- Accuracy of materials
- Links policy
- Modifications to terms
- Governing law (South African)
- Contact for legal questions

---

### `/emergency-protocol` — The Stoic Guardian Protocol
Detailed operational emergency response procedures.

**Sections:**
- Protocol Tiers — CRITICAL (Tier 1), WARNING (Tier 2), ADVISORY (Tier 3)
- Escalation Path — 5-step incident response process
- Communication Standards — Tone, language, response times
- Follow-Up & Accountability — Audit logging, performance tracking, feedback collection
- For Responders & Partners — Alert delivery channels (SMS, push, email), registration link

---

### `/contact` — Contact Support
Central support hub with contact information and FAQs.

**Sections:**
- Email addresses (info, support, partners, legal)
- Phone line with hours
- Physical office location
- Support hours (Mon–Fri 08:00–17:00 SAST, Saturday partial, 24/7 emergency)
- FAQ — 5 common questions about Havenly Solutions, launch date, SOS reporting, partnership, data safety
- Pre-register CTA

---
South African-specific safety guide and emergency contacts reference.

**Sections:**
- **Hero** — Dark navy with emergency contact preview widget
- **Emergency Contacts** — 8 SA emergency numbers in card grid (all tap-to-call):
  - SAPS 10111
  - ER24 — 084 124
  - Netcare 911 — 082 911
  - GBV Helpline — 0800 428 428
  - Childline SA — 116
  - Suicide Crisis Line — 0800 567 567
  - Fire & Rescue — 10177
  - National Sea Rescue — 082 990 5911
- **Load-Shedding Preparedness Checklist** — 4 categories, 16 actionable checklist items:
  - Perimeter Security
  - Alarm System
  - Communication
  - Family Plan
- **Neighbourhood Watch Integration** — 4-step guide to connecting watch groups to Havenly Solutions Gold Tier
- **South African Safety Guides** — 4 guide cards:
  - Load-Shedding Stage 6 Protocol
  - Car Hijacking Prevention
  - Home Invasion Response
  - GBV Safety Planning
- **GBV Resources** — Green section, GBV Helpline prominently featured
- **Download CTA** — Pre-register prompt

---

## 4. Components

### `src/components/ui/Navbar.tsx`
Sticky navigation bar.
- Transparent on page load
- Blurs and gains border on scroll (`window.scrollY > 20`)
- Desktop: HAVENLY SOLUTIONS logo, 4 nav links, Login, Get Help Now CTA
- Mobile: hamburger menu with slide-down drawer
- Active link detection via `usePathname()`

### `src/components/ui/Footer.tsx`
Dark navy footer.
- Company branding + tagline
- Platform links (Features, Partners, Resources, Safety Hub)
- Legal links (Privacy Policy, Terms of Service, NGO Portal, Contact Support, Emergency Protocol)
- POPIA compliance badge
- Company attribution

### `src/components/ui/Countdown.tsx`
Live countdown timer to launch date.
- Reads target from `NEXT_PUBLIC_LAUNCH_DATE` env var
- Defaults to `2026-11-24T00:00:00+02:00` if not set
- Updates every second via `setInterval`
- Displays: Days / Hours / Mins / Secs
- Accepts `dark` prop for light text on dark backgrounds
- SSR-safe (initialises at 0, fills on client mount)

### `src/components/ui/PreRegForm.tsx`
Pre-registration form — the most important component on the site.
- Fields: Full Name, Email Address, Region (dropdown, 11 SA regions)
- Posts to `${NEXT_PUBLIC_DASHBOARD_API_URL}/api/pre-registrations`
- Handles `409 Conflict` (duplicate email) gracefully with friendly message
- Shows loading state during submission
- Shows success state with confirmation after signup
- Source tagged as `"website"` on all submissions (distinguishes from tour signups)
- No third-party form services — direct API call only

---

## 5. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_DASHBOARD_API_URL` | Yes | Where the pre-registration form POSTs to. In development: `http://localhost:3000`. In production: `https://api.havenly.co.za` |
| `NEXT_PUBLIC_LAUNCH_DATE` | No | ISO 8601 countdown target. Defaults to `2026-11-24T00:00:00+02:00` |
| `NEXT_PUBLIC_APP_URL` | No | The public URL of this site |

**Important:** `NEXT_PUBLIC_` variables are embedded at build time and visible in the browser. Never put secrets in `NEXT_PUBLIC_` variables.

---

## 6. Local Development Setup

### Prerequisites
- Node.js 18 LTS or higher
- The `havenly-dashboard` or `havenly-backend` running locally on port 3000 (for the pre-registration form to work)

### Steps

```bash
# 1. Clone and enter
git clone https://github.com/your-org/havenly-marketing.git
cd havenly-marketing

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env.local
# Edit .env.local:
# NEXT_PUBLIC_DASHBOARD_API_URL=http://localhost:3000

# 4. Start dev server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (or 3000 if dashboard isn't running)

### Running alongside the dashboard

```bash
# Terminal 1 — Dashboard (port 3000)
cd havenly-dashboard && npm run dev

# Terminal 2 — Marketing site (port 3001)
cd havenly-marketing && npm run dev -- -p 3001
```

---

## 7. Deployment — Vercel + GitHub

### GitHub Setup

```bash
git init
git add .
git commit -m "feat: Havenly Solutions marketing site complete"
git remote add origin https://github.com/your-org/havenly-marketing.git
git branch -M main
git push -u origin main
```

**Branch strategy:**
- `main` → auto-deploys to `havenly.co.za`
- `dev` → Vercel preview URL for staging
- `feature/*` → individual feature branches

### Vercel Setup

1. Go to [vercel.com](https://vercel.com) → Import Project → Select `havenly-marketing`
2. Add environment variables in Vercel dashboard under **Settings → Environment Variables**:
   - `NEXT_PUBLIC_DASHBOARD_API_URL` = `https://api.havenly.co.za`
   - `NEXT_PUBLIC_LAUNCH_DATE` = `2026-11-24T00:00:00+02:00`
3. Add custom domain `havenly.co.za` under **Settings → Domains**
4. Set DNS at your registrar: CNAME `www` → `cname.vercel-dns.com`, A record `@` → Vercel IP

**Region:** `jnb1` (Johannesburg) is set in `vercel.json` — lowest latency for South African users.

---

## 8. Connecting to the Backend API

The marketing site connects to the backend for exactly **two operations**:

| Form | Endpoint | Method | Auth |
|---|---|---|---|
| Pre-registration form | `/api/pre-registrations` | `POST` | None (public) |
| Partner application form | `/api/ngo-partners` | `POST` | None (public) |

Both endpoints are intentionally public — no API key required. The backend rate-limits them independently.

### Switching between environments

| Environment | `NEXT_PUBLIC_DASHBOARD_API_URL` |
|---|---|
| Local dev (using dashboard's built-in API) | `http://localhost:3000` |
| Local dev (using standalone backend) | `http://localhost:3001` |
| Production | `https://api.havenly.co.za` |

No code changes required — only the environment variable changes.

### Vercel rewrites (production)

`vercel.json` includes rewrites so API calls proxy through `havenly.co.za/api/...` in production if you prefer not to expose the backend URL directly. Remove the rewrites block if you prefer direct calls.

---

## 9. Design System

All design tokens match exactly across the marketing site, dashboard, and mobile app.

### Colours

| Token | Hex | Usage |
|---|---|---|
| Primary / Emergency | `#C0392B` | CTAs, panic button, emergency alerts, accents |
| Brand Deep | `#1A1A2E` | Headings, nav, dark sections, footer |
| Community Green | `#0B6E4F` | Success states, GBV section, free tier |
| Authority Gold | `#D4A017` | Gold tier, NGO badges, partner labels |
| Background Light | `#F9F9F9` | Page background |
| White | `#FFFFFF` | Cards, modals |

### Typography

| Role | Font | Weight | Class |
|---|---|---|---|
| Display / Headings | Space Grotesk | 900 Black | `font-display font-black` |
| Body | DM Sans | 400 Regular | `font-sans` |
| Labels / Badges | DM Sans | 700 Bold | `font-sans font-bold uppercase tracking-widest` |

### CSS Utilities (globals.css)

| Class | Effect |
|---|---|
| `.map-grid` | Light map grid background (hero sections on cream) |
| `.map-grid-dark` | Dark map grid background (hero sections on navy) |
| `.dot-grid` | Dot grid pattern (light surfaces) |
| `.dot-grid-light` | Dot grid pattern (dark surfaces) |
| `.btn-shimmer` | Animated shimmer gradient on red CTA buttons |
| `.nav-blur` | Backdrop blur for sticky navbar |

### Card Pattern
All cards follow this pattern:
```
bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow
```

### Section Spacing
All sections use `py-24` for consistent vertical rhythm.

---

## 10. Folder Structure

```
havenly-marketing/
 .env.example                      # Environment variable template
 .gitignore
 README.md                         # This file
 vercel.json                       # Vercel config (region jnb1, security headers, API rewrites)
 next.config.js
 tailwind.config.js                # Havenly Solutions design tokens
 tsconfig.json
 postcss.config.js
 package.json

 src/
     app/
        layout.tsx                # Root layout (fonts, Navbar, Footer)
        page.tsx                  # Homepage (/)
        globals.css               # Global styles + custom CSS utilities
        features/
           page.tsx              # /features — The Stoic Guardian
        partners/
           page.tsx              # /partners — Protecting the Protectors
        resources/
           page.tsx              # /resources — Knowledge Base
        safety-hub/
           page.tsx              # /safety-hub — SA Emergency Contacts + Guides
        privacy-policy/
           page.tsx              # /privacy-policy — POPIA & data protection
        terms-of-service/
           page.tsx              # /terms-of-service — Legal terms
        emergency-protocol/
           page.tsx              # /emergency-protocol — Stoic Guardian Protocol
        contact/
            page.tsx              # /contact — Support hub with FAQs
    
     components/
        ui/
            Navbar.tsx            # Sticky navigation bar
            Footer.tsx            # Site footer (with updated company info)
            Countdown.tsx         # Live countdown to 24 Nov 2026
            PreRegForm.tsx        # Pre-registration form (posts to API)
            PartnerApplicationForm.tsx  # Partner app form (SMS + email confirmation)
    
     lib/
         utils.ts                  # cn() class name utility
```

---

## 11. Build Roadmap

### Phase 1 — Done (this build)
- [x] Homepage with countdown + pre-registration form
- [x] Features page (The Stoic Guardian)
- [x] Partners page with Gold Tier breakdown + application form
- [x] Resources page with FAQ accordion + deployment cycle
- [x] Safety Hub with SA emergency contacts, load-shedding checklist, neighbourhood watch guide, GBV resources
- [x] Legal pages: Privacy Policy, Terms of Service, Emergency Protocol, Contact Support
- [x] Navbar (transparent → blur on scroll, mobile hamburger)
- [x] Enhanced Footer with company info, contact details, and all legal links
- [x] Live countdown timer
- [x] Pre-registration form with error handling + success state + SMS confirmation (fallback to email)
- [x] Partner Application form with phone field for SMS confirmations
- [x] Smart Confirmation system (Twilio SMS with Resend email fallback)
- [x] Vercel deployment config with API rewrites
- [x] Design system (map grids, dot grids, shimmer button)
- [x] Environment configuration (.env.example + .env.local.example)

### Phase 2 — Next Sprint
- [ ] Dynamic pre-registration counter (live from API)
- [ ] Add `sitemap.xml` and `robots.txt` for SEO
- [ ] OpenGraph image per page for social media sharing
- [ ] Analytics integration (Plausible or Vercel Analytics — no Google)
- [ ] WhatsApp click-to-chat button (tour support)
- [ ] Blog / news section (Sanity.io CMS)
- [ ] i18n groundwork (isiZulu, Afrikaans)

### Phase 3 — Post-Launch
- [ ] App deep-link redirects (once Flutter app is live)
- [ ] Dynamic pre-registration counter (live from API)
- [ ] Tour map page (provinces, dates, venues)
- [ ] Press kit download page

---

## Confidentiality

This repository is **private and confidential**.  
Property of The Black Sheep Tech Corp LTD (PTY).  
All contributors must sign an NDA before access is granted.

*Havenly Solutions — Your Haven. Your Community. Always On.*
