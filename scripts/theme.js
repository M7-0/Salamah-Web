/**
 * State Management & Image Mapping for Multi-User Console
 * Handles 5 Roles, 8 Pages, and Dark/Light theme swapping.
 * Mapped to renamed screenshot files.
 */

// Global State
window.currentRole = 'guest';
window.currentPage = 'dashboard';

// Helpers
const isMobile = () => window.innerWidth <= 768;

const updateThemeForSystem = (e) => {
    if (isMobile()) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        if (window.updateConsole) window.updateConsole();
    }
};

// Shared pages that use the Auth&Shared folder
const sharedPages = ['map', 'signin', 'signup', 'splash'];

// Full mapping for Dark/Light modes
const mapping = {
    dark: {
        ext: '.jpeg',
        path: 'Screenshots/Darkmode/',
        shared: {
            folder: 'Auth&Shared/',
            pages: {
                'map': 'map',
                'signin': 'sign-in',
                'signup': 'sign-up',
                'splash': 'splash'
            }
        },
        roles: {
            'guest': { folder: 'Guest/', pages: { 'dashboard': 'dashboard', 'tasks': 'donation', 'profile': 'profile', 'announcements': 'announcement' } },
            'refugee': { folder: 'Refugee/', pages: { 'dashboard': 'dashboard', 'tasks': 'donation', 'profile': 'profile', 'announcements': 'announcement' } },
            'volunteer': { folder: 'Volunteer/', pages: { 'dashboard': 'dashboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcements' } },
            'shelter-admin': { folder: 'Shelter-Admin/', pages: { 'dashboard': 'dashboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcement' } },
            'super-admin': { folder: 'Super-Admin/', pages: { 'dashboard': 'dashboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcement' } }
        }
    },
    light: {
        ext: '.jpg',
        path: 'Screenshots/Lightmode/',
        shared: {
            folder: 'Auth & Shared/',
            pages: {
                'map': 'map',
                'signin': 'sign-in',
                'signup': 'sign-up',
                'splash': 'splash'
            }
        },
        roles: {
            'guest': { folder: 'Guest/', pages: { 'dashboard': 'Dashboard', 'tasks': 'Donation', 'profile': 'profile', 'announcements': 'Announcement' } },
            'refugee': { folder: 'Refugee/', pages: { 'dashboard': 'dashboard', 'tasks': 'donation', 'profile': 'profile', 'announcements': 'announcement' } },
            'volunteer': { folder: 'Volunteer/', pages: { 'dashboard': 'dashbboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcement' } },
            'shelter-admin': { folder: 'Shelter-Admin/', pages: { 'dashboard': 'dashboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcement' } },
            'super-admin': { folder: 'Super-Admin/', pages: { 'dashboard': 'dashboard', 'tasks': 'tasks', 'profile': 'profile', 'announcements': 'announcements' } }
        }
    }
};

/**
 * Updates the console display image based on current state (Role, Page, Theme)
 */
window.updateConsole = function(isInitial = false) {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const display = document.getElementById('console-display');
    if (!display) {
        console.error('Console display image not found');
        return;
    }

    let src = '';
    const isShared = sharedPages.includes(window.currentPage);
    const config = mapping[theme];

    if (isShared) {
        src = config.path + config.shared.folder + config.shared.pages[window.currentPage] + config.ext;
    } else {
        const roleData = config.roles[window.currentRole];
        const fileName = roleData.pages[window.currentPage];
        src = config.path + roleData.folder + fileName + config.ext;
    }

    if (isInitial) {
        display.src = src;
        display.style.opacity = '1';
    } else {
        display.style.opacity = '0';
        setTimeout(() => {
            display.src = src;
            display.onload = () => {
                display.style.opacity = '1';
            };
            setTimeout(() => { display.style.opacity = '1'; }, 400);
        }, 150);
    }
};

/**
 * Sets the active role and updates display
 */
window.setRole = function(role, btn) {
    window.currentRole = role;
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Update button labels for Guest and Refugee
    const btnTasks = document.getElementById('btn-tasks');
    const btnNews = document.getElementById('btn-news');
    
    if (role === 'guest' || role === 'refugee') {
        if (btnTasks) btnTasks.innerText = 'Donations';
        if (btnNews) btnNews.innerText = 'Announce';
    } else {
        if (btnTasks) btnTasks.innerText = 'Tasks';
        if (btnNews) btnNews.innerText = 'News';
    }
    
    window.updateConsole();
};

/**
 * Sets the active page and updates display
 */
window.setPage = function(page, btn) {
    window.currentPage = page;
    document.querySelectorAll('.page-link').forEach(l => l.classList.remove('active'));
    if (btn) btn.classList.add('active');
    window.updateConsole();
};

/**
 * Theme Toggle & Initial Load
 */
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

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.75rem 0';
                navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            } else {
                navbar.style.padding = '1.25rem 0';
                navbar.style.boxShadow = 'none';
            }
        }
    });
});
