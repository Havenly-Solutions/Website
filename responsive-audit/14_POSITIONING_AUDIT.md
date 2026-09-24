# 14 Absolute & Fixed Positioning Audit

- **Mobile Drawer**: Uses `position: fixed` to escape parent `.frame` clipping.
- **Safety Strip / Exit Button**: Uses relative positioning within flow.
- **Cookie Consent Banner**: Uses `position: fixed; bottom: calc(8px + env(safe-area-inset-bottom, 0px));`.
