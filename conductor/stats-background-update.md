# Update Stats and Background Grid

## Objective
Remove the 'Sync Latency' stat from the Impact section and upgrade the global background grid to a modern, fancy dotted pattern using `ui-ux-pro-max` principles (dot pattern with radial mask fading).

## Key Files & Context
- `index.html`: Contains the Impact Stats grid.
- `styles/main.css`: Contains the `.blueprint` class which renders the background grid.

## Implementation Steps

1. **Remove Sync Latency**
   - In `index.html`, locate the `<section id="impact" class="impact-stats">` section.
   - Remove the `<div class="stat-item fade-in">` containing "SYNC LATENCY".

2. **Upgrade Background Grid**
   - In `styles/main.css`, update the `.blueprint` class.
   - Replace the linear-gradient grid with a dotted `radial-gradient` pattern.
   - Apply a `-webkit-mask-image` and `mask-image` with a radial gradient to create a smooth fade-out effect towards the bottom edges, typical of high-end UI design.
   - Adjust animation speed for a subtler, premium feel.

## Verification & Testing
- Ensure the stats grid displays symmetrically with only two items (Data Integrity and Map Accuracy).
- Ensure the background grid appears dotted and fades smoothly without abrupt edges.
- Verify cross-browser support for CSS masks.