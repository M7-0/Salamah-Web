# Shelter Ad Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a professional, authoritative landing page for the Shelter App using "The Guardian" design aesthetic.

**Architecture:** Single-page responsive website built with vanilla HTML/CSS/JS. High focus on typography, contrast, and structured layout.

**Tech Stack:** HTML5, CSS3, Vanilla JS, Google Fonts (EB Garamond, Lato).

---

### Task 1: Theme Engine & Global Styles

**Goal:** Initialize the project with a robust theme engine and global styles using the "Public Sans" font and dynamic CSS variables.

**Files:**
- Create: `index.html` (Overwrite existing)
- Create: `styles/main.css` (Overwrite existing)

- [ ] **Step 1: Set up HTML boilerplate**
  - Use `https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700;900&display=swap`.
  - Set `data-theme="dark"` on `<html>`.

- [ ] **Step 2: Initialize Dynamic CSS Variables**
  - Define variables for both light and dark themes in `styles/main.css`.
  - Implement base resets and container styles.

- [ ] **Step 3: Commit**
  - Run: `git add index.html styles/main.css`
  - Run: `git commit -m "feat: initialize theme engine and global styles"`

### Task 2: Hero Section Implementation

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Add Hero HTML structure inside #app**

```html
<section class="hero container">
    <div class="hero-content">
        <span class="label">PRODUCTION-GRADE RELIEF</span>
        <h1>Shelter: War Relief & Safety</h1>
        <p class="tagline">Integrity in Humanitarian Crisis.</p>
        <div class="actions">
            <a href="#tech" class="btn btn-primary">Explore the Tech</a>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Style the Hero section**

```css
.hero { padding: 120px 0; border-bottom: 1px solid var(--surface-slate); }
.hero .label { color: var(--accent-sky); letter-spacing: 2px; font-weight: bold; font-size: 0.9rem; font-family: var(--font-body); }
.hero h1 { font-size: 4.5rem; margin: 20px 0; line-height: 1.1; }
.hero .tagline { font-size: 1.7rem; color: var(--text-muted); max-width: 700px; margin-bottom: 40px; }
.btn { display: inline-block; padding: 18px 36px; border-radius: 4px; text-decoration: none; font-weight: bold; transition: 0.3s; font-family: var(--font-body); }
.btn-primary { background: var(--accent-sky); color: var(--bg-navy); }
.btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2); }
```

- [ ] **Step 3: Commit**

### Task 3: Problem & Solution Sections

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Add Problem/Solution HTML**

```html
<section class="dual-sections container">
    <div class="card card-problem">
        <h3>The Problem</h3>
        <p>In war zones, relief coordination is often chaotic. Fragile local states lead to donation race conditions, unauthorized data access, and failure in low-connectivity environments.</p>
    </div>
    <div class="card card-solution">
        <h3>The Solution</h3>
        <p>A hardened Flutter architecture utilizing atomic Firestore transactions for 100% data integrity, RBAC security rules for identity protection, and offline persistence for zero-downtime relief.</p>
    </div>
</section>
```

- [ ] **Step 2: Style the cards**

```css
.dual-sections { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 100px auto; }
.card { background: var(--surface-slate); padding: 50px; border-radius: 8px; border-top: 6px solid transparent; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.card-problem { border-top-color: var(--alert-red); }
.card-solution { border-top-color: var(--alert-green); }
.card h3 { font-size: 2.2rem; margin-bottom: 20px; }
.card-problem h3 { color: var(--alert-red); }
.card-solution h3 { color: var(--alert-green); }
.card p { font-size: 1.1rem; color: var(--text-muted); line-height: 1.7; }
```

- [ ] **Step 3: Commit**

### Task 4: Tech Stack Grid

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Add Tech Stack HTML**

```html
<section id="tech" class="tech-stack container">
    <h2>The High-Integrity Stack</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <span class="label">FRONTEND</span>
            <h4>Flutter</h4>
            <p>Cross-platform robustness.</p>
        </div>
        <div class="tech-card">
            <span class="label">DATABASE</span>
            <h4>Cloud Firestore</h4>
            <p>Atomic NoSQL scale.</p>
        </div>
        <div class="tech-card">
            <span class="label">SECURITY</span>
            <h4>Firebase Auth</h4>
            <p>Anonymous & RBAC Secure.</p>
        </div>
        <div class="tech-card">
            <span class="label">MAPPING</span>
            <h4>Flutter Map</h4>
            <p>Open-source resilience.</p>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Style the Tech Grid**

```css
.tech-stack { margin-bottom: 120px; padding-top: 60px; }
.tech-stack h2 { font-size: 3rem; margin-bottom: 50px; text-align: center; }
.tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }
.tech-card { border: 1px solid var(--surface-slate); padding: 40px; text-align: center; border-radius: 4px; transition: 0.4s ease; cursor: pointer; background: rgba(30, 41, 59, 0.3); }
.tech-card:hover { border-color: var(--accent-sky); background: rgba(56, 189, 248, 0.08); transform: scale(1.02); }
.tech-card .label { font-size: 0.8rem; color: var(--accent-sky); letter-spacing: 1px; font-weight: bold; }
.tech-card h4 { font-size: 1.5rem; margin-top: 15px; margin-bottom: 10px; }
.tech-card p { font-size: 0.95rem; color: var(--text-muted); }
```

- [ ] **Step 3: Commit**

### Task 5: Animations & Core Logic

**Files:**
- Create: `scripts/main.js`
- Modify: `index.html`

- [ ] **Step 1: Implement Scroll Observer**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, .tech-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
```

- [ ] **Step 2: Add CSS for animations**

```css
.fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

- [ ] **Step 3: Link script before </body>**

```html
    <script src="scripts/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Commit**

### Task 6: Responsive Design & Footer

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Add Footer HTML**

```html
<footer class="container">
    <div style="padding: 60px 0; border-top: 1px solid var(--surface-slate); text-align: center; color: var(--text-muted);">
        <p>&copy; 2026 Shelter App Project. Hardened for the front lines.</p>
    </div>
</footer>
```

- [ ] **Step 2: Finalize Mobile Styles**

```css
@media (max-width: 1024px) {
    .container { padding: 0 40px; }
}

@media (max-width: 768px) {
    .hero h1 { font-size: 3rem; }
    .hero .tagline { font-size: 1.3rem; }
    .dual-sections { grid-template-columns: 1fr; }
    .tech-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
    .hero h1 { font-size: 2.2rem; }
    .tech-grid { grid-template-columns: 1fr; }
    .btn { width: 100%; text-align: center; }
}
```

- [ ] **Step 3: Commit**
