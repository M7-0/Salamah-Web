# Mobile Symmetry & Footer Refinement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the "left-shifted" appearance on mobile and improve the footer contact section.

**Architecture:** Use a standard `padding: 0 20px` model for the mobile container to ensure perfect centering. Redesign the footer email link into a "Hardened" pill component.

**Tech Stack:** Vanilla CSS, HTML.

---

### Task 1: Symmetric Centering Fix

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Simplify mobile container logic**
Update the 768px media query to use fixed padding instead of percentage width/padding to avoid rounding shifts.

```css
/* styles/main.css */
@media (max-width: 768px) {
    .container { 
        width: 100%; 
        padding: 0 20px; 
        margin: 0;
        max-width: none;
    }
}
```

- [ ] **Step 2: Verify alignment**
Check that the layout is perfectly centered at 320px and 375px widths.

- [ ] **Step 3: Commit**
```bash
git add styles/main.css
git commit -m "style: fix mobile centering with symmetric padding"
```

### Task 2: Footer Contact Section Redesign

**Files:**
- Modify: `index.html`
- Modify: `styles/main.css`

- [ ] **Step 1: Update Footer HTML**
Wrap the email in a "contact-pill" and update the label text.

```html
<!-- index.html -->
<div class="footer-links">
    <div class="contact-pill">
        <span class="pill-label">FOR MORE INFORMATION:</span>
        <a href="mailto:info@salamah.me">info@salamah.me</a>
    </div>
</div>
```

- [ ] **Step 2: Add Pill Styles to CSS**
Add the styles for the new contact component.

```css
/* styles/main.css */
.contact-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border: 1px solid var(--border);
    border-radius: 50px;
    background: rgba(56, 189, 248, 0.05);
    transition: 0.3s;
}
.contact-pill:hover {
    border-color: var(--accent);
    background: rgba(56, 189, 248, 0.1);
}
.pill-label {
    font-size: 0.7rem;
    color: var(--text-muted);
    font-weight: 700;
    letter-spacing: 1px;
}
.contact-pill a {
    color: var(--accent) !important;
    font-size: 0.85rem !important;
    letter-spacing: 2px !important;
}

@media (max-width: 480px) {
    .contact-pill {
        flex-direction: column;
        gap: 5px;
        border-radius: 12px;
        width: 100%;
    }
}
```

- [ ] **Step 3: Verify Footer on Mobile**
Ensure the pill fits within the 320px container and looks balanced.

- [ ] **Step 4: Commit**
```bash
git add index.html styles/main.css
git commit -m "style: redesign footer contact as a hardened pill"
```

### Task 3: Final Verification

- [ ] **Step 1: Run final screenshot verification**
Use `scripts/capture_final_mobile.py` to confirm everything is centered and the footer looks good.

- [ ] **Step 2: Commit final artifacts**
```bash
git add logs/
git commit -m "chore: final verification screenshots for symmetry fix"
```
