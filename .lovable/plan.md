

## Plan: Create Privacy Policy and Terms of Use Pages

### What We're Building
Two new pages at `/privacy` and `/terms` with standard legal content tailored to the Tomas Williams CS consultancy business. Both pages will include the Navbar and Footer for consistent navigation.

### Changes

**1. Create `src/pages/Privacy.tsx`**
- Standard privacy policy page covering: data collection, cookies, third-party services (Umami analytics, ConvertKit, Cal.com), contact info
- Uses Navbar + Footer for consistent layout
- Clean, readable typography matching the site's style

**2. Create `src/pages/Terms.tsx`**
- Standard terms of use page covering: service description, intellectual property, limitation of liability, governing law, contact info
- Same layout pattern as Privacy page

**3. Update `src/App.tsx`**
- Add routes for `/privacy` and `/terms`

**4. Update `src/components/Footer.tsx`**
- Add links to Privacy Policy and Terms of Use in the footer

