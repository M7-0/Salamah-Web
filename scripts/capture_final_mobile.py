from playwright.sync_api import sync_playwright
import os
import time

def capture(width, height, path):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': width, 'height': height})
        page = context.new_page()
        page.goto('http://localhost:8000')
        # Wait for potential animations or network idle
        page.wait_for_load_state('networkidle')
        # Wait a bit more for CSS transitions/animations
        time.sleep(1)
        
        # Ensure directory exists
        dir_name = os.path.dirname(path)
        if dir_name and not os.path.exists(dir_name):
            os.makedirs(dir_name)
            
        page.screenshot(path=path, full_page=True)
        print(f"Screenshot saved to {path} at {width}x{height}")
        browser.close()

if __name__ == '__main__':
    capture(375, 812, 'logs/mobile-final-375.png')
    capture(320, 568, 'logs/mobile-final-320.png')
