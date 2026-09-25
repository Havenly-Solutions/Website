# Backend Communication

## Status
VERIFIED: This repository does not contain a custom backend service. All backend-facing operations from the web app are delegated to external endpoints configured via environment variables.

## Request flow
### Pre-registration
UI: app/register/page.tsx -> RegisterForm.tsx
Component: RegisterForm
Client submission: submitJson('/api/pre-register') via lib/client.ts
Server route: app/api/pre-register/route.ts
Validation: preRegisterSchema in lib/schemas.ts
Forwarding: lib/forward.ts -> BACKEND_API_URL + /api/v1/dashboard/helpdesk/tickets
Authentication: optional Authorization: Bearer BACKEND_API_KEY

### Contact form
UI: app/contact/page.tsx -> ContactForm.tsx
Server route: app/api/contact/route.ts
Validation: contactSchema
Forwarding: lib/forward.ts -> BACKEND_API_URL + /api/v1/dashboard/helpdesk/tickets

### Partner enquiry
UI: app/partners/page.tsx -> PartnerEnquiryForm.tsx
Server route: app/api/partner-enquiry/route.ts
Validation: partnerSchema
Forwarding: lib/forward.ts -> BACKEND_API_URL + /api/v1/dashboard/ngo-partners/apply

### Unsubscribe
UI: app/unsubscribe/page.tsx -> UnsubscribeForm.tsx
Server route: app/api/unsubscribe/route.ts
Validation: email + optional reason
Forwarding: BACKEND_API_URL + /api/v1/dashboard/helpdesk/tickets

## Verified endpoint contract
Only the path suffixes are known from repository code. The actual API contract and response schema are external and unverified because the backend source is not included in this repo.

## Security observations
- No localhost endpoints remain in production configuration.
- Default production URL is https://api.havenly.solutions.
- Requests set Content-Type: application/json and Accept: application/json.
- Server-side origin checks and rate limiting are enforced.
- The app does not log secrets or credentials.
- Unauthorized server-side access is not locally implemented because there is no local auth layer in this repo.

## Risk note
The backend is an external dependency. Production behavior depends on that service being correctly deployed and configured with the expected paths and payload formats.
