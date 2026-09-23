# Havenly Solutions — public website

Production Next.js 14 (App Router, TypeScript) source for the public Havenly Solutions
website: informs visitors, builds trust, and converts them into pre-registrations or
partnership enquiries. It does **not** provide any login, dashboard, or internal
operational access — see `PROJECT_NOTES.md` for the full list of what was intentionally
left out and why.

## Requirements
- Node.js 18.18+ (Next.js 14 requirement)
- npm

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in at least one form destination — see below
npm run dev                  # http://localhost:3000
```

Other scripts:
```bash
npm run build       # production build (also used by `next start` and most hosts)
npm run start        # serve the production build locally
npm run lint          # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
```

## Environment variables
Copy `.env.example` to `.env.local` (development) or set these in your hosting
provider's dashboard (production). None of these are exposed to the browser except
`NEXT_PUBLIC_SITE_URL`.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL used for `sitemap.xml`, `robots.txt`, and Open Graph tags. Defaults to `https://www.havenly.solutions`. |
| `FORMS_WEBHOOK_URL` | One of these two | Every pre-registration, partner enquiry and contact submission is POSTed here as JSON (see shape below). Point this at an n8n workflow, Zapier, or your own endpoint. |
| `FORMS_WEBHOOK_SECRET` | Optional | Sent as an `X-Webhook-Secret` header so the receiving endpoint can verify the request came from this site. |
| `BACKEND_API_URL` | Alternative to the webhook | Base URL of the Havenly Solutions backend API. Submissions are POSTed to `{BACKEND_API_URL}/public/pre-registrations`, `/public/partner-enquiries`, and `/public/contact-messages`. |
| `BACKEND_API_KEY` | With `BACKEND_API_URL` | Sent as `Authorization: Bearer {key}`. |

**Until one of these is configured, the three forms will validate correctly in the
browser but the API routes return `503` in production** (`lib/forward.ts` throws
`NotConfiguredError` on purpose, so a missing destination fails loudly instead of
silently swallowing real submissions). In development, an unconfigured destination
just logs to the console instead of failing, so you can click through the forms
without wiring anything up yet.

### Submission payload shape
```json
{
  "kind": "pre-register",
  "receivedAt": "2026-09-22T10:00:00.000Z",
  "source": "havenly-solutions-website",
  "data": { "firstName": "...", "lastName": "...", "email": "...", "...": "..." }
}
```
`kind` is one of `pre-register`, `partner-enquiry`, `contact`. `data` matches the
corresponding Zod schema in `lib/schemas.ts` (the honeypot and timing fields are
stripped before delivery).

## What's inside
- `app/` — one route per page (App Router), plus `app/api/*/route.ts` for the three
  form endpoints, `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`.
- `components/` — nav, page banners, countdown, hero slider, feature/helpline filters,
  cookie consent, forms (`components/forms/`), and the legal-document renderer plus
  its per-policy content (`components/legal/`).
- `lib/` — site constants (`site.ts`), content data (`content.ts`), Zod schemas
  (`schemas.ts`), the shared API handler (`api.ts`), submission delivery
  (`forward.ts`), and a small in-memory rate limiter (`rate-limit.ts`).
- `public/images/` — real photos and brand assets, optimised and served by
  `next/image`. `banners/` holds one distinct crop per page background.

## Forms: validation, spam and rate limiting
- Every field is validated with the same Zod schema on the client (immediate,
  friendly errors) and again on the server (`lib/schemas.ts` — never trust the
  client).
- A hidden honeypot field plus a minimum fill-time check silently accepts obvious
  bot submissions without forwarding them anywhere.
- `lib/rate-limit.ts` allows 6 submissions per form per IP per 10 minutes. It is
  in-memory, so it protects a single server instance; if you deploy to multiple
  instances or serverless functions, add a shared store (Redis/Upstash) or rate-limit
  at the edge/WAF as well.
- API routes reject cross-origin `POST`s (checks the `Origin` header against `Host`).

## Cookie consent
`components/CookieConsent.tsx` shows a real banner (Accept all / Reject non-essential
/ Manage preferences) and a preferences dialog with three toggles (Strictly
necessary — always on, Preferences, Analytics). The choice is stored in
`localStorage` and mirrored to a first-party `hs_consent` cookie so it can be read
server-side too. **The site currently loads no third-party scripts.** When you add
analytics or another provider, load it only inside `applyConsent()` in that file, and
only when the matching flag is `true` — and add its host to the `connect-src`/
`script-src` list in `next.config.mjs` (`Content-Security-Policy`).

## Security headers & CSP
Set in `next.config.mjs`: a strict `Content-Security-Policy` (self-hosted scripts and
styles only, no third-party origins allowed by default), `X-Frame-Options: DENY`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy`, a locked-down
`Permissions-Policy`, and HSTS. Update the CSP if you add analytics, a form widget,
or any other third-party script.

## Deploying
This is a standard Next.js app — deploy it anywhere Next.js 14 runs (Vercel, a Node
server, Docker, etc.). The three API routes use `export const runtime = 'nodejs'`, so
they are **not** compatible with a static export (`next export`) or the Edge
runtime as written — they need a Node server.

## Known gaps to close before launch
See `PROJECT_NOTES.md` for the full list (legal review, real form destination,
verified helpline numbers, image alt-text review, etc.).
