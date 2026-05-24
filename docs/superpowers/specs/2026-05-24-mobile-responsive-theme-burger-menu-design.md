# Design Spec: Mobile Responsive Theme & Burger Menu

This spec outlines the implementation of a system-responsive theme for mobile users and a replacement of the theme toggle with a burger menu on mobile devices.

## 1. Requirements

- **System-Responsive Theme (Mobile Only):**
    - Detect if the user is on a mobile device (screen width <= 768px).
    - If on mobile, the website theme (`data-theme`) must follow the OS/system preference (dark or light).
    - The theme should update in real-time if the system preference changes.
    - Desktop users should retain the existing manual toggle and localStorage persistence.
- **Burger Menu (Mobile Only):**
    - Remove/hide the theme toggle button on mobile.
    - Implement a burger menu icon (3-line icon) in the navbar on mobile.
    - The burger menu should open a mobile-specific navigation overlay.
- **Contact Us Button:**
    - Add a "Contact Us" button at the end of the mobile menu.
    - This button should link to the contact section or an email address (matching the footer's `info@salamah.me`).

## 2. Technical Architecture

### 2.1 Theme Management (`scripts/theme.js`)
- **Detection Logic:** 
    ```javascript
    const isMobile = () => window.innerWidth <= 768;
    ```
- **System Sync:**
    Use `window.matchMedia('(prefers-color-scheme: dark)')` to detect preference.
- **Event Listeners:**
    - On load: If mobile, set theme based on system. If desktop, use existing manual logic.
    - Resize listener: To handle transitions between desktop and mobile views.
    - `matchMedia` listener: To update theme instantly when system preference changes on mobile.

### 2.2 Navigation Structure (`index.html`)
- **Burger Icon:**
    ```html
    <button class="burger-menu" id="burger-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
    ```
- **Mobile Menu Overlay:**
    A new `div` (e.g., `#mobile-menu`) containing clones of nav links and the "Contact Us" button.

### 2.3 Styling (`styles/main.css`)
- **Visibility:** Toggle visibility based on `@media (max-width: 768px)`.
- **Burger Animation:** CSS-based transformation.
- **Overlay Style:** Fixed position, `backdrop-filter: blur(10px)`.

## 3. Verification Plan

- **Manual Testing:** Toggle mobile view in DevTools, check theme sync, and burger menu functionality.
- **Regression:** Ensure desktop theme toggle and screenshot swapping still work.
