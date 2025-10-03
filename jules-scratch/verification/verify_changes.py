from playwright.sync_api import sync_playwright, expect

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # 1. Verify Partnership Page Modal
        print("Verifying Partnership Page Modal...")
        page.goto("http://localhost:3000/partnerships/microsoft", wait_until="networkidle")
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        view_all_partners_button = page.get_by_role("button", name="View All Partners")
        view_all_partners_button.click()
        expect(page.get_by_role("heading", name="Our Partners", exact=True)).to_be_visible()
        page.screenshot(path="jules-scratch/verification/01_partnership_modal.png")
        page.locator('button[aria-label="Close modal"]').click()
        print("...Done")

        # 2. Verify Consult Page Modal
        print("Verifying Consult Page Modal...")
        page.goto("http://localhost:3000/consult", wait_until="networkidle")
        # Scroll to the bottom to find the button
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        book_demo_button = page.get_by_role("button", name="Book a Demo")
        book_demo_button.click()
        expect(page.get_by_role("heading", name="Book a Demo or Service")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02_consult_modal.png")
        page.locator('button[aria-label="Close modal"]').click()
        print("...Done")


        # 3. Verify Solution Page
        print("Verifying Solution Page...")
        page.goto("http://localhost:3000/solutions/network-solutions", wait_until="networkidle")
        partners_section = page.get_by_role("heading", name="Our Technology Partners")
        partners_section.scroll_into_view_if_needed()
        page.screenshot(path="jules-scratch/verification/03_solution_page.png")
        print("...Done")


        # 4. Verify Newsroom Page
        print("Verifying Newsroom Page...")
        page.goto("http://localhost:3000/newsroom", wait_until="networkidle")
        show_filters_button = page.get_by_role("button", name="Show Filters")
        show_filters_button.click()
        expect(page.get_by_role("button", name="Hide Filters")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/04_newsroom_filters.png")
        print("...Done")

        # 5. Verify Company Page
        print("Verifying Company Page...")
        page.goto("http://localhost:3000/company", wait_until="networkidle")
        leadership_section = page.get_by_role("heading", name="Leadership")
        leadership_section.scroll_into_view_if_needed()
        page.screenshot(path="jules-scratch/verification/05_company_page.png")
        print("...Done")

        # 6. Verify Contact Page
        print("Verifying Contact Page...")
        page.goto("http://localhost:3000/contact", wait_until="networkidle")
        contact_heading = page.get_by_role("heading", name="Contact Us")
        contact_heading.scroll_into_view_if_needed()
        page.screenshot(path="jules-scratch/verification/06_contact_page.png")
        print("...Done")

        browser.close()

if __name__ == "__main__":
    main()