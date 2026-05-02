# Design Spec: Salamah - The Shield (v3.0)

**Date:** 2026-05-02
**Version:** 3.0
**Project Name:** Salamah (Safety)
**Style Direction:** "The Shield" (Architectural Security, Robust, Institutional)

## 1. Core Identity
Salamah is positioned as a hardened, high-integrity infrastructure for war relief and safety. The visual language must communicate unshakeable stability and technical precision.

## 2. Visual Design System
- **Typography:**
    - **Display:** `Public Sans` (900 weight) or similar bold, wide Sans-Serif for a "sturdy" feel.
    - **Body:** `Public Sans` (400 weight) for technical clarity.
- **Palette (Dynamic):**
    - **Dark Theme:** Midnight (#0f172a), Sky Blue (#38bdf8), Slate Gray (#64748b).
    - **Light Theme:** Slate 100 (#f1f5f9), Cobalt (#1e40af), Navy (#1e293b).
- **Aesthetic Elements:** Heavy borders (2px+), letter-spacing for labels, geometric accents, and subtle glassmorphism for navigation.

## 3. Key Components
1. **The Shield Header:**
    - Sticky glassmorphism nav with a Theme Toggle (Sun/Moon).
    - Links: Infrastructure, Integrity, Impact, App.
2. **Hardened Hero:**
    - Massive title "SALAMAH" inside a decorative technical frame.
    - Tagline: "Institutional Grade Relief Coordination."
3. **Security Grid (Features):**
    - High-integrity feature cards with Lucide icons (Atomic Ops, RBAC, Offline-First).
4. **Impact Metrics:**
    - Animated stats: 100% Data Integrity, < 1s Sync, ∞ Uptime.
5. **Multi-Platform Preview:**
    - CSS-only Desktop & Mobile frames showcasing the "Salamah Dashboard."

## 4. Interaction & Motion
- **Theme Engine:** Instant CSS-variable swap between Light and Dark modes.
- **Animations:** Sturdy, direct transitions. Avoid "playful" easing; use standard cubic-beziers for a professional feel.
- **Scroll Effects:** Staggered reveals for feature cards.

## 5. Technical Stack
- **Framework:** Vanilla HTML5, CSS3 (Variables + Grid/Flexbox), JS.
- **Iconography:** Lucide SVG (Inline).
- **Accessibility:** WCAG AA compliance (Contrast and Aria-labels).
