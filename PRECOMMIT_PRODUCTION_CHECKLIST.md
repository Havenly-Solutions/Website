# Pre-Commit Production Checklist

## Required gate before commit
- [ ] No secrets or credentials in tracked files
- [ ] No localhost or development-only endpoints remain in production config
- [ ] No test credentials or debug code remain
- [ ] No development-only behavior remains turned on in production builds
- [ ] No broken routes or missing assets
- [ ] No API contract mismatches beyond verified external dependency contracts
- [ ] No security-critical findings remain
- [ ] Production build passes
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] No critical accessibility blockers remain
- [ ] No critical SEO blockers remain
- [ ] Documentation matches the codebase
- [ ] Environment configuration is documented and externalized

## Current status
- Build: PASS
- Typecheck: PASS
- Lint: PASS
- Security: PASS
- Git hygiene: FAIL until generated/editor files are removed or excluded from the release branch
