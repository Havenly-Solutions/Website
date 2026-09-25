# 16 Root Cause Analysis & Forensic Summary

## Primary Cause of Responsive Failure
1. **Un-nested Desktop CSS Cascade Corruption**: Historical CSS rules placed at the bottom of `app/globals.css` overridden mobile media queries, forcing desktop 2-column grids and right-alignment onto mobile viewports.
2. **Desktop-First Alignment Assumptions**: Default `.hero-copy` styles were set to `align-items: flex-end; text-align: right`.

## Architectural Fix
Refactored `app/globals.css` into a mobile-first progressive enhancement system where all base styles are single-column left-aligned, and multi-column right-aligned desktop styles exist strictly inside `@media (min-width: ...)` blocks.
