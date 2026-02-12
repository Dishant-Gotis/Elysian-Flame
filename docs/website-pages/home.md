# Homepage Specification - Elysian Flame

## 1. Page Purpose
The homepage serves as the primary landing page and brand introduction for Elysian Flame, a handmade scented soy candle business. It must immediately communicate the brand's natural luxury positioning, showcase hero products, and guide visitors to key conversion paths (shop collections, gift sets, featured products).

## 2. Business Goal
- Establish brand identity and natural luxury positioning within 3 seconds of page load
- Drive 40%+ visitors to product collection pages
- Achieve 15%+ add-to-cart conversion from featured products
- Capture 5%+ email subscriptions through newsletter signup
- Communicate unique value proposition: handmade, natural soy, botanical scents

## 3. Target User Intent
**Primary personas:**
- Gift shoppers seeking premium, artisanal presents (35%)
- Home decor enthusiasts looking for luxury ambiance products (40%)
- Wellness-focused customers seeking natural, eco-friendly candles (25%)

**User questions to answer:**
- What makes these candles special/different?
- What scents are available?
- Are they truly handmade and natural?
- What's the price range?
- Can I buy gift sets?

## 4. Theme & Visual Rules

**Brand Theme:** Natural Luxury + Botanical Premium + Clean Ecommerce + Soft Modern

**Color Palette (PRIMARY - use in order of prominence):**
- `#6CA651` - Primary green (CTAs, headers, emphasis) - 40% usage
- `#BBCB2E` - Accent lime (secondary CTAs, highlights) - 20% usage
- `#839705` - Deep olive (text accents, borders) - 15% usage
- `#6B7445` - Muted sage (backgrounds, subtle elements) - 25% usage

**Supporting Colors:**
- White `#FFFFFF` - backgrounds, breathing space
- Cream `#FAF8F5` - alternate section backgrounds
- Charcoal `#2C2C2C` - primary text
- Medium Grey `#666666` - secondary text

**Typography:**
- Headings: Playfair Display (serif, elegant) or Cormorant Garamond
- Body: Inter or Lato (clean sans-serif)
- H1: 48px desktop / 32px mobile, color `#2C2C2C`
- H2: 36px desktop / 28px mobile, color `#6CA651`
- Body: 16px, line-height 1.6, color `#666666`

**Visual Style:**
- Botanical illustrations/line art in green palette
- High-quality product photography on white/cream backgrounds
- Generous white space (min 80px section padding)
- Soft shadows: `box-shadow: 0 4px 12px rgba(108, 166, 81, 0.1)`
- Border radius: 8px for cards, 4px for buttons
- Subtle gradient overlays using green palette
- Organic shapes (curved edges, flowing layouts)

## 5. Layout Structure (Top → Bottom)

### Section 1: Navigation Header (Sticky)
- **Height:** 80px desktop / 64px mobile
- **Background:** White with subtle shadow on scroll
- **Content:** Logo left, nav center, icons right (search, account, cart)

### Section 2: Hero Banner
- **Height:** 600px desktop / 500px mobile
- **Background:** Gradient overlay on lifestyle image (`#6CA651` to transparent)
- **Content:** H1 headline, subheadline, dual CTAs, trust badges

### Section 3: Value Propositions
- **Height:** Auto (min 300px)
- **Layout:** 3-column grid desktop / 1-column mobile
- **Background:** Cream `#FAF8F5`

### Section 4: Featured Collections
- **Height:** Auto
- **Layout:** 2-column grid (Collection cards)
- **Background:** White

### Section 5: Bestsellers Carousel
- **Height:** Auto (600px product showcase)
- **Layout:** Horizontal scrolling cards
- **Background:** Light gradient `#6B7445` 5% opacity

### Section 6: Brand Story Teaser
- **Height:** 500px desktop / auto mobile
- **Layout:** Split 50/50 (image left, text right)
- **Background:** White

### Section 7: Instagram Feed
- **Height:** Auto
- **Layout:** 4-column grid desktop / 2-column mobile
- **Background:** Cream

### Section 8: Newsletter Signup
- **Height:** 400px
- **Background:** `#6CA651` with botanical pattern overlay
- **Content:** Centered form, white text

### Section 9: Footer
- **Height:** Auto (min 350px)
- **Background:** `#2C2C2C`
- **Content:** 4-column layout (About, Shop, Support, Newsletter)

## 6. Component List

1. **NavBar** - Sticky navigation header
2. **HeroBanner** - Full-width hero section
3. **ValuePropCard** - Icon + heading + description card
4. **CollectionCard** - Large image card with overlay text
5. **ProductCard** - Product image, title, price, quick-add
6. **ProductCarousel** - Horizontal scrolling product showcase
7. **BrandStorySection** - Split image/text content block
8. **InstagramGrid** - Social media feed integration
9. **NewsletterForm** - Email capture form with validation
10. **Footer** - Multi-column footer with links
11. **TrustBadge** - Icon + text micro-component
12. **CTAButton** - Primary/secondary button component
13. **SearchBar** - Overlay search with autocomplete
14. **CartDrawer** - Slide-out cart preview
15. **Breadcrumbs** - Navigation path indicator

## 7. Component Specifications

### 7.1 NavBar Component

**Content:**
- Logo (SVG): "Elysian Flame" wordmark + flame icon (left aligned)
- Navigation links (center): Shop, Collections, Gift Sets, About, Contact
- Utility icons (right): Search icon, Account icon, Cart icon with badge

**Behavior:**
- Fixed position on scroll, adds shadow (`0 2px 8px rgba(0,0,0,0.08)`)
- Logo width: 180px desktop / 140px mobile
- Nav links hover: underline with `#6CA651`, 0.2s transition
- Cart badge shows item count (red `#D32F2F` circle, white text)
- Mobile: Hamburger menu (3 lines → X animation)

**States:**
- Default: Transparent background (hero overlay)
- Scrolled: White background with shadow
- Mobile menu open: Full-screen overlay with links
- Search active: Search bar expands, dims background

**Interactions:**
- Click logo → Navigate to home
- Click nav link → Navigate to page
- Click search → Open search overlay
- Click cart → Open cart drawer (slide from right)
- Click account → Dropdown menu (Login/Register or My Account/Logout)

**Data Required:**
- Navigation menu items (label, URL, order)
- Cart item count (API)
- User authentication state

### 7.2 HeroBanner Component

**Content:**
- Background image: Lifestyle shot (candles in botanical setting)
- Overlay gradient: `linear-gradient(135deg, rgba(108,166,81,0.7) 0%, transparent 100%)`
- H1: "Hand-Poured Botanical Luxury" (white text)
- Subheading: "Discover our collection of 100% natural soy candles, infused with premium essential oils" (cream text)
- Primary CTA: "Shop Collections" (white bg, green text)
- Secondary CTA: "Explore Gift Sets" (outlined, white border/text)
- Trust badges row: "100% Soy | Hand-Poured | Essential Oils | Eco-Friendly"

**Behavior:**
- Parallax scroll effect on background image (0.5 speed)
- CTAs hover: Primary lifts 2px with shadow, Secondary fills with white (text becomes green)
- Fade-in animation on page load (headline → subhead → CTAs, 0.3s stagger)
- Auto-rotating headlines every 6s (3 variations)

**States:**
- Loading: Skeleton loader with grey blocks
- Loaded: Full content with animations
- Mobile: Reduced height (500px), centered text, stacked CTAs

**Interactions:**
- Primary CTA click → Navigate to /collections
- Secondary CTA click → Navigate to /gift-sets
- Swipe left/right (mobile) → Cycle through hero variations

**Data Required:**
- Hero content array: { image_url, headline, subheadline, cta_primary, cta_secondary }
- Current active slide index

### 7.3 ValuePropCard Component

**Content (3 cards):**

**Card 1:**
- Icon: Leaf (SVG, `#6CA651`)
- Heading: "100% Natural Soy"
- Description: "Eco-friendly, clean-burning candles made from sustainable soy wax"

**Card 2:**
- Icon: Hand holding candle (SVG, `#BBCB2E`)
- Heading: "Artisan Crafted"
- Description: "Each candle is hand-poured with care in small batches for quality"

**Card 3:**
- Icon: Botanical sprig (SVG, `#839705`)
- Heading: "Premium Fragrances"
- Description: "Unique blends using pure essential oils and natural botanicals"

**Behavior:**
- Hover: Card lifts 4px, shadow intensifies
- Icon rotates 5° on hover
- Fade-in on scroll into viewport (IntersectionObserver)

**States:**
- Default: White card, subtle shadow
- Hover: Elevated with stronger shadow
- Mobile: Full-width cards, stacked vertically

**Styling:**
- Card background: White
- Border: 1px solid `#F0F0F0`
- Border-radius: 12px
- Padding: 40px
- Icon size: 64px
- Gap between icon and text: 24px

### 7.4 ProductCard Component

**Content:**
- Product image (square, 1:1 ratio)
- Product name (e.g., "Lavender Mist Candle")
- Scent note (e.g., "Calming & Floral")
- Price (e.g., "$24.99")
- Star rating (5 stars, filled based on average)
- Review count (e.g., "(127)")
- Quick Add button (appears on hover)

**Behavior:**
- Image zoom on hover (1.05x scale, 0.3s ease)
- Quick Add button slides up from bottom on hover
- Click image/title → Navigate to product detail page
- Click Add button → Show mini cart confirmation toast

**States:**
- Default: Static image, visible text
- Hover: Zoomed image, Quick Add visible
- Out of stock: Greyed out, "Out of Stock" badge
- Sale: Red "Sale" badge, strikethrough original price
- Loading: Skeleton with pulsing grey blocks

**Interactions:**
- Click card → /product/{slug}
- Click Quick Add → Add to cart (API call), show toast
- Click heart icon → Add to wishlist (requires auth)

**Styling:**
- Card background: White
- Border: None
- Border-radius: 8px
- Image container: Overflow hidden for zoom
- Quick Add button: `#6CA651` bg, white text, full-width
- Shadow: Subtle on default, stronger on hover

**Data Required:**
```json
{
  "id": "product_123",
  "name": "Lavender Mist Candle",
  "slug": "lavender-mist",
  "scent_note": "Calming & Floral",
  "price": 24.99,
  "sale_price": null,
  "image_url": "/images/lavender.jpg",
  "rating": 4.8,
  "review_count": 127,
  "in_stock": true,
  "is_new": false
}
```

### 7.5 ProductCarousel Component

**Content:**
- Section heading: "Bestsellers" (H2, `#6CA651`)
- Subheading: "Our most-loved scents"
- Horizontal scrolling row of ProductCards (minimum 6)
- Navigation arrows (left/right)
- Scroll indicator dots

**Behavior:**
- Auto-scroll every 5s (pauses on hover)
- Click arrow → Scroll 3 cards (smooth animation)
- Swipe gesture support (mobile/tablet)
- Lazy load images as they approach viewport
- Snap to card boundaries on scroll

**States:**
- Loading: Skeleton cards (3 visible)
- Loaded: Full product cards
- First card: Left arrow disabled
- Last card: Right arrow disabled
- Mobile: Single card view with dots

**Interactions:**
- Click arrow → Scroll carousel
- Swipe left/right → Navigate cards
- Click product → Navigate to detail
- Scroll indicator click → Jump to position

**Styling:**
- Container: Full-width with padding
- Cards: 340px width, 16px gap
- Arrows: Circular, `#6CA651` bg, white icon, positioned outside on desktop
- Scroll indicators: 8px circles, `#6B7445` default, `#6CA651` active

**Data Required:**
- Array of bestseller products (same schema as ProductCard)
- Carousel state: current_index, total_items

### 7.6 NewsletterForm Component

**Content:**
- Section background: `#6CA651` with botanical pattern overlay (opacity 0.1)
- Heading: "Join Our Community" (H2, white, centered)
- Subheading: "Get 10% off your first order plus candle care tips" (white, centered)
- Email input field (placeholder: "Enter your email")
- Submit button: "Subscribe"
- Privacy note: "We respect your privacy. Unsubscribe anytime." (small text)
- Success visual: Checkmark icon + "Welcome! Check your inbox"

**Behavior:**
- Input focus: White border glow
- Submit → Validate → API call → Show success/error
- Success: Form replaced with confirmation message (3s), then fade back to form
- Error: Shake animation, red border, error text below input

**States:**
- Default: Empty input, active button
- Input focused: Border highlight
- Submitting: Button shows spinner, disabled
- Success: Green checkmark, confirmation message
- Error: Red border, error message text

**Validation Rules:**
- Email required: "Email is required"
- Valid email format: "Please enter a valid email"
- Already subscribed: "You're already on our list!"
- Server error: "Something went wrong. Please try again."

**Interactions:**
- Type in input → Enable/disable button based on validation
- Click submit → Validate → API POST → Handle response
- Press Enter in input → Submit form

**Styling:**
- Container: Centered, max-width 600px
- Input: White bg, rounded (8px), 48px height, 16px font
- Button: `#2C2C2C` bg, white text, 48px height, hover lifts 2px
- Text: All white, heading 32px, subheading 16px

**Data Required:**
- Input: email address
- API endpoint: POST /api/newsletter/subscribe
- Response: { success: boolean, message: string }

### 7.7 CollectionCard Component

**Content:**
- Large image (16:9 ratio): Collection hero image
- Gradient overlay: `linear-gradient(to top, rgba(44,44,44,0.6) 0%, transparent 100%)`
- Collection name (H3, white, bottom-left overlay)
- Product count (e.g., "12 products", white, smaller)
- CTA text: "Shop Now" (appears on hover)

**Behavior:**
- Image subtle zoom on hover (1.08x, 0.4s ease)
- CTA slides up from bottom on hover
- Gradient darkens slightly on hover
- Click anywhere on card → Navigate to collection

**States:**
- Default: Static image, visible title
- Hover: Zoomed image, CTA visible, darker overlay
- Loading: Grey placeholder with skeleton text
- Mobile: Always show CTA (no hover state)

**Interactions:**
- Click card → Navigate to /collections/{slug}
- Touch on mobile → Navigate immediately

**Styling:**
- Container: Overflow hidden for zoom effect
- Border-radius: 12px
- Aspect ratio: 16:9 enforced
- Shadow: `0 4px 12px rgba(0,0,0,0.1)`
- Title: 28px, bold, positioned absolute bottom 32px left 32px
- CTA: White bg, green text, rounded button

**Data Required:**
```json
{
  "id": "collection_1",
  "name": "Floral Collection",
  "slug": "floral",
  "image_url": "/images/collections/floral.jpg",
  "product_count": 12
}
```

### 7.8 Footer Component

**Layout:** 4 columns desktop / 1 column stacked mobile

**Column 1: About**
- Logo (white version)
- Tagline: "Hand-poured botanical luxury for your home"
- Social icons: Instagram, Facebook, Pinterest (white, hover `#6CA651`)

**Column 2: Shop**
- All Collections
- Bestsellers
- Gift Sets
- New Arrivals
- Sale

**Column 3: Support**
- Contact Us
- FAQs
- Shipping & Returns
- Candle Care Guide
- Track Order

**Column 4: Newsletter** (repeated signup)
- Small heading: "Stay Connected"
- Minimal email form
- Submit button

**Bottom Bar:**
- Copyright: "© 2024 Elysian Flame. All rights reserved."
- Payment icons: Visa, Mastercard, Amex, PayPal
- Links: Privacy Policy | Terms of Service | Accessibility

**Styling:**
- Background: `#2C2C2C`
- Text: `#CCCCCC`, links `#FFFFFF`
- Link hover: `#6CA651`, underline
- Padding: 64px top/bottom, 32px left/right
- Column gap: 48px
- Bottom border above bottom bar: 1px solid `#444444`

**Behavior:**
- Links hover: Color change + underline
- Social icons hover: Scale 1.1, color change
- Newsletter submit: Same validation as main form

## 8. Data Fields Required

**Global/Config:**
- Site name, logo URLs
- Navigation menu structure
- Social media links
- Contact information
- Brand colors (theme object)

**Homepage Specific:**
- Hero slides (3 variations): image, headline, subheadline, CTAs
- Value propositions (3): icon, heading, description
- Featured collections (2-4): id, name, slug, image, product_count
- Bestseller products (6-8): full product schema
- Brand story teaser: heading, text, image, CTA
- Instagram feed: latest 8 posts (image, link)
- Newsletter API endpoint
- Trust badges content

**Product Schema:**
```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "description": "string",
  "price": "number",
  "sale_price": "number | null",
  "image_url": "string",
  "image_gallery": ["string"],
  "scent_note": "string",
  "category": "string",
  "collection": "string",
  "rating": "number",
  "review_count": "number",
  "in_stock": "boolean",
  "stock_quantity": "number",
  "weight": "string",
  "burn_time": "string",
  "dimensions": "object",
  "ingredients": ["string"],
  "is_new": "boolean",
  "is_featured": "boolean",
  "created_at": "timestamp"
}
```

## 9. API/Data Dependencies

**Required Endpoints:**

1. **GET /api/homepage**
   - Returns: Hero content, featured collections, bestsellers, brand story
   - Cache: 1 hour
   - Fallback: Static JSON file

2. **GET /api/products/bestsellers**
   - Returns: Array of top 8 products by sales
   - Params: limit=8
   - Cache: 30 minutes

3. **GET /api/collections/featured**
   - Returns: Featured collection objects
   - Params: limit=4
   - Cache: 1 hour

4. **POST /api/newsletter/subscribe**
   - Body: { email: string, source: 'homepage' }
   - Returns: { success: boolean, message: string }
   - Rate limit: 3 attempts per IP per hour

5. **GET /api/instagram/feed**
   - Returns: Latest 8 Instagram posts
   - External API: Instagram Basic Display
   - Cache: 6 hours
   - Fallback: Placeholder images

6. **GET /api/cart**
   - Returns: Current cart state (item count, items)
   - Auth: Session-based or JWT
   - Real-time: Updates on cart actions

7. **POST /api/cart/add**
   - Body: { product_id, quantity, variant }
   - Returns: Updated cart object
   - Auth: Optional (guest carts supported)

**Data Loading Strategy:**
- Server-side render (SSR) for hero, collections (SEO)
- Client-side fetch for bestsellers, Instagram (hydration)
- Lazy load images below fold (Intersection Observer)
- Prefetch collection/product pages on card hover

## 10. User Interactions

**Primary User Flows:**

### Flow 1: Browse → View Product → Add to Cart
1. User lands on homepage
2. User scrolls to bestsellers carousel
3. User hovers product card (sees Quick Add)
4. User clicks Quick Add
5. Toast confirmation appears
6. Cart badge updates (+1)
7. User continues browsing OR clicks cart to checkout

### Flow 2: Collection Discovery
1. User sees featured collection cards
2. User clicks "Floral Collection" card
3. Navigate to /collections/floral
4. (Collection page loads - separate spec)

### Flow 3: Newsletter Signup
1. User scrolls to newsletter section
2. User enters email
3. User clicks Subscribe
4. Form validates
5. API call → Success
6. Confirmation message shows
7. Email appears in marketing database
8. Welcome email sent (external system)

### Flow 4: Search
1. User clicks search icon in nav
2. Overlay opens with input field
3. User types query (e.g., "lavender")
4. Autocomplete suggests products/collections
5. User clicks suggestion OR presses enter
6. Navigate to search results OR product page

**Interaction States:**
- Hover states: All interactive elements (buttons, cards, links)
- Focus states: Keyboard navigation support (Tab order)
- Active states: Buttons show pressed state
- Loading states: Spinners for async actions
- Disabled states: Greyed out, cursor not-allowed

**Micro-interactions:**
- Button click: Subtle scale down (0.98x), bounce back
- Icon hover: Color change + small rotation/scale
- Image hover: Zoom + shadow increase
- Form input: Border glow on focus
- Toast notifications: Slide in from top-right, auto-dismiss

## 11. Validation Rules

**Newsletter Form:**
- Email required: Cannot be empty
- Email format: Must match regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Email length: Max 255 characters
- No special chars in name portion (XSS protection)
- Already subscribed: Check against database, show friendly message

**Search Input:**
- Min length: 2 characters (prevent single-letter searches)
- Max length: 100 characters
- Sanitize input: Remove HTML tags, escape special chars
- Debounce: 300ms delay before autocomplete API call

**Cart Quick Add:**
- Product ID required
- Quantity default: 1
- Max quantity per add: 10
- Stock check: Must be in stock
- Variant selection: Required for multi-variant products (N/A on homepage)

**Global Form Rules:**
- Trim whitespace from inputs
- Convert email to lowercase
- Prevent rapid submission (button disable)
- CSRF token validation (server-side)
- Rate limiting: Max 10 submissions per minute per IP

## 12. Error States

**API Errors:**

### Newsletter Subscribe Error
- **Display:** Red border on input + error text below
- **Messages:**
  - Network error: "Connection failed. Please check your internet and try again."
  - Server error: "We're having technical difficulties. Please try again later."
  - Invalid email: "Please enter a valid email address."
  - Already subscribed: "Good news—you're already subscribed!"
  - Rate limited: "Too many attempts. Please wait a minute and try again."
- **Action:** Allow retry, button re-enables after 3s

### Product Load Error
- **Display:** Error card replacing product cards
- **Message:** "We couldn't load products right now."
- **Action:** Retry button → Reload data
- **Fallback:** Show cached products if available

### Image Load Error
- **Display:** Placeholder image (botanical icon on green bg)
- **Alt text:** Product/collection name
- **No broken image icon:** CSS hide default

### Cart Add Error
- **Display:** Toast notification (red, top-right)
- **Messages:**
  - Out of stock: "Sorry, this item is out of stock."
  - Server error: "Couldn't add to cart. Please try again."
  - Auth required: "Please log in to add items to cart." (if applicable)
- **Action:** Toast auto-dismisses after 4s, X button to close immediately

**Page Load Error:**
- **Critical failure:** Show minimal page with logo, error message, retry button
- **Partial failure:** Load sections that succeed, show error blocks for failed sections
- **No JavaScript:** Progressive enhancement - basic content visible, enhanced features graceful degradation

## 13. Empty States

**Bestsellers Carousel Empty:**
- **Display:** Centered message card
- **Icon:** Candle outline (grey)
- **Heading:** "No bestsellers yet"
- **Message:** "Check back soon for our top-rated candles!"
- **CTA:** "Explore All Products" button → /collections/all

**Instagram Feed Empty:**
- **Display:** 4 placeholder cards
- **Icon:** Instagram icon (grey)
- **Message:** "Follow us @elysianflame for inspiration"
- **CTA:** "Follow on Instagram" button (opens Instagram in new tab)

**Search No Results:**
- **Display:** Centered in search overlay
- **Icon:** Magnifying glass (grey)
- **Heading:** "No results for '{query}'"
- **Suggestions:**
  - "Check your spelling"
  - "Try different keywords"
  - "Browse our collections below"
- **CTA:** Show popular products/collections

**Cart Empty (in drawer):**
- **Display:** Centered in cart drawer
- **Icon:** Empty cart illustration
- **Message:** "Your cart is empty"
- **CTA:** "Start Shopping" button → Close drawer, scroll to bestsellers

**General Empty State Styling:**
- Grey monotone icons (#CCCCCC)
- Centered alignment
- Generous padding (80px vertical)
- Subtle background (#FAFAFA)
- Clear CTA in brand color

## 14. Mobile Layout Rules

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Mobile Transformations:**

**Navigation:**
- Hamburger menu (3 lines, top-right)
- Full-screen overlay when open
- Links stack vertically, large touch targets (56px height)
- Search moves to top of menu
- Account/cart stay in header

**Hero Banner:**
- Height: 500px (from 600px)
- Headline: 32px (from 48px)
- Subheadline: 16px (from 18px)
- CTAs stack vertically, full-width
- Parallax disabled (performance)

**Value Props:**
- 3 cards become full-width, stacked
- Icons reduce to 48px (from 64px)
- Padding reduces to 24px (from 40px)

**Featured Collections:**
- 2 cards become single column
- Cards maintain 16:9 aspect ratio
- CTA always visible (no hover state)

**Bestsellers Carousel:**
- Show 1 card at a time, full-width minus 32px padding
- Swipe gestures primary navigation
- Dots below for position indication
- Arrows hidden (swipe only)

**Brand Story:**
- Split layout becomes stacked (image on top, text below)
- Image height: 300px
- Text padding: 32px all sides

**Instagram Grid:**
- 4 columns → 2 columns
- Square images maintained
- Gap reduces to 8px (from 16px)

**Newsletter:**
- Heading: 28px (from 32px)
- Input and button stack vertically (full-width)

**Footer:**
- 4 columns → Single column, stacked
- Each section collapsible accordion (optional)
- Social icons centered at top
- Bottom bar text stacks (copyright on top, payments below, links below)

**Touch Targets:**
- Minimum 44x44px (Apple guideline)
- Increase padding on buttons/links
- Add visual feedback on tap (color change)

**Performance:**
- Lazy load all images below fold
- Intersection Observer threshold: 200px before viewport
- Disable parallax and complex animations
- Reduce image sizes (serve mobile-optimized)

## 15. Accessibility Rules

**WCAG 2.1 AA Compliance:**

**Color Contrast:**
- Text on `#6CA651`: Use white (#FFFFFF) - Ratio 3.52:1 (Large text only)
- Text on white: Use `#2C2C2C` - Ratio 12.6:1 ✓
- Text on `#2C2C2C`: Use white - Ratio 12.6:1 ✓
- Links on white: Use `#6CA651` for large, `#839705` for body (4.8:1) ✓

**Keyboard Navigation:**
- Tab order: Logo → Nav links → Search → Account → Cart → Hero CTAs → Product cards → Newsletter → Footer links
- Focus indicators: 3px solid `#6CA651` outline, 2px offset
- Skip to content link (visually hidden, appears on focus)
- Escape key closes: Search overlay, cart drawer, mobile menu

**Screen Reader Support:**
- All images: Descriptive alt text (e.g., "Lavender Mist soy candle in glass jar with botanical label")
- Decorative images: `alt=""` or `role="presentation"`
- Icon buttons: `aria-label` (e.g., "Search", "Open cart", "Close menu")
- Live regions: Cart count updates, toast notifications (`aria-live="polite"`)
- Form labels: Visible or `aria-label` for all inputs
- Headings: Proper hierarchy (single H1, nested H2-H6)

**ARIA Attributes:**
- Carousel: `role="region"`, `aria-roledescription="carousel"`, `aria-label="Bestselling products"`
- Carousel items: `role="group"`, `aria-roledescription="slide"`, `aria-label="Slide 1 of 8"`
- Navigation: `<nav aria-label="Primary">`
- Footer nav: `<nav aria-label="Footer">`
- Form errors: `aria-invalid="true"`, `aria-describedby="error-id"`
- Disabled buttons: `aria-disabled="true"`

**Focus Management:**
- When opening overlay (search, cart): Move focus to first interactive element
- When closing overlay: Return focus to trigger element
- Trap focus within modals (Tab cycles through modal elements only)

**Motion & Animation:**
- Respect `prefers-reduced-motion` media query
- If set: Disable parallax, carousels auto-scroll, zoom effects, slide animations
- Keep instant state changes (color, opacity)

**Semantic HTML:**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Buttons for actions: `<button>` not `<div onclick>`
- Links for navigation: `<a href>` not `<span onclick>`
- Lists for navigation: `<ul>` + `<li>`
- Forms: `<form>`, `<label>`, `<input>`, `<button type="submit">`

## 16. SEO Fields

**Meta Tags:**
```html
<title>Elysian Flame | Handmade Soy Candles | Natural Luxury Home Fragrance</title>
<meta name="description" content="Discover Elysian Flame's collection of hand-poured, 100% natural soy candles. Premium botanical scents including lavender, rose, eucalyptus, and more. Eco-friendly luxury for your home.">
<meta name="keywords" content="soy candles, handmade candles, natural candles, essential oil candles, luxury candles, eco-friendly candles, botanical candles">
<link rel="canonical" href="https://elysianflame.com/">
```

**Open Graph (Social Sharing):**
```html
<meta property="og:title" content="Elysian Flame | Handmade Natural Soy Candles">
<meta property="og:description" content="Hand-poured botanical luxury candles made with 100% natural soy wax and essential oils. Eco-friendly, clean-burning, beautifully crafted.">
<meta property="og:image" content="https://elysianflame.com/og-image.jpg">
<meta property="og:url" content="https://elysianflame.com/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Elysian Flame">
```

**Twitter Card:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Elysian Flame | Handmade Soy Candles">
<meta name="twitter:description" content="Premium botanical candles, hand-poured with love">
<meta name="twitter:image" content="https://elysianflame.com/twitter-card.jpg">
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elysian Flame",
  "url": "https://elysianflame.com",
  "logo": "https://elysianflame.com/logo.png",
  "description": "Handmade natural soy candles with botanical fragrances",
  "sameAs": [
    "https://instagram.com/elysianflame",
    "https://facebook.com/elysianflame",
    "https://pinterest.com/elysianflame"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "hello@elysianflame.com"
  }
}
```

**Technical SEO:**
- H1: Single per page, includes primary keyword
- H2-H6: Proper hierarchy, descriptive
- Image alt tags: All images, descriptive, include keywords naturally
- URL structure: Clean, lowercase, hyphens (https://elysianflame.com/)
- Sitemap: Include in sitemap.xml with priority 1.0, weekly change frequency
- Robots.txt: Allow all crawlers
- Page speed: Target <2s LCP, <100ms FID, <0.1 CLS
- Mobile-friendly: Responsive design, mobile-first indexing ready
- HTTPS: Secure connection required
- Breadcrumbs: Implement with schema markup

## 17. Analytics Events to Track

**Page View:**
```javascript
analytics.track('Page Viewed', {
  page_name: 'Homepage',
  page_url: window.location.href,
  referrer: document.referrer,
  session_id: getSessionId()
});
```

**Hero Banner:**
- `Hero CTA Clicked` - { cta_type: 'primary'|'secondary', cta_text: string, position: 'hero' }
- `Hero Slide Viewed` - { slide_number: int, slide_headline: string }

**Product Interactions:**
- `Product Viewed` - { product_id, product_name, price, position_in_list, list_name: 'Bestsellers' }
- `Product Clicked` - { product_id, product_name, source: 'bestsellers_carousel' }
- `Quick Add Clicked` - { product_id, product_name, price, source: 'homepage_bestsellers' }
- `Add to Cart` - { product_id, product_name, price, quantity, cart_total }

**Collection Interactions:**
- `Collection Clicked` - { collection_name, collection_id, position: int }

**Newsletter:**
- `Newsletter Signup Attempted` - { source: 'homepage_main' | 'homepage_footer' }
- `Newsletter Signup Succeeded` - { source: string, email_domain: string }
- `Newsletter Signup Failed` - { source: string, error_type: string }

**Navigation:**
- `Nav Link Clicked` - { link_text: string, link_url: string, location: 'header' }
- `Search Opened` - { source: 'header_icon' }
- `Search Query Submitted` - { query: string, results_count: int }
- `Cart Opened` - { source: 'header_icon', cart_item_count: int }

**Scroll Depth:**
- `Page Scroll` - { depth_percentage: 25|50|75|100 }

**Engagement:**
- `Time on Page` - Calculated on page exit
- `Carousel Interaction` - { action: 'swipe'|'click_arrow'|'auto_scroll', direction: 'left'|'right' }
- `Instagram Post Clicked` - { post_url: string, position:int }

**Conversions:**
- `Email Captured` - { source: string }
- `First Order Intent` - (user clicked any CTA, not yet purchased)

## 18. Performance Constraints

**Loading Time Targets:**
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Time to Interactive (TTI): <3.5s
- Cumulative Layout Shift (CLS): <0.1
- First Input Delay (FID): <100ms

**Optimization Strategies:**

### Images:
- Format: WebP with JPEG fallback
- Hero image: Max 200KB, 1920x1080px
- Product images: Max 50KB each, 600x600px
- Lazy load: All images below fold
- Responsive images: `srcset` for 1x, 2x, 3x displays
- Compression: 85% quality for all JPEGs/WebPs
- CDN delivery: Geographic distribution

### Code Bundling:
- CSS: Critical inline (<14KB), rest async loaded
- JavaScript: Split bundles (vendor, common, page-specific)
- Tree shaking: Remove unused code
- Minification: All CSS/JS minified
- Gzip/Brotli compression: Server-side

### Third-party Scripts:
- Instagram feed: Defer load until section in viewport
- Analytics: Async load, non-blocking
- Font loading: `font-display: swap`, preload primary fonts
- Payment provider scripts: Defer until checkout
- Social share scripts: Load on interaction only

### Caching Strategy:
- Static assets: 1 year cache (`Cache-Control: max-age=31536000`)
- HTML: No cache or 5min cache with revalidation
- API responses: 1 hour cache for homepage data
- Service Worker: Cache-first for static assets, network-first for API
- CDN edge caching: Geo-distributed

### Resource Priorities:
- Preload: Primary font, hero image, critical CSS
- Prefetch: Collection page assets on hover
- Preconnect: API domain, CDN domain, font provider

**Performance Budget:**
- Total page weight: <2MB
- JavaScript bundle: <300KB (compressed)
- CSS: <50KB (compressed)
- Images: <1.5MB total
- Fonts: <100KB total
- Requests: <50 total

## 19. Security Considerations

**Input Sanitization:**
- Newsletter email: Escape HTML, validate format, max length 255
- Search queries: Strip HTML tags, escape special chars, prevent SQL injection
- Form submissions: Server-side validation (never trust client)
- XSS protection: Content Security Policy (CSP) headers

**CSRF Protection:**
- Token in all POST requests (newsletter, add to cart)
- Token generated server-side per session
- Validate token on server before processing

**API Security:**
- Rate limiting: 100 requests per minute per IP (homepage API)
- Newsletter: 3 signup attempts per hour per IP
- CORS: Whitelist only own domain
- HTTPS only: Redirect HTTP → HTTPS
- Authentication: JWT or secure session cookies
- Cart operations: Validate user ownership server-side

**Data Privacy:**
- Newsletter: Double opt-in confirmation email
- Cookie consent banner: GDPR/CCPA compliant
- Privacy policy: Linked in footer, explains data usage
- No PII in analytics: Hash or pseudonymize identifiers
- Secure storage: Encrypt email list database

**Content Security:**
- Image uploads (if admin): Validate file type, scan for malware, size limits
- User-generated content: N/A on homepage (future reviews: sanitize)
- External content (Instagram): Use official APIs, validate responses

**Headers:**
```
Content-Security-Policy: default-src 'self'; img-src 'self' https://cdn.elysianflame.com; script-src 'self' 'unsafe-inline' https://analytics.provider.com
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Dependencies:**
- Regular updates: npm audit weekly
- Vulnerability scanning: Automated CI/CD checks
- Lock files: Use package-lock.json, yarn.lock
- Minimal dependencies: Reduce attack surface

## 20. Admin Config Controls

**Homepage Content Management (CMS/Admin Panel):**

### Hero Banner Management:
- **Slides (3 max):**
  - Upload image (JPG/PNG, max 2MB, min 1920x1080px)
  - Headline text input (max 80 chars)
  - Subheadline text input (max 150 chars)
  - Primary CTA: Text (max 20 chars) + URL dropdown
  - Secondary CTA: Text + URL
  - Active toggle (show/hide slide)
  - Order (drag to reorder)
  - Preview button

### Value Propositions:
- **3 cards (fixed):**
  - Icon upload (SVG only, max 20KB)
  - Heading (max 40 chars)
  - Description (max 120 chars)
  - Color selection (from brand palette)
  - Active toggle

### Featured Collections:
- **Selection (2-4 collections):**
  - Multi-select dropdown from all collections
  - Order (drag to reorder)
  - Auto-pulls: name, image, product_count from collection data
  - Override image: Option to upload custom hero image

### Bestsellers Carousel:
- **Auto-populated or manual:**
  - Mode toggle: "Auto (by sales)" or "Manual selection"
  - If manual: Multi-select products (up to 12)
  - If auto: Pulls top 8 by 30-day sales
  - Exclude products: Multi-select to blacklist certain items

### Brand Story Teaser:
- **Content:**
  - Heading (max 60 chars)
  - Body text (rich text editor, max 300 chars)
  - CTA text + URL
  - Image upload (recommended 800x800px)
  - Background color selection

### Instagram Feed:
- **Settings:**
  - Instagram access token input
  - Number of posts to display (4, 6, 8)
  - Refresh frequency dropdown (1hr, 6hr, 12hr, 24hr)
  - Manual refresh button
  - Fallback images: Upload 8 images if API fails

### Newsletter Section:
- **Content:**
  - Heading (max 50 chars)
  - Subheading (max 100 chars)
  - Button text (max 20 chars)
  - Background pattern upload or select from library
  - Integration: Dropdown (Mailchimp, Klaviyo, Custom API)
  - API key/credentials input
  - List ID input

### Trust Badges:
- **4 badges:**
  - Icon upload (SVG)
  - Text (max 20 chars)
  - Active toggle
  - Order (drag)

### Global Settings (affects homepage):
- **Announcement bar** (above header):
  - Text input (max 100 chars)
  - Link URL (optional)
  - Background color
  - Active toggle
- **Maintenance mode:**
  - Toggle on/off
  - Custom message
  - Whitelist IPs (admin access)

**Admin Permissions:**
- **Content Editor:** Can edit text, images; cannot change URLs/integrations
- **Marketing Manager:** Full access to homepage content + analytics
- **Admin:** Full access + global settings

**Change History:**
- Log all changes: timestamp, user, section modified, old/new values
- Revert functionality: Restore previous version with one click
- Draft mode: Preview changes before publishing
- Scheduled publishing: Set future date/time for content go-live

## 21. Future Scalability Notes

**Planned Enhancements:**

### Multi-language Support:
- Internationalization (i18n): All text strings externalized
- URL structure: `/en/`, `/fr/`, `/es/` prefixes
- Language selector: Dropdown in header
- Translation management: CMS integration for all homepage copy
- RTL support: CSS adjustments for Arabic, Hebrew

### Personalization:
- Returning visitor: Show "Welcome back" + recently viewed products
- Location-based: Detect geo, show local shipping times/costs
- Behavior tracking: Recommend collections based on browse history
- A/B testing: Multiple hero variants, track conversion by segment

### Advanced Features:
- Video hero: Replace static image with muted autoplay video
- Quiz integration: "Find your scent" quiz CTA on homepage → Funnel to personalized recommendations
- Live inventory badges: "Only 3 left!" urgency on product cards
- Social proof: "142 people are viewing this" real-time counters
- Loyalty program: Points display, rewards CTA

### Performance:
- Progressive Web App (PWA): Service worker, offline mode, add to homescreen
- AMP version: Google AMP for faster mobile load
- Edge rendering: Deploy to edge locations (Vercel, Cloudflare Workers)
- Image CDN: Automatic format conversion, resizing on-the-fly

### Technical Debt Prevention:
- Component library: Extract homepage components to shared library
- Design system: Document all spacing, colors, typography tokens
- Storybook: Independent component development and testing
- E2E testing: Cypress tests for critical flows (carousel, newsletter, quick add)
- Load testing: Simulate Black Friday traffic (10,000 concurrent users)

### Data & Analytics:
- Heatmaps: Hotjar integration to see click/scroll patterns
- Session replay: Watch user sessions to find UX issues
- Conversion funnel: Homepage → Collection → Product → Cart → Checkout
- Cohort analysis: Track behavior of email subscribers vs. non-subscribers

### Infrastructure:
- Headless CMS: Decouple content from frontend (Contentful, Sanity)
- API versioning: `/api/v1/` → `/api/v2/` for breaking changes
- Microservices: Separate services for products, cart, newsletter, search
- Database scaling: Read replicas for high-traffic periods
- CDN expansion: Add more edge locations as international traffic grows

### Compliance & Legal:
- GDPR tools: Cookie preference center, data export, right to be forgotten
- Accessibility audit: Yearly WCAG 2.1 AAA evaluation (upgrade from AA)
- Terms update: Version control for privacy policy, terms of service
- Age verification: If introducing alcohol-scented candles (regulatory)

**Modular Architecture:**
- Homepage as composable blocks: Each section is an independent module
- Section order: Admin can reorder sections via drag-and-drop
- Custom sections: Developer can add new section types without core code changes
- Content blocks: Repeatable patterns (e.g., "Image + Text" block can appear multiple times)

**API Evolution:**
- GraphQL migration: Allow flexible querying for frontend needs
- Webhooks: CMS sends webhook on content update → Rebuild homepage
- Real-time updates: WebSocket for live inventory, active users
- Third-party integrations: Zapier, Make.com for no-code automations

**Mobile App Readiness:**
- API-first design: All data available via REST/GraphQL
- Design system: Shared between web and native apps
- Deep linking: `/product/lavender` opens app if installed
- Push notifications: Collect device tokens on homepage (future)

---

**END OF HOMEPAGE SPECIFICATION**

This document is comprehensive and self-sufficient for development. All features, behaviors, states, and technical requirements are documented. Developers can build the homepage using only this spec without additional clarification.
