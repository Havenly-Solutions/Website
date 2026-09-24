# 17 Priority Issue Classification

| Priority | Issue Description | Component / Selector | Affected Viewports | Status |
| :--- | :--- | :--- | :--- | :--- |
| **CRITICAL** | Hero section cut off on right side due to `align-items: flex-end` | `.hero-copy`, `.hero-cta` | $\\le 980\\text{px}$ | **RESOLVED** |
| **CRITICAL** | Mobile navigation drawer clipped by parent `.frame` | `.nav.open .links` | $\\le 1100\\text{px}$ | **RESOLVED** |
| **HIGH** | Un-nested desktop rules overriding mobile media queries | `app/globals.css` | All mobile/tablet | **RESOLVED** |
| **HIGH** | Touch targets $< 44\\text{px}$ on coarse pointer devices | `.btn`, `.chip`, `.exit` | Touch devices | **RESOLVED** |
| **MEDIUM** | iOS Safari auto-zooming on form input focus | `input`, `select`, `textarea` | Mobile WebKit | **RESOLVED** |
| **LOW** | Wordmark crowding navigation bar on small phones | `.brand .wm` | $\\le 420\\text{px}$ | **RESOLVED** |
