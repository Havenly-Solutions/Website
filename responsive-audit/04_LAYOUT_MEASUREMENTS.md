# 04 Layout Measurements & Root Container Audit

## 1. Outer Container Hierarchies
- **Root Element (`html` / `body`)**: Width 100%, Max-Width 100%, Overflow-X hidden.
- **Main Wrapper (`.wrap`)**: `max-width: 1120px; width: 100%; margin: 0 auto; padding: 0 clamp(14px, 3.5vw, 32px);`.
- **Dark Header Frame (`.frame`)**: `margin: 0 12px` (desktop) / `margin: 0 4px` (mobile).
- **Cards (`.card`)**: `max-width: 100%; padding: clamp(16px, 3vw, 24px); box-sizing: border-box;`.

## 2. Layout Width Evaluation Matrix
- **320px Viewport**: Available inner width = 292px inside `.wrap`. All main containers reflow within 292px boundary.
- **390px Viewport**: Available inner width = 362px inside `.wrap`. Containers reflow within 362px.
- **768px Viewport**: Available inner width = 720px inside `.wrap`. 2-column grids take 348px per column.
- **1280px+ Viewport**: Max-width caps at 1120px (1280px on 1400px+ screens).
