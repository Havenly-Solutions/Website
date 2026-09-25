# 15 JavaScript Responsive Logic Audit

- **HeroSlider**: Uses `getBoundingClientRect().width` on slide track element to calculate step distance dynamically rather than assuming desktop width.
- **SiteNav**: Uses `usePathname` and window listeners for keydown (Escape) and scroll.
- **Countdown**: Client component updating state via `setInterval` without layout mutation.
