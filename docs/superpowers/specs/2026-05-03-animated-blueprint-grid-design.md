# Design Spec: Animated Blueprint Grid Background

Integration of a theme-aware, subtly animated "blueprint" grid background into the Salamah website.

## 1. Purpose
Enhance the "hardened infrastructure" aesthetic by adding a technical, "live system" background layer that responds to theme switching and provides subtle motion.

## 2. Technical Requirements

### 2.1 HTML Structure
- Add a `<div class="blueprint"></div>` as the first child of the `<body>` element.
- This ensures it stays at the base of the stacking context.

### 2.2 CSS Implementation
- **Positioning:** `fixed`, `inset: 0`, `z-index: -1`, `pointer-events: none`.
- **Grid Pattern:** 
    - Use `linear-gradient` to create a grid.
    - Grid size: `40px x 40px`.
- **Theme Variables:**
    - Dark Theme (Default): `--grid-color: rgba(56, 189, 248, 0.05);` (Salamah Blue)
    - Light Theme: `--grid-color: rgba(30, 64, 175, 0.05);` (Deep Blue)
- **Animation ("The Tactical Drift"):**
    - Keyframes: `drift` (moves `background-position` from `0 0` to `40px 40px`).
    - Duration: `60s`.
    - Timing: `linear`.
    - Iteration: `infinite`.

## 3. Success Criteria
- The grid is visible in both Light and Dark themes.
- The grid color matches the respective theme's accent color but remains subtle.
- The background content scrolls naturally over the fixed grid.
- The grid itself moves slowly and smoothly across the viewport.

## 4. Verification Plan
- [ ] Verify HTML element presence.
- [ ] Verify grid appearance in Dark theme.
- [ ] Verify grid appearance in Light theme (using theme toggle).
- [ ] Verify animation is active and smooth.
