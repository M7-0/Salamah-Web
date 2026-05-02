# Shelter Ad Website Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the Shelter App website with high-fidelity components, SVG icons, and device mockups.

**Architecture:** Enhancing the existing single-page layout with a sticky navbar, inline SVGs, and CSS-based device frames.

**Tech Stack:** HTML5, CSS3, Vanilla JS, Lucide SVG icons (inline).

---

### Task 1: Navigation & Hero Refinement

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Add Glassmorphism Navbar**
  - Insert `<nav>` at the top of `<body>`.
  - Add links: Mission, Capabilities, Infrastructure, The App.

- [ ] **Step 2: Update Hero with Radial Gradient and Double CTA**
  - Update `.hero` styles and HTML for a more dynamic look.

- [ ] **Step 3: Commit**

### Task 2: High-Fidelity Features with Lucide Icons

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Integrate Inline SVG Icons**
  - Use `Map`, `ShieldCheck`, and `CloudOff` Lucide icons.
  - Update feature cards with these icons and deeper technical copy.

- [ ] **Step 2: Style the Feature Cards v2**
  - Add subtle glass backgrounds and borders to cards.

- [ ] **Step 3: Commit**

### Task 3: Device Mockups & Dashboard Preview

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Create CSS Desktop Frame**
  - Implement a container that looks like a browser/desktop monitor.

- [ ] **Step 2: Create CSS Mobile Frame Overlay**
  - Implement a floating mobile device frame overlaying the desktop view.

- [ ] **Step 3: Commit**

### Task 4: Impact Metrics & Animated Stats

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`
- Modify: `scripts/main.js`

- [ ] **Step 1: Add Impact Stats HTML**
  - 100% Data Integrity, < 1s Sync Latency, ∞ Offline UPTIME.

- [ ] **Step 2: Implement Count-up Animation in JS**
  - Update `IntersectionObserver` to trigger a number count-up for stats.

- [ ] **Step 3: Commit**

### Task 5: Final Polish & Refined Transitions

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Refine Section Staggering**
  - Ensure animations trigger in a sequence.

- [ ] **Step 2: Global Consistency Check**
  - Verify all typography and spacing matches the v2 spec.

- [ ] **Step 3: Commit**
