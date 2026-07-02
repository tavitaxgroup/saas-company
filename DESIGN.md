# Design System Inspired by Arise Biotech

## 1. Visual Theme & Atmosphere

Arise Biotech's design system embodies scientific precision and biotech sophistication through a clean, modern aesthetic that balances professionalism with approachability. The visual identity leverages calming aquatic tones paired with deep neutrals to convey trust, expertise, and innovation in life sciences. Minimal, breathable layouts emphasize the clarity and rigor of biotechnological research, while subtle interactions and refined typography create an engaging experience that feels both accessible and authoritative. The design celebrates the intersection of humanity and science—evident in hero imagery—while maintaining a corporate, forward-thinking presence suitable for global OEM/ODM partnerships.

**Key Characteristics**
- Clean, minimalist aesthetic with generous whitespace
- Aquatic and professional color palette inspiring trust and scientific credibility
- Refined typography hierarchy supporting content hierarchy and readability
- Circular, pill-shaped interactive elements for modern, approachable interactions
- Emphasis on high-quality imagery and product-focused storytelling
- Neutral, tech-forward visual language with strategic color accents
- Laboratory precision reflected in consistent spacing and alignment

## 2. Color Palette & Roles

### Primary
- **Teal Accent** (`#65C8C6`): Primary brand color for CTAs, highlights, navigation elements, and key UI components. Evokes trust, innovation, and life science applications. Most frequently used throughout the system (22 instances).
- **Sky Blue** (`#3F99DF`): Secondary primary accent for visual depth and scientific association. Used for complementary highlights and secondary interactions (8 instances).

### Interactive
- **Teal Button Fill** (`#65C8C6`): Solid background for primary action buttons and confirmations.
- **Transparent Button Border** (`rgba(255, 255, 255, 0.3)`): Subtle border on ghost/outline buttons for minimal visual weight on dark or image backgrounds.

### Neutral Scale
- **Pure Black** (`#000000`): Primary text, heavy UI elements, and default button states. Highest contrast and most frequent color in the system (740 instances).
- **Dark Charcoal** (`#545454`): Secondary text and reduced emphasis (28 instances).
- **Medium Charcoal** (`#555555`): Tertiary text and subtle UI elements (10 instances).
- **Deep Gray** (`#525252`): Body text and supporting content (6 instances).
- **Dark Gray Accent** (`#3B3B3B`): UI borders and dividers (6 instances).
- **Darker Gray** (`#343434`): Subtle background tints (4 instances).
- **Darkest Gray** (`#303030`): Navigation backgrounds and footer areas (4 instances).

### Surface & Borders
- **Pure White** (`#FFFFFF`): Primary background, card surfaces, and text on dark backgrounds (186 instances).
- **White Border** (`rgba(255, 255, 255, 0.3)`): Subtle borders on buttons and elements over image or dark backgrounds.

## 3. Typography Rules

### Font Family
- **Primary Display & Body**: Poppins, sans-serif (fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- **Secondary (TC/CJK content)**: Noto Sans TC (weights: 300, 400, 500, 700)
- **Button/Control Text**: Arial, sans-serif (fallback stack: `Helvetica, sans-serif`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Poppins | 45px | 500 | 54px | Normal | Hero headlines and major section titles |
| Heading / H2 | Poppins | 40px | 500 | 56px | Normal | Secondary section headers |
| Subheading / H3 | Poppins | 14px | 700 | Normal | Normal | Category labels and tertiary headers |
| Body / Paragraph | Poppins | 18px | 300 | 30px | Normal | Main content and descriptions |
| Caption / Small Text | Poppins | 14px | 400 | Normal | Normal | Supporting text, metadata, labels |
| Button Text | Arial | 16px | 400 | Normal | Normal | Interactive button labels |

### Principles
- Weight variation (300–700) creates clear visual hierarchy while maintaining brand cohesion
- Line-height exceeds font size for body text, enhancing readability and reducing density
- Poppins provides modern, friendly tone suitable for biotech; Noto Sans TC ensures accessibility for CJK audiences
- All-caps or increased letter-spacing reserved for discrete UI components (buttons, labels)
- Caption text (14px, weight 400) balances legibility with minimalism for supplementary information

## 4. Component Stylings

### Buttons

#### Primary Button (Solid Teal)
- **Background**: `#65C8C6`
- **Text Color**: `#000000`
- **Font**: Arial, `16px`, weight 400
- **Padding**: `0px` (height-driven)
- **Height**: `50px`
- **Width**: `50px` (or flexible `auto`)
- **Border Radius**: `0px` (square) or `99px` (pill, depending on context)
- **Border**: None
- **Hover State**: Opacity `0.9`, subtle shadow or slight scale increase
- **Active State**: Opacity `0.85`

#### Secondary Button (Outline)
- **Background**: Transparent (`rgba(0, 0, 0, 0)`)
- **Text Color**: `#000000` (or `#FFFFFF` on dark backgrounds)
- **Font**: Poppins, `14px`, weight 400
- **Padding**: `0px 6px 0px 0px` (icon-inclusive)
- **Height**: `45px`
- **Width**: Auto or `210px`
- **Border Radius**: `99px`
- **Border**: `1px solid rgba(255, 255, 255, 0.3)`
- **Hover State**: Border opacity increases to `0.6`
- **Active State**: Background tint `rgba(101, 200, 198, 0.1)`

#### Ghost Button (Minimal)
- **Background**: Transparent
- **Text Color**: `#000000`
- **Font**: Poppins, `14px`, weight 400
- **Padding**: `0px`
- **Height**: `45px`
- **Width**: Auto
- **Border Radius**: `99px`
- **Border**: `1px solid rgba(255, 255, 255, 0.3)`
- **Hover State**: Text color shifts to `#65C8C6`, border becomes solid `#65C8C6`

### Cards & Containers

#### Content Card
- **Background**: `#FFFFFF`
- **Border Radius**: `10px`
- **Padding**: `24px` to `40px` (context-dependent)
- **Border**: `1px solid #E5E5E5` (inferred light border for subtle definition)
- **Box Shadow**: None (minimal elevation) or `0px 2px 8px rgba(0, 0, 0, 0.08)` (subtle lift)
- **Hover State**: Shadow increases to `0px 4px 12px rgba(0, 0, 0, 0.12)`, slight scale or background shift

#### Image Card
- **Border Radius**: `10px`
- **Overflow**: Hidden
- **Aspect Ratio**: Flexible (product/portfolio images)
- **Padding**: `0px` (images flush to edges)
- **Hover State**: Scale `1.02` or opacity overlay `rgba(101, 200, 198, 0.1)`

### Inputs & Forms

#### Text Input
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Font**: Poppins, `14px`, weight 400
- **Padding**: `12px 16px`
- **Height**: `44px`
- **Border Radius**: `6px`
- **Border**: `1px solid #D0D0D0`
- **Focus State**: Border color `#65C8C6`, box-shadow `0px 0px 0px 3px rgba(101, 200, 198, 0.2)`
- **Error State**: Border color `#E74C3C`, box-shadow `0px 0px 0px 3px rgba(231, 76, 60, 0.1)`

#### Select / Dropdown
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Font**: Poppins, `14px`, weight 400
- **Padding**: `12px 16px`
- **Height**: `44px`
- **Border Radius**: `6px`
- **Border**: `1px solid #D0D0D0`
- **Caret Color**: `#65C8C6`
- **Hover State**: Border color `#A0A0A0`

### Navigation

#### Header Navigation
- **Background**: `#65C8C6` (full-width header bar)
- **Text Color**: `#FFFFFF` (on teal background)
- **Font**: Poppins, `14px`, weight 400
- **Padding**: `16px 24px`
- **Height**: `60px` (inferred)
- **Border Radius**: `0px`
- **Border**: None
- **Hover State**: Text color remains `#FFFFFF`, background fades slightly or underline appears in secondary accent

#### Navigation Link (Active)
- **Text Color**: `#FFFFFF`
- **Font**: Poppins, `14px`, weight 400, with underline or bottom border `2px solid #FFFFFF`

#### Logo
- **Font**: Poppins, display weight
- **Color**: `#FFFFFF` on teal background, or `#000000` on light backgrounds
- **Height**: `40px` (inferred)
- **Width**: Auto

### Links

#### Text Link (Inline)
- **Text Color**: `#65C8C6`
- **Font**: Poppins, `14px`, weight 400
- **Text Decoration**: Underline or inherit
- **Hover State**: Color `#3F99DF`, text-decoration underline if not already
- **Active State**: Color `#55A8A6`

#### Icon Link / CTA Circle
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Border**: `1px solid rgba(255, 255, 255, 0.3)` or `#65C8C6`
- **Width**: `52px`
- **Height**: `52px`
- **Border Radius**: `99px`
- **Icon Color**: `#FFFFFF` or `#65C8C6`
- **Font Size**: `24px` (for arrow icon)
- **Hover State**: Background `rgba(101, 200, 198, 0.1)`, border color `#65C8C6`, icon color brightens

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Spacing Scale**: `4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 60px`

**Context Usage**:
- **4px–8px**: Micro interactions, icon spacing, tight component gaps
- **12px–16px**: Default padding within buttons, form fields, small cards
- **20px–24px**: Section internal padding, moderate spacing between related elements
- **28px–32px**: Padding within card containers and larger components
- **36px–40px**: Vertical spacing between major sections, hero padding
- **48px**: Large section gaps, layout breakpoints
- **60px**: Hero section padding, maximum breathing room between distinct sections

### Grid & Container

- **Max Container Width**: `1200px` (inferred from desktop layout; no explicit max-width extracted, but industry standard)
- **Column Strategy**: 12-column grid for desktop, 6-column for tablet, 1-column for mobile
- **Gutter Width**: `16px` to `24px` between columns
- **Section Padding**: `40px–60px` vertical, `24px–40px` horizontal (symmetric or asymmetric per design intent)

### Whitespace Philosophy

The design embraces generous whitespace to emphasize clarity and reduce cognitive load. Content is centered on lighter backgrounds; imagery bleeds edge-to-edge for immersion. Vertical rhythm maintained through consistent spacing scale, creating calm, hierarchical layouts. Sections breathe independently; no cramping of related elements. Whitespace acts as a design element itself, conveying premium quality and scientific rigor.

### Border Radius Scale

- **Sharp** (`0px`): Navigation headers, buttons (context-dependent), hero sections
- **Subtle** (`6px`): Form inputs, small interactive elements, minimal softness
- **Moderate** (`10px`): Image cards, content containers, standard component roundness
- **Full Radius / Pill** (`99px`): Icon buttons, small CTAs, circular badges, call-to-action links

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, `box-shadow: none` | Navigation, headers, body text, flat UI sections |
| Subtle (1) | `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)` | Default cards, hover states on secondary elements |
| Raised (2) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12)` | Hovered cards, modal backgrounds, featured content |
| Elevated (3) | `box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16)` | Modals, popovers, sticky headers on scroll |
| Deep (4) | `box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.20)` | Fullscreen overlays, floating action buttons |

**Shadow Philosophy**: Arise Biotech employs minimal, naturalistic shadows to maintain visual clarity while providing subtle depth. Shadows are soft and desaturated, never harsh or oversaturated. The system avoids stacking multiple shadows; each elevation level uses a single shadow value. Shadow increases progressively with interaction (hover, active, focus states) to communicate interactivity without visual clutter. The teal and blue accent colors do not generate colored shadows; all shadows remain neutral black with opacity variation.

## 7. Do's and Don'ts

### Do
- **Use Poppins for all body, heading, and UI text** to maintain brand consistency and modern readability.
- **Apply teal (`#65C8C6`) sparingly as a focal accent color**, reserving it for primary CTAs, navigation highlights, and key interactive elements.
- **Maintain minimum `44px` touch targets** for buttons and interactive elements on mobile to meet accessibility standards.
- **Layer whitespace intentionally**—pair tight (12–16px) spacing within components with loose (40–60px) spacing between sections.
- **Use pill-shaped buttons (`99px` border-radius) for secondary and ghost CTAs** to signal approachability; reserve sharp corners (`0px`) for structural elements like headers.
- **Employ image cards with `10px` border-radius** to soften product photography while maintaining professional tone.
- **Leverage the neutral scale (`#545454`, `#555555`) for secondary and tertiary text** to reduce visual weight and hierarchy without losing readability.
- **Apply consistent `16px` padding horizontally** within containers and sections for balanced margins.
- **Use `rgba(255, 255, 255, 0.3)` borders on overlays** for subtle definition without harsh contrast.
- **Implement hover states that increase border opacity or add subtle shadows** rather than drastic color shifts.

### Don't
- **Avoid heavy or oversaturated shadows**—maintain subtle, naturalistic elevation with maximum `rgba(0, 0, 0, 0.20)`.
- **Never use the secondary blue (`#3F99DF`) as a primary CTA color**—reserve it for complementary highlights and data visualization.
- **Do not mix Poppins, Arial, and Noto Sans TC arbitrarily**—Poppins for body/UI, Noto Sans TC for CJK content, Arial reserved for button text only.
- **Avoid button heights below `44px` or widths below `50px`** (excluding icon-only buttons) to maintain touch accessibility.
- **Never center-align large blocks of body text**—left-align for readability and scannability.
- **Do not layer multiple shadows or use colored shadows** (e.g., blue or teal); stick to neutral black shadows with opacity.
- **Avoid cluttering the header with more than 5–6 navigation items**; use dropdowns or hamburger menus for secondary nav.
- **Never use pure white text on teal backgrounds without ensuring contrast ratio ≥ 4.5:1** for WCAG AA compliance.
- **Do not shrink padding below `12px` inside buttons or form fields**—maintain minimum `12px` internal padding for comfort.
- **Avoid abrupt color transitions in hover/active states**—use opacity shifts or subtle color blending (e.g., `#65C8C6` → `#55A8A6`) for smooth interaction feedback.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Device | Key Changes |
|------------|-------|--------|-------------|
| Mobile | `320px–480px` | Phone (portrait) | Single column, `16px` horizontal padding, `24px–32px` section padding, `32px` h1, full-width buttons, stacked navigation |
| Tablet Small | `480px–768px` | Phone (landscape) / Tablet | 2-column grid, `20px` horizontal padding, `32px–40px` section padding, `36px` h1, buttons `auto` or `100%` width in forms |
| Tablet | `768px–1024px` | Tablet (portrait) | 6-column grid, `24px` horizontal padding, `40px` section padding, `40px` h1, multi-column card layouts, sidebar navigation |
| Desktop | `1024px–1440px` | Desktop / Laptop | 12-column grid, `40px–60px` horizontal padding, `48px–60px` section padding, `45px` h1 and h2, multi-row grid layouts, full horizontal navigation |
| Desktop Large | `1440px+` | Large monitor / TV | Container max-width `1200px`, centered layout, increased `60px` section padding, generous whitespace margins |

### Touch Targets

- **Minimum Size**: `44px × 44px` (iOS/Android standard)
- **Recommended Minimum**: `48px × 48px` for primary actions
- **Spacing Between Targets**: `8px–12px` minimum to prevent accidental activation
- **Icon-Only Buttons**: Maintain `44px` minimum; provide adequate internal padding around icon
- **Form Fields**: Height `44px` minimum; width `100%` on mobile, `auto` on desktop

### Collapsing Strategy

- **Header Navigation**: Collapses to hamburger menu below `768px`; full horizontal nav on tablet and above
- **Multi-Column Grids**: 4-column card grid on desktop → 2-column on tablet → 1-column on mobile
- **Section Padding**: `60px` (desktop) → `40px` (tablet) → `24px` (mobile) for responsive breathing room
- **Font Sizes**: H1 remains `45px` on desktop and tablet; reduces to `32px–36px` on mobile for fit
- **Button Width**: `auto` / flexible on desktop → `100%` on mobile within forms, fixed width (`50px`) for icon buttons across all sizes
- **Sidebar / Auxiliary Content**: Moves below main content on mobile; appears beside on tablet+
- **Image Cards**: 4-column grid → 2-column → 1-column; aspect ratio preserved via CSS `aspect-ratio` or padding-bottom hack
- **Whitespace**: Reduced but not eliminated; maintain `12px–16px` minimum gutters and section margins on mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Brand**: Teal (`#65C8C6`)
- **Secondary Accent**: Sky Blue (`#3F99DF`)
- **Primary Text / Headings**: Pure Black (`#000000`)
- **Secondary Text**: Dark Charcoal (`#545454`)
- **Background / Surface**: Pure White (`#FFFFFF`)
- **Navigation Header**: Teal (`#65C8C6`)
- **Navigation Text**: White (`#FFFFFF`)
- **Button Border (Overlay)**: `rgba(255, 255, 255, 0.3)`
- **Shadow Color**: Black with opacity (`rgba(0, 0, 0, 0.08–0.20)`)
- **Link Color**: Teal (`#65C8C6`); hover → Sky Blue (`#3F99DF`)

### Iteration Guide

1. **Color Accent Rule**: All primary interactive elements and focal points use `#65C8C6` (teal). Reserve `#3F99DF` (sky blue) for secondary highlights and complementary accents. Never mix as primary CTAs.

2. **Typography Base**: Set all body, heading, and UI text in Poppins; weights 300–500 for hierarchy. Use Poppins `18px` weight 300 for body paragraphs with `30px` line-height. Use Poppins `14px` weight 400 for captions and labels. Buttons use Arial `16px` weight 400.

3. **Button Construction**: Primary buttons are `50px` height, teal background (`#65C8C6`), `16px` Arial, no border. Secondary/ghost buttons are `45px` height, transparent background, `1px` white border (`rgba(255, 255, 255, 0.3)`), `14px` Poppins, pill-shaped (`99px` border-radius).

4. **Spacing Consistency**: Follow the scale `4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 60px`. Never use arbitrary values. Minimum internal padding is `12px`; minimum section gap is `40px` (desktop), `24px` (mobile).

5. **Border Radius Simplicity**: Use `0px` for structural elements (headers, full-width sections); `10px` for image cards and containers; `99px` (pill) for icon buttons and small CTAs.

6. **Shadow Depth**: Apply `0px 2px 8px rgba(0, 0, 0, 0.08)` for subtle cards (default), increase to `0px 4px 12px rgba(0, 0, 0, 0.12)` on hover. Never use colored shadows.

7. **Neutral Text Hierarchy**: Black (`#000000`) for primary text and headings; `#545454` for secondary; `#555555` and below for tertiary. No text below `#303030` for legibility.

8. **Mobile-First Adaptation**: Design assumes 12-column desktop grid. Below `768px`, shift to single column. Navigation collapses to hamburger. Buttons full-width in forms. Maintain `44px` minimum touch targets.

9. **Interactive Feedback**: Hover states increase shadow or opacity (e.g., border opacity `0.3` → `0.6`), never harsh color flips. Active states reduce brightness slightly (opacity `0.85–0.90`). Focus states add `3px` colored outline using accent color with `0.2` opacity.

10. **Accessibility Mandate**: Ensure all text has contrast ≥ 4.5:1 (WCAG AA). Use semantic HTML (`<button>`, `<a>`, `<nav>`, etc.). Maintain focus indicators visible on all interactive elements. Buttons and links are keyboard accessible; tab order logical top-to-bottom, left-to-right.