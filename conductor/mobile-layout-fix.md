# Mobile Layout Fix Plan

## Objective
Fix the mobile layout issues where the header overlaps the title and sections are mispositioned due to overridden vertical padding.

## Changes
- **Update `styles/main.css` (Mobile Media Query `@media (max-width: 768px)`):**
  - Modify `.container` to only set horizontal padding: `padding: 0 20px;` -> `padding-left: 20px; padding-right: 20px;` or `padding-inline: 20px;`.
  - Add targeted mobile padding for main sections to ensure proper spacing on small screens:
    - `.hero`: Set padding to `120px 0 60px` (reduced from 180px desktop top padding) to prevent header overlap while maintaining space.
    - `.features`: Adjust padding to `60px 0` (reduced from 100px).
    - `.impact-stats`: Adjust padding to `60px 0` (reduced from 120px).
    - `.dashboard-preview`: Adjust padding to `60px 0` (reduced from 120px).
    - `.footer`: Adjust padding to `40px 0` (reduced from 80px).

## Verification
- View the site in mobile resolution (max-width: 768px).
- Confirm the `SALAMAH` title is no longer overlapped by the fixed navbar.
- Confirm there is balanced vertical spacing between all sections.
- Verify desktop layout remains unaffected.