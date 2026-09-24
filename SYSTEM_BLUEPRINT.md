# System Blueprint

## Overview
Havenly Solutions Website is a public-facing Next.js application that presents brand information, services, legal pages, and lead-generation forms for launch registration, contact, partnerships, and unsubscribe requests.

## Entry points
- app/page.tsx: home page
- app/about/page.tsx: company information
- app/contact/page.tsx: contact form
- app/register/page.tsx: registration form
- app/partners/page.tsx: partnership form
- app/safe-hub/page.tsx: community support directory
- app/api/*: form submission route handlers

## Public data flow
1. Browser requests a route under the App Router.
2. Next.js renders a static or dynamic page based on route conventions.
3. UI is composed from components in components/.
4. Forms are validated both in the browser and on the server.
5. Server route handlers check origin, body size, rate limits, and honeypot fields.
6. Valid submissions are forwarded to the configured backend API.
7. Response state updates the UI and shows success or retry messaging.

## Security boundaries
- Client-side validation is UX only.
- Server-side validation is enforced in lib/api.ts and schema definitions in lib/schemas.ts.
- Origin checks block cross-site abuse.
- Rate limiting reduces spam and abuse.
- Environment variables keep backend URLs and credentials outside the source tree.

## Third-party dependencies
- Next.js 16.3.6
- React 18.3.1
- Zod schema validation
- Dompurify sanitization
- Sonner toasts
- Vercel Speed Insights
- Fontsource fonts

## Deployment flow
- Local: npm install, create .env.local, npm run dev
- Production: npm run build then npm run start or Vercel build pipeline
- Vercel endpoint uses vercel.json headers and the app config in next.config.mjs

## User journey
A visitor can:
- browse public content pages
- search the Safe Hub directory
- register interest in launch updates
- contact the organization
- submit a partner enquiry
- unsubscribe from marketing updates

## Verified operational status
- Build: PASS
- Typecheck: PASS
- Lint: PASS
- Dependency audit: PASS (0 vulnerabilities)
- Git repo hygiene: FAIL (working tree contains generated IDE files and unreviewed artifacts)
- Release gate: FAIL due repository hygiene and branch mismatch relative to target release branch
