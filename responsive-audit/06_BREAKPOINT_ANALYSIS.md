# 06 Breakpoint Analysis & Cascade Architecture

## 1. Implemented Progressive Breakpoints
- **Mobile Base ($\\le 640\\text{px}$)**: Single column layouts, $100\\%$ width buttons, left-aligned hero copy, hidden mascot graphic.
- **Phablet / Small Mobile ($\\le 420\\text{px}$)**: Wordmark hidden in navigation header, compact countdown cards.
- **Tablet Portrait ($\\ge 641\\text{px}$)**: 2-column grids, horizontal section headers, $2$-column footer.
- **Tablet Landscape / Small Laptop ($\\ge 981\\text{px}$)**: 2-column hero composition with Jabu mascot on left and right-aligned copy, multi-column card grids.
- **Full Desktop ($\\ge 1101\\text{px}$)**: Desktop navigation link row active, burger button hidden.
- **Large Monitor ($\\ge 1400\\text{px}$)**: Outer container max-width expands from $1120\\text{px}$ to $1280\\text{px}$.
