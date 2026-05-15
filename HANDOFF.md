# FIWB Ecommerce — Design Handoff

## Design Summary

Glass Future ecommerce storefront with dark glassmorphism aesthetic, inspired by pencil.dev. Dark backgrounds with translucent glass panels, indigo gradients, and clean Inter typography.

## Approved Visual Direction

- **Direction**: Glass Future (bold reinterpretation of pencil.dev)
- **Strategy**: copy-site (faithful to pencil.dev's dark modern aesthetic)

## Approved Homepage Option

- **Selected**: Option A — Glass Future
- **Preview file**: `output/fiwb-ecommerce/designs/homepage-option-a.png`
- **Pencil file**: `output/fiwb-ecommerce/designs/homepage-directions.pen`
- **Full design**: `output/fiwb-ecommerce/designs/design.pen`
- **Design export**: `output/fiwb-ecommerce/designs/design.png`

## Source Audit

- **Reference URL**: https://www.pencil.dev
- **Source audit**: `output/fiwb-ecommerce/source-audit.json` (limited — JS-heavy SPA)
- **Key design signals**: Dark theme, clean typography, developer-focused aesthetic, minimal UI

## Motion Level

- **Level**: 2 — Alive
- **Libraries**: framer-motion (core), Lenis (smooth scroll), react-intersection-observer (scroll triggers)

## Typography

- **Family**: Inter (display + body) — supports Latin, Cyrillic, CJK
- **Scale**: 12/14/16/18/20/24/32/40/48/64
- **Why**: Matches pencil.dev's clean sans-serif approach; broad language support

## Libraries

See `ui-libraries.json` for full list.

## Setup Commands

```bash
pnpm add framer-motion clsx tailwind-merge lucide-react next-themes
pnpm add react-intersection-observer
pnpm add lenis
pnpm add ogl
```

## Section-by-Section Layout

### Homepage section order:
1. **Header** — glass-effect nav with logo, center nav, cart + sign-in buttons
2. **Hero** — full-width with tag badge, main headline (64px), subtitle, gradient CTA + ghost CTA
3. **Featured Products** — 3-column product card grid with image area, badge, pricing (sale/original), Add to Cart
4. **About** — 2-column: text (label, title, description, stats row) + brand image placeholder
5. **Services/Features** — 4-column card grid with icon, title, description
6. **Pricing** — 3-tier pricing cards (Starter/Professional/Enterprise), Professional highlighted with accent
7. **FAQ** — centered 4-item accordion-style list
8. **Contact** — form (name, email, message) + contact info sidebar
9. **Footer** — 4-column: brand + Shop/Company/Support link groups, copyright bar

### Color extraction:
- **Primary**: Indigo #6366F1
- **Accent**: Indigo light #818CF8
- **Gradient**: #6366F1 → #A855F7
- **Background**: Near-black #0A0A0F

## Component Inventory

### Layout
- GlassNav (header with glass-effect background)
- HeroSection (full-width with gradient CTA)
- ProductGrid (responsive horizontal row)
- FeatureGrid (4-column service cards)
- PricingGrid (3-tier pricing)
- FaqAccordionList
- ContactSection
- FooterSection

### Interactive
- GlassButton (ghost/outline with glass effect)
- GradientButton (indigo-to-purple gradient)
- ProductCard (image + badge + info + add-to-cart)
- PricingCard (plan + features + CTA)
- FormInput (glass styled)
- AccordionItem (FAQ toggle)

### Ecommerce-specific (to build frontend)
- ProductCard (image, name, price, wishlist icon, add-to-cart)
- ProductGrid (responsive, with skeleton loading)
- ProductImageGallery (main + thumbnails)
- VariantSelector (size/color chips)
- CartDrawer (slide-in panel with items + subtotal)
- CartLineItem (image, name, qty stepper, remove)
- CheckoutDeliveryForm
- CheckoutOrderSummary
- PaymentMethodSelector
- OrderStatusBadge
- OrderHistoryRow
- WishlistCard
- AuthForm (shared login/register style)
- ProfileForm (editable fields)

## Animation Rules

- **Page transitions**: fade + slight scale (0.3s)
- **Section entries**: fade-up with stagger on children
- **Hover**: subtle scale (1.02) on cards, opacity shift on buttons
- **Scroll**: Lenis smooth scroll
- **Parallax**: none at motion level 2
- **Micro-interactions**: hover scale, button press (scale 0.97)

## Interaction Rules

- Cards: hover → scale 1.02, border highlight
- Buttons: hover → brightness increase, active → scale 0.97
- Nav links: hover → color shift to accent
- Product images: hover → subtle zoom

## Responsive Behavior

- Desktop-first (1440px canvas)
- Cards wrap to 2-column on tablet, 1-column on mobile
- Hero text scales down (64px → 40px → 32px)
- Navigation collapses to hamburger on mobile
- Padding reduces (80px → 32px → 16px)

## Accessibility Notes

- High contrast: white text on dark backgrounds
- Interactive elements have hover/focus states
- Proper heading hierarchy (h1 → h6)
- Form labels are associated with inputs
- Color is not the only indicator for interactive states

## Content Tone

- **Default language**: en
- **Tone**: Modern, confident, premium — like pencil.dev's voice
- **Cyrillic/CJK**: Inter supports all required character sets

## Locked Constraints

- Dark theme is locked — no light mode variant
- Glass effect (backdrop blur + subtle border) must be preserved
- Gradient buttons (#6366F1 → #A855F7) must not be changed
- Section order must remain as defined above
- **Prism background**: React Bits WebGL Prism component (custom `Prism.jsx` — OGL shader-based animated optical prism). Full-viewport, fits screen edge-to-edge, smooth rainbow dispersion. Instance defaults: `animationType="rotate"`, `timeScale={0.5}`, `height={3.5}`, `baseWidth={5.5}`, `scale={3.6}`, `glow={1}`, `colorFrequency={1}`, `hueShift={0}`. Renders behind all hero content.
- Header must match the reactbits.dev minimal glass style — clean, translucent, centered nav

## Pencil File Paths

- Homepage directions: `output/fiwb-ecommerce/designs/homepage-directions.pen`
- Final design: `output/fiwb-ecommerce/designs/design.pen`

---

### 0. Approval Record

- **Homepage options shown**: 1 (Option A — Glass Future)
- **Selected option**: Option A
- **Preview exported**: `output/fiwb-ecommerce/designs/homepage-option-a.png`
- **Homepage previews covered full section flow**: Yes (hero, featured products, about, services, pricing, FAQ, contact, footer)
- **design.pen and design.png came from approved direction**: Yes
- **Locked constraints**: Dark theme only, glass effect, gradient buttons, section order
- **Prism background**: React Bits WebGL Prism component — OGL shader-based animated optical prism, full-viewport, edge-to-edge
- **Header style**: React Bits minimal glass nav style

#### Source Audit
- **Source pages audited**: https://www.pencil.dev/ (1 page — JS SPA)
- **Static text preserved**: pencil.dev tagline "Design on canvas. Land in code." → adapted for ecommerce context

### 1. Frontend Build Map

| Section | Type | Template |
|---------|------|----------|
| Homepage | Page | Sections stacked vertically (order above) |
| Header | Component | Fixed glass nav |
| Hero | Component | Full-width with CTA |
| Featured Products | Section | ProductGrid with 3 ProductCards |
| About | Section | 2-column text + image |
| Services | Section | 4-column FeatureCards |
| Pricing | Section | 3-column PricingCards |
| FAQ | Section | Accordion list |
| Contact | Section | Form + info |
| Footer | Component | Multi-column with brand + links |
| /products | Page | ProductGrid with filters |
| /products/[id] | Page | Product detail page |
| /cart | Page | Cart page |
| /checkout | Page | Checkout flow |
| /login | Page | Auth form |
| /register | Page | Auth form |
| /profile | Page | Profile form |
| /orders | Page | Order history |
| /orders/[id] | Page | Order detail |
| /wishlist | Page | Saved products |

### 2. erxes CMS Field Map

| Homepage section | Page slug | CMS content needed |
|-----------------|-----------|-------------------|
| Hero | / | headline, subtitle, CTA text |
| Featured Products | / | product data from ERP/POS |
| About | /about | title, description, stats |
| Services | /services | feature cards (title, desc, icon) |
| Pricing | /pricing | plan name, price, features |
| FAQ | /faq | Q&A pairs |
| Contact | /contact | form config, contact info |

**Menu structure:**
- Header: Home, Products, About, Pricing, Contact
- Footer: Shop (Products, Categories), Company (About, Careers, Contact), Support (FAQ, Shipping, Returns)

**Translation expectations:** All content in en, ja, ko, mn, zh

**Blog:** Not required
