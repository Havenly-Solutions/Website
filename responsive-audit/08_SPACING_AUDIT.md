# 08 Spacing & Layout Token Audit

- **Section Vertical Padding (`.sec`)**: Uses `clamp(28px, 4.5vw, 64px) 0`.
- **Container Horizontal Padding (`.wrap`)**: Uses `padding: 0 clamp(14px, 3.5vw, 32px)`.
- **Grid Gaps**: `gap: 16px` on mobile, expanding to `gap: clamp(20px, 4vw, 40px)` on tablet/desktop.
