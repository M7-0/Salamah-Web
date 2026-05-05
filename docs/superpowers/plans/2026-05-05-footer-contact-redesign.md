# Footer Contact Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the footer contact section as a "hardened pill" component.

**Architecture:** Wrap the footer contact link in a `contact-pill` div, update label text, and apply tactical CSS styling with responsive overrides for mobile devices.

**Tech Stack:** HTML, CSS.

---

### Task 1: Update Footer HTML

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update Footer HTML structure**

Replace the existing `footer-links` content:
```html
<div class="footer-links">
    <span>For more information:</span>
    <a href="mailto:info@salamah.me">info@salamah.me</a>
</div>
```
With the new pill structure:
```html
<div class="footer-links">
    <div class="contact-pill">
        <span class="pill-label">FOR MORE INFORMATION:</span>
        <a href="mailto:info@salamah.me">info@salamah.me</a>
    </div>
</div>
```

- [ ] **Step 2: Verify HTML change**
Open `index.html` and ensure the structure is correct.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat(ui): update footer html structure for contact pill"
```

---

### Task 2: Add Contact Pill Styles

**Files:**
- Modify: `styles/main.css`

- [ ] **Step 1: Add pill styles to CSS**

Add the following styles to `styles/main.css` before the responsive section:
```css
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
```

- [ ] **Step 2: Add responsive overrides**

Add the media query override at the end of `styles/main.css`:
```css
@media (max-width: 480px) {
    .contact-pill {
        flex-direction: column;
        gap: 5px;
        border-radius: 12px;
        width: 100%;
        text-align: center;
    }
}
```

- [ ] **Step 3: Commit**
```bash
git add styles/main.css
git commit -m "style: add styles for hardened contact pill and mobile overrides"
```

---

### Task 3: Visual Verification

**Files:**
- Test: `scripts/verify_footer.py` (New script using Playwright)

- [ ] **Step 1: Create verification script**

```python
import asyncio
from playwright.async_api import async_playwright
import os

async def verify_footer():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Load local index.html
        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")
        
        # Set viewport to 320px
        await page.set_viewport_size({"width": 320, "height": 600})
        
        # Screenshot
        os.makedirs("logs", exist_ok=True)
        await page.screenshot(path="logs/footer-verification-320.png")
        
        # Check if pill exists and is visible
        pill = await page.query_selector(".contact-pill")
        is_visible = await pill.is_visible()
        
        print(f"Pill visible: {is_visible}")
        
        # Check for overflow
        overflow = await page.evaluate("document.body.scrollWidth > document.body.clientWidth")
        print(f"Horizontal overflow: {overflow}")
        
        await browser.close()
        return is_visible and not overflow

if __name__ == "__main__":
    success = asyncio.run(verify_footer())
    if not success:
        exit(1)
```

- [ ] **Step 2: Run verification**
```bash
python scripts/verify_footer.py
```
Expected: "Pill visible: True", "Horizontal overflow: False"

- [ ] **Step 3: Cleanup and Final Commit**
```bash
rm scripts/verify_footer.py
git add logs/footer-verification-320.png
git commit -m "test: verify footer contact pill on mobile"
```
