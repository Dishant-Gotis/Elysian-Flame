# Policies Page Specification - Elysian Flame

## 1. Page Purpose
Centralize all legal and operational policies: Shipping, Returns, Privacy, Terms of Service. Build trust through transparency and legal compliance.

## 2. Business Goal
- Reduce policy-related support inquiries
- Ensure legal compliance (GDPR, CCPA, ecommerce regulations)
- Build trust through clear, fair policies
- Reduce return-related confusion

## 3. Target User Intent
- What's the return policy?
- How long does shipping take?
- How is my data used?
- What are my rights as a customer?
- Can I cancel my order?

## 4. Theme & Visual Rules
- `#6CA651` - Section headings, key highlights
- Clean, readable typography (larger line-height for body text)
- Icon accents for each policy section
- Collapsible accordions for long policies

## 5. Layout Structure

**Option 1: Tabbed Interface**
- Tabs: Shipping | Returns & Exchanges | Privacy Policy | Terms of Service
- Click tab → Show policy content

**Option 2: Single Page with Anchor Links**
- TOC at top with jump links
- Scroll to section

**Recommended:** Single page with sticky TOC sidebar (desktop)

### Sections:
1. **Shipping Policy**
2. **Returns & Exchanges**
3. **Privacy Policy**
4. **Terms of Service**
5. **GDPR/CCPA Compliance**

## 6. Component List
- **PolicyNav** - Sidebar or horizontal tabs
- **PolicySection** - Each policy content block
- **AccordionItem** - For long sections (e.g., Privacy Policy subsections)
- **HighlightBox** - Key points (e.g., "30-day returns")
- **LastUpdated** - Timestamp "Last updated: February 1, 2024"

## 7. Component Specifications

### 7.1 Shipping Policy

**Content:**

**Heading:** Shipping Policy

**Processing Time:**
- Orders processed within 1-2 business days
- Handmade to order: 3-5 business days for custom sets
- Order cutoff: 12pm EST for same-day processing

**Shipping Methods:**
| Method | Time | Cost |
|---|---|---|
| Standard | 5-7 business days | Free over $50, otherwise $5.99 |
| Express | 2-3 business days | $12.99 |
| Overnight | 1 business day | $24.99 |

**Domestic Shipping:**
- We ship to all 50 US states
- PO Boxes accepted
- No shipping to APO/FPO addresses currently

**International Shipping:**
- Currently unavailable (OR specific countries if offered)
- Contact us for international inquiries

**Tracking:**
- Tracking number emailed when order ships
- Track via [Order Tracking](/track-order) page

**Delays:**
- Weather, carrier issues may delay delivery
- Peak season (holidays): Allow extra 2-3 days

**Damaged in Shipping:**
- Contact us within 48 hours with photos
- We'll send replacement or refund

### 7.2 Returns & Exchanges Policy

**Content:**

**30-Day Return Policy:**
- Return unused, unopened candles within 30 days of delivery
- Items must be in original packaging
- Scent dissatisfaction: We'll exchange or refund once per customer
- Custom/personalized gift ssets: Not eligible for return

**How to Return:**
1. Email hello@elysianflame.com with order # and reason
2. We'll provide return shipping label (deducted from refund) OR free return label (for defects)
3. Ship items back within 7 days
4. Refund processed within 5-7 business days of receiving return

**Return Shipping:**
- Customer pays return shipping ($5.99 deducted from refund)
- Unless item is defective/damaged (we cover shipping)

**Exchanges:**
- Email us to arrange exchange for different scent/size
- We cover shipping for exchanges

**Non-Returnable:**
- Sale/clearance items (final sale)
- Gift cards
- Opened candles (hygiene reasons) - But we'll work with you on scent dissatisfaction

**Refund Method:**
- Original payment method
- Processing time: 5-7 business days

### 7.3 Privacy Policy

**Content (must be legally compliant):**

**Information We Collect:**
- Personal Info: Name, email, phone, address
- Payment Info: Processed securely via Stripe (we don't store card numbers)
- Usage Data: IP address, browser type, pages visited (via cookies)
- Marketing: Email subscription status

**How We Use Your Info:**
- Process orders and send confirmations
- Provide customer support
- Send marketing emails (if opted in - can unsubscribe anytime)
- Improve website (analytics)
- Prevent fraud

**Data Sharing:**
- We do NOT sell your data
- Share with service providers: Shipping carriers (USPS, FedEx), payment processors (Stripe), email service (Mailchimp)
- Legal requirements: If required by law

**Cookies:**
- We use cookies for: Session management, analytics, advertising (opt-in)
- Cookie preferences: Link to cookie settings

**Your Rights:**
- **Access:** Request copy of your data
- **Deletion:** Request data deletion (GDPR Right to be Forgotten)
- **Correction:** Update inaccurate info
- **Opt-out:** Unsubscribe from emails anytime
- Contact: privacy@elysianflame.com

**CCPA (California) Rights:**
- Right to know what data we collect
- Right to delete
- Right to opt-out of sale (we don't sell data)
- Non-discrimination

**Data Security:**
- SSL encryption
- Secure servers
- PCI compliance for payments

**Third-Party Links:**
- Our site may link to external sites (social media, payment gateways)
- We're not responsible for their privacy practices

**Children's Privacy:**
- Site not intended for children under 13
- We don't knowingly collect children's data

**Updates to Policy:**
- Last updated: [Date]
- Changes posted here, effective immediately upon posting

### 7.4 Terms of Service

**Content:**

**Acceptance of Terms:**
- By using this site, you agree to these terms
- If you disagree, please don't use the site

**Use of Site:**
- You must be 18+ to make purchases
- Accurate information required for orders
- Prohibited: Unauthorized access, scraping, automated bots

**Product Information:**
- We strive for accuracy but can't guarantee all details are error-free
- Prices subject to change without notice
- Products subject to availability

**Pricing & Payment:**
- All prices in USD
- Payment due at time of order
- We accept Visa, Mastercard, Amex, PayPal
- Sales tax applied where required

**Order Acceptance:**
- We reserve the right to refuse/cancel any order
- Reasons: Fraud suspicion, pricing errors, product unavailability

**Intellectual Property:**
- Content, logos, images owned by Elysian Flame
- You may not reproduce without permission

**Limitation of Liability:**
- We're not liable for indirect damages
- Candle safety: Use as directed, never leave unattended

**Indemnification:**
- You agree to indemnify us against claims arising from your use of site

**Governing Law:**
- Laws of [State] apply
- Disputes resolved in [State] courts

**Changes to Terms:**
- We may update terms at any time
- Continued use = acceptance of changes

**Contact:**
- Questions? Email legal@elysianflame.com

## 8. Data Fields Required
- Policy content (HTML or Markdown)
- Last updated timestamp for each policy
- Version history (for compliance)

## 9. API/Data Dependencies
- Static content OR CMS-managed policies
- GET /api/policies?type=shipping|returns|privacy|terms

## 10. User Interactions
- Click TOC link → Scroll to section (smooth scroll)
- Click accordion → Expand/collapse subsection
- Copy policy link → Share specific section URL
- Download policy (PDF) - optional

## 11. Validation Rules
N/A (static content, no forms)

## 12. Error States
- Policy load error: "Content temporarily unavailable. Please try again."

## 13. Empty States
N/A (policies must always be present)

## 14. Mobile Layout Rules
- TOC: Collapsible at top (dropdown select or accordion)
- Single column content
- Accordions: Full-width, larger touch targets
- Increased font size (16px min for readability)

## 15. Accessibility Rules
- Semantic HTML: `<h2>` for policy titles, `<h3>` for subsections
- Skip links: "Skip to content"
- Accordions: `aria-expanded`, keyboard accessible
- Tables: `<th scope="col">` for headers
- High contrast text on white background

## 16. SEO Fields
```html
<title>Shipping, Returns & Privacy Policy | Elysian Flame</title>
<meta name="description" content="Read our policies on shipping, returns, privacy, and terms of service. 30-day returns, free shipping over $50.">
<link rel="canonical" href="https://elysianflame.com/policies">
```

## 17. Analytics Events
- `Policy Page Viewed` - { referrer }
- `Policy Section Viewed` - { section: "shipping" | "returns" | "privacy" | "terms" }
- `Accordion Expanded` - { section_heading }

## 18. Performance Constraints
- LCP: <2.0s
- Lazy load long policy sections (only load visible content initially)
- PDF generation: Server-side, cached

## 19. Security Considerations
- HTTPS required
- No user input (low risk)
- Version control: Track policy changes for legal compliance
- Effective date: Clearly state when policy takes effect

## 20. Admin Config Controls
- CMS for editing policies
- Version history: Track all changes with timestamps
- Need to publish prompt: "This policy change will go live immediately. Confirm?"
- Email notification: Alert team when privacy/terms updated

## 21. Future Scalability Notes
- Multi-language policies (FR, ES)
- Cookie consent banner integration (link to cookie policy)
- GDPR: Data deletion request form
- Policy acceptance checkboxes at checkout (for major updates)
- Email notifications: "We've updated our Privacy Policy" (GDPR requirement)
- Comparison view: Show what changed between policy versions

---

**END OF POLICIES PAGE SPECIFICATION**
