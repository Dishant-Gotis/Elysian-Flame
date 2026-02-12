# Checkout Page Specification - Elysian Flame

[Note: Due to length constraints, this is a condensed specification covering all 21 required sections]

## 1. Page Purpose
Collect shipping, payment info, and finalize order. Streamline conversion with minimal friction, clear progress, trust signals.

## 2. Business Goal
- Achieve 75%+ checkout completion rate
- Reduce checkout abandonment to <25%
- Average checkout time <3 minutes
- Minimize payment errors and declines

## 3. Target User Intent
- Complete purchase quickly and securely
- Understand total cost before paying
- Choose shipping method
- Trust payment security
- Receive order confirmation

## 4. Theme & Visual Rules
- `#6CA651` - Progress bar, CTAs, success states
- `#BBCB2E` - Step indicators, highlights
- `#839705` - Labels, secondary text
- `#6B7445` - Inactive steps, backgrounds
- Clean, minimal design prioritizing form clarity

## 5. Layout Structure
- **Multi-step or single-page:** Recommend single-page with sections OR 3-step (Shipping → Payment → Review)
- **Desktop:** Left: Forms (70%), Right: Order summary (30%, sticky)
- **Mobile:** Full-width forms, sticky order summary bar at bottom

**Sections (if single-page):**
1. Contact Information
2. Shipping Address
3. Shipping Method
4. Payment Information
5. Order Review  
6. Place Order Button

**Progress Indicator:** Top of page (1. Information → 2. Shipping → 3. Payment)

## 6. Component List
1. **ProgressBar** - Visual checkout steps
2. **ContactForm** - Email + phone
3. **AddressForm** - Shipping address fields
4. **ShippingMethodSelector** - Radio buttons for delivery options
5. **PaymentForm** - Card details or payment gateway
6. **OrderSummaryPanel** - Sticky sidebar with cart items
7. **PlaceOrderButton** - Final submit CTA
8. **TrustBadges** - Security seals (SSL, payment logos)
9. **OrderConfirmation** - Success page post-payment
10. **ErrorMessage** - Validation and payment error display

## 7. Component Specifications (Key Components)

**ContactForm:**
- Email (required, validates format)
- Phone (optional, validates format)
- "Save info for next time" checkbox (if logged out)

**AddressForm:**
- Fields: First name, Last name, Address line 1, Address line 2, City, State (dropdown), Zip code, Country
- Autocomplete: Google Places API for address suggestions
- "Same as shipping" checkbox for billing address

**ShippingMethodSelector:**
- Options:
  - Standard (5-7 days) - Free over $50, otherwise $5.99
  - Express (2-3 days) - $12.99
  - Overnight (1 day) - $24.99
- Radio buttons, shows price, updates order total

**PaymentForm:**
- Credit card (Stripe/PayPal integration)
- Fields: Card number, Expiry, CVV, Cardholder name
- Logos: Visa, Mastercard, Amex, Discover
- OR PayPal button (redirects to PayPal)
- SSL badge, "Secure payment" text

**OrderSummaryPanel:**
- Mini cart (product thumbnails, names, quantities)
- Subtotal, Shipping, Tax, Discount (if applied)
- **Grand Total** (large, bold)
- Edit cart link
- Estimated delivery date

**PlaceOrderButton:**
- Large, full-width (on form side) or bottom sticky (mobile)
- Text: "Place Order - $XX.XX"
- Loading state: Spinner, "Processing..."
- Disabled until all fields valid

## 8. Data Fields Required
```json
 {
  "email": "string",
  "phone": "string",
  "shipping_address": {
    "first_name": "string",
    "last_name": "string",
    "address_line_1": "string",
    "address_line_2": "string",
    "city": "string",
    "state": "string",
    "zip_code": "string",
    "country": "string"
  },
  "billing_address": { /* same structure or "same_as_shipping": true */ },
  "shipping_method": "standard" | "express" | "overnight",
  "payment": {
    "method": "credit_card" | "paypal",
    "card_number": "string", // tokenized
    "expiry": "string",
    "cvv": "string", // not stored
    "cardholder_name": "string"
  },
  "order_notes": "string" // optional
}
```

## 9. API/Data Dependencies
- **POST /api/checkout/validate** - Validate address
- **POST /api/checkout/calculate-tax** - Get tax amount
- **GET /api/shipping/methods** - Available shipping options
- **POST /api/orders/create** - Finalize order
- **POST /api/payment/process** - Stripe/PayPal charge
- **GET /api/orders/{id}/confirmation** - Order details for confirmation page

## 10. User Interactions
1. Fill contact info
2. Fill shipping address (autocomplete assists)
3. Select shipping method (updates total)
4. Enter payment info
5. Review order summary
6. Click "Place Order"
7. Payment processes
8. Redirect to confirmation page

## 11. Validation Rules
- Email: Required, valid format
- Phone: Optional, valid format (10 digits)
- Address: All required fields filled
- Zip code: Valid US format (5 or 9 digits)
- Card number: Valid Luhn algorithm, 13-19 digits
- Expiry: MM/YY format, not expired
- CVV: 3-4 digits
- Minimum order: $10

## 12. Error States
- **Field validation:** Inline errors below each field (red text)
- **Payment declined:** "Payment failed. Please check card details or try another card."
- **Shipping unavailable:** "We don't ship to this address. Please contact us."
- **Tax calculation error:** "Couldn't calculate tax. Please refresh."
- **Order creation failed:** "Something went wrong. Your card was not charged. Please try again."

## 13. Empty States
N/A (checkout requires cart items - redirect to cart if empty)

## 14. Mobile Layout Rules
- Single column forms
- Full-width inputs (min 48px height)
- Order summary: Collapsible drawer at top OR sticky bar at bottom
- Place Order: Sticky bottom button (56px height)
- Progress bar: Simplified (icons only, no text)

## 15. Accessibility Rules
- Keyboard navigation: Tab through all fields, Enter to submit
- Labels: Every input has visible `<label>`
- Error messages: `aria-describedby` linking to error text
- Focus indicators: Clear outlines on all fields
- Screen reader: "Payment secure" announced, card input masked
- ARIA live region: Order total updates announced

## 16. SEO Fields
```html
<title>Secure Checkout | Elysian Flame</title>
<meta name="robots" content="noindex, nofollow">
```
(Checkout pages not indexed)

## 17. Analytics Events
- `Checkout Started` - { cart_value, item_count }
- `Checkout Step Completed` - { step: "shipping" | "payment" }
- `Shipping Method Selected` - { method, cost }
- `Payment Info Entered` - { method: "credit_card" | "paypal" }
- `Order Placed` - { order_id, total, payment_method }
- `Checkout Error` - { step, error_type }
- `Checkout Abandoned` - (on page exit before completion)

## 18. Performance Constraints
- LCP: <2.5s
- Form autofill: Support browser autofill for faster completion
- Payment gateway load: Async, non-blocking
- Address validation: Debounce 500ms

## 19. Security Considerations
- **PCI compliance:** Never store CVV, tokenize card numbers
- **SSL required:** HTTPS only
- **CSRF tokens:** All form submissions
- **Rate limiting:** Max 5 order attempts per 10 min
- **Fraud detection:** Flag suspicious orders (VPN, mismatched billing/shipping)
- **Input sanitization:** Escape all text inputs

## 20. Admin Config Controls
- Shipping method pricing and availability
- Tax calculation rules (nexus states)
- Payment gateway selection (Stripe, PayPal, etc.)
- Require phone number (toggle)
- Order notes field (enable/disable)
- Fraud rule thresholds

## 21. Future Scalability Notes
- Express checkout: Apple Pay, Google Pay, Shop Pay
- Address validation API: USPS, SmartyStreets
- Buy Now Pay Later: Affirm, Klarna, Afterpay
- Gift options: Add gift message, wrapping at checkout
- Multi-currency: Detect location, show local currency
- Saved addresses: For logged-in users
- Order insurance: Optional Shipping Protection (+$1.99)
- Carbon offset: Optional donation to offset shipping emissions

---

**END OF CHECKOUT PAGE SPECIFICATION**
