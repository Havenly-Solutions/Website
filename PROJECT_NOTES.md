# Project notes — please read before launch

This is real, working, type-checked, linted, production-built source code (Next.js
14 App Router + TypeScript), not a design mockup. `npm run build` succeeds and
prerenders all 24 routes; `npm run lint` and `npm run typecheck` are clean. But a
few things need your input or a legal/ops review before this goes live.

## 1. Forms don't send anywhere yet
The three forms (`/register`, `/partners#apply`, `/contact`) validate correctly
in the browser and on the server, but nothing is configured to receive the
submissions. Set `FORMS_WEBHOOK_URL` (e.g. an n8n workflow) or `BACKEND_API_URL` in
your environment — see `README.md` → *Environment variables*. Until then, the API
routes return a `503` in production (on purpose — see `lib/forward.ts`).

## 2. Legal pages need a lawyer's review
`/privacy-policy`, `/terms`, `/cookie-policy`, `/eula`, `/acceptable-use-policy`, and
`/disclaimer` are the text you supplied, with the placeholder fields (`__________`,
the informal-negotiation waiting period, the arbitration seat/language, the
governing-law blanks in Terms §10/§11) still unresolved in the source documents you
gave me — I did not invent values for these. I removed the office address (per your
instruction) and all Termly attribution/branding, and changed every instance of just
"Havenly" to "Havenly Solutions" per your request. I did **not** independently verify
these documents against South African law (POPIA, ECTA, CPA) — please have a lawyer
confirm they're complete and accurate for your business before launch.

## 3. Contact details
- Email: `info@havenly.solutions` (from your documents)
- Report-abuse email: `report@havenly.solutions` (from your Acceptable Use Policy —
  not currently linked anywhere in the UI; add it if you want a visible abuse-report
  path)
- Phone: `070 368 7327` (from your documents)
- No physical address is shown anywhere on the public site, per your instruction.

## 4. Helpline numbers on the Safe Hub page
`lib/content.ts` → `HELPLINES`. These come from my own general knowledge, not from
your documents — please verify each number (SAPS, GBV Command Centre, Childline,
Legal Aid, SADAG, Crime Stop) before launch.

## 5. Images
- Every page banner (`public/images/banners/`) is a real crop from the photos you
  supplied — 16 distinct images, one per page, listed in `lib/content.ts` →
  `BANNERS`.
- I deliberately did **not** use: the "Am I next?" photo (visible blood), the
  hooded "STOP"-on-palm and taped-mouth photos on their own as page banners (used
  once, cropped tightly to just the hand, on the Acceptable Use Policy banner — a
  judgement call; swap it out via `lib/content.ts` if you'd rather not use it at
  all), and the informal-settlement/wires photo only as a smaller, non-identifying
  background crop (How It Works / Cookie Policy) rather than a full portrait.
- The Soweto cooling-towers photo (home hero) includes visible "Shield" and
  "Grand-Pa" advertising murals on the towers themselves — I cropped the `/contact`
  banner to avoid them, but they're still visible in the home hero and in the Open
  Graph share image. Let me know if you'd like that recropped or swapped.
- Alt text throughout is descriptive (what's in the photo) rather than promotional —
  worth a pass to make sure it matches how you'd want each image described.

## 6. What's deliberately absent
Per your master prompt: no login, dashboard, admin, responder-portal or
partner-portal access anywhere on the public site; no Stories feature; Jabu is
described only as "a controlled information and guidance experience," never as an
autonomous/unrestricted AI; no claim that any SOS guarantees emergency-service
contact; no named partnerships (the Partners page speaks only in categories:
response/community/service-technology partners).

## 7. Rate limiting is in-memory
`lib/rate-limit.ts` is a single-process sliding-window limiter — fine for a single
Node server, not sufficient on its own for a multi-instance or serverless deployment.
See the README for what to add if you scale horizontally.

## 8. Brand name repetition
You asked for "Havenly Solutions" (not bare "Havenly") throughout — I applied that
consistently in visible copy, alt text, and metadata. A few places keep "Havenly
Solutions (Pty) Ltd" as the full legal name (footer legal line, legal-document
signature blocks) since that's how it appears in your source documents.
