# Navigation Sync & Layout Tweaks

## Objective
Sync the header navigation links with the current page sections and shift "The Salamah Console" section down slightly for better visual pacing.

## Key Files & Context
- `index.html`: Contains the header navigation links and section IDs.
- `styles/main.css`: Contains layout styling.

## Implementation Steps

1. **Sync Header Navigation**
   - Update the `.nav-links` in `index.html` to reflect the current sections.
   - Old links: `#infra`, `#integrity`, `#impact`.
   - New links: `#about` (About), `#integrity` (Integrity), `#impact` (Impact), `#app` (Console).

2. **Shift "The Salamah Console" Down**
   - Add a new CSS rule for `.dashboard-preview` in `styles/main.css` to introduce top margin/padding, shifting the section down as requested.

3. **Verify Stats Grid**
   - Ensure that the impact stats section only contains "Data Integrity" and "Map Accuracy" (this was completed in the previous step, but will be verified).

## Verification
- Test all navigation links to ensure they jump to the correct sections.
- Verify the visual spacing above the Console section.