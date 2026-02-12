# Contact Page Specification - Elysian Flame

## 1. Page Purpose
Provide multiple contact methods, collect customer inquiries, set response time expectations, enable customer support access.

## 2. Business Goal
- Reduce email response time to <24 hours
- Resolve 80% of inquiries through self-service (FAQ)
- Capture leads (potential wholesale/corporate customers)
- Build trust through accessibility

## 3. Target User Intent
- Ask a pre-sale question
- Report an issue with order
- Inquire about wholesale/corporate gifting
- Request custom order
- General feedback

## 4. Theme & Visual Rules
- Clean, minimal form design
- `#6CA651` - Submit button, contact icons
- Botanical accents, calming atmosphere
- Trust signals (response time promise, email/phone visible)

## 5. Layout Structure
1. Hero: "We're Here to Help" heading
2. Contact Form: Left side (60%)
3. Contact Info: Right side (40%) - Email, phone, hours, social links
4. FAQ Accordion: Common questions below form
5. Location/Hours: If physical location exists

## 6. Component List
- **ContactForm** - Name, email, subject, message, submit
- **ContactInfoCard** - Email, phone display with copy button
- **FAQAccordion** - Expandable Q&A
- **BusinessHours** - Mon-Fri 9am-5pm EST
- **SocialLinks** - Instagram, Facebook icons

## 7. Component Specifications

**ContactForm Fields:**
- Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (dropdown: General Inquiry, Order Issue, Wholesale, Custom Order, Other)
- Message (textarea, required, min 20 chars, max 1000)
- Submit button

**Behavior:**
- Submit → API call → Success message "Thanks! We'll respond within 24 hours."
- Error → "Failed to send. Please try emailing us directly at hello@elysianflame.com"
- Spam protection: reCAPTCHA v3

**ContactInfoCard:**
- Email: hello@elysianflame.com (click to copy)
- Phone: (555) 123-4567
- Hours: Monday-Friday, 9am-5pm EST
- Average response time: "Within 24 hours"

**FAQ Accordion Examples:**
- "What is your return policy?" → Link to full policy
- "How long does shipping take?" → 5-7 days standard
- "Do you offer wholesale pricing?" → Contact form for inquiry
- "Can I customize a gift set?" → Link to gift sets page

## 8-21. [Condensed for length]

**Validation:**
- Email: Required, valid format
- Message: Min 20 chars, max 1000
- Spam protection: reCAPTCHA, honeypot field

**API Endpoint:**
- POST /api/contact/submit → Sends email to support team, creates ticket

**Analytics:**
- `Contact Form Viewed`
- `Contact Form Submitted` - { subject_category }
- `FAQ Clicked` - { question }
- `Email Copied` / `Phone Clicked`

---

**END OF CONTACT PAGE SPECIFICATION**
