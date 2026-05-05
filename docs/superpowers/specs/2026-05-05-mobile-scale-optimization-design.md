# Design Specification: Mobile Scale & Width Optimization

**Date:** 2026-05-05
**Topic:** Improving horizontal scaling and width management for phone views.
**Status:** Approved

## 1. Problem Statement
The current mobile view (specifically for devices < 768px) suffers from "terrible" scaling where elements either touch the edges of the screen, wrap awkwardly, or feel claustrophobic due to oversized typography and rigid padding.

## 2. Goals
- Ensure a consistent "safe zone" gutter on both sides of the screen.
- Prevent text wrapping on primary branding (H1) and critical stats.
- Improve the visual "breathing room" in the layout.

## 3. Architecture & Changes
### 3.1 Fluid Container System
- **Selector:** `.container`
- **Mobile Change:** Simplify to a fixed-padding model for guaranteed symmetry.
- **Logic:** Use `padding: 0 20px` with `width: 100%` and `box-sizing: border-box`.
- **Implementation:**
  ```css
  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 0 20px;
      margin: 0;
      max-width: none;
    }
  }
  ```

### 3.2 Footer Contact Refinement
- **Text:** Change "Inquiries" or plain label to "FOR MORE INFORMATION:".
- **Style:** Wrap in a high-contrast pill/border for better visual hierarchy.


### 3.2 Typographic Scaling (Horizontal)
- **H1 Header:** Use `clamp()` to ensure the logo/title stays on one line.
  - **Proposed:** `font-size: clamp(2.2rem, 12vw, 4rem);`
- **Stat Numbers:** Ensure impact numbers scale down to prevent grid overflow.
  - **Proposed:** `font-size: clamp(1.5rem, 8vw, 2.5rem);`

### 3.3 Stat Grid Realignment
- **Selector:** `.stats-grid`
- **Change:** Adjust `flex-direction` and `gap`.
- **Detail:** On mobile, reduce the gap between stat items to `10px` and reduce internal padding of `.stat-item` to reclaim horizontal space.

### 3.4 Mockup Frame Refinement
- **Desktop Frame:** Update the `transform: scale(0.9)` to be more responsive, potentially using `transform: scale(min(0.9, 80vw / 1000px))` or similar logic to prevent horizontal overflow.
- **Mobile Frame:** Re-evaluate the `display: none` on mobile. If it can be scaled down to fit, it should be shown to provide a "native" preview feel.

## 4. Success Criteria
- No horizontal scrollbars on mobile.
- "SALAMAH" title remains on a single line on an iPhone SE (320px).
- At least 15px of visible "air" on both sides of the main content.

## 5. Next Steps
- Create implementation plan using `writing-plans` skill.
- Apply CSS changes to `styles/main.css`.
- Verify on mobile viewport simulations.
