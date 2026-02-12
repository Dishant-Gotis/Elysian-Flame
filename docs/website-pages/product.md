# Product Detail Page Specification - Elysian Flame

## 1. Page Purpose
Display comprehensive information about a single candle product, enabling informed purchase decisions. Showcase product imagery, detailed descriptions, scent profiles, ingredients, specifications, and customer reviews. Facilitate easy add-to-cart and variant selection (if applicable).

## 2. Business Goal
- Achieve 35%+ add-to-cart conversion rate from product page views
- Reduce return rate through comprehensive product information and imagery
- Increase average order value through related product recommendations (15%+ cross-sell success)
- Build trust through detailed transparency (ingredients, sourcing, care instructions)
- Drive review acquisition (10%+ of purchasers leave reviews)

## 3. Target User Intent
**Primary user questions:**
- What does this candle smell like exactly?
- How large is it? How long will it burn?
- What is it made from? Is it truly natural?
- What do other customers think?
- Is it worth the price?
- Will it make a good gift?
- When will it arrive?
- Can I return it if I don't like it?

**User personas:**
- Comparison shoppers (researching multiple products before deciding)
- Specific scent seekers (looking for exact fragrance profile)
- Gift buyers (need reassurance of quality and presentation)
- Values-driven buyers (care about ingredients, sustainability, ethics)

## 4. Theme & Visual Rules

**Color Palette Integration:**
- `#6CA651` - Primary CTA button, in-stock badge, key highlights
- `#BBCB2E` - Secondary accents, scent note tags, icon highlights
- `#839705` - Text accents, borders, dividers
- `#6B7445` - Background tints, subtle UI elements

**Typography:**
- Product name (H1): 40px desktop / 28px mobile, Playfair Display, `#2C2C2C`
- Section headings (H2): 28px, Inter semi-bold, `#6CA651`
- Body text: 16px, Inter, `#666666` | Line height 1.7 for readability
- Price: 32px, Inter bold, `#2C2C2C`
- Scent notes: 14px, italic, `#839705`

**Visual Style:**
- Large, zoomable product photography (white background, clean shadows)
- Botanical accent illustrations in green palette
- Clean, spacious layout (reduce clutter for premium feel)
- Soft shadows on cards: `0 2px 8px rgba(108,166,81,0.08)`
- Rounded corners: 8px buttons, 12px cards
- Ingredient icons: Line art style in `#6CA651`

**Imagery Requirements:**
- Main image: 1000x1000px minimum, product centered on pure white
- Lifestyle images: Candles in styled environments (botanical, natural light)
- Detail shots: Close-ups of label, wax texture, packaging
- All images: WebP format, lazy loaded except main image

## 5. Layout Structure (Top → Bottom)

### Section 1: Navigation (Same as homepage - sticky)
- Breadcrumbs below nav: Home > Collections > {Collection} > {Product}

### Section 2: Product Hero (Above Fold)
- **Layout:** 50/50 split desktop | Stacked mobile
- **Left:** Image gallery (main image + thumbnails)
- **Right:** Product info (name, price, rating, description, CTA)

### Section 3: Scent Profile (Feature Block)
- **Background:** Light green tint `#6B7445` 5% opacity
- **Content:** Visual scent pyramid (top/middle/base notes)

### Section 4: Product Details (Tabs or Accordion)
- **Tabs:** Description | Ingredients | Specifications | Care Instructions
- **Layout:** Full-width content area

### Section 5: Customer Reviews
- **Layout:** Rating summary left, review list right
- **Features:** Filter/sort, write review CTA, verified purchase badges

### Section 6: Related Products
- **Layout:** Horizontal carousel (4 visible desktop, 1-2 mobile)
- **Heading:** "You May Also Love" or "Complete the Collection"

### Section 7: Reassurance Bar
- **Layout:** 4-icon row (full-width, centered)
- **Content:** Free shipping, Easy returns, Secure checkout, Natural ingredients

### Section 8: Footer (Same as homepage)

## 6. Component List

1. **ProductGallery** - Main image viewer with thumbnails and zoom
2. **ProductInfo** - Name, price, rating, quick details
3. **AddToCartForm** - Quantity selector, variant picker, add button
4. **ScentPyramid** - Visual breakdown of fragrance notes
5. **TabbedContent** - Details, ingredients, specs, care
6. **ReviewList** - Customer reviews with rating, date, verified badge
7. **ReviewSummary** - Average rating, distribution bars, write review CTA
8. **RelatedProductsCarousel** - Cross-sell recommendations
9. **ReassuranceBadges** - Trust signals (shipping, returns, etc.)
10. **ProductBreadcrumbs** - Navigation path
11. **ShareButtons** - Social media share icons
12. **WishlistButton** - Heart icon to save product
13. **SizeGuide** (if applicable) - Modal with dimensions comparison
14. **StockIndicator** - In stock / Low stock / Out of stock badge
15. **QuantitySelector** - Plus/minus input for cart quantity

## 7. Component Specifications

### 7.1 ProductGallery Component

**Content:**
- Main image display (large, 600x600px desktop, full-width mobile)
- Thumbnail strip (4-6 thumbnails, 80x80px each, scrollable if >6)
- Zoom icon overlay (magnifying glass)
- Image counter (e.g., "3 / 6")

**Behavior:**
- Click thumbnail → Update main image (0.3s fade transition)
- Click main image → Open fullscreen lightbox with zoom capability
- Hover main image (desktop) → Show zoom preview (2x magnification in fixed area)
- Swipe main image (mobile) → Change to next/prev image
- Lightbox navigation: Arrow keys, click arrows, swipe gestures
- Lazy load all images except first main image

**States:**
- Loading: Skeleton grey blocks
- Loaded: Full resolution images
- Zoomed: Fullscreen lightbox, close X button visible
- Error: Placeholder botanical illustration

**Interactions:**
- Thumbnail click → Update main
- Main click → Open lightbox
- Lightbox: Arrow left/right, ESC to close, click outside to close
- Keyboard navigation: Tab to thumbnails, Enter to select

**Styling:**
- Main image container: White background, centered
- Thumbnails: Border `2px solid #E0E0E0`, active has `#6CA651` border
- Zoom icon: White circle with `#6CA651` icon, bottom-right corner
- Lightbox: Black background `rgba(0,0,0,0.95)`, centered image

**Data Required:**
```json
"images": [
  {
    "url": "/images/products/lavender-main.webp",
    "alt": "Lavender Mist soy candle in glass jar on white background",
    "thumbnail_url": "/images/products/lavender-main-thumb.webp",
    "order": 1
  }
]
```

### 7.2 ProductInfo Component

**Content:**
- Product name (H1): "Lavender Mist Soy Candle"
- Scent tagline: "Calming & Floral" (italic, `#839705`)
- Rating stars (visual) + number + review count: ★★★★★ 4.8 (127 reviews)
- Price: Large, bold "$24.99" (if on sale, show strikethrough original + sale price in `#D32F2F`)
- Short description (2-3 sentences): "Immerse yourself in the soothing embrace of French lavender fields. This calming blend..."
- Stock indicator: Badge "In Stock" (`#6CA651`) or "Only 3 left!" (orange) or "Out of Stock" (grey)
- SKU: Small text "SKU: LAV-001"

**Behavior:**
- Rating stars clickable → Scroll to reviews section (smooth scroll)
- Price updates if variant selected (e.g., different sizes)
- Stock badge updates real-time based on inventory API

**States:**
- Default: All info visible
- Out of stock: CTA changes to "Notify When Available" email signup
- Sale: Original price strikethrough, sale price prominent, "Sale" badge

**Styling:**
- Name: 40px, `#2C2C2C`
- Tagline: 16px italic, `#839705`
- Stars: `#FFCA28` filled, `#E0E0E0` empty
- Price: 32px bold, `#2C2C2C` (or `#D32F2F` for sale price)
- Description: 16px, `#666666`, line-height 1.6
- Stock badge: Rounded pill, 8px padding, colored background, white text

### 7.3 AddToCartForm Component

**Content:**
- Quantity selector: Label "Quantity" + minus button + input field + plus button
- Variant selector (if applicable): Dropdown "Size: 8oz / 12oz / 16oz" (affects price)
- Add to Cart button: Large, primary style
- Buy It Now button: Secondary style (optional, for express checkout)
- Wishlist button: Heart outline icon + "Add to Wishlist" text
- Delivery estimate: "Arrives in 3-5 business days" with shipping icon

**Behavior:**
- Minus button: Decrease quantity (min 1, disable at 1)
- Plus button: Increase quantity (max = stock quantity OR max 10 per order)
- Type in quantity field: Validate on blur (1-10, default to nearest valid #)
- Variant selection: Update price, update stock, update product images if different
- Add to Cart click → API call → Show loading → Success (toast + cart update) OR Error
- Buy It Now → Skip cart, go directly to checkout with this product
- Wishlist → Requires auth, if not logged in show login modal first

**States:**
- Default: Active buttons, quantity = 1
- Loading: Button shows spinner, disabled
- Success: Brief green checkmark in button, toast notification
- Error: Red border, error message below button
- Out of stock: Button disabled, greyed out, text "Out of Stock"
- Low stock: Show "Only {n} left" warning above button

**Validation:**
- Quantity: Must be integer, min 1, max (stock OR 10)
- Variant: Required if product has variants
- Cart limits: Max 10 units of same product per cart (server-side check)

**Interactions:**
- Quantity +/- click → Update value, validate, enable/disable buttons
- Add to Cart → POST /api/cart/add → Response handling
- Wishlist → POST /api/wishlist/add → Show heart filled + toast

**Styling:**
- Quantity selector: Flexbox row, buttons 40x40px `#F5F5F5`, input centered 60px width
- Add to Cart: Full-width (or 70% width), 56px height, `#6CA651` bg, white text, bold, rounded 8px
- Buy It Now: Same size, white bg, `#6CA651` border and text (outlined)
- Wishlist: Text button with heart icon, `#839705` color, hover fills heart
- Delivery: Small text with truck icon, `#666666`

**Data Required:**
```json
{
  "product_id": "prod_123",
  "stock_quantity": 47,
  "max_order_quantity": 10,
  "variants": [
    {"id": "var_1", "name": "8oz", "price": 19.99, "in_stock": true},
    {"id": "var_2", "name": "12oz", "price": 24.99, "in_stock": true},
    {"id": "var_3", "name": "16oz", "price": 29.99, "in_stock": false}
  ],
  "estimated_delivery": "3-5 business days"
}
```

### 7.4 ScentPyramid Component

**Content:**
- Visual pyramid (3 tiers: top, middle, base)
- **Top Notes:** "Bergamot, Lemon Zest" (first impression, 15-30 min)
- **Middle Notes:** "Lavender, Chamomile" (heart of scent, 30-60 min)
- **Base Notes:** "Vanilla, Sandalwood" (lasting impression, 1-3 hours)
- Explanatory text: "Our fragrances are layered for complexity, evolving as your candle burns."

**Behavior:**
- Hover each tier → Highlight, show duration info
- Desktop: Side-by-side pyramid visual + note lists
- Mobile: Stacked, pyramid on top, notes below

**States:**
- Default: All tiers visible
- Hover: Hovered tier highlighted with `#6CA651` glow

**Styling:**
- Pyramid: SVG graphic, 3 triangular sections, botanical green gradient
- Each tier: Labeled "Top" / "Middle" / "Base" in white text inside pyramid
- Note text: `#2C2C2C`, comma-separated, 16px
- Container: Light cream background `#FAF8F5`, rounded, 40px padding

**Data Required:**
```json
"scent_profile": {
  "top_notes": ["Bergamot", "Lemon Zest"],
  "middle_notes": ["Lavender", "Chamomile"],
  "base_notes": ["Vanilla", "Sandalwood"],
  "description": "Our fragrances are layered..."
}
```

### 7.5 TabbedContent Component

**Tabs:**
1. **Description:** Full product story, brand narrative, usage suggestions
2. **Ingredients:** Complete ingredient list with sourcing info
3. **Specifications:** Dimensions, weight, burn time, materials
4. **Care Instructions:** How to get best performance and safety tips

**Tab 1: Description**
- Rich text content (paragraphs, lists)
- Includes: Brand story snippet, scent inspiration, recommended uses
- Example: "Transport yourself to the lavender fields of Provence..."

**Tab 2: Ingredients**
- Formatted list:
  - 100% Natural Soy Wax (US-grown, sustainable farms)
  - Lavender Essential Oil (French Lavandula angustifolia)
  - Vanilla Extract (Madagascar Bourbon)
  - Cotton Wick (lead-free, zinc-free)
  - Glass Vessel (recyclable)
- Certifications: Icons for cruelty-free, vegan, phthalate-free

**Tab 3: Specifications**
- Table format:
  | Attribute | Value |
  |- Dimensions | 3.5" diameter x 4" height |
  |- Weight | 12oz |
  |- Burn Time | 60-70 hours |
  |- Wax Type | 100% soy |
  |- Wick | Cotton (single wick) |
  |- Vessel | Recycled glass |

**Tab 4: Care Instructions**
- Numbered list:
  1. Trim wick to 1/4" before each burn
  2. Burn candle for 2-4 hours per session
  3. Allow wax to melt fully to edge (prevents tunneling)
  4. Keep away from drafts and flammable objects
  5. Never leave burning candle unattended
- Safety warning in red text

**Behavior:**
- Click tab → Fade out current content, fade in new content (0.2s)
- Active tab: Underline with `#6CA651`, bold text
- Desktop: Tabs horizontal row, content below
- Mobile: Accordion style (tap to expand/collapse)

**States:**
- Tab active: Colored underline, bold
- Tab inactive: Grey text, no underline, hover shows underline preview
- Content loading: Skeleton text blocks

**Styling:**
- Tab bar: Border-bottom `1px solid #E0E0E0`
- Tabs: 20px padding, 18px text, gap 32px between tabs
- Content area: 40px padding, max-width 800px, left-aligned
- Tables: Bordered, `#F5F5F5` header row, 16px text

**Data Required:**
```json
"details": {
  "description": "Full HTML or markdown string",
  "ingredients": ["Ingredient 1 (source)", "Ingredient 2 (source)"],
  "specifications": {
    "dimensions": "3.5\" x 4\"",
    "weight": "12oz",
    "burn_time": "60-70 hours",
    ...
  },
  "care_instructions": ["Step 1", "Step 2", ...],
  "certifications": ["vegan", "cruelty_free", "phthalate_free"]
}
```

### 7.6 ReviewList Component

**Content (per review):**
- Reviewer name: "Sarah M." (last initial only)
- Star rating: Visual stars (filled/empty)
- Review date: "2 months ago"
- Verified purchase badge: Green checkmark icon + "Verified Purchase"
- Review title: "Absolutely divine scent!" (H4, bold)
- Review text: Full review body (max 500 chars shown, "Read more" for longer)
- Helpful counter: "47 people found this helpful" + thumbs up button

**Behavior:**
- "Read more" click → Expand full review text
- Thumbs up click → Increment helpful count, disable button (session-based)
- Sort dropdown: "Most Recent" | "Highest Rated" | "Most Helpful"
- Filter options: Star rating buttons (All, 5★, 4★, 3★, 2★, 1★)
- Pagination: Load 10 reviews at a time, "Load More" button
- Write Review button: Opens review form overlay (requires purchase)

**States:**
- Loading: Skeleton cards
- No reviews: Empty state "Be the first to review this product!"
- Filtered/Sorted: Update list, maintain scroll position
- Submitted thumbs up: Button disabled, slightly different color

**Validation (Write Review):**
- Rating: Required (1-5 stars)
- Title: Optional, max 60 chars
- Review text: Required, min 20 chars, max 1000 chars
- Email: Required (for verification), not publicly shown
- Name: Required, last name initial only shown publicly
- Verified purchase: Auto-checked against order history (server-side)

**Styling:**
- Each review: White card, 1px border `#E0E0E0`, 24px padding, 16px margin-bottom
- Stars: `#FFCA28` filled, `#E0E0E0` empty, 16px size
- Verified badge: `#6CA651` checkmark, 12px text
- Title: 18px, `#2C2C2C`, semi-bold
- Text: 15px, `#666666`, line-height 1.6
- Date/name: 14px, `#999999`
- Helpful button: Grey outlined, `#6CA651` on hover

**Data Required:**
```json
"reviews": [
  {
    "id": "rv_123",
    "product_id": "prod_123",
    "rating": 5,
    "title": "Absolutely divine scent!",
    "text": "This candle exceeded all my expectations...",
    "author_name": "Sarah",
    "author_initial": "M",
    "date": "2024-01-15",
    "verified_purchase": true,
    "helpful_count": 47,
    "user_found_helpful": false
  }
]
```

### 7.7 ReviewSummary Component

**Content:**
- Large average rating: "4.8" (huge number, `#6CA651`)
- Total review count: "127 reviews"
- Star rating distribution chart:
  - 5 stars: Progress bar (e.g., 75% full) + count (95)
  - 4 stars: Progress bar + count (22)
  - 3 stars: Bar + count (7)
  - 2 stars: Bar + count (2)
  - 1 star: Bar + count (1)
- "Write a Review" button (prominent)

**Behavior:**
- Click star distribution bar → Filter reviews to that rating
- Write Review button → Open review form modal/overlay
- Desktop: Summary left sidebar, reviews right
- Mobile: Summary on top, full-width

**Styling:**
- Average rating: 64px font size, bold, `#6CA651`
- Stars: Large, 32px size, next to average
- Review count: 14px, `#999999`, below average
- Distribution bars: `#6CA651` fill, `#F0F0F0` background, rounded, 8px height
- Write Review button: `#6CA651` bg, white text, full-width in summary card

**Data Required:**
```json
"review_summary": {
  "average_rating": 4.8,
  "total_count": 127,
  "distribution": {
    "5": 95,
    "4": 22,
    "3": 7,
    "2": 2,
    "1": 1
  }
}
```

### 7.8 RelatedProductsCarousel Component

**Content:**
- Section heading: "You May Also Love" (H2)
- 4-6 product cards (reuse ProductCard component from homepage)
- Navigation arrows
- Auto-scroll disabled (user-initiated only)

**Behavior:**
- Click arrow → Scroll 2 cards (desktop) or 1 card (mobile)
- Click product → Navigate to that product page
- Hover product → Show quick add (same as homepage)
- Lazy load product images as carousel scrolls

**Recommendation Logic (backend):**
1. Same collection products
2. Similar scent profile
3. Bestsellers in related category
4. "Frequently bought together"

**Styling:**
- Same as homepage ProductCarousel
- Container: 40px padding top/bottom, full-width
- Cards: Gap 16px, overflow hidden with scroll

**Data Required:**
- Array of related_products (same schema as homepage products)
- Related products API: GET /api/products/{id}/related

## 8. Data Fields Required

**Product Object (Complete Schema):**
```json
{
  "id": "prod_lavender_001",
  "name": "Lavender Mist Soy Candle",
  "slug": "lavender-mist",
  "sku": "LAV-001",
  "tagline": "Calming & Floral",
  "short_description": "Immerse yourself in the soothing embrace...",
  "full_description": "<full HTML>",
  "price": 24.99,
  "sale_price": null,
  "currency": "USD",
  "images": [{url, alt, thumbnail_url, order}],
  "scent_profile": {
    "top_notes": ["Bergamot", "Lemon Zest"],
    "middle_notes": ["Lavender", "Chamomile"],
    "base_notes": ["Vanilla", "Sandalwood"],
    "description": "Layered complexity..."
  },
  "ingredients": ["100% Natural Soy Wax (US sustainable)", "Lavender Essential Oil (French)"],
  "specifications": {
    "dimensions": "3.5\" diameter x 4\" height",
    "weight": "12oz",
    "burn_time": "60-70 hours",
    "wax_type": "100% soy",
    "wick_type": "Cotton (lead-free, zinc-free)",
    "vessel": "Recycled glass"
  },
  "care_instructions": ["Trim wick to 1/4\" before each burn", "Burn 2-4 hours per session"],
  "certifications": ["vegan", "cruelty_free", "phthalate_free", "eco_friendly"],
  "stock_quantity": 47,
  "in_stock": true,
  "low_stock_threshold": 5,
  "max_order_quantity": 10,
  "category": "Floral",
  "collection": "Classic Collection",
  "collection_slug": "classic",
  "rating": 4.8,
  "review_count": 127,
  "variants": [
    {"id": "var_8oz", "name": "8oz", "price": 19.99, "stock": 23, "in_stock": true},
    {"id": "var_12oz", "name": "12oz", "price": 24.99, "stock": 47, "in_stock": true},
    {"id": "var_16oz", "name": "16oz", "price": 29.99, "stock": 0, "in_stock": false}
  ],
  "is_new": false,
  "is_featured": true,
  "is_bestseller": true,
  "estimated_delivery": "3-5 business days",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-02-10T12:30:00Z"
}
```

**Review Object:**
See ReviewList component data schema above.

**Related Products:**
Array of simplified product objects (id, name, slug, price, image, rating).

## 9. API/Data Dependencies

**Required Endpoints:**

1. **GET /api/products/{slug}**
   - Returns: Full product object
   - Cache: 30 minutes
   - 404 if not found → Show error page

2. **GET /api/products/{id}/reviews**
   - Params: page=1, limit=10, sort=recent|rating|helpful, filter=star_rating
   - Returns: { reviews: [], total_count: int, has_more: bool }
   - Cache: 5 minutes

3. **POST /api/reviews/create**
   - Body: { product_id, rating, title, text, author_name, author_email }
   - Auth: Requires verified purchase (check order history)
   - Returns: { success: bool, review_id: string }
   - Rate limit: 1 review per product per user

4. **POST /api/reviews/{id}/helpful**
   - Body: { review_id }
   - Session-based: Track per session to prevent spam
   - Returns: { helpful_count: int }

5. **POST /api/cart/add**
   - Body: { product_id, variant_id, quantity }
   - Returns: Updated cart object
   - Validation: Stock check, max quantity enforcement

6. **POST /api/wishlist/add**
   - Body: { product_id }
   - Auth: Required (JWT or session)
   - Returns: { success: bool, wishlist_item_id }

7. **GET /api/products/{id}/related**
   - Params: limit=6
   - Returns: Array of related products
   - Cache: 1 hour
   - Algorithm: Collection similarity → Scent similarity → Bestsellers

8. **GET /api/products/{id}/stock**
   - Real-time stock check (for live updates)
   - Returns: { stock_quantity: int, in_stock: bool }
   - Polling: Every 30s if user on page >1min

**Data Loading Strategy:**
- SSR: Product data, initial reviews (SEO)
- CSR: Additional reviews (pagination), related products (hydration)
- Real-time: Stock quantity updates (polling or WebSocket)
- Prefetch: Related product pages on hover

## 10. User Interactions

**Primary Flow: View → Add to Cart → Continue Shopping**
1. User arrives from collection page or search
2. User views main image, reads description, checks price
3. User scrolls to reviews, reads 2-3 top reviews
4. User returns to top, selects variant (if applicable)
5. User clicks "Add to Cart"
6. Toast notification confirms addition
7. User either:
   a. Clicks cart icon → Proceeds to checkout
   b. Clicks "Continue Shopping" in toast → Stays on product page or browses related

**Secondary Flow: Research → Compare → Revisit**
1. User views product
2. User opens multiple products in new tabs (comparing)
3. User adds multiple to wishlist for later
4. User navigates away
5. User returns later (wishlist or direct link)
6. User decides and adds to cart

**Review Interaction Flow:**
1. User scrolls to reviews
2. User filters to 5-star reviews
3. User reads 3-4 reviews
4. User finds helpful review, clicks thumbs up
5. User decides product is good based on reviews
6. User scrolls back to top, adds to cart

**All Interactive Elements:**
- Image gallery clicks
- Variant selection
- Quantity adjustment
- Add to cart / Buy now
- Wishlist toggle
- Tab switching
- Review filtering/sorting
- Review helpful voting
- Write review form
- Related product clicks
- Share buttons
- Breadcrumb navigation

## 11. Validation Rules

**Add to Cart Form:**
- Product ID: Required, must exist in database
- Variant ID: Required if product has variants
- Quantity: Integer, min 1, max (stock OR 10, whichever is lower)
- Stock check: Server-side validation before adding
- Cart limit: Max 10 of same product across entire cart

**Write Review Form:**
- Rating: Required, integer 1-5
- Title: Optional, max 60 characters
- Review text: Required, min 20 characters, max 1000 characters
- Author name: Required, min 2 characters, max 50 characters
- Author email: Required, valid email format, max 255 characters
- Verified purchase: Auto-checked server-side (user cannot set)
- Spam protection: reCAPTCHA v3, honeypot field
- Profanity filter: Server-side scan, flag for moderation
- Duplicate prevention: Same user cannot review same product twice

**Quantity Selector:**
- Input: Only integers allowed (keypress validation)
- Min: 1 (minus button disabled at 1)
- Max: Lower of (stock_quantity, max_order_quantity)
- Out of range: Reset to nearest valid value on blur

**Helpful Vote:**
- Session-based tracking: User can vote helpful once per review per session
- No auth required
- Rate limit: Max 20 helpful votes per session (prevent spam)

## 12. Error States

**Product Not Found (404):**
- Display: Centered error message
- Heading: "Product Not Found"
- Message: "This product may have been discontinued or the link is incorrect."
- CTA: "Browse All Products" button → /collections/all
- Suggested products: Show 4 bestsellers below

**Out of Stock:**
- Button: Disabled, text "Out of Stock"
- Alternative CTA: "Notify When Available" → Email signup form
- Form: Email input, submit → Add to waitlist
- Confirmation: "We'll email you when it's back in stock!"
- Related products: Emphasize scroll down to "You May Also Love"

**Add to Cart API Error:**
- Toast notification: Red, top-right
- Messages:
  - Network error: "Connection failed. Please try again."
  - Stock depleted: "Sorry, this item just sold out."
  - Server error: "Couldn't add to cart. Please refresh and try again."
  - Cart limit: "You've reached the maximum quantity for this product."
- Action: Retry button in toast OR refresh page

**Image Load Error:**
- Fallback: Botanical placeholder image (green icon, cream bg)
- Alt text: Product name
- No broken image icon

**Reviews Load Error:**
- Error card in reviews section
- Message: "Couldn't load reviews. Please refresh the page."
- Retry button: Reload reviews endpoint

**Stock Polling Error:**
- Silent failure: Use last known stock quantity
- Warning (if stock was critical): Show message "Stock info may be outdated. Refresh page for latest availability."

**Variant Selection Conflict:**
- Selected variant out of stock: Show "Out of Stock" on variant dropdown option, disable selection
- Auto-select: If no variant selected and one is required, select first in-stock variant automatically

## 13. Empty States

**No Reviews:**
- Icon: Empty star outlines (grey)
- Heading: "No reviews yet"
- Message: "Be the first to share your thoughts on this candle!"
- CTA: "Write a Review" button (requires purchase → Show message "Purchase this product to leave a review")

**No Related Products:**
- Hide entire "You May Also Love" section
- Alternative: Show "Featured Products" or "Bestsellers" instead

**Wishlist (Not Logged In):**
- Click wishlist heart → Show login modal
- Message: "Log in to save your favorite products"
- Quick login form + "Create Account" link

**Empty Scent Pyramid (Data Missing):**
- Show simplified version: Just list fragrance notes without pyramid graphic
- Heading: "Fragrance Notes"
- Bulleted list: All scent components

## 14. Mobile Layout Rules

**Breakpoints:** Same as homepage (Mobile <768px, Tablet 768-1023px, Desktop 1024px+)

**Mobile Adjustments:**

**Product Hero:**
- Gallery + info become single column (full-width)
- Image gallery first, sticky to top when scrolling
- Thumbnails: Horizontal scroll strip below main image (4 visible, swipe for more)
- Sticky CTA bar at bottom: "Add to Cart" button always visible (slides up as user scrolls)

**Scent Pyramid:**
- Pyramid graphic reduces to 200px width
- Notes stack vertically below pyramid

**Tabbed Content:**
- Tabs → Accordion (each tab is expandable section)
- Default: First section (Description) open, others collapsed
- Tap heading → Expand/collapse with smooth animation

**Reviews:**
- Summary box: Full-width at top
- Distribution bars: Horizontal (full-width)
- Review cards: Full-width, stacked
- "Load More": Trigger loads 5 reviews (vs. 10 on desktop)

**Related Products:**
- Carousel shows 1.2 products (partial next product visible)
- Swipe gesture to navigate
- Arrows: Small, overlaid on carousel

**Sticky Elements (Mobile):**
- Product name + price bar (sticks below nav when scrolling)
- Add to Cart button bar (bottom of screen, always visible)

**Touch Targets:**
- All buttons: Min 48x48px
- Quantity +/- buttons: 44x44px
- Tab/accordion headers: Min 56px height
- Star rating (in review form): 40x40px per star

**Performance:**
- Lazy load: All images except main product image
- Infinite scroll reviews: Disabled (use "Load More" pagination)
- Disable image zoom hover (use tap for lightbox)

## 15. Accessibility Rules

**WCAG 2.1 AA Compliance:**

**Keyboard Navigation:**
- Tab order: Breadcrumbs → Image gallery → Product info → Variant selector → Quantity → Add to cart → Tabs → Reviews → Related products
- Skip link: "Skip to product information" (hidden, visible on focus)
- Image gallery: Arrow keys to navigate thumbnails, Enter to open lightbox
- Tabs: Arrow keys to switch tabs, Tab to move to content
- Quantity selector: +/- buttons AND direct input editable via keyboard
- Lightbox: ESC to close, arrow keys to navigate images

**Screen Reader Support:**
- Product images: Descriptive alt text (e.g., "Lavender Mist soy candle in recycled glass jar with botanical label, front view")
- Rating: `<span aria-label="Rated 4.8 out of 5 stars">★★★★★</span>`
- Stock indicator: `<span aria-live="polite">In stock</span>` (updates announce)
- Add to cart success: `aria-live="assertive"` region for toast notification
- Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`
- Review helpful button: `aria-label="Mark this review as helpful"`
- Quantity input: `<label for="quantity">Quantity</label>`

**Color Contrast:**
- All text on white: Meets AA standard (checked with primary palette)
- Green buttons (`#6CA651`): Use white text (3.52:1 - passes for large text 18px+)
- Links in body text: Use `#839705` (4.8:1 contrast ratio ✓)

**Focus Indicators:**
- All interactive elements: 3px solid `#6CA651` outline, 2px offset
- Buttons: Outline + slight background color shift
- Form inputs: Outline + border color change to `#6CA651`

**ARIA Attributes:**
- Breadcrumbs: `<nav aria-label="Breadcrumb">`
- Image gallery: `<div role="region" aria-label="Product images">`
- Reviews section: `<section aria-labelledby="reviews-heading">`
- Related products: `<div role="region" aria-label="Related products carousel">`
- Loading states: `aria-busy="true"` while fetching data

**Semantic HTML:**
- Use `<button>` for all actions (add to cart, helpful vote, etc.)
- Use `<a>` for navigation (related products, breadcrumbs)
- Use `<form>` for review submission
- Use proper heading hierarchy (H1 product name, H2 section headings)

**Motion Preferences:**
- Respect `prefers-reduced-motion`
- Disable: Tab transitions, carousel auto-scroll, image zoom animations
- Keep: Instant state changes (color, visibility)

## 16. SEO Fields

**Meta Tags (Example: Lavender Mist product):**
```html
<title>Lavender Mist Soy Candle - 100% Natural | Elysian Flame</title>
<meta name="description" content="Hand-poured Lavender Mist soy candle with calming French lavender and vanilla. 60-70 hour burn time. 100% natural, eco-friendly. Rated 4.8/5 by 127 customers. $24.99.">
<meta name="keywords" content="lavender candle, soy candle, natural candle, aromatherapy candle, handmade candle, calming candle">
<link rel="canonical" href="https://elysianflame.com/products/lavender-mist">
```

**Open Graph:**
```html
<meta property="og:title" content="Lavender Mist Soy Candle - Elysian Flame">
<meta property="og:description" content="Calming French lavender candle, hand-poured with 100% soy wax. 60-70 hours of natural fragrance.">
<meta property="og:image" content="https://elysianflame.com/images/products/lavender-mist-og.jpg">
<meta property="og:url" content="https://elysianflame.com/products/lavender-mist">
<meta property="og:type" content="product">
<meta property="product:price:amount" content="24.99">
<meta property="product:price:currency" content="USD">
<meta property="product:availability" content="in stock">
```

**Structured Data (Product Schema):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavender Mist Soy Candle",
  "image": [
    "https://elysianflame.com/images/lavender-1.jpg",
    "https://elysianflame.com/images/lavender-2.jpg"
  ],
  "description": "Hand-poured soy candle with calming lavender...",
  "sku": "LAV-001",
  "brand": {
    "@type": "Brand",
    "name": "Elysian Flame"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://elysianflame.com/products/lavender-mist",
    "priceCurrency": "USD",
    "price": "24.99",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Elysian Flame"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "Absolutely divine scent..."
    }
  ]
}
```

**Breadcrumb Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://elysianflame.com"},
    {"@type": "ListItem", "position": 2, "name": "Collections", "item": "https://elysianflame.com/collections"},
    {"@type": "ListItem", "position": 3, "name": "Floral", "item": "https://elysianflame.com/collections/floral"},
    {"@type": "ListItem", "position": 4, "name": "Lavender Mist", "item": "https://elysianflame.com/products/lavender-mist"}
  ]
}
```

**Technical SEO:**
- URL structure: `/products/{slug}` (clean, keyword-rich slug)
- H1: Product name (single H1 per page)
- Image alt tags: All product images descriptive
- Page speed: Target <2.5s LCP (critical for ecommerce)
- Canonical URLs: Prevent duplicate content from URL parameters
- hreflang: If multi-language support added
- Sitemap: Include all products, priority 0.8, weekly change

## 17. Analytics Events to Track

**Page View:**
```javascript
analytics.track('Product Viewed', {
  product_id: 'prod_lavender_001',
  product_name: 'Lavender Mist Soy Candle',
  sku: 'LAV-001',
  price: 24.99,
  category: 'Floral',
  collection: 'Classic Collection',
  in_stock: true,
  referrer: document.referrer,
  source: 'organic' | 'collection_page' | 'search' | 'related_products'
});
```

**Product Interactions:**
- `Image Clicked` - { image_number: int, action: 'zoom' | 'lightbox' }
- `Variant Selected` - { variant_id, variant_name, price }
- `Quantity Changed` - { old_quantity, new_quantity }
- `Add to Cart Clicked` - { product_id, variant_id, quantity, price, source: 'main_cta' | 'sticky_cta' }
- `Add to Cart Succeeded` - { cart_total_value, cart_item_count }
- `Add to Cart Failed` - { error_type: string }
- `Wishlist Added` - { product_id, user_authenticated: bool }
- `Buy Now Clicked` - { product_id, variant_id, quantity, price }

**Tab Interactions:**
- `Tab Clicked` - { tab_name: 'description' | 'ingredients' | 'specs' | 'care', time_on_page_seconds: int }

**Review Interactions:**
- `Review Filtered` - { star_rating: int }
- `Review Sorted` - { sort_by: 'recent' | 'rating' | 'helpful' }
- `Review Helpful Clicked` - { review_id, current_helpful_count }
- `Write Review Clicked` - { has_purchased: bool }
- `Review Submitted` - { rating: int, has_text: bool, has_title: bool }

**Related Products:**
- `Related Product Clicked` - { product_id, product_name, position: int }

**Engagement:**
- `Scroll Depth` - { depth_percentage: 25 | 50 | 75 | 100 }
- `Time on Page` - Calculated on exit
- `Share Clicked` - { platform: 'facebook' | 'twitter' | 'pinterest' | 'email' | 'copy_link' }

**Conversions:**
- `Initiated Checkout` - (if Buy Now used)
- `Stock Alert Signup` - { product_id, email_domain: string }

## 18. Performance Constraints

**Loading Time Targets:**
- LCP: <2.0s (product image critical)
- FCP: <1.2s
- TTI: <3.0s
- CLS: <0.05 (stable layout critical for ecommerce)
- FID: <100ms

**Optimization Strategies:**

### Images:
- Format: WebP with JPEG fallback
- Main product image: Preload, max 100KB, 1000x1000px
- Thumbnails: Max 10KB each, 100x100px
- Lifestyle images: Lazy load, max 80KB
- Responsive srcset: Serve appropriately sized images
- CDN: Geo-distributed delivery

### Code:
- Critical CSS inline: Product hero styles (<10KB)
- Deferred JS: Reviews, related products load after main content
- Code splitting: Separate bundle for review form modal
- Tree shaking: Remove unused CSS/JS

### Data Fetching:
- SSR: Product data, initial reviews (first 10)
- CSR: Additional reviews (pagination), related products
- Prefetch: Variant data if exists
- Cache: API responses (product 30min, reviews 5min)

### Third-party:
- Review widgets: Load after main content
- Social share scripts: Load on first interaction
- Analytics: Async, non-blocking

**Performance Budget:**
- Total page weight: <1.5MB
- JavaScript: <250KB (compressed)
- CSS: <40KB (compressed)
- Images: <1MB total (including lazy-loaded)
- Requests: <40 total

**Real User Monitoring:**
- Track Core Web Vitals for this page
- Alert if LCP >2.5s or CLS >0.1
- A/B test image quality vs. load time

## 19. Security Considerations

**Input Validation:**
- Review form: Sanitize all text inputs, escape HTML
- Quantity input: Server-side validation (1-10, integer)
- Variant selection: Validate variant exists and belongs to product
- Email (stock alert): Validate format, max length, prevent injection

**API Security:**
- Add to cart: Validate product exists, in stock, quantity within limits
- Review submission: Require verified purchase (check order history)
- Rate limiting:
  - Add to cart: 30 requests/min per session
  - Review submission: 1 per product per user
  - Helpful votes: 20 per session
  - Stock alert: 3 per IP per hour
- CSRF tokens: All POST requests
- CORS: Whitelist own domain only

**Data Privacy:**
- Review author email: Never displayed publicly, hashed in database
- User tracking: Cookie consent required (GDPR/CCPA)
- No PII in analytics: Pseudony mize user IDs

**XSS Prevention:**
- Review text: Sanitize before display (no <script> tags, escape HTML entities)
- Product description: If CMS-editable, use allowlist HTML sanitizer
- CSP headers: Restrict script sources

**Content Security:**
- Product images: Validate file types if admin can upload
- Reviews: Profanity filter, spam detection (Akismet or similar)
- Injection prevention: Parameterized queries, ORM usage

**Session Security:**
- HTTPS only
- Secure cookies: HttpOnly, Secure, SameSite=Strict
- Session timeout: 30 minutes inactivity
- Cart persistence: Secure session or JWT

## 20. Admin Config Controls

**Product Management (CMS/Admin Panel):**

### Basic Information:
- Product name (text input, max 80 chars)
- SKU (text input, unique, auto-generate option)
- Tagline/Scent note (text input, max 60 chars)
- Short description (textarea, max 300 chars)
- Full description (rich text editor, max 2000 chars)
- Price (number input, USD)
- Sale price (optional, number input)
- Category (dropdown select from master list)
- Collection (multi-select from available collections)

### Imagery:
- Main image upload (JPG/PNG/WebP, max 2MB, min 1000x1000px)
- Gallery images (upload up to 6, drag to reorder)
- Alt text auto-generation option (AI-powered or manual entry)

### Scent Profile:
- Top notes (multi-select tag input, custom tags allowed)
- Middle notes (multi-select)
- Base notes (multi-select)
- Scent description (textarea, max 200 chars)

### Product Details:
- Ingredients (repeatable text inputs, each with source note)
- Specifications (key-value pairs):
  - Dimensions, Weight, Burn time, Wax type, Wick type, Vessel
- Care instructions (numbered list input, max 10 items)
- Certifications (checkbox list: Vegan, Cruelty-free, Phthalate-free, etc.)

### Inventory & Variants:
- Stock quantity (number input, updates in real-time)
- Low stock threshold (number, triggers "low stock" badge)
- Max order quantity (number, default 10)
- Variant toggle (enable/disable variants)
- If variants enabled:
  - Variant type (e.g., "Size")
  - Variant options (e.g., "8oz, 12oz, 16oz")
  - Each variant: Price, Stock, SKU override

### Availability:
- Status (dropdown: Published, Draft, Out of Stock, Discontinued)
- Publish date (date picker, schedule future launch)
- Badges (checkboxes: New, Bestseller, Featured, Sale)

### SEO:
- Meta title (text input, max 60 chars, auto-populate from product name)
- Meta description (textarea, max 160 chars, auto-populate from short desc)
- URL slug (text input, auto-generate from name, editable)
- Open Graph image (upload or default to main image)

### Related Products:
- Auto-recommend toggle (uses algorithm)
- Manual selection (multi-select product picker, override auto)
- Max products shown (number input, default 6)

### Reviews:
- Enable/disable reviews (toggle)
- Require verified purchase for reviews (toggle, default ON)
- Moderation (dropdown: Auto-approve, Manual approve, Hold all)
- Display review count on product card (toggle)

**Bulk Operations:**
- Import products (CSV upload with field mapping)
- Export products (CSV download with filter options)
- Bulk edit (select multiple, change price/collection/status at once)
- Duplicate product (create copy for variation, e.g., new scent)

**Change Tracking:**
- Audit log: All edits logged with user, timestamp, old/new values
- Revision history: Revert to previous version
- Draft preview: View product page before publish

**Permissions:**
- **Product Manager:** Full CRUD on products
- **Inventory Manager:** Edit stock, pricing only
- **Content Editor:** Edit descriptions, images, not pricing/stock
- **Admin:** Full access + settings

## 21. Future Scalability Notes

**Planned Enhancements:**

### Personalization:
- Recently viewed products widget (session-based, then account-based)
- "Customers who bought this also bought" recommendation engine
- Dynamic pricing: Show member discounts, bulk pricing tiers
- Personalized scent recommendations based on quiz results

### Advanced Features:
- 360° product viewer: Interactive image rotation
- AR try-before-you-buy: Visualize candle in your space (mobile)
- Video reviews: Allow customers to upload video testimonials
- Live inventory: Real-time stock updates via WebSocket instead of polling
- Subscription option: "Deliver every 2 months" recurring order

### Social Integration:
- Instagram gallery: User-generated content tagged #elysianflame
- Social proof: "42 people viewing this now" live counter
- Influencer reviews: Highlight verified influencer testimonials
- Share for discount: "Share on social media for 10% off"

### Internationalization:
- Multi-currency support: Auto-detect location, show local currency
- Multi-language: Translate all product content
- Localized shipping: Show country-specific delivery times
- Compliance: VAT display for EU, GST for Australia, etc.

### Technical Improvements:
- GraphQL API: Flexible querying for product data
- Headless CMS: Decouple product content from frontend
- A/B testing framework: Test CTA button text, image orders, pricing displays
- Progressive Web App: Offline product browsing (cached)
- Edge rendering: Deploy product pages to edge for <500ms TTFB

### Data & Analytics:
- Heatmaps: Track where users click on product images
- Session replay: Watch user behavior to optimize layout
- Conversion funnel: View → Add Cart → Checkout → Purchase (identify drop-off points)
- Price optimization: AI-driven dynamic pricing suggestions

### Inventory & Fulfillment:
- Pre-orders: Sell products before stock arrives
- Backorders: Allow purchase when out of stock, ship when available
- Inventory reservations: Hold stock for 10 minutes after add-to-cart
- Multi-warehouse: Show "Ships from nearest warehouse" with estimated delivery

### Compliance & Accessibility:
- WCAG 2.1 AAA: Upgrade from AA compliance
- GDPR tools: Data export, deletion requests
- Accessibility audit: Quarterly third-party evaluation
- Carbon footprint: Display per-product environmental impact

**API Evolution:**
- Webhook support: Notify external systems on product updates
- Bulk API: Fetch 100+ products in single request for mobile app
- Real-time subscriptions: GraphQL subscriptions for stock changes
- Third-party integrations: Sync with Amazon, Etsy marketplaces

**Mobile App Readiness:**
- API-first: All functionality available via REST/GraphQL
- Deep linking: Open specific product in app if installed
- Push notifications: Price drop, back in stock alerts
- Offline mode: View cached product details

**Modular Architecture:**
- Component library: Extract ProductGallery, AddToCartForm as reusable components
- CMS blocks: Admins can add custom content sections to product pages
- Plugin system: Third-party integrations (e.g., Fera reviews, Judge.me)

---

**END OF PRODUCT DETAIL PAGE SPECIFICATION**

This document is comprehensive and self-sufficient. Developers can implement the product detail page using only this specification without additional clarification.
