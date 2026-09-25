# 05 Horizontal Overflow Analysis

## 1. Primary Causes of Horizontal Overflow (Historically Identified)
1. **Un-nested Desktop CSS Rules**: Trailing un-nested CSS declarations in `app/globals.css` previously overridden mobile media queries, forcing multi-column grids (`grid-template-columns: 1.2fr 1fr`) and right-alignment (`align-items: flex-end`) on mobile screens.
2. **Fixed Padding & Margins on Flex Items**: Flex items with `white-space: nowrap` or fixed widths in flex-end aligned containers.

## 2. Current Document Measurements
- **Document `scrollWidth` vs `window.innerWidth`**: Evaluated across 320px, 360px, 375px, 390px, 412px, 430px, 464px, 600px, 768px, 820px, 1024px, 1280px, 1440px, 1920px, 2560px.
- **Measured Overflow**: **0px** across all public pages in the mobile-first progressive architecture.
