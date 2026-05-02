# Design Spec: Shelter App Ad Website

**Date:** 02-05-2026 10:00 AM
**Topic:** Professional advertising website for the Shelter: War Relief & Safety App.
**Style Direction:** "Tactical Integrity" (Modern, Bold, High-Integrity).

## 1. Goal
To create a high-integrity, professional landing page that communicates the reliability, security, and technical robustness of the Shelter App using a modern, accessible, and themeable interface.

## 2. Visual Identity
- **Primary Palette (Dynamic):** 
    - **Dark Theme (Default):** Background: #0f172a (Deep Navy), Surface: #1e293b (Slate), Accent: #38bdf8 (Sky Blue).
    - **Light Theme:** Background: #f1f5f9 (Cool Grey), Surface: #ffffff (White), Accent: #1e40af (Deep Blue).
- **Typography:**
    - **Font Family:** `Public Sans` - A versatile, clean, and modern sans-serif that evokes clarity and operational efficiency.
    - **Headings:** Bold (700) to Ultra-Bold (900) weights for high-impact authority.
    - **Body:** Regular (400) to Light (300) for clean technical reading.
- **Visual Language:** High contrast, clean borders, dynamic theme support, and a structured "operational" grid.

## 3. Page Structure
1. **Hero Section:**
    - Title: "Shelter: War Relief & Safety"
    - Tagline: "Integrity in Humanitarian Crisis."
    - Action: "Explore the Tech" (Scroll to Tech Stack).
2. **The Problem:**
    - Focus on chaos: "Race conditions," "Data vulnerability," "Connectivity failures."
3. **The Solution:**
    - Focus on hardening: "Atomic Transactions," "Hardened RBAC," "Offline-First."
4. **The Tech Stack:**
    - Interactive grid of tools: Flutter, Cloud Firestore, Firebase Auth, Flutter Map.
5. **Call to Action:**
    - Professional sign-off and link to documentation/app stores.

## 4. Technical Implementation
- **Theme Engine:** Data-attribute driven (`data-theme="dark|light"`) with global CSS variables.
- **Stack:** Vanilla HTML5 and CSS3.
- **Animations:**
    - `IntersectionObserver` for scroll-triggered staggered reveals.
    - `transition: background 0.3s, color 0.3s` for smooth theme switching.
- **Responsiveness:**
    - Mobile-first approach.
    - Breakpoints: 375px, 768px, 1024px, 1440px.

## 5. Success Criteria
- The website feels operational, trustworthy, and modern.
- Theme switching works flawlessly with high contrast in both modes.
- Typography is clean, bold, and authoritative.
