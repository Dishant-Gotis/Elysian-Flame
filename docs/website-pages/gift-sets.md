# Gift Sets Page Specification - Elysian Flame

## 1. Page Purpose
Showcase curated gift set collections combining multiple candles or candle + accessory bundles. Facilitate gift discovery and purchase for special occasions (birthdays, holidays, corporate gifts). Highlight value proposition and premium packaging.

## 2. Business Goal
- Increase average order value (AOV) by 60%+ compared to single product purchases
- Drive 20%+ of total revenue from gift sets during peak seasons (holidays, Mother's Day)
- Reduce gifting-related customer service inquiries through clear presentation
- Achieve 30%+ conversion rate on gift set landing page
- Build brand perception as gift-worthy and premium

## 3. Target User Intent
**Primary user questions:**
- Which gift set is appropriate for this occasion?
- What's included in each set?
- How is it packaged?
- Can I customize the contents?
- What's the total value vs. buying individually?
- Is gift wrapping included?
- Can I add a personalized message?

**User personas:**
- Holiday shoppers (seasonal, high-intent buyers)
- Corporate gifting (bulk orders, professional presentation needs)
- Last-minute gifters (need quick decisions, clear options)
- Self-purchasers treating themselves (value-seekers)

## 4. Theme & Visual Rules

**Color Palette Application:**
- `#6CA651` - "Shop Now" CTAs, savings badges, featured labels
- `#BBCB2E` - Gift occasion tags, "Best Value" highlights
- `#839705` - Price labels, savings text, dividers
- `#6B7445` - Background tints for gift set categories, subtle accents

**Typography:**
- Page title (H1): 48px desktop / 34px mobile, Playfair Display, `#2C2C2C`, "Thoughtfully Curated Gift Sets"
- Gift set names (H2): 32px, Playfair Display, `#2C2C2C`
- Occasion tags: 14px, Inter medium, various colors
- Savings text: 18px bold, `#D32F2F`, "Save $15"
- Description: 16px, Inter, `#666666`

**Visual Style:**
- Premium packaging photography (boxes, ribbons, botanical touches)
- Lifestyle images showing gift-giving moments
- "What's Included" visual lists with product thumbnails
- Elegant gift box mockups with green botanical ribbon accents
- Savings badges: Circular or ribbon-style, prominent placement

## 5. Layout Structure (Top → Bottom)

### Section 1: Navigation (Same as homepage - sticky)

### Section 2: Hero Banner
- **Height:** 500px desktop / 400px mobile
- **Background:** Premium gift box image with candles
- **Content:** H1 title, subheading, CTA

### Section 3: Occasion Quick Nav
- **Height:** 100px
- **Content:** Horizontal pill buttons (Holidays, Birthdays, Thank You, Self-Care, Corporate)

### Section 4: Featured Gift Set (Full-width spotlight)
- **Height:** 600px desktop / auto mobile
- **Layout:** 50/50 image + details
- **Content:** Flagship gift set with full details, CTA

### Section 5: Gift Sets Grid (By Occasion)
- **Layout:** 3-column grid desktop / 1-column mobile
- **Content:** 6-9 gift set cards

### Section 6: Why Gift Elysian Flame
- **Height:** Auto
- **Layout:** 4-icon row (Premium packaging, Eco-friendly, Handmade quality, Free gift message)

### Section 7: Customization Options
- **Height:** 400px
- **Content:** Build-your-own gift set CTA + preview

### Section 8: Corporate Gifting CTA
- **Height:** 300px
- **Background:** Dark green `#6B7445`
- **Content:** Bulk order information, contact form

### Section 9: Footer (Same as homepage)

## 6. Component List

1. **GiftSetHero** - Page banner with main messaging
2. **OccasionFilter** - Quick navigation by gift occasion
3. **FeaturedGiftSetCard** - Large spotlight card with full details
4. **GiftSetCard** - Standard grid item with image, details, CTA
5. **WhatsIncludedList** - Visual list of products in set
6. **SavingsBadge** - Circular badge showing discount amount
7. **OccasionTag** - Pill-shaped label (e.g., "Perfect for Birthdays")
8. **PackagingPreview** - Image gallery showing gift box/wrapping
9. **ValueComparison** - Price breakdown (individual vs. bundled)
10. **CustomizationWidget** - Interactive build-your-own-set tool
11. **CorporateGiftingForm** - Contact form for bulk orders
12. **GiftMessageInput** - Text area for personalized message
13. **GiftWrapToggle** - Checkbox/toggle for gift wrap option (+$5)
14. **RelatedSingleProducts** - Suggested add-ons

## 7. Component Specifications

### 7.1 GiftSetHero Component

**Content:**
- Background image: Beautifully wrapped gift set with botanical elements
- Gradient overlay: `linear-gradient(135deg, rgba(107,116,69,0.6), transparent)`
- H1: "Thoughtfully Curated Gift Sets" (white, centered)
- Subheading: "Premium candle collections for every occasion, beautifully packaged and ready to delight" (white, 18px)
- Primary CTA: "Shop Gift Sets" (white bg, green text)
- Secondary text: "Free personalized gift message with every order" (white, italic)

**Behavior:**
- Desktop: Parallax scroll effect on background (0.5xspeed)
- CTA hover: Lift + shadow
- Mobile: Reduced height, no parallax

**Styling:**
- Height: 500px desktop, 400px mobile
- Content: Centered, max-width 700px
- Text shadow for legibility: `2px 2px 8px rgba(0,0,0,0.6)`
- CTA: 56px height, 180px width, rounded 8px

### 7.2 OccasionFilter Component

**Content:**
- Horizontal row of pill-shaped buttons:
  - "All Gift Sets" (default)
  - "Holidays"
  - "Birthdays"
  - "Thank You"
  - "Self-Care"
  - "Corporate"
- Each button shows icon + text

**Behavior:**
- Click button → Filter gift sets grid
- Active button: `#6CA651` background, white text
- Inactive: White background, `#2C2C2C` text, 1px border
- Mobile: Horizontal scroll if text doesn't fit
- URL updates: `/gift-sets?occasion=holidays`

**Styling:**
- Container: Centered, full-width, white background
- Buttons: 40px height, 16px padding horizontal, 12px gap
- Border-radius: 24px (full pill)
- Transition: 0.2s background color change

**Data Required:**
```json
"occasions": [
  {"id": "all", "label": "All Gift Sets", "icon": "gift-icon.svg", "count": 9},
  {"id": "holidays", "label": "Holidays", "icon": "tree-icon.svg", "count": 4}
]
```

### 7.3 FeaturedGiftSetCard Component (Spotlight)

**Content (Example: Ultimate Relaxation Set):**
- Product images: 3-4 images (carousel: main gift box, opened box, individual products, lifestyle)
- Gift set name (H2): "Ultimate Relaxation Set"
- Occasion tags: Pills "Perfect for Birthdays" + "Self-Care"
- Short description: "Unwind with our calming trio of lavender, eucalyptus, and vanilla candles"
- What's Included list:
  - Lavender Mist Candle (12oz)
  - Eucalyptus Spa Candle (12oz)
  - Vanilla Dream Candle (12oz)
  - Premium Gift Box with Botanical Ribbon
  - Personalized Gift Message Card
- Value comparison: "Value: $82.96 | You Pay: $69.99 | Save $12.97 (15% off)"
- Savings badge: Circular "SAVE $13"
- Rating: ★★★★★ 4.9 (54 reviews)
- Add to Cart button (primary, large)
- "Free Shipping" badge

**Behavior:**
- Image carousel: Click arrows or dots to navigate
- Click main image → Open lightbox (zoom)
- Hover "What's Included item → Highlight corresponding product in image
- Add  to Cart → Same flow as product page

**States:**
- Loading: Skeleton placeholders
- Out of stock: Greyed out, CTA = "Notify When Available"
- Limited stock: "Only 3 left!" urgency badge (orange)

**Styling:**
- Desktop: 50/50 split (images left, details right)
- Mobile: Stacked (images on top, full-width)
- Container: 40px padding, light cream background `#FAF8F5`
- Savings badge: 80px diameter circle, `#D32F2F` bg, white text, positioned top-right of image
- What's Included: Bulleted list with checkmark icons `#6CA651`

**Data Required:**
```json
{
  "id": "giftset_relax",
  "name": "Ultimate Relaxation Set",
  "slug": "ultimate-relaxation",
  "description": "Full description text",
  "images": [{url, alt, order}],
  "occasions": ["birthday", "self_care"],
  "included_products": [
    {"id": "prod_lav", "name": "Lavender Mist", "size": "12oz", "quantity": 1},
    {"id": "prod_euc", "name": "Eucalyptus Spa", "size": "12oz", "quantity": 1}
  ],
  "includes_gift_box": true,
  "includes_message_card": true,
  "total_value": 82.96,
  "price": 69.99,
  "savings": 12.97,
  "discount_percentage": 15,
  "rating": 4.9,
  "review_count": 54,
  "in_stock": true,
  "stock_quantity": 12,
  "free_shipping": true
}
```

### 7.4 GiftSetCard Component (Grid Item)

**Content:**
- Product image (gift box, professional photography)
- Occasion tag (top-left corner): "Perfect for Holidays"
- Savings badge (top-right): "15% OFF"
- Gift set name (H3): "Cozy Nights Duo"
- What's Included (condensed): "2 Candles + Gift Box"
- Rating: ★★★★★ 4.7 (23)
- Price: "Value $55 | $46.99"
- Quick Add button (appears on hover)

**Behavior:**
- Hover: Image zoom 1.05x, shadow increase, Quick Add slides up
- Click card → Navigate to gift set detail page
- Click Quick Add → Add to cart modal (with gift message option)

**States:**
- Default: Static image
- Hover: Zoomed, button visible
- New: "New" badge
- Best seller: "Best Seller" badge

**Styling:**
- Card: White background, rounded 12px, subtle shadow
- Image: 1:1 aspect ratio, overflow hidden
- Padding: 20px
- Occasion tag: Small pill, light background color-coded by occasion
- Savings badge: Circular, `#D32F2F`, white text

### 7.5 WhatsIncludedList Component

**Content:**
- Heading: "What's Included" (H4, `#6CA651`)
- Bulleted list with checkmark icons:
  - Product name + size (e.g., "Lavender Mist Candle (12oz)")
  - Quantity if >1 (e.g., "Rose Petal Candle (8oz) x 2")
  - Packaging items (gift box, ribbon, message card)
- Product thumbnails (optional): Small images next to each product

Behavior:**
- Desktop: Vertical list with checkmarks
- Mobile: Condensed, collapsible accordion if >5 items
- Hover product name → Highlight product in main image (if linked)

**Styling:**
- Checkmark icons: `#6CA651`, 16px
- Text: 15px, `#2C2C2C`, line-height 1.8
- Thumbnails: 40x40px, rounded, 8px margin-right

### 7.6 SavingsBadge Component

**Content:**
- Dollar amount saved: "$13"
- "SAVE" text above or around amount
- Percentage (optional): "15% OFF"

**Variations:**
- **Circular:** Round badge, 60-80px diameter
- **Ribbon:** Angled ribbon across top-right corner
- **Pill:** Horizontal rounded rectangle

**Styling:**
- Background: `#D32F2F` (sale red) OR `#6CA651` (green for "Best Value")
- Text: White, bold, centered
- Position: Absolute, top-right corner of image
- Shadow: `0 2px 8px rgba(0,0,0,0.2)` for depth

### 7.7 CustomizationWidget Component

**Content:**
- Heading: "Build Your Own Gift Set"
- Step 1: Choose number of candles (dropdown: 2, 3, 4, 6)
- Step 2: Select candles (multi-select with product images)
- Step 3: Choose gift box style (radio buttons with images: Classic, Premium, Botanical)
- Step 4: Add gift message (text area, max 200 chars)
- Price calculator: Shows total value, discount, final price
- "Add to Cart" button

**Behavior:**
- Select products → Update visual preview (shows selected candles in box)
- Update quantity → Recalculate price (bulk discount applies)
- Gift box style → Update preview image
- Real-time price calculation with progressive discounts:
  - 2 candles: 5% off
  - 3 candles: 10% off
  - 4+ candles: 15% off

**States:**
- Default: No products selected, CTA disabled
- Configuring: Products being selected, preview updates
- Ready: All required fields filled, CTA enabled
- Adding: Button shows spinner

**Styling:**
- Container: White card, 40px padding, rounded 12px
- Steps: Numbered circles `#6CA651`, connected by lines
- Product selector: Grid of product thumbnails with checkboxes
- Preview: Large image showing configured box
- Price calculator: Green background `#6CA651` at 10% opacity, prominent numbers

**Data Required:**
- Available products for customization
- Gift box options with images and prices
- Discount tiers
- Real-time stock check for selected products

### 7.8 CorporateGiftingForm Component

**Content:**
- Heading: "Corporate &  Bulk Orders"
- Subheading: "Looking to order 10+ gift sets? Let's create something special."
- Form fields:
  - Company name (text input)
  - Contact name (text input)
  - Email (text input, required)
  - Phone (text input, optional)
  - Quantity needed (number input)
  - Occasion/Event (text input)
  - Message/Special requests (textarea)
  - Submit button: "Request Quote"
- Trust signals: "Volume discounts available" + "Custom branding options"

**Behavior:**
- Form validation on submit
- Success → Confirmation message "We'll contact you within 24 hours"
- Email notification to sales team

**Styling:**
- Container: Dark green background `#6B7445`, white text
- Form: Max-width 600px, centered
- Inputs: White background, rounded, 48px height
- Submit button: White background, `#6B7445` text, hover inverts

## 8. Data Fields Required

**GiftSet Object:**
```json
{
  "id": "giftset_001",
  "name": "Ultimate Relaxation Set",
  "slug": "ultimate-relaxation",
  "description": "Full description",
  "short_description": "Brief tagline",
  "images": [{url, alt, thumbnail_url, order}],
  "occasions": ["birthday", "self_care", "thank_you"],
  "included_products": [
    {
      "product_id": "prod_lav",
      "product_name": "Lavender Mist",
      "size": "12oz",
      "quantity": 1,
      "individual_price": 24.99,
      "image_url": "/images/products/lavender-thumb.webp"
    }
  ],
  "packaging_items": ["Premium gift box", "Botanical ribbon", "Gift message card"],
  "total_value": 82.96,
  "price": 69.99,
  "savings": 12.97,
  "discount_percentage": 15,
  "rating": 4.9,
  "review_count": 54,
  "in_stock": true,
  "stock_quantity": 12,
  "low_stock_threshold": 5,
  "free_shipping": true,
  "gift_wrap_available": true,
  "gift_wrap_price": 5.00,
  "customizable": false,
  "is_featured": true,
  "is_bestseller": false,
  "seo_title": "Ultimate Relaxation Gift Set | Elysian Flame",
  "seo_description": "Calming candle trio...",
  "created_at": "2024-01-01",
  "updated_at": "2024-02-10"
}
```

**Occasion Categories:**
```json
["holidays", "birthdays", "thank_you", "self_care", "corporate", "weddings", "housewarming"]
```

## 9. API/Data Dependencies

**Required Endpoints:**

1. **GET /api/gift-sets**
   - Params: occasion, sort, page, per_page
   - Returns: { gift_sets: [], total_count, occasions: [] }
   - Cache: 30 minutes

2. **GET /api/gift-sets/{slug}**
   - Returns: Full gift set object
   - Cache: 30 minutes

3. **POST /api/cart/add-gift-set**
   - Body: { gift_set_id, quantity, gift_message, gift_wrap }
   - Returns: Updated cart

4. **POST /api/cart/add-custom-gift-set**
   - Body: { product_ids: [], quantities: [], box_style, gift_message, gift_wrap }
   - Validates: Stock availability, applies discount
   - Returns: Cart with custom set

5. **POST /api/corporate-quote**
   - Body: Form fields (company, contact, email, quantity, message)
   - Sends email to sales team
   - Returns: { success: true, message: "Quote request received" }

6. **GET /api/gift-sets/customization-options**
   - Returns: Available products, box styles, discount tiers
   - Cache: 1 hour

## 10. User Interactions

**Primary Flow: Browse → Select Gift Set → Customize → Add to Cart**
1. User arrives at gift sets page
2. User browses featured set and grid
3. User filters by "Holidays"
4. User clicks gift set card
5. User views full details, reads reviews
6. User adds gift message in text field
7. User checks "Add gift wrap (+$5)"
8. User clicks "Add to Cart"
9. Toast confirmation appears
10. User proceeds to checkout or continues shopping

**Custom Set Flow:**
1. User scrolls to "Build Your Own" section
2. User selects "3 candles"
3. User browses product selector, picks Lavender, Rose, Eucalyptus
4. Preview updates, shows selected candles in box
5. User selects "Premium" box style
6. User adds gift message
7. Price shows: "Value $77.97 | You Pay $70.17 (10% off)"
8. User clicks "Add to Cart"

**Corporate Flow:**
1. User scrolls to corporate section
2. User reads "Volume discounts available"
3. User fills form (company, contact, 50 sets needed)
4. User submits
5. Confirmation message appears
6. Sales team receives email notification

## 11. Validation Rules

**Add to Cart (Gift Set):**
- Gift set ID: Required, must exist
- Quantity: Integer, min 1, max 20 per order
- Gift message: Optional, max 200 characters, sanitize HTML
- Gift wrap: Boolean
- Stock check: Ensure all included products are in stock

**Custom Gift Set:**
- Product selection: Min 2 products, max 6
- Each product: Must be in stock (validate server-side)
- Gift box style: Must be from allowed options
- Gift message: Same as above

**Corporate Quote Form:**
- Email: Required, valid format
- Company name: Required, min 2 chars
- Quantity: Required, integer, min 10
- Message: Optional, max 500 chars

## 12. Error States

**Gift Set Out of Stock:**
- Display: "Currently Unavailable" on card
- CTA: "Notify When Available" button → Email signup
- Alternative: "Similar Gift Sets" section with 3 suggestions

**Custom Set Product Unavailable:**
- Real-time check: If product selected becomes out of stock while configuring
- Highlight: Red border on product thumbnail
- Message: "Lavender Mist is currently unavailable. Please select another candle."
- Action: Disable "Add to Cart" until valid selection made

**Add to Cart Error:**
- Toast: Red, top-right
- Message: "Couldn't add gift set. Please try again."
- Retry button in toast

**Corporate Form Error:**
- Field validation: Show inline error below each invalid field
- Submit error: "Please check the form for errors" message at top

## 13. Empty States

**No Gift Sets for Occasion:**
- Filter to occasion with 0 sets (e.g., "Weddings")
- Icon: Gift box outline (grey)
- Message: "No gift sets for this occasion yet"
- Suggestion: "View All Gift Sets" button
- Alternative products: Show bestselling individual products

**Custom Set Empty:**
- Default state before any products selected
- Preview: Empty gift box illustration
- Message: "Select your candles to build the perfect gift"
- Call to action: Highlight Step 1 (choose quantity)

## 14. Mobile Layout Rules

**GiftSetHero:**
- Height: 400px (from 500px)
- Title: 34px (from 48px)
- CTA: Full-width, stacked below text

**OccasionFilter:**
- Horizontal scroll with indicator dots
- Buttons: Slightly smaller (36px height)
- Visible: Show 2.5 buttons, scroll for more

**FeaturedGiftSetCard:**
- Stacked layout (image on top, details below)
- Image carousel: Full-width, swipe navigation
- What's Included: Collapsible accordion (default closed)

**GiftSetsGrid:**
- 1 column (from 3)
- Cards: Full-width
- Gap: 20px between cards

**CustomizationWidget:**
- Full-screen modal (instead of inline section)
- "Build Your Own" button opens modal
- Steps: Vertical progression with "Next" buttons
- Preview: Smaller, 200px wide

**CorporateForm:**
- Full-width form fields
- Stack inputs vertically
- Submit: Full-width button, sticky at bottom

**Touch Targets:**
- All buttons/links: Min 44x44px
- Occasion filters: 48px height tappable area
- Product selectors in custom widget: 56x56px

## 15. Accessibility Rules

**Keyboard Navigation:**
- Tab order: Hero CTA → Occasion filters → Featured set → Grid → Customization → Corporate form
- Occasion filters: Arrow keys to navigate, Enter to select
- Gift set cards: Tab to focus, Enter to navigate to detail
- Custom widget: Tab through product selection, Space to select/deselect

**Screen Reader Support:**
- Gift set images: Alt text "Ultimate Relaxation gift set with lavender, eucalyptus, and vanilla candles in premium botanical gift box"
- Savings badge: `<span aria-label="Save $13, 15% off">SAVE $13</span>`
- What's Included list: Proper `<ul>` + `<li>` semantics
- Occasion filters: `<nav aria-label="Filter gift sets by occasion">`
- Rating: `<span aria-label="Rated 4.9 out of 5 stars by 54 customers">`

**Color Contrast:**
- All text meets AA minimums
- Savings badges: White text on `#D32F2F` (6.35:1 ✓)
- Occasion tags: Checked for contrast, minimum 4.5:1 for small text

**Focus Indicators:**
- All interactive elements: 3px `#6CA651` outline, 2px offset
- Custom widget product thumbnails: Bold border on focus

**ARIA Labels:**
- Custom widget: `<div role="region" aria-label="Build your own gift set">`
- Product selector: `<fieldset aria-label="Select candles for your gift set">`
- Price calculator: `<div aria-live="polite">Total: $70.17</div>`

## 16. SEO Fields

**Meta Tags:**
```html
<title>Luxury Candle Gift Sets - Handmade Soy Candles | Elysian Flame</title>
<meta name="description" content="Shop curated candle gift sets for every occasion. Beautifully packaged, eco-friendly soy candles with personalized gift messages. Free shipping on orders $50+.">
<meta name="keywords" content="candle gift sets, luxury candle gifts, birthday candle gift, holiday candle set, corporate candle gifts, spa gift set">
<link rel="canonical" href="https://elysianflame.com/gift-sets">
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Gift Sets",
  "description": "Curated candle gift sets...",
  "url": "https://elysianflame.com/gift-sets",
  "numberOfItems": 9
}
```

**Product Schema for Each Gift Set:**
```json
{
  "@type": "Product",
  "name": "Ultimate Relaxation Gift Set",
  "offers": {
    "@type": "Offer",
    "price": "69.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "54"}
}
```

## 17. Analytics Events to Track

- `Gift Sets Page Viewed` - { referrer, occasion_filter: null }
- `Occasion Filtered` - { occasion: "holidays" }
- `Gift Set Clicked` - { gift_set_id, gift_set_name, position, price }
- `Custom Set Started` - { initial_candle_count: 3 }
- `Custom Set Product Selected` - { product_id, total_selected: 2 }
- `Custom Set Configured` - { product_ids: [], box_style, total_price }
- `Gift Message Added` - { character_count: 87 }
- `Gift Wrap Selected` - { price_added: 5.00 }
- `Gift Set Added to Cart` - { gift_set_id, price, quantity, is_custom: false }
- `Corporate Quote Requested` - { quantity: 50, email_domain: "company.com" }

## 18. Performance Constraints

**Loading Targets:**
- LCP: <2.0s (hero image)
- FCP: <1.3s
- TTI: <3.0s

**Optimizations:**
- Hero image: Preload, max 120KB
- Gift set images: Lazy load, max 40KB each
- Custom widget: Lazy load until section in viewport
- Product thumbnails in widget: Progressive loading (first 6, then rest)

**Performance Budget:**
- Total: <1.6MB
- JS: <250KB
- CSS: <40KB
- Images: <1.3MB

## 19. Security Considerations

- Gift message: Sanitize HTML, escape special chars, XSS prevention
- Corporate form: Rate limit 5 submissions per hour per IP
- Custom set validation: Server-side stock check, prevent overselling
- CSRF tokens: All POST requests
- Input validation: Whitelist allowed characters in gift messages

## 20. Admin Config Controls

**Gift Set Management:**
- Create/edit gift sets (name, description, images)
- Select included products (multi-select from catalog)
- Set pricing (auto-calculate value, manually set sale price)
- Define occasions (multi-select tags)
- Upload packaging images
- Set stock quantity (or auto-calculated from included products)
- Enable/disable customization
- Featured toggle
- SEO fields (title, description)

**Build-Your-Own Settings:**
- Enable/disable feature
- Set minimum/maximum candle selection
- Define discount tiers (2 candles = 5%, 3 = 10%, etc.)
- Manage available gift box styles (add/edit/remove)
- Set gift wrap price

**Corporate Gifting:**
- Edit copy/messaging
- Set minimum quantity for corporate orders
- Configure notification email recipients
- Auto-response email template

## 21. Future Scalability Notes

**Enhancements:**
- Gift set builder with AR preview (see virtual box)
- Subscription gift sets (quarterly candle clubs)
- Gift registry feature
- Gift scheduling (send on specific date)
- Video unboxing previews
- Gift recommendation quiz ("Find the perfect gift")
- Multi-recipient orders (different addresses for bulk)
- Custom branding for corporate (company logo on boxes)
- Gift set templates by persona ("For the Wellness Lover")
- Live chat for custom gift consultation

**Technical:**
- Real-time inventory sync for custom sets
- GraphQL for flexible gift set queries
- Headless CMS for gift set content

---

**END OF GIFT SETS PAGE SPECIFICATION**
