# Elevator Pitch Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new "Elevator Pitch" section to the Salamah-Web landing page with two responsive video cards (English and Arabic).

**Architecture:** A new CSS Grid-based section in `index.html` styled in `styles/main.css`. The grid will be 2 columns on desktop and 1 column on mobile.

**Tech Stack:** HTML5, CSS3 (Vanilla CSS).

---

### Task 1: Add CSS Styles

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Add the Pitch Section styles**
Append the following styles to the end of `styles/main.css` (before the responsive media queries if possible, or at the end):

```css
/* Pitch Section */
.pitch-section {
    padding: 100px 0;
    border-top: 1px solid var(--border);
    text-align: center;
}

.pitch-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-top: 40px;
}

.pitch-card {
    background: var(--surface);
    padding: 20px;
    border: 2px solid var(--border);
    border-radius: 16px;
    transition: 0.4s;
}

.pitch-card:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
}

.pitch-card h3 {
    margin-bottom: 20px;
    color: var(--accent);
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.pitch-video {
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

- [ ] **Step 2: Add responsive rules for the Pitch Grid**
Locate the `@media (max-width: 768px)` block in `styles/main.css` and add the following inside it:

```css
    .pitch-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
```

### Task 2: Add HTML Section

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Insert the Pitch Section**
Locate the end of the `dashboard-preview` section (id="app") and insert the following code before the `<div class="hero-actions fade-in">` block:

```html
        <section id="pitch" class="pitch-section container">
            <h2 class="section-title">Elevator Pitch</h2>
            <div class="pitch-grid fade-in">
                <div class="pitch-card">
                    <h3>English Version</h3>
                    <video controls width="100%" class="pitch-video">
                        <source src="English-Elevator-Salamah-APP.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="pitch-card">
                    <h3>Arabic Version</h3>
                    <video controls width="100%" class="pitch-video">
                        <source src="ARABIC-Elevator-Salamah-APP.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
```

- [ ] **Step 2: Update Navigation (Optional but recommended)**
Add a link to the "Pitch" section in the `.nav-links` div if appropriate.
Locate:
```html
<a href="#app">Result</a>
```
Add after it:
```html
<a href="#pitch">Pitch</a>
```

### Task 3: Verification and Commit

- [ ] **Step 1: Verify layout**
Open `index.html` in a browser and verify the "Elevator Pitch" section appears correctly below the "Result" section. Check hover effects on cards.

- [ ] **Step 2: Verify responsiveness**
Resize the browser window to mobile width (below 768px) and verify the videos stack vertically.

- [ ] **Step 3: Commit changes**

Run:
```bash
git add index.html styles/main.css
git commit -m "feat: add elevator pitch section with English and Arabic videos"
```
