# Security Policy

## Security Overview

Havenly Solutions is committed to providing a secure, privacy-respecting, and resilient civic technology platform for South Africa. We take the security of our website, web applications, and backend ecosystem seriously.

---

## Reporting a Vulnerability

If you discover a security vulnerability within this repository or any Havenly Solutions web property or service, please report it to our security team.

### How to Submit a Report
- **Email**: `report@havenly.solutions` or `info@havenly.solutions`
- **Encryption**: If sending sensitive details, request our public PGP key prior to sending.
- **Subject Line**: `[SECURITY VULNERABILITY] <Brief Description>`

### What to Include
1. **Description**: Clear description of the vulnerability and its potential impact.
2. **Steps to Reproduce**: Detailed step-by-step instructions or proof of concept (PoC).
3. **Affected Components**: Specific URLs, API endpoints, or repository files.
4. **Environment**: Browser version, OS, or tool versions used during discovery.

---

## Disclosure Policy

- **Coordinated Disclosure**: We ask security researchers to allow us reasonable time (up to 30 days) to investigate and remediate reported vulnerabilities before public disclosure.
- **No Harm**: Please do not attempt to access, alter, or destroy data belonging to real users or disrupt our services during research.
- **Safe Harbor**: We will not take legal action against researchers who conduct responsible security research in good faith and comply with this policy.

---

## Security Controls & Best Practices

Our web application incorporates modern security practices:

1. **Transport Security (HTTPS/HSTS)**: Strict HTTPS enforcement with `Preload` and `includeSubDomains`.
2. **Content Security Policy (CSP)**: Restricts script execution to verified sources.
3. **Header Hardening**:
   - `X-Frame-Options: DENY` (prevents clickjacking)
   - `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` (disables camera, microphone, geolocation APIs on static pages)
4. **Data Minimization & Validation**:
   - Strict Zod schema validation on all inputs.
   - Honeypot fields, rate-limiting, and timing checks to block automated bot submissions.
   - No sensitive passwords, tokens, or personal identifiers are stored in client-side storage or logged in web server outputs.
