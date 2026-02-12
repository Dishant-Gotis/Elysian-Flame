# Shopping Cart Page Specification - Elysian Flame

## 1. Page Purpose
Display all items user has added to cart, allow quantity adjustments and removal, show pricing breakdown, apply discount codes, and provide clear path to checkout. Build confidence in purchase through order summary and trust signals.

## 2. Business Goal
- Minimize cart abandonment (target <55%)
- Drive 70%+ of cart viewers to proceed to checkout
- Increase AOV through recommended products and upsells
- Reduce support tickets through clear shipping/pricing information
- Enable quick edits without leaving page

## 3. Target User Intent
**User questions:**
- What's my total cost (including shipping/taxes)?
- Can I edit quantities or remove items easily?
- Do I have a discount code? How do I apply it?
- When will this ship?

 How can I save this for later?
- Is checkout secure?
- What if I want to keep shopping?

## 4. Theme & Visual Rules

**Color Palette:**
- `#6CA651` - Checkout button, savings text, success messages
- `#BBCB2E` - Free shipping progress bar, discount applied badge
- `#839705` - Subtotal labels, secondary text
- `#6B7445` - Background tints, dividers

**Typography:**
- Page heading (H1): 36px, Playfair Display, `#2C2C2C`, "Shopping Cart"
- Product names: 18px, Inter semi-bold, `#2C2C2C`
- Prices: 20px, Inter bold, `#2C2C2C`
- Labels: 14px, Inter medium, `#666666`

## 5. Layout Structure

### Desktop Layout:
- **Left Column (70%):** Cart items list
- **Right Column (30%):** Order summary (sticky)

### Mobile Layout:
- Full-width cart items
- Order summary at bottom (sticky bar or drawer)

## 6. Component List

1. **CartItemCard** - Individual product row
2. **QuantitySelector** - Plus/minus adjuster
3. **RemoveButton** - Delete item from cart
4. **OrderSummary** - Pricing breakdown sidebar
5. **DiscountInput** - Promo code field
6. **FreeShippingBar** - Progress indicator
7. **RecommendedProducts** - Cross-sell carousel
8. **SaveForLaterButton** - Move to wishlist
9. **CheckoutButton** - Primary CTA
10. **EmptyCart** - Empty state component
11. **TrustBadges** - Security/shipping icons

## 7. Component Specifications

### 7.1 CartItemCard

**Content:**
- Product image (100x100px thumbnail)
- Product name + scent note
- Variant info (e.g., "Size: 12oz")
- Price per unit
- Quantity selector
- Line total (quantity × price)
- Remove button (X icon or text link)
- Stock indicator (if low stock)

**Behavior:**
- Quantity change → Update line total → Update order summary
- Remove → Fade out item, update totals, show "Undo" toast
- Click image/name → Navigate to product page (new tab)
- Out of stock → Disable quantity increase, show message

**States:**
- Default: Fully interactive
- Updating: Show spinner on quantity selector
- Low stock: Orange warning "Only 2 left"
- Out of stock: Greyed out, "This item is now out of stock"
- Gift set: Show "Gift Set" badge, list included items in dropdown

**Styling:**
- Border-bottom: 1px solid `#E0E0E0`
- Padding: 24px vertical
- Image: Rounded 8px
- Desktop: Horizontal flex layout
- Mobile: Stacked (image on left, details on right, quantity/remove below)

**Data Required:**
```json
{
  "cart_item_id": "ci_123",
  "product_id": "prod_lav",
  "product_name": "Lavender Mist",
  "scent_note": "Calming & Floral",
  "variant_id": "var_12oz",
  "variant_name": "12oz",
  "image_url": "/images/lavender-thumb.webp",
  "price": 24.99,
  "quantity": 2,
  "line_total": 49.98,
  "in_stock": true,
  "stock_quantity": 15,
  "max_order_quantity": 10
}
```

### 7.2 OrderSummary (Sticky Sidebar)

**Content:**
- Heading: "Order Summary"
- Subtotal: "Subtotal (3 items): $74.97"
- Shipping: "Shipping: Calculated at checkout" OR "Free Shipping!"
- Discount: "-$10.00 (CODE10 applied)"
- Tax estimate: "Est. Tax: $6.00"
- **Total:** Large, bold "$70.97"
- Checkout button (primary, large)
- "Continue Shopping" link
- Trust badges: "Secure Checkout" + "Free Returns"
- Est. delivery date: "Arrives Feb 18-22"

**Behavior:**
- Updates in real-time as cart changes
- Sticky on desktop (scrolls with user)
- Mobile: Sticky bar at bottom OR summary drawer
- Shipping: Shows "Free" if subtotal ≥ $50, otherwise "Calculated at checkout"
- Tax: Estimate based on IP geo-location (if available)

**Styling:**
- Background: Light cream `#FAF8F5`
- Border-radius: 12px
- Padding: 32px
- Dividers between line items
- Total: 24px font, `#2C2C2C`, bold
- Checkout button: Full-width, 56px height, `#6CA651`, white text

### 7.3 DiscountInput Component

**Content:**
- Label: "Have a promo code?"
- Input field: Placeholder "Enter code"
- Apply button
- Success message: "CODE10 applied! You saved $10"
- Error message: "Invalid code" OR "Code expired"

**Behavior:**
- Type code → Enable Apply button
- Click Apply → Validate → Update order summary
- Invalid code → Shake animation, red border, error text
- Valid code → Green checkmark, discount appears in summary
- Remove code: X button next to applied code

**Validation:**
- Code format: Alphanumeric, max 20 chars
- Server-side validation: Check validity, expiration, usage limits
- Minimum order: Some codes require min $30 subtotal

**States:**
- Empty: Collapsed or minimized
- Entering: Input active, button enabled
- Validating: Button shows spinner
- Applied: Green success, code displayed, remove option
- Error: Red error message, shake animation

**Styling:**
- Input + Button: Flex row
- Input: 48px height, rounded-left
- Button: 48px height, rounded-right, `#6CA651`
- Success: Light green background, checkmark icon
- Error: Red text below input

### 7.4 FreeShippingBar Component

**Content:**
- Progress bar visual
- Message variations:
  - "Add $12 more for free shipping!"
  - "You qualify for free shipping! 🎉"
- Animated progress fill

**Behavior:**
- Updates as cart total changes
- Progress bar fills proportionally ($48/$50 = 96% filled)
- Reaches 100% → Message changes, confetti animation (brief)

**Styling:**
- Bar background: `#E0E0E0`, rounded
- Bar fill: `#BBCB2E`, smooth transition
- Height: 8px
- Message: 14px, centered above or below bar
- Positioned: Top of cart OR in order summary

###  7.5 RecommendedProducts Carousel

**Content:**
- Heading: "Complete Your Order"
- 4-6 product cards (compact version)
- Quick Add buttons
- "Frequently bought together" OR "You may also like"

**Behavior:**
- Click product → Navigate to product page
- Click Quick Add → Add to cart (update summary)
- Desktop: Horizontal carousel, 4 visible
- Mobile: 2 visible, swipe

**Data Required:**
- Recommendation algorithm:
  - Products from same collection as cart items
  - Complementary scents
  - Bestsellers
  - Lower price points (encourage add-ons)

### 7.6 EmptyCart Component

**Content:**
- Icon: Empty cart illustration (botanical style)
- Headline: "Your cart is empty"
- Message: "Start your scented journey"
- Primary CTA: "Shop Collections"
- Recently viewed: 4 product cards (if available)

**Styling:**
- Centered, generous padding (80px vertical)
- Icon: 150px, grey monotone
- Headline: 28px
- CTA: Prominent,  `#6CA651`

## 8. Data Fields Required

**Cart Object:**
```json
{
  "cart_id": "cart_abc123",
  "user_id": "user_xyz" | null,
  "items": [ /* CartItemCard data */ ],
  "subtotal": 74.97,
  "discount": {
    "code": "CODE10",
    "amount": 10.00,
    "type": "fixed" | "percentage"
  },
  "shipping": {
    "cost": 0,
    "free_shipping_threshold": 50,
    "qualified_for_free_shipping": true
  },
  "tax_estimate": 6.00,
  "total": 70.97,
  "item_count": 3,
  "created_at": "2024-02-11T10:30:00Z",
  "updated_at": "2024-02-11T11:45:00Z",
  "expires_at": "2024-02-13T10:30:00Z"
}
```

## 9. API/Data Dependencies

**Endpoints:**
- **GET /api/cart** - Fetch current cart
- **POST /api/cart/add** - Add item
- **PUT /api/cart/item/{id}** - Update quantity
- **DELETE /api/cart/item/{id}** - Remove item
- **POST /api/cart/apply-discount** - Apply promo code
- **DELETE /api/cart/remove-discount** - Remove code
- **GET /api/cart/recommendations** - Get upsell products

## 10. User Interactions

**Flow:**
1. User views cart
2. Adjusts quantity of one item
3. Applies discount code
4. Sees updated total
5. Clicks "Proceed to Checkout"

**Secondary:**
- Remove item → Undo toast
- Save for later → Moves to wishlist
- Continue shopping → Return to collection

## 11. Validation Rules

- Quantity: Min 1, max (stock OR 10)
- Discount code: Max 20 chars, alphanumeric
- Total: Minimum order $10 (if enforced)

## 12. Error States

- Item out of stock: Disable quantity increase, show message
- Discount invalid: Red error text, suggest similar codes
- Update failed: Toast error, revert to previous quantity

## 13. Empty States

- No items: EmptyCart component
- No recommended products: Hide section

## 14. Mobile Layout Rules

- Stack cart items vertically
- Order summary: Sticky bottom bar (collapses, tap to expand full drawer)
- Quantity selector: Larger touch targets (48px)
- Free shipping bar: Full  width at top

## 15. Accessibility Rules

- Quantity inputs: Labels, keyboard accessible
- Remove buttons: `aria-label="Remove Lavender Mist from cart"`
- Live region: `aria-live="polite"` for cart updates
- Focus management: After removing item, focus next item or checkout

## 16. SEO Fields

```html
<title>Shopping Cart | Elysian Flame</title>
<meta name="robots" content="noindex, nofollow">
```
(Cart pages typically not indexed)

## 17. Analytics Events

- `Cart Viewed` - { item_count, cart_value }
- `Quantity Changed` - { product_id, old_qty, new_qty }
- `Item Removed` - { product_id }
- `Discount Applied` - { code, discount_amount }
- `Checkout Clicked` - { cart_value, item_count }
- `Recommended Product Added` - { product_id, source: 'cart_upsell' }

## 18. Performance Constraints

- LCP: <2.0s
- Real-time updates: Optimistic UI (update immediately, sync with API)
- Debounce quantity changes: 500ms before API call

## 19. Security Considerations

- CSRF tokens: All cart mutations
- Rate limiting: Max 60 updates per minute
- Validate: Stock, pricing server-side (never trust client)
- Session-based carts: Secure cookies or JWT

## 20. Admin Config Controls

- Free shipping threshold (default $50)
- Minimum order value
- Maximum quantity per product
- Enable/disable discount codes
- Cart expiration time (default 30 days)
- Recommended products algorithm settings

## 21. Future Scalability Notes

- Save for later feature (wishlist integration)
- Gift wrapping per item
- Add gift message per item
- Multi-currency support
- Persistent cart across devices (logged-in users)
- Cart recovery emails (abandoned cart)
- Social proof: "X people have this in their cart"
- Bundle suggestions: "Buy 3, save 15%"

---

**END OF CART PAGE SPECIFICATION**
