# Dynamic Header Glow Implementation

## Objective
Implement an "active" state for header navigation links that triggers a glow effect when the user scrolls to the corresponding section.

## Key Files & Context
- `index.html`: Contains navigation and section IDs.
- `styles/main.css`: Contains navigation styles.
- `scripts/main.js`: Contains interaction logic.

## Implementation Steps

1. **HTML ID Conflict Resolution**
   - The ID `#app` is used for both the `<main>` tag and the Console section.
   - Rename `<main id="app">` to `<main id="main-content">` to ensure `#app` uniquely identifies the Console section for the navigation observer.

2. **CSS Active State Styling**
   - Add a `.nav-links a.active` rule in `styles/main.css`.
   - The "glow" effect will include a color change to `--accent` and a subtle `text-shadow`.

3. **JavaScript Scroll Spy**
   - Implement a new `IntersectionObserver` in `scripts/main.js`.
   - This observer will track the sections (`#about`, `#integrity`, `#impact`, `#app`).
   - When a section enters the viewport (around 50% threshold), add the `active` class to the matching nav link and remove it from others.

## Verification
- Scroll through the page and verify that the correct nav link "glows" as each section becomes prominent.
- Verify that clicking a nav link scrolls to the section and activates the glow.
- Ensure no console errors related to duplicate IDs or observer logic.