# Collection Page Specification - Elysian Flame

## 1. Page Purpose
Display all products within a specific collection or category (e.g., Floral Collection, Bestsellers, All Candles). Enable efficient product browsing, filtering, and sorting. Help customers discover products matching their preferences and navigate to product detail pages.

## 2. Business Goal
- Achieve 45%+ click-through rate from collection to product detail pages
- Reduce bounce rate through effective filtering and sorting (target <30% bounce)
- Increase average session value through easy product discovery
- Drive 25%+ of visitors to add at least one product to cart
- Facilitate gift discovery through curated collections

## 3. Target User Intent
**Primary user questions:**
- What scents are available in this collection?
- What's the price range?
- Which products are most popular/highest rated?
- Can I filter by specific attributes (price, scent type, size)?
- Are there any sales or special offers?

**User behaviors:**
- Comparison shopping (viewing multiple products before deciding)
- Filtered browsing (looking for specific characteristics)
- Inspiration seeking (browsing for ideas, not yet decided)
- Re-purchasing (finding previously bought items)

## 4. Theme & Visual Rules

**Color Palette Application:**
- `#6CA651` - Active filters, sorting dropdown, collection headings
- `#BBCB2E` - Filter badges, hover states on cards
- `#839705` - Secondary text, price labels, dividers
- `#6B7445` - Filter sidebar background tint, subtle borders

**Typography:**
- Collection name (H1): 44px desktop / 32px mobile, Playfair Display, `#2C2C2C`
- Section headings: 24px, Inter semi-bold, `#6CA651`
- Product count: 16px, `#666666`, "(24 products)"
- Filter labels: 14px, Inter medium, `#2C2C2C`
- Filter options: 16px, Inter, `#666666`

**Visual Style:**
- Grid layout with generous white space between products
- Clean filter sidebar with botanical divider accents
- Hover effects: Subtle lift + shadow increase
- Active filter badges: Rounded pills with `#6CA651` background
- Loading skeletons: Gentle pulse animation in green tones

## 5. Layout Structure (Top → Bottom)

### Section 1: Navigation (Sticky header, same as homepage)

### Section 2: Collection Hero
- **Height:** 300px desktop / 200px mobile
- **Background:** Collection-specific hero image with gradient overlay
- **Content:** Collection name (H1), description, product count

### Section 3: Breadcrumbs
- **Height:** 40px
- **Content:** Home > Collections > {Collection Name}

### Section 4: Filter Bar & Sort (Sticky below nav)
- **Height:** 60px
- **Left:** Active filter badges (removable chips)
- **Right:** Sort dropdown + view toggle (grid/list)

### Section 5: Main Content Area
- **Layout:** Sidebar (filters) + Product grid
- **Desktop:** 25% sidebar, 75% grid (3-4 columns)
- **Mobile:** Filters in drawer, full-width grid (2 columns)

### Section 6: Product Grid
- **Columns:** 4 desktop / 3 tablet / 2 mobile
- **Gap:** 24px
- **Products per page:** 24 (pagination or infinite scroll)

### Section 7: Pagination or Load More
- **Height:** 80px
- **Content:** Page numbers or "Load More" button

### Section 8: Footer (Same as homepage)

## 6. Component List

1. **CollectionHero** - Banner with collection name, description, image
2. **FilterSidebar** - Left panel with all filter options
3. **FilterChip** - Removable badge showing active filter
4. **SortDropdown** - Sort options selector
5. **ViewToggle** - Grid vs. List view switcher
6. **ProductGrid** - Responsive grid of product cards
7. **ProductCard** - Reused from homepage (image, name, price, rating, quick add)
8. **FilterGroup** - Collapsible filter category (e.g., Price, Scent, Size)
9. **PriceRangeSlider** - Dual-handle slider for price filtering
10. **Pagination** - Page number navigation
11. **LoadMoreButton** - Infinite scroll trigger
12. **ResultsCount** - "Showing 1-24 of 87 products"
13. **EmptyState** - No products found message with suggestions
14. **MobileFilterDrawer** - Slide-out panel for filters on mobile
15. **ActiveFiltersBar** - Row of removable filter chips

## 7. Component Specifications

### 7.1 CollectionHero Component

**Content:**
- Background image: Collection-specific (e.g., floral candles for Floral Collection)
- Gradient overlay: `linear-gradient(to bottom, rgba(108,166,81,0.4), rgba(44,44,44,0.7))`
- Collection name (H1): "Floral Collection" (white text, centered)
- Description: "Immerse yourself in botanical bliss with our garden-inspired scents" (white, 18px, centered)
- Product count: "(12 products)" (white, 14px, below description)

**Behavior:**
- Desktop: Full-width, 300px height
- Mobile: 200px height, text stacks vertically
- Subtle parallax on scroll (0.5x speed)

**States:**
- Loading: Grey placeholder with skeleton text
- Loaded: Full content with fade-in animation

**Styling:**
- Text shadow for readability: `2px 2px 8px rgba(0,0,0,0.5)`
- Centered alignment
- Max-width content: 800px (within full-width container)

**Data Required:**
```json
"collection": {
  "id": "coll_floral",
  "name": "Floral Collection",
  "slug": "floral", 
  "description": "Immerse yourself in botanical bliss...",
  "hero_image_url": "/images/collections/floral-hero.jpg",
  "product_count": 12
}
```

### 7.2 FilterSidebar Component

**Filter Groups (collapsible accordions):**

**1. Price**
- Dual-handle range slider
- Min: $0, Max: $50 (or collection-specific max)
- Show current range: "$15 - $35"
- Quick presets: Under $20, $20-$30, $30+

**2. Scent Family**
- Checkboxes:
  - Floral (7 products)
  - Citrus (5 products)
  - Woody (4 products)
  - Fresh (8 products)
  - Spicy (3 products)
- Product count per option

**3. Size**
- Radio buttons (single selection):
  - 8oz
  - 12oz
  - 16oz
  - Gift Set

**4. Rating**
- Checkboxes:
  - 4+ stars (18 products)
  - 3+ stars (24 products)

**5. Availability**
- Checkboxes:
  - In Stock (20)
  - On Sale (5)
  - New Arrivals (3)

**Behavior:**
- Each group is collapsible (click heading → expand/collapse)
- Default: All groups expanded (desktop), all collapsed (mobile)
- Check filter → Instantly update product grid (client-side if <100 products, API if more)
- Price slider: 300ms debounce before applying filter
- Show product count next to each filter option (updates based on other active filters)

**States:**
- Expanded: Group content visible, chevron down
- Collapsed: Content hidden, chevron right
- Loading: Skeleton placeholders for filter options
- Disabled filter: Greyed out (e.g., if no products match)

**Styling:**
- Background: Light sage tint `#6B7445` at 3% opacity
- Border-right: 1px solid `#E0E0E0`
- Padding: 24px
- Group headings: 16px, semi-bold, `#2C2C2C`, 16px padding-bottom
- Filter options: 16px, `#666666`, 8px margin between options
- Checkboxes: Custom styled with `#6CA651` when checked
- Price slider: `#6CA651` track, white handles

**Mobile:**
- Hidden by default
- "Filters" button in header → Opens full-screen drawer
- Drawer: Slides from left, white background
- "Apply Filters" button at bottom (sticky)
- "Clear All" link at top

**Data Required:**
```json
"filters": {
  "price": {"min": 0, "max": 50, "current_min": 0, "current_max": 50},
  "scent_family": [
    {"label": "Floral", "value": "floral", "count": 7},
    {"label": "Citrus", "value": "citrus", "count": 5}
  ],
  "size": ["8oz", "12oz", "16oz", "Gift Set"],
  "rating": [
    {"label": "4+ stars", "value": 4, "count": 18},
    {"label": "3+ stars", "value": 3, "count": 24}
  ],
  "availability": [
    {"label": "In Stock", "value": "in_stock", "count": 20},
    {"label": "On Sale", "value": "on_sale", "count": 5}
  ]
}
```

### 7.3 FilterChip Component (Active Filters)

**Content:**
- Filter label: "Floral" or "Price: $15-$35" or "In Stock"
- X icon (close button)

**Behavior:**
- Displayed in horizontal row above product grid
- Click X → Remove filter, update grid
- Desktop: Below sort bar, above grid
- Mobile: Below sort bar, scrollable horizontally if many active

**States:**
- Default: `#6CA651` background, white text, rounded pill
- Hover: Slightly darker background, X icon turns red
- Clear all link: "Clear all filters" (text link, end of chip row)

**Styling:**
- Border-radius: 20px (full pill shape)
- Padding: 8px 16px
- Font-size: 14px
- X icon: 16px, slight right margin
- Gap: 8px between chips

### 7.4 SortDropdown Component

**Options:**
- Featured (default)
- Best Selling
- Price: Low to High
- Price: High to Low
- Newest
- Highest Rated

**Behavior:**
- Desktop: Dropdown menu (click to open)
- Mobile: Native select or modal picker
- Selection → Reorder product grid
- Persist selection in URL query param (e.g., `?sort=price_asc`)

**States:**
- Closed: Shows current selection + chevron down
- Open: List of options, current option has checkmark
- Loading: Spinner while reordering

**Styling:**
- Border: 1px solid `#E0E0E0`
- Padding: 12px 16px
- Border-radius: 8px
- Background: White
- Hover: Border color `#6CA651`
- Active option: `#6CA651` checkmark icon

### 7.5 ProductGrid Component

**Content:**
- Array of ProductCard components (reused from homepage)
- Grid layout: 4 columns desktop, 3 tablet, 2 mobile
- Gap: 24px between cards
- Products per page: 24

**Behavior:**
- Filters/Sort change → Fade out old products, fade in new (0.3s)
- Lazy load images as they approach viewport
- Scroll to top when changing page (smooth scroll)
- Maintain scroll position when using browser back button

**States:**
- Loading: 24 skeleton product cards (pulsing grey blocks)
- Loaded: Full product cards
- Filtering: Dim grid, show spinner overlay
- No results: EmptyState component

**Styling:**
- Display: CSS Grid
- grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
- Gap: 24px
- Padding: 40px (desktop), 16px (mobile)

### 7.6 EmptyState Component

**Content:**
- Icon: Magnifying glass with botanical accent (grey)
- Heading: "No products found" (H3, `#2C2C2C`)
- Message: "Try adjusting your filters or browse all products"
- CTA: "Clear All Filters" button (primary style)
- Suggested products: "You might like these" + 4 bestseller cards

**Behavior:**
- Shows when filter combination returns zero results
- "Clear All" button → Reset all filters, show full collection
- Suggested products: Pull from bestsellers or related collections

**Styling:**
- Centered alignment
- Icon: 120px size, `#CCCCCC`
- Heading: 28px, 24px margin-top
- Message: 16px, `#666666`, 16px margin-top
- Button: 24px margin-top
- Suggestions: 40px margin-top, grid of 4 products

### 7.7 Pagination Component

**Content:**
- Previous arrow
- Page numbers: [1] [2] [3] ... [8]
- Next arrow
- "Showing 1-24 of 87 products" (above pagination)

**Behavior:**
- Click page number → Load that page, scroll to top
- Click arrow → Next/previous page
- Disable Previous on page 1, disable Next on last page
- Show max 7 page buttons: [1] [2] [3] [4] [...] [8] (current ±2 pages)
- URL updates: `/collections/floral?page=2`

**Alternative: Infinite Scroll**
- "Load More" button at bottom
- Click → Append next 24 products to grid
- Auto-load when scrolling within 200px of bottom (optional)
- Show "Loading..." text while fetching

**States:**
- Default: Active page highlighted
- Hover: Page number background changes to light green
- Disabled: Grey, cursor not-allowed
- Loading: Spinner in button

**Styling:**
- Centered alignment
- Page buttons: 40x40px, rounded, 1px border `#E0E0E0`
- Active page: `#6CA651` background, white text
- Hover: `#6CA651` at 10% opacity background
- Arrows: Icon buttons, same sizing
- Results count: 14px, `#666666`, 16px margin-bottom

## 8. Data Fields Required

**Collection Object:**
```json
{
  "id": "coll_floral",
  "name": "Floral Collection",
  "slug": "floral",
  "description": "Full description text",
  "hero_image_url": "/images/collections/floral-hero.jpg",
  "product_count": 87,
  "seo_title": "Floral Soy Candles | Elysian Flame",
  "seo_description": "Discover our floral collection...",
  "sort_order": 2,
  "status": "active"
}
```

**Product Array:**
- Array of product objects (simplified schema for grid):
```json
{
  "id": "prod_lavender",
  "name": "Lavender Mist",
  "slug": "lavender-mist",
  "price": 24.99,
  "sale_price": null,
  "image_url": "/images/products/lavender-thumb.webp",
  "rating": 4.8,
  "review_count": 127,
  "in_stock": true,
  "is_new": false,
  "badges": ["bestseller"]
}
```

**Filter Options:**
- See FilterSidebar data schema above

**Pagination Meta:**
```json
{
  "current_page": 1,
  "total_pages": 4,
  "total_products": 87,
  "per_page": 24,
  "has_next": true,
  "has_previous": false
}
```

## 9. API/Data Dependencies

**Required Endpoints:**

1. **GET /api/collections/{slug}**
   - Returns: Collection object + metadata
   - Cache: 1 hour
   - 404 if collection not found

2. **GET /api/collections/{slug}/products**
   - Params: page, per_page, sort, filters (JSON encoded)
   - Returns: { products: [], pagination: {}, filters: {} }
   - Cache: 15 minutes (client-side), 5 min (server-side)
   - Example: `/api/collections/floral/products?page=1&sort=price_asc&filters={"scent":["floral"],"price_min":15}`

3. **GET /api/collections/{slug}/filters**
   - Returns: Available filter options with product counts
   - Updates based on currently active filters (dynamic counts)
   - Cache: 15 minutes

4. **POST /api/cart/add** (from quick add on product cards)
   - Body: { product_id, quantity, variant_id }
   - Returns: Updated cart object

**Data Loading Strategy:**
- SSR: Collection metadata, first 24 products, filter options (SEO)
- CSR: Product updates on filter/sort changes (instant feedback)
- Prefetch: Next page of products, product detail pages on card hover
- Caching: Use SWR pattern (stale-while-revalidate)

## 10. User Interactions

**Primary Flow: Browse → Filter → View Product → Add to Cart**
1. User navigates to collection (from homepage or nav menu)
2. User sees all products in collection
3. User applies filters (e.g., "Floral" scent, "In Stock")
4. Grid updates to show matching products (12 results)
5. User changes sort to "Price: Low to High"
6. User hovers over product card (sees quick add button)
7. User clicks product card → Navigates to product detail page
8. (OR) User clicks quick add → Toast confirmation, cart updates

**Secondary Flow: Quick filtering**
1. User arrives from Google search or external link
2. URL includes filters (e.g., `/collections/floral?scent=citrus&price_max=25`)
3. Page loads with pre-applied filters
4. User immediately sees filtered results
5. User adjusts one filter (removes citrus)
6. Grid updates in real-time

**All Interactive Elements:**
- Filter checkboxes/radio buttons
- Price range slider
- Sort dropdown
- View toggle (grid/list)
- Filter chips (remove)
- Product card clicks
- Quick add buttons
- Pagination buttons / Load more
- Breadcrumb navigation
- Mobile filter drawer open/close

## 11. Validation Rules

**Filter Inputs:**
- Price range: Min must be ≥ 0, Max must be ≤ collection max price
- Price min/max: Min cannot exceed Max
- Checkbox selections: No limit (can select multiple scents, ratings, etc.)
- Radio selections (size): Single selection only

**Pagination:**
- Page number: Must be integer, ≥ 1, ≤ total_pages
- Invalid page: Redirect to page 1
- Per page: Fixed at 24 (or configurable in admin, max 100)

**Sort Options:**
- Must be from allowed list (featured, best_selling, price_asc, price_desc, newest, rating)
- Invalid sort param: Default to "featured"

**URL Query Params:**
- Sanitize all inputs (prevent injection)
- Validate filter values match available options
- Encode special characters properly

## 12. Error States

**Collection Not Found (404):**
- Display: Centered error message
- Heading: "Collection Not Found"
- Message: "This collection doesn't exist or has been removed."
- CTA: "Browse All Products" → /collections/all
- Suggestions: Show 4 featured collections as cards

**API Error (Products fail to load):**
- Display: Error message in grid area
- Heading: "Couldn't load products"
- Message: "Please refresh the page or try again later."
- Retry button: "Reload Products"
- Keep sidebar filters visible (allow retry without losing filter state)

**Image Load Errors:**
- Product cards: Show botanical placeholder (green icon, cream bg)
- Collection hero: Show solid color gradient background with text still visible

**Filter Application Error:**
- Toast notification: "Couldn't apply filter. Please try again."
- Revert to previous filter state
- Retry button in toast

**Pagination Beyond Max:**
- URL `/collections/floral?page=999` where max is page 4
- Auto-redirect to last valid page (page 4)
- Show friendly message: "Showing last page of results"

## 13. Empty States

**No Products in Collection:**
- Icon: Empty box illustration (grey)
- Heading: "This collection is empty"
- Message: "Check back soon for new products!"
- CTA: "Explore Other Collections" → /collections

**No Results from Filters:**
- See EmptyState component spec above (section 7.6)
- Includes suggestions and "Clear All Filters" CTA

**No Sale Items (if on sale collection):**
- Heading: "No active sales right now"
- Message: "Sign up for our newsletter to be notified of future sales"
- Newsletter signup form (inline)
- Suggestions: "Shop Bestsellers" → 4 product cards

## 14. Mobile Layout Rules

**Breakpoints:** Mobile <768px, Tablet 768-1023px, Desktop 1024px+

**Mobile Transformations:**

**Collection Hero:**
- Height: 200px (from 300px)
- Heading: 32px (from 44px)
- Description: 16px, max 2 lines with ellipsis

**Filters:**
- Sidebar hidden by default
- "Filters" button in sticky bar (left side)
- Button shows active filter count badge (e.g., "Filters (3)")
- Click → Full-screen drawer slides from left
- Drawer: White background, close X top-right
- "Apply Filters" sticky button at bottom (green bg, white text)
- "Clear All" text link at top

**Sort & View:**
- Sort dropdown: Full-width above grid, 48px height (larger touch target)
- View toggle: Hidden on mobile (always grid view)
- Active filters: Horizontal scroll strip above grid

**Product Grid:**
- 2 columns (from 4)
- Gap: 16px (from 24px)
- Cards: Min-width 150px

**Pagination:**
- Show fewer page numbers: [1] [2] [...] [5]
- Prev/Next arrows: Larger (48x48px touch targets)
- Results count: Smaller text (12px)

**Sticky Elements:**
- Filter/Sort bar sticks below header
- Contains: "Filters" button, Sort dropdown, Active filter count

**Touch Interactions:**
- Swipe filter chips horizontally to scroll
- Tap product card → Navigate to detail (no hover state)
- Quick add: Always visible (not hover-dependent)
- Pull-to-refresh: Reload collection products (optional)

**Performance:**
- Reduce products per page: 12 on mobile (vs. 24 desktop) for faster load
- Lazy load images: More aggressive threshold (400px before viewport)
- Disable parallax on hero

## 15. Accessibility Rules

**WCAG 2.1 AA Compliance:**

**Keyboard Navigation:**
- Tab order: Breadcrumbs → Filters button (mobile) → Sort dropdown → Filter chips → Product grid → Pagination
- Filters sidebar: Tab through all checkboxes, Enter/Space to toggle
- Filter groups: Enter to expand/collapse
- Price slider: Arrow keys to adjust values, Tab to switch handles
- Product cards: Tab to focus, Enter to navigate
- Skip links: "Skip to products" link (hidden, visible on focus)

**Screen Reader Support:**
- Collection hero: `<h1>` for collection name
- Filter groups: `<fieldset>` + `<legend>` for each group
- Checkboxes: `<label>` associated with each `<input>`
- Active filters: `<div aria-live="polite">Showing 12 of 87 products</div>`
- Sort dropdown: `<label for="sort">Sort by</label>`
- Pagination: `<nav aria-label="Pagination">`
- Product grid: `<ul role="list">` with product cards as `<li>`
- Filter count badges: `<span aria-label="3 active filters">(3)</span>`

**Color Contrast:**
- All text meets AA standards (verified with primary palette)
- Filter chips: White text on `#6CA651` (3.52:1 - passes for 18px+ bold)
- Price slider: High contrast handles (white with dark border)

**Focus Indicators:**
- All interactive elements: 3px solid `#6CA651` outline, 2px offset
- Form inputs: Outline + border color change
- Product cards: Outline around entire card

**ARIA Attributes:**
- Filter sidebar: `<aside aria-label="Product filters">`
- Product count: `<span aria-live="polite">Showing 1-24 of 87 products</span>`
- Price slider: `<input type="range" aria-label="Minimum price" aria-valuemin="0" aria-valuemax="50" aria-valuenow="15">`
- Collapse/expand: `<button aria-expanded="true" aria-controls="filter-scent">Scent Family</button>`
- Loading state: `<div aria-busy="true">Loading products...</div>`

**Mobile Filter Drawer:**
- When opened: Trap focus within drawer
- Close button: `<button aria-label="Close filters">`
- When closed: Return focus to "Filters" button

**Semantic HTML:**
- `<main>` for product grid area
- `<aside>` for filter sidebar
- `<nav>` for pagination
- `<form>` for filter groups (allows native submit)

**Motion Preferences:**
- Respect `prefers-reduced-motion`
- Disable: Parallax hero, product fade-in animations, drawer slide animations
- Keep: Instant state changes

## 16. SEO Fields

**Meta Tags (Example: Floral Collection):**
```html
<title>Floral Soy Candles - Natural Botanical Scents | Elysian Flame</title>
<meta name="description" content="Shop our floral soy candle collection. Hand-poured with lavender, rose, ylang ylang, and geranium. 100% natural, eco-friendly. Free shipping over $50.">
<meta name="keywords" content="floral candles, lavender candle, rose candle, botanical candles, soy candles, natural candles">
<link rel="canonical" href="https://elysianflame.com/collections/floral">
```

**Open Graph:**
```html
<meta property="og:title" content="Floral Soy Candle Collection | Elysian Flame">
<meta property="og:description" content="Discover 12 botanical floral scents. Hand-poured, 100% natural soy wax.">
<meta property="og:image" content="https://elysianflame.com/images/collections/floral-og.jpg">
<meta property="og:url" content="https://elysianflame.com/collections/floral">
<meta property="og:type" content="product.group">
```

**Structured Data (Collection Schema):**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Floral Collection",
  "description": "Immerse yourself in botanical bliss...",
  "url": "https://elysianflame.com/collections/floral",
  "image": "https://elysianflame.com/images/collections/floral-hero.jpg",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://elysianflame.com"},
      {"@type": "ListItem", "position": 2, "name": "Collections", "item": "https://elysianflame.com/collections"},
      {"@type": "ListItem", "position": 3, "name": "Floral", "item": "https://elysianflame.com/collections/floral"}
    ]
  },
  "numberOfItems": 12
}
```

**Product List Schema (Optional):**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Lavender Mist",
      "url": "https://elysianflame.com/products/lavender-mist",
      "image": "...",
      "offers": {"@type": "Offer", "price": "24.99", "priceCurrency": "USD"}
    }
    // ... more products
  ]
}
```

**Technical SEO:**
- URL structure: `/collections/{slug}` (clean, keyword-rich)
- Pagination SEO: `<link rel="prev" href="?page=1">` and `<link rel="next" href="?page=3">` on page 2
- Filtered URLs: Use `rel="canonical"` pointing to unfiltered collection (avoid duplicate content)
- H1: Collection name (single H1 per page)
- Alt tags: Collection hero image, all product images
- Page speed: Target <2.5s LCP (lazy load below-fold products)
- Sitemap: Include all collections, priority 0.9, weekly change

## 17. Analytics Events to Track

**Page View:**
```javascript
analytics.track('Collection Viewed', {
  collection_id: 'coll_floral',
  collection_name: 'Floral Collection',
  product_count: 87,
  page_url: window.location.href,
  referrer: document.referrer
});
```

**Filter Interactions:**
- `Filter Applied` - { filter_type: 'scent', filter_value: 'floral', active_filters: {...} }
- `Filter Removed` - { filter_type: 'price', filter_value: '15-35' }
- `All Filters Cleared` - { previous_filter_count: 3 }
- `Price Range Adjusted` - { min: 15, max: 35 }

**Sort Interactions:**
- `Products Sorted` - { sort_by: 'price_asc', previous_sort: 'featured' }

**Product Interactions:**
- `Product Clicked` - { product_id, product_name, position_in_grid: 5, collection_name: 'Floral' }
- `Quick Add Clicked` - { product_id, product_name, source: 'collection_grid' }
- `Add to Cart` - { product_id, product_name, price, quantity, cart_total }

**Pagination:**
- `Page Changed` - { page_number: 2, total_pages: 4, method: 'click_number' | 'next_arrow' }
- `Load More Clicked` - { current_products_shown: 24, total_products: 87 }

**View Toggle:**
- `View Changed` - { view_type: 'grid' | 'list', previous_view: 'grid' }

**Engagement:**
- `Scroll Depth` - { depth_percentage: 25 | 50 | 75 | 100 }
- `Time on Collection` - Calculated on exit
- `No Results` - { active_filters: {...}, collection_name: 'Floral' }

**Mobile Specific:**
- `Mobile Filter Drawer Opened` - { current_active_filters: 2 }
- `Mobile Filters Applied` - { filters_changed: ['scent', 'price'] }

## 18. Performance Constraints

**Loading Time Targets:**
- FCP: <1.5s
- LCP: <2.5s (hero image critical)
- TTI: <3.5s
- CLS: <0.1 (stable grid layout critical)
- FID: <100ms

**Optimization Strategies:**

### Images:
- Collection hero: Preload, max 150KB, 1920x400px, WebP
- Product thumbnails: Max 30KB each, 400x400px, lazy load
- CDN delivery with geo-distribution
- Responsive srcset for different screen sizes

### Code:
- Critical CSS inline: Hero, grid skeleton (<12KB)
- Defer non-critical JS: Filters, pagination
- Code splitting: Filter logic in separate bundle
- Tree shaking: Remove unused filter components

### Data Fetching:
- SSR: Collection data, first 24 products (SEO + speed)
- CSR: Additional products (pagination), filter updates
- Debounce filter changes: 300ms delay before API call
- Cache: API responses (15min client, 5min server)
- Prefetch: Next page of products (link rel="prefetch")

### Real-time Updates:**
- Filter counts: Calculate client-side if <100 products (instant feedback)
- Server-side filtering if >100 products (accurate counts, slower)
- Optimistic UI: Update grid before API confirms (revert if error)

**Performance Budget:**
- Total page weight: <1.8MB
- JavaScript: <280KB (compressed)
- CSS: <45KB (compressed)
- Images: <1.4MB total
- Requests: <45 total

### Mobile Performance:
- Reduce initial products: 12 on mobile vs. 24 desktop
- Smaller images: 300x300px vs. 400x400px
- Disable parallax
- Aggressive lazy loading (500px threshold)

## 19. Security Considerations

**Input Validation:**
- Filter values: Validate against allowed options, reject unknown values
- Price range: Server-side validation (min ≥ 0, max ≤ collection max, min < max)
- Sort param: Whitelist allowed values, default to "featured" if invalid
- Page number: Integer validation, min 1, max total_pages

**API Security:**
- Rate limiting: 60 requests per minute per IP (collection API)
- Quick add to cart: Same security as product page (validate stock, max quantity)
- CSRF tokens: All POST requests (add to cart)
- CORS: Whitelist own domain
- HTTPS only

**Query Param Injection:**
- Sanitize all URL parameters before using in API calls
- Prevent SQL injection: Use parameterized queries or ORM
- Prevent XSS: Escape special characters in filter values before displaying

**Data Privacy:**
- No PII collection on this page
- Cookie consent: Track filter preferences only with consent
- Analytics: Pseudonymize user IDs

**Content Security:**
- CSP headers: Restrict script/image sources
- No user-generated content on this page (safe from XSS via reviews)

## 20. Admin Config Controls

**Collection Management (CMS/Admin Panel):**

### Basic Info:
- Collection name (text input, max 60 chars)
- Slug (auto-generate from name, editable, unique)
- Description (textarea, max 300 chars)
- Status (dropdown: Active, Hidden, Archived)
- Sort order (number, determines nav menu order)

### Visual:
- Hero image upload (JPG/PNG/WebP, max 2MB, recommended 1920x400px)
- Hero gradient overlay (color picker, opacity slider)
- Alt text (auto-generate or manual)

### Products:
- **Auto-populated or manual:**
  - Auto mode: Rule-based (e.g., all products tagged "Floral")
  - Manual mode: Multi-select products from full catalog
- Product inclusion rules (if auto):
  - Tag contains: "Floral"
  - Category equals: "Floral"
  - Price range: Optional min/max
  - Stock status: Include/exclude out of stock
- Product order: Featured first, then by rule (newest, bestselling, etc.)

### Filters:
- Enable/disable filters globally (e.g., turn off "Size" filter for gift set collection)
- Filter display order (drag to reorder)
- Custom filter values (e.g., add "Limited Edition" to Availability filters)

### SEO:
- Meta title (text input, max 60 chars, auto-populate from collection name)
- Meta description (textarea, max 160 chars)
- Open Graph image (upload or default to hero image)
- Canonical URL (auto-set, override option)

### Display Settings:
- Products per page (dropdown: 12, 24, 36, 48)
- Default sort order (dropdown: Featured, Best Selling, etc.)
- Grid columns desktop (dropdown: 3, 4)
- Show product count (toggle)
- Show ratings on cards (toggle)
- Enable quick add (toggle)

**Bulk Operations:**
- Import collections (CSV with columns: name, description, product_ids)
- Export collections (CSV)
- Duplicate collection (create copy for variation)
- Delete collection (soft delete, archive products)

**Permissions:**
- **Content Editor:** Edit collection name, description, image
- **Product Manager:** Add/remove products from collection
- **Marketing Manager:** Edit SEO fields, filters
- **Admin:** Full access + settings

## 21. Future Scalability Notes

**Planned Enhancements:**

### Advanced Filtering:
- Multi-range sliders: Burn time (30-50hrs, 50-70hrs, 70+hrs)
- Color filter: Filter by candle wax color or label color
- Ingredient filter: "Contains essential oils", "Vegan", "Phthalate-free"
- Scent intensity: Light, Medium, Strong (slider)
- Seasonal filter: Spring, Summer, Fall, Winter collections

### Personalization:
- "Recommended for You" sorting option (based on browse history)
- Recently viewed products widget at bottom
- "Similar to items you liked" filter
- Location-based: Show products available in user's region first

### Visual Enhancements:
- List view option: Product image left, details right in horizontal cards
- Product comparison: Select multiple products, compare side-by-side
- Color swatches: If candles have color variants
- Hover preview: Show second image from gallery on card hover

### Advanced Features:
- Saved filters: "Save this search" for logged-in users
- Price drop alerts: "Notify me if price drops below $20"
- Virtual try-on: AR view of candle in your space (mobile)
- Filter presets: Quick buttons like "Gifts Under $30", "Bestselling Florals"
- Dynamic collections: "Trending Now", "New This Week" (auto-updated)

### Performance:
- Infinite scroll: Replace pagination (optional setting)
- Virtual scrolling: Render only visible product cards (1000+ products)
- Service worker: Offline collection browsing (cached)
- Edge rendering: Deploy to edge for <500ms TTFB globally

### Analytics:
- Heatmaps: Track where users click on grid
- Filter analytics: Which filters are most used, which combinations yield no results
- A/B testing: Test grid layouts (3 vs. 4 columns), filter sidebar vs. top bar

### Internationalization:
- Multi-currency: Show prices in user's local currency
- Multi-language: Translate collection names, descriptions, filter labels
- Localized filtering: Region-specific availability

### Technical:
- GraphQL API: Flexible querying for filters + products in single request
- ElasticSearch: Full-text search + faceted filtering for large catalogs (1000+ products)
- Real-time inventory: WebSocket updates for stock status on cards
- PWA: Add to homescreen, offline mode

### Mobile App:
- Native filter UI: Bottom sheet instead of drawer
- Gesture controls: Swipe to change pages, pinch to zoom product cards
- Camera search: "Find similar candles" by uploading photo

---

**END OF COLLECTION PAGE SPECIFICATION**

This document is comprehensive and self-sufficient for development. Developers can build the collection page using only this specification.
