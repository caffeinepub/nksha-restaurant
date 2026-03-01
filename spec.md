# Nksha Restaurant

## Current State
New project — no existing code. 15 real photos of the restaurant have been uploaded and staged at `/assets/uploads/`.

## Requested Changes (Diff)

### Add
- 5-page luxury fine-dining website for Nksha Restaurant, Churchgate, Mumbai
- Deep emerald green + gold accent color palette, elegant serif headings
- Fully mobile-responsive layout

**Page 1 — Home**
- Full-screen hero with headline "Redefining the Indian Culinary Experience" and "Book a Table" CTA button
- Hero uses real restaurant interior/food photos as background
- WhatsApp booking form with fields: Name, Number of Guests, Date, Time
- Form submit redirects to WhatsApp API URL with dynamic values filled in

**Page 2 — About Us**
- Brand story: vision to redefine Indian food, premium Churchgate Mumbai location
- Highlight craft, authenticity, and elevated cuisine

**Page 3 — Menu**
- Tabbed/categorized menu layout with all sections:
  - Gourmet Kulcha, Soups, Chaat, Starters, Mains, Rice, Biryani, Sides, Breads, Desserts
  - Jain Menu (Soups, Appetizers, Chaat, Mains)
  - Vegan Menu
  - Holi Special
- Each item shows name, price (₹), description, vegetarian badge where applicable
- Clean elegant card or list layout

**Page 4 — Gallery**
- Masonry-style photo grid using all 15 uploaded restaurant photos
- Lightbox/enlarge on click
- Categories implied by photos: food, interiors, ambiance

**Page 5 — Contact**
- Full address: ADCB Rehman Manzil, 1A / 1B, Veer Nariman Rd, Churchgate, Mumbai, Maharashtra 400020
- Google Maps embed for the address
- Instagram link: https://www.instagram.com/nksharestaurant
- Opening hours (daily 12:30–11:30 pm, note Tuesday Holi hours may differ)
- WhatsApp booking form (same as Home)

**WhatsApp Booking Form Logic**
- On submit, build WhatsApp URL: `https://wa.me/919820475555?text=Hello%20Nksha%20Restaurant!%20I%20would%20like%20to%20book%20a%20table.%0A%0AName:%20{name}%0AGuests:%20{guests}%0ADate:%20{date}%0ATime:%20{time}`
- Dynamically replace variables with form input values, URL-encode, open in new tab

**Global**
- Sticky navigation bar with links to all 5 pages
- Footer with address, hours, Instagram, WhatsApp contact
- Smooth page transitions

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Generate a Nksha wordmark/logo image and a rich hero banner image
2. Backend: minimal Motoko canister (no DB needed — all booking via WhatsApp redirect)
3. Frontend:
   - Set up routing (React Router) with 5 pages
   - Build shared Navbar + Footer components
   - Home page: hero section + WhatsApp booking form component
   - About page: brand narrative sections
   - Menu page: category tabs + item cards with veg/non-veg badges
   - Gallery page: masonry grid with all 15 uploaded photos + lightbox
   - Contact page: address, hours, maps embed, Instagram link + booking form
4. Apply design system: emerald green + gold palette, serif headings, premium feel
5. Validate build (typecheck, lint, build pass)
