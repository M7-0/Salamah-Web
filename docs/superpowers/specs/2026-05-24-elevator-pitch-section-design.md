# Design Spec: Elevator Pitch Section

**Date:** 2026-05-24
**Topic:** Adding a new section for Elevator Pitch videos.

## 1. Goal
Add a new section titled "Elevator Pitch" below the "Result" section in the Salamah-Web project. This section will feature two videos: one in English and one in Arabic.

## 2. Success Criteria
- [ ] A new section "Elevator Pitch" is visible below the "Result" section.
- [ ] The section title follows the existing theme.
- [ ] On desktop, the two videos are displayed side-by-side in cards.
- [ ] On mobile, the two videos are stacked vertically.
- [ ] The styling (colors, borders, hover effects) is consistent with the rest of the application.
- [ ] Videos are responsive and fill their containers.

## 3. Architecture & Components

### HTML Structure
A new `<section>` with id `pitch` will be added to `index.html`.
- **Container:** `pitch-section container`
- **Title:** `h2` with class `section-title`
- **Grid:** `pitch-grid` with `fade-in` animation class.
- **Cards:** `pitch-card` for each video, containing:
    - `h3` title (English Version / Arabic Version)
    - `video` element with controls and `pitch-video` class.

### CSS Styling
- **Grid Layout:** Uses CSS Grid with `repeat(2, 1fr)` for desktop.
- **Mobile Responsive:** Media query at `768px` to switch to `1fr`.
- **Theming:** Uses CSS variables (`--surface`, `--border`, `--accent`) for consistency.
- **Interactivity:** Hover effect on cards (`translateY`, `border-color`).

## 4. Implementation Details

### index.html
Insert the new section after `<section id="app" ...>`.

### styles/main.css
Append the new styles for `.pitch-section`, `.pitch-grid`, `.pitch-card`, and `.pitch-video`.
Add responsive rules for `.pitch-grid` within the existing `@media (max-width: 768px)` block.

## 5. Testing Strategy
- **Visual Inspection:** Verify the layout on desktop and mobile browsers.
- **Video Functionality:** Ensure both videos load and play correctly.
- **Responsiveness:** Check if the grid switches from 2 columns to 1 column at the 768px breakpoint.
- **Theming:** Verify that the section respects dark/light mode via the existing theme toggle.
