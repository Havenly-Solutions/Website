# 10 Mobile Navigation Audit

- **Header Row**: Height $58\\text{px}$ on mobile / $64\\text{px}$ on desktop.
- **Burger Trigger**: $38\\text{px} \\times 38\\text{px}$ circular button with high contrast icon.
- **Mobile Menu Drawer**: `position: fixed; left: 12px; right: 12px; top: calc(env(safe-area-inset-top, 0px) + 68px); z-index: 100;`.
- **Dismissal Controls**: Tapping backdrop, pressing Escape, clicking any link, or scrolling window automatically closes the drawer.
