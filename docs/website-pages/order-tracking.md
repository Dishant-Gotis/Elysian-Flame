# Order Tracking Page Specification - Elysian Flame

## 1. Page Purpose
Allow customers to track shipment status by order number or tracking number. Provide transparency and reduce "where's my order" support inquiries.

## 2. Business Goal
- Reduce shipping-related support tickets by 60%
- Increase customer satisfaction through transparency
- Set realistic delivery expectations

## 3. Target User Intent
- Where is my package?
- When will it arrive?
- Has it shipped yet?
- Is there a delay?

## 4. Theme & Visual Rules
- `#6CA651` - Progress bar filled states, "Delivered" badge
- `#BBCB2E` - "In Transit" highlights
- Clean, minimal progress tracker
- Package icon illustrations

## 5. Layout Structure
1. Tracking Input: Order # or tracking # field
2. Order Summary: Items, shipping address, order date
3. Tracking Timeline: Visual progress (Ordered → Processed → Shipped → In Transit → Delivered)
4. Estimated Delivery: Date range
5. Carrier Info: Logo, tracking link to carrier site
6. Support CTA: "Need help?" → Contact link

## 6. Component List
- **TrackingInput** - Search by order # or tracking #
- **OrderSummary** - Order details card
- **TrackingTimeline** - Interactive progress visual
- **TimelineStep** - Individual milestone (icon + status + timestamp)
- **CarrierInfo** - USPS/FedEx/UPS logo + external link
- **DeliveryEstimate** - Date range display
- **TrackingEvents** - Detailed scan history

## 7. Component Specifications

**TrackingInput:**
- Input field: Placeholder "Enter order or tracking number"
- Submit button: "Track Order"
- Guest access OR requires email confirmation (for privacy)
- Example: "e.g., #EF-10234 or 1Z999AA10123456784"

**TrackingTimeline:**
- Steps:
  1. **Order Placed** (✓ green, timestamp)
  2. **Order Processed** (✓ green if completed, grey if pending)
  3. **Shipped** (✓ green + tracking # assigned)
  4. **In Transit** (✓ current step, animated)
  5. **Out for Delivery**
  6. **Delivered** (✓ green, signature if required)

**Behavior:**
- Steps auto-highlight based on current status
- Click step → Show detailed timestamp and location
- Real-time or cached (updates every 6 hours)

** TimelineStep:**
- Icon: Package, truck, checkmark (status-dependent)
- Status label: "Shipped" + timestamp "Feb 12, 3:42 PM"
- Location: "Memphis, TN" (if available)
- Active step: Pulsing animation

**TrackingEvents (Detailed):**
- Table format:
  | Date/Time | Location | Status |
  | Feb 12, 3:42 PM | Memphis, TN | Departed FedEx facility |
  | Feb 12, 10:15 AM | Memphis, TN | Arrived at FedEx facility |
  | Feb 11, 8:30 PM | Nashville, TN | Picked up |

**DeliveryEstimate:**
- Text: "Estimated delivery: **February 15-18**"
- Icon: Calendar
- If expedited: "Guaranteed by Feb 14"

## 8-21. [Condensed for length]

**API Endpoints:**
- POST /api/track - { order_number_or_tracking }
- Returns: Order details + tracking events array
- External API: Fetch from carrier (USPS, UPS, FedEx) via EasyPost or AfterShip

**Error States:**
- Order not found: "We couldn't find that order. Please check the number and try again."
- Tracking not available yet: "Tracking info will be available once your order ships (usually within 24 hours)."
- Carrier API down: "Tracking temporarily unavailable. Please try again in a few minutes."

**Empty States:**
- Initial state (no search yet): Prompt to enter order #
- No tracking events: "Tracking info coming soon"

**Mobile Layout:**
- Timeline: Vertical, full-width
- Steps: Stacked, larger icons
- Events table: Card format (not table)

**Accessibility:**
- Timeline: `role="progressbar"`, `aria-valuenow` for current step
- Screen reader: "Order status: In Transit, Step 4 of 6"

**Analytics:**
- `Tracking Page Viewed`
- `Order Tracked` - { order_id, current_status }
- `Carrier Link Clicked` - { carrier }

**Security:**
- Rate limiting: Max 20 tracking searches per hour per IP (prevent scraping)
- Guest tracking: Require email confirmation (send code to order email)
- OR simple verification: Last 4 digits of phone/zip code

---

**END OF ORDER TRACKING PAGE SPECIFICATION**
