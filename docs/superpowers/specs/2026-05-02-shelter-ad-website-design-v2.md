# Design Spec: Shelter App Ad Website (High-Fidelity Expansion)

**Date:** 2026-05-02
**Version:** 2.0
**Style Direction:** "The Guardian" (Authoritative, Secure, Institutional)

## 1. Goal
To elevate the existing Shelter App landing page into a production-grade, high-fidelity marketing asset. The expansion focuses on visual proof (mockups), professional iconography, and deeper technical narrative to attract high-level institutional partners.

## 2. Visual Identity & Design Tokens
- **Typography:**
    - **Headings:** `EB Garamond` (700 weight for Hero, 600 for Sections).
    - **Body:** `Lato` (400 for text, 700 for labels).
- **Color Palette:**
    - `navy-primary`: #0f172a (Background)
    - `slate-surface`: #1e293b (Cards/Navigation)
    - `sky-accent`: #38bdf8 (Icons/CTA/Highlights)
    - `glass-bg`: rgba(30, 41, 59, 0.7) (Blur: 10px)
- **Iconography:** Lucide-react style SVG icons (Outline, 2px stroke).
    - *Live Coordination:* `Map` icon.
    - *Atomic Integrity:* `ShieldCheck` icon.
    - *Offline Resilience:* `CloudOff` icon.
    - *Infrastructure:* `Server` icon.

## 3. New Page Components
1. **Glassmorphism Navbar:**
    - Sticky header with blur effect.
    - Links: Mission, Capabilities, Infrastructure, The App.
2. **Enhanced Hero:**
    - Radial gradient background for depth.
    - Double CTA: "View Technical Specs" (Primary) and "Watch Demo" (Secondary).
3. **High-Fidelity Feature Grid:**
    - Cards with subtle borders and Lucide icons.
    - Deeper descriptions explaining *how* it works (e.g., mention of atomic transactions).
4. **The Shelter Dashboard (Mockups):**
    - CSS-only Desktop frame with a "Relief Dashboard" placeholder.
    - CSS-only Mobile frame overlaying the desktop frame for a multi-platform feel.
5. **Impact Metrics (Stats):**
    - Grid: "100% Data Integrity", "< 1s Sync Latency", "∞ Offline UPTIME".
    - Count-up entrance animations.

## 4. Technical Updates
- **Assets:** Inline SVG for icons (Lucide) to avoid external requests and maintain performance.
- **Animations:**
    - Staggered fade-ins for feature cards.
    - Scale/Blur transitions for the glass navbar on scroll.
- **Accessibility:**
    - ARIA labels for all SVG icons.
    - Maintenance of 4.5:1 contrast ratio.

## 5. Success Criteria
- The site feels like a premium NGO/Government product.
- Technical reliability is the core visual theme.
- Responsive performance remains high (Vanilla HTML/CSS/JS).
