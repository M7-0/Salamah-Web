# Salamah App Features & Open Source Integration

## Objective
Introduce a dedicated new section to showcase the app's core description, main features, and open-source GitHub repositories. Additionally, integrate project keywords elegantly into the UI, ensuring all additions adhere strictly to `ui-ux-pro-max` design principles (SVG icons, stable hover states, and glassmorphism styling).

## Key Files & Context
- `index.html`: Will receive the new markup for keywords, the dedicated section, features, and GitHub links.
- `styles/main.css`: Will receive new CSS classes for tags, feature cards, and GitHub repository boxes.

## Implementation Steps

1. **Keywords Integration (Hero Section)**
   - Add a new row of pill-shaped tags below the hero tagline.
   - **Tags**: Safety, Relief, Humanitarian, Shelter.
   - **Styling**: Subtle background, rounded borders, and clean typography.

2. **New Dedicated Section: "About Salamah"**
   - Insert a new `<section>` between the Hero and the Core Integrity Engine (or right after the Core Integrity Engine).
   - **Description**: Add the heading/intro text: *"Salamah is a Real-Time war Relief app"*. (Note: Corrected the typo 'Relife' to 'Relief' for professionalism).

3. **Feature Grid**
   - Within the new section, add a 3-column grid for the main features.
   - **Features**:
     - *AI Recommendation engine* (Icon: `lucide-cpu` or `lucide-brain`)
     - *Real-Time Occupancy Analytics* (Icon: `lucide-bar-chart` or `lucide-activity`)
     - *Accurate Map Coordinate* (Icon: `lucide-map-pin` or `lucide-navigation`)
   - **Styling**: Glassmorphism cards (`bg-navy/80` or `bg-white/80` based on theme), `cursor-pointer`, and smooth `transition-colors duration-200` on hover.

4. **GitHub Repositories Integration**
   - Add a "Source Code" sub-section below the feature grid.
   - Create two prominent, clickable boxes (cards) featuring the official GitHub SVG icon.
   - **Links**:
     - *Website*: `https://github.com/M7-0/Salamah-Web.git`
     - *App*: `https://github.com/M7-0/Shelter-APP.git`
   - **Styling**: Clean borders, GitHub logo aligned with text, and interactive hover feedback without layout shift.

## Verification & Testing
- Verify that all SVG icons render correctly at 24x24 (`w-6 h-6`).
- Test hover states to ensure there are no layout shifts.
- Toggle between Light and Dark themes using the existing button to guarantee sufficient contrast (4.5:1 minimum) and border visibility in both modes.
- Ensure the layout is responsive and looks good on mobile screens (no horizontal scrolling).