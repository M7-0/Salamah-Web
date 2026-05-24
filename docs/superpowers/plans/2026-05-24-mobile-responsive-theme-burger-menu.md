# Mobile Responsive Theme & Burger Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement system-responsive theme switching for mobile users, replace the desktop theme toggle with a burger menu on mobile, and add a "Contact Us" button to the mobile menu.

**Architecture:** JavaScript-driven theme detection for mobile (<= 768px) using `matchMedia` to sync with OS preferences. CSS media queries for responsive UI elements (hiding/showing burger icon vs. toggle).

**Tech Stack:** Vanilla JavaScript, HTML5, CSS3.

---

### Task 1: Mobile System Theme Logic

**Files:**
- Modify: `scripts/theme.js`

- [ ] **Step 1: Update theme initialization logic**
Replace the current theme initialization with logic that checks for mobile and system preference.

```javascript
// Add at the top of theme.js
const isMobile = () => window.innerWidth <= 768;

const updateThemeForSystem = (e) => {
    if (isMobile()) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        if (window.updateConsole) window.updateConsole();
    }
};

// Update DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initial theme set
    if (isMobile()) {
        const initialTheme = systemDarkMode.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', initialTheme);
    } else {
        const savedTheme = localStorage.getItem('salamah-theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
    }

    // System theme listener for mobile
    systemDarkMode.addEventListener('change', updateThemeForSystem);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Only allow manual toggle on desktop
            if (!isMobile()) {
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('salamah-theme', newTheme);
                window.updateConsole();
            }
        });
    }

    window.updateConsole(true);
    // ... rest of scroll listener
});
```

- [ ] **Step 2: Commit changes**

```bash
git add scripts/theme.js
git commit -m "feat: implement mobile system-responsive theme"
```

---

### Task 2: HTML Structure for Burger Menu & Mobile Overlay

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Burger Button and Mobile Overlay**
Insert the burger button in the navbar and the mobile menu overlay at the end of the body.

```html
<!-- Inside <nav class="navbar">, after .nav-links -->
<button class="burger-menu" id="burger-btn" aria-label="Open Menu">
    <span></span>
    <span></span>
    <span></span>
</button>

<!-- At the end of <body>, before scripts -->
<div id="mobile-menu-overlay" class="mobile-menu-overlay">
    <div class="mobile-menu-content">
        <a href="#abstract" class="mobile-link">Abstract</a>
        <a href="#objectives" class="mobile-link">Objectives</a>
        <a href="#tech-stack" class="mobile-link">Technology</a>
        <a href="#app" class="mobile-link">Result</a>
        <a href="#conclusion" class="mobile-link">Conclusion</a>
        <a href="#team" class="mobile-link">Team</a>
        <a href="mailto:info@salamah.me" class="btn btn-primary contact-btn">Contact Us</a>
    </div>
</div>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "feat: add burger menu and mobile overlay structure"
```

---

### Task 3: CSS for Responsive Navigation

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Add Burger Menu and Overlay Styles**
Add styles to handle the appearance and animation of the burger menu and overlay.

```css
/* Burger Menu */
.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.burger-menu span {
    width: 30px;
    height: 3px;
    background: var(--text);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
}

/* Mobile Overlay */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 999;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-menu-overlay.active {
    right: 0;
}

.mobile-menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.mobile-link {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.contact-btn {
    margin-top: 1rem;
}

/* Responsive Overrides */
@media (max-width: 768px) {
    .nav-links, .theme-toggle-btn {
        display: none !important;
    }
    .burger-menu {
        display: flex;
    }
}

/* Burger Animation */
.burger-menu.active span:nth-child(1) {
    transform: rotate(45deg);
}
.burger-menu.active span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
}
.burger-menu.active span:nth-child(3) {
    transform: rotate(-45deg);
}
```

- [ ] **Step 2: Commit changes**

```bash
git add styles/main.css
git commit -m "style: add responsive navigation and burger animation"
```

---

### Task 4: Mobile Menu Interaction Logic

**Files:**
- Modify: `scripts/main.js`

- [ ] **Step 1: Add toggle logic**
Implement the event listeners to open and close the mobile menu.

```javascript
// Add at the end of DOMContentLoaded listener in main.js
const burgerBtn = document.getElementById('burger-btn');
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (burgerBtn && mobileOverlay) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}
```

- [ ] **Step 2: Commit changes**

```bash
git add scripts/main.js
git commit -m "feat: add mobile menu interaction logic"
```

---

### Task 5: Final Verification

- [ ] **Step 1: Test Mobile System Theme Sync**
1. Use browser DevTools to simulate mobile device (e.g., iPhone 12).
2. Use "Sensors" tab or system settings to switch between Dark and Light mode.
3. Verify `data-theme` updates and console screenshots change.

- [ ] **Step 2: Test Burger Menu**
1. On mobile view, verify theme toggle is hidden and burger icon is visible.
2. Click burger icon, verify overlay opens with "Contact Us" button.
3. Click a link, verify it scrolls to section and menu closes.

- [ ] **Step 3: Test Desktop Stability**
1. Switch back to desktop view.
2. Verify nav links and theme toggle are back.
3. Verify manual toggle still works.
