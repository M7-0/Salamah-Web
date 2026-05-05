from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # iPhone 13 mini dimensions
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()
        page.goto('http://localhost:8000')
        page.wait_for_load_state('networkidle')
        
        # Ensure logs directory exists
        if not os.path.exists('logs'):
            os.makedirs('logs')
            
        page.screenshot(path='logs/mobile-baseline-375.png', full_page=True)
        print("Screenshot saved to logs/mobile-baseline-375.png")
        browser.close()

if __name__ == '__main__':
    run()
