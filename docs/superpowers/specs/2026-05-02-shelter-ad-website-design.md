# Design Spec: Shelter App Ad Website

**Date:** 2026-05-02
**Topic:** Professional advertising website for the Shelter: War Relief & Safety App.
**Style Direction:** "The Guardian" (Authoritative, Secure, Institutional).

## 1. Goal
To create a high-integrity, professional landing page that communicates the reliability, security, and technical robustness of the Shelter App to potential partners, NGOs, and volunteers.

## 2. Visual Identity
- **Primary Palette:** 
    - Background: Deep Navy (#0f172a)
    - Surface: Slate (#1e293b)
    - Accent: Sky Blue (#38bdf8)
    - Alerts: Crimson (#ef4444) for problems, Emerald (#22c55e) for solutions.
- **Typography:**
    - Headings: `EB Garamond` (Serif) - Evokes institutional trust and authority.
    - Body: `Lato` (Sans-Serif) - Ensures modern readability and technical clarity.
- **Visual Language:** High contrast, clean borders, subtle glowing accents (matching the app's priority glow logic), and structured grids.

## 3. Page Structure
1. **Hero Section:**
    - Title: "Shelter: War Relief & Safety"
    - Tagline: "Integrity in Humanitarian Crisis."
    - Action: "Explore the Tech" (Scroll to Tech Stack).
2. **The Problem:**
    - Focus on the chaos of relief zones: "Race conditions in aid delivery," "Data vulnerability," and "Connectivity failures."
3. **The Solution:**
    - Highlight the technical hardening: "Atomic Firestore Transactions," "Hardened RBAC Security," and "Offline-First Resilience."
4. **The Tech Stack:**
    - Interactive grid of tools: Flutter, Cloud Firestore, Firebase Auth, Flutter Map.
5. **Call to Action:**
    - Professional sign-off and link to documentation/app stores (placeholders).

## 4. Technical Implementation
- **Stack:** Vanilla HTML5 and CSS3 (no external frameworks like Tailwind for maximum flexibility and performance).
- **Animations:**
    - `IntersectionObserver` for scroll-triggered fade-in animations.
    - CSS transitions (200ms) for hover states on tech stack cards.
- **Responsiveness:**
    - Mobile-first approach.
    - Breakpoints: 375px, 768px, 1024px, 1440px.

## 5. Success Criteria
- The website feels "sturdy" and authoritative.
- The technical complexity of the app (atomic transactions, security) is clearly translated into value.
- Accessible contrast (WCAG AA) throughout.
