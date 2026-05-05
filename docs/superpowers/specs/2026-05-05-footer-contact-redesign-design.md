# Design: Footer Contact Section Redesign

## Goal
Redesign the footer contact section to match the "Hardened Relief Infrastructure" theme by transforming the contact links into a "hardened pill" component. This improves visual hierarchy and reinforces the tactical, high-integrity aesthetic of the Salamah project.

## User Requirements
- Wrap the email link in a `contact-pill` div.
- Update the label text to "FOR MORE INFORMATION:".
- Apply tactical styling (borders, subtle background, hover effects).
- Ensure mobile responsiveness (balanced fit on 320px screens).

## Architecture & Components
### 1. Contact Pill (`.contact-pill`)
- **Structure**: A flex container holding the label and the email link.
- **Styling**:
  - `border-radius: 50px` for the pill shape.
  - `border: 1px solid var(--border)` for the tactical look.
  - `background: rgba(56, 189, 248, 0.05)` for a subtle technical feel.
  - Hover effect: `border-color: var(--accent)` and increased background opacity.

### 2. Pill Label (`.pill-label`)
- Smaller font size (`0.7rem`).
- Muted color (`var(--text-muted)`).
- High font weight (`700`) and letter spacing (`1px`) for a "label" feel.

### 3. Contact Link
- Accent color (`var(--accent)`).
- Increased letter spacing (`2px`) to match the tactical theme.

## Responsive Design
- On screens smaller than `480px`:
  - Change `flex-direction` to `column` to prevent overflow.
  - Reduce `border-radius` to `12px` for a "card-pill" hybrid look that fits mobile constraints better.
  - Set `width: 100%` and `text-align: center`.

## Testing Strategy
- **Visual Verification**: Use Playwright to capture screenshots at 320px width.
- **Verification Criteria**:
  - Pill should not overflow the viewport.
  - Content should be centered and legible.
  - Hover states should function correctly.

## Success Criteria
- The footer contact section matches the provided design spec.
- Zero horizontal scrolling on 320px devices.
- CSS follows existing variable conventions.
