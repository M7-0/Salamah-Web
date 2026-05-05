# Animated Blueprint Grid Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate a theme-aware, subtly animated "blueprint" grid background into the Salamah website.

**Architecture:** A fixed, full-screen background layer using CSS `linear-gradient` and a slow keyframe animation for a "tactical drift" effect.

**Tech Stack:** HTML, CSS

---

### Task 1: Update CSS Variables and Define Animation

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Add `--grid-color` variables to both themes**

```css
/* In :root (Dark Theme) */
--grid-color: rgba(56, 189, 248, 0.05);

/* In [data-theme="light"] */
--grid-color: rgba(30, 64, 175, 0.05);
```

- [ ] **Step 2: Define the `drift` keyframe animation**

```css
@keyframes drift {
    from { background-position: 0 0; }
    to { background-position: 40px 40px; }
}
```

- [ ] **Step 3: Define the `.blueprint` class**

```css
.blueprint {
    position: fixed;
    inset: 0;
    background-image: 
        linear-gradient(var(--grid-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: -1;
    animation: drift 60s linear infinite;
}
```

- [ ] **Step 4: Commit**

```bash
git add styles/main.css
git commit -m "style: add animated blueprint grid background"
```

---

### Task 2: Update HTML Structure

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Insert the blueprint div**

Locate the `<body>` tag and insert `<div class="blueprint"></div>` as the first child.

```html
<body class="bg-navy text-light">
    <div class="blueprint"></div>
    ...
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add blueprint background element to index.html"
```

---

### Task 3: Verification

- [ ] **Step 1: Visual Verification (Manual)**
- Open `index.html` in a browser.
- Check if the grid is visible in Dark theme.
- Toggle theme to Light and check if the grid color adjusts.
- Observe for a very slow movement of the grid (40px over 60 seconds).
