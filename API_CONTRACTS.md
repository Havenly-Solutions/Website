# API Contracts

## Scope
This repository contains public-facing web routes and form forwarding logic. Any backend API contract beyond those paths is external and not directly verifiable from source in this repo.

## Summary table
| Method | Endpoint | Status | Notes |
| --- | --- | --- | --- |
| POST | /api/pre-register | VERIFIED | Validates input, rate-limits, forwards to external backend |
| POST | /api/contact | VERIFIED | Validates input, rate-limits, forwards to external backend |
| POST | /api/partner-enquiry | VERIFIED | Validates input, rate-limits, forwards to external backend |
| POST | /api/unsubscribe | VERIFIED | Validates input and forwards unsubscribe to external backend |
| GET | /robots.txt | VERIFIED | Returns rules and sitemap URL |
| GET | /sitemap.xml | VERIFIED | Returns public URLs |

## POST /api/pre-register
Request:
- application/json
- fields: firstName, lastName, email, mobile, country, city, interest, consent, hp, startedAt

Validation:
- Zod schema in lib/schemas.ts
- server-side checks for required fields, email format, phone number pattern, consent, honeypot, body length, and rate limit

Response:
- success: { ok: true }
- validation failure: { ok: false, message, errors }
- rate limited: { ok: false, message, retryAfter }
- backend failure: 503 with safe user-facing message

Authentication:
- none on the web app
- optional Authorization: Bearer BACKEND_API_KEY when forwarding to backend

## POST /api/contact
Request:
- application/json
- fields: name, email, topic, message, consent, hp, startedAt

Validation:
- Zod schema in lib/schemas.ts

Response:
- success: { ok: true }
- validation or backend failure: safe error status with generic message

## POST /api/partner-enquiry
Request:
- application/json
- fields: orgName, orgType, regNo, country, region, serviceArea, website, contactName, email, phone, preferredContact, partnershipType, description, support, dispatch, consent, hp, startedAt

Validation:
- Zod schema in lib/schemas.ts

Response:
- success: { ok: true }
- validation or backend failure: safe error response

## POST /api/unsubscribe
Request:
- application/json
- fields: email, reason

Validation:
- Zod schema in lib/schemas.ts

Response:
- success: { ok: true, message: 'You have been successfully unsubscribed.' }
- failure: { ok: false, message }

## External contract status
All backend response payload formats and endpoint semantics beyond the forwarding path are EXTERNAL / UNVERIFIED because the backend source is not included in the repository.
