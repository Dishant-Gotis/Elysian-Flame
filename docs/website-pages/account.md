# Account Dashboard Page Specification - Elysian Flame

## 1. Page Purpose
Central hub for logged-in customers to view orders, manage profile, update addresses, view wishlist, and access account settings.

## 2. Business Goal
- Increase repeat purchase rate by 30%
- Reduce "Where's my order?" support tickets by 50%
- Encourage wishlist usage for retargeting
- Simplify reordering process

## 3. Target User Intent
- Check order status
- View order history
- Update shipping address
- Manage saved payment methods
- View wishlist
- Change password

## 4. Theme & Visual Rules
- `#6CA651` - Active nav item, primary CTAs
- Clean dashboard cards with botanical accents
- Clear information hierarchy

## 5. Layout Structure
**Left Sidebar (20%):** Navigation
- Orders
- Profile
- Addresses
- Payment Methods
- Wishlist
- Settings
- Logout

**Main Content (80%):** Dynamic based on nav selection

## 6. Component List
1. **AccountNav** - Sidebar navigation
2. **OrdersTable** - List of past orders with status
3. **OrderDetailCard** - Expandable order info
4. **ProfileForm** - Name, email, phone edit
5. **AddressList** - Saved addresses with edit/delete
6. **AddressForm** - Add/edit address modal
7. **WishlistGrid** - Saved products
8. **SettingsPanel** - Password, email preferences

## 7. Component Specifications

**OrdersTable:**
- Columns: Order #, Date, Total, Status, Actions
- Status badges: Processing (yellow), Shipped (blue), Delivered (green)
- "View Details" → Expandable row with items, tracking
- "Reorder" button → Adds all items to cart

**OrderDetailCard:**
- Order number, date
- Items list (thumbnails + names)
- Shipping address
- Payment method (last 4 digits)
- Tracking number (if shipped) with carrier link
- Invoice download button

**ProfileForm:**
- First name, Last name, Email, Phone
- "Save Changes" button
- Success message on save

**AddressList:**
- Cards for each saved address
- Default address badge
- "Edit" and "Delete" actions
- "Add New Address" button

**WishlistGrid:**
- Product cards (reuse from homepage)
- Quick Add button
- Remove from wishlist (heart icon toggle)
- Empty state: "Start adding favorites!"

## 8-21. [Condensed for length]

**API Endpoints:**
- GET /api/account/profile
- PUT /api/account/profile
- GET /api/account/orders
- GET /api/account/addresses
- POST /api/account/addresses
- DELETE /api/account/addresses/{id}
- GET /api/account/wishlist

**Validation:**
- Email: Valid format, not already in use by another account
- Phone: Valid format
- Password: Min 8 chars, 1 uppercase, 1 number

**Analytics:**
- `Account Dashboard Viewed` - { active_tab }
- `Order Details Viewed` - { order_id }
- `Reorder Clicked` - { order_id, item_count }
- `Wishlist Item Added to Cart` - { product_id }
- `Address Updated`

---

**END OF ACCOUNT PAGE SPECIFICATION**
