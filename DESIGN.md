# SISBIO Website Design System

Official token-driven UI guidance for the SISBIO marketing site, adapted from Arise Biotech's clean life science OEM/ODM visual language and the current project implementation.

## Context and Goals

Design intent: create a precise, calm, product-forward life science website that feels credible for laboratory buyers while remaining fast to implement and easy to maintain.

This project is a SISBIO product and inquiry website. The design direction is informed by Arise Biotech's "Trusted Life Science Instrument OEM/ODM Partner" positioning, but the implemented experience must support SISBIO content, Signal-Direct product storytelling, bioproduction product cards, and a detailed contact workflow.

The current implementation shows these visual anchors:
- Full-bleed photographic heroes with dark overlays and white text.
- Fixed dark translucent navigation with 2 navigation surfaces: desktop nav and mobile nav.
- Poppins-led typography with Noto Sans TC and Microsoft JhengHei fallbacks.
- Teal accent for primary actions, highlights, bullets, form focus, and selected states.
- Square product cards, specification tables, compact contact forms, and restrained shadows.
- Current project density: 28 links, 2 list-like clusters, 3 buttons, 2 navigation surfaces, and 15 cards on the landing page.
- Arise reference density from provided diagnostics: links 88, lists 14, buttons 4, navigation 2.

Primary goals:
- Teams must use semantic tokens instead of one-off styling.
- Teams must preserve WCAG 2.2 AA accessibility.
- Teams must keep marketing pages scannable, product-focused, and implementation-ready.
- Teams should prefer system consistency over local visual exceptions.

## Design Tokens and Foundations

### Core Token Source

The CSS source of truth must live in `app/globals.css` under `:root`. Component guidance must reference semantic tokens, not raw values.

| Token | Value | Role |
|---|---:|---|
| `--color-surface-base` | `#000000` | Dark overlays, dark header treatment, inverse blocks |
| `--color-surface-page` | `#ffffff` | Main page background and card surface |
| `--color-surface-soft` | `#f5f8f8` | Soft section background, product image beds, contact info panel |
| `--color-surface-raised` | `#65c8c6` | Primary teal accent and CTA fill |
| `--color-text-primary` | `#000000` | Primary headings and body on light surfaces |
| `--color-text-secondary` | `#ffffff` | Text on dark image overlays |
| `--color-text-tertiary` | `#545454` | Supporting body copy and metadata |
| `--color-text-inverse` | `#3f99df` | Secondary blue accent, secondary data or visual emphasis |
| `--color-border-subtle` | `#e5e8e8` | Structural borders and table dividers |
| `--font-family-primary` | Poppins, Noto Sans TC, Verdana, Microsoft JhengHei, sans-serif | All body, heading, and UI text |
| `--font-size-xs` | `14px` | Labels, nav links, captions |
| `--font-size-sm` | `15px` | Small headings and mobile nav links |
| `--font-size-md` | `16px` | Buttons and compact controls |
| `--font-size-lg` | `17px` | Reserved intermediate text size |
| `--font-size-xl` | `18px` | Lead body copy |
| `--font-size-2xl` | `20px` | Secondary compact headings |
| `--font-size-3xl` | `22px` | Reserved section subheading |
| `--font-size-4xl` | `24px` | Compact display text |
| `--space-1` | `4px` | Micro gaps |
| `--space-2` | `6px` | Tight inline gaps |
| `--space-3` | `9px` | Compact control gaps |
| `--space-4` | `10px` | Header internal padding |
| `--space-5` | `12px` | Minimum component inner padding |
| `--space-6` | `15px` | Compact field rhythm |
| `--space-7` | `27px` | Medium vertical rhythm |
| `--space-8` | `35px` | Large local spacing |
| `--radius-xs` | `50px` | Circular icon buttons and brand hit area |
| `--radius-sm` | `99px` | Pill CTAs |
| `--motion-duration-instant` | `200ms` | Hover, focus, and menu icon transitions |
| `--motion-duration-fast` | `400ms` | Section or carousel interactions |
| `--motion-duration-normal` | `500ms` | Hero slide fade |

### Semantic Aliases

Implementation should use these aliases for readability:
- `--teal` maps to `--color-surface-raised`.
- `--teal-dark` should be used only for text accents that need stronger contrast than `--teal`.
- `--blue` maps to `--color-text-inverse`.
- `--black` maps to `--color-text-primary`.
- `--charcoal` maps to `--color-text-tertiary`.
- `--line` maps to `--color-border-subtle`.
- `--soft` maps to `--color-surface-soft`.
- `--white` maps to `--color-surface-page`.
- `--shadow-1` and `--shadow-2` must remain neutral shadows.

### Typography

Typography must use the primary font stack for all website text. Buttons may use Arial/Helvetica only when matching the existing CTA pattern.

| Role | Token or Rule | Weight | Line Height | Usage |
|---|---|---:|---:|---|
| Hero H1 | `clamp(38px, 4.5vw, 58px)` | 500 | 1.12 | First viewport product promise |
| Section H2 | `clamp(30px, 3.4vw, 42px)` | 500 | 1.24 | Main section headings |
| Card H3 | `--font-size-xl` or `18px` | 600 | 1.35 | Product and stat card titles |
| Body Lead | `--font-size-xl` | 300 | 30px | High-emphasis paragraph copy |
| Body Default | `--font-size-xs` to `--font-size-md` | 400 | 1.6 to 1.7 | Cards, tables, forms, captions |
| Eyebrow | `--font-size-xs` | 700 | normal | Section category labels |

Rules:
- Text must use `letter-spacing: 0`.
- Body text must not be center-aligned in long paragraphs.
- Long headings must wrap naturally and must not overlap adjacent content.
- CJK or Vietnamese copy must use the same stack and must not force a separate local font rule.

### Layout and Breakpoints

Containers must use `width: min(1200px, calc(100% - 32px))` unless a full-bleed visual section is required.

Responsive rules:
- Desktop should use two, three, four, or seven-column grids only when content remains readable.
- Below 900px, major split layouts must collapse to one column and product grids should reduce to two columns.
- Below 620px, product grids, stats, workflow strips, and forms must collapse to one column.
- Touch targets must be at least 44px by 44px for navigation, buttons, carousel controls, and mobile menu controls.
- Fixed-format elements must define stable dimensions with `min-height`, `aspect-ratio`, or grid constraints.

### State Contract for All Components

Every component must define these states even when some are non-interactive:
- Default: visible, stable, and token-based.
- Hover: pointer users should receive a subtle visual affordance.
- Focus-visible: keyboard users must receive a visible outline or equivalent indicator.
- Active: pressed or selected state must be distinguishable from hover.
- Disabled: unavailable controls must not be focusable unless required for explanation, and must show reduced emphasis.
- Loading: async content must reserve layout space and expose status text or `aria-busy`.
- Error: failed content or invalid input must show an error message, not color alone.

## Component-Level Rules

### Header Navigation

Anatomy:
- Header must contain logo link, desktop nav, CTA link, mobile menu button, and mobile nav.
- Desktop nav must use semantic `<nav aria-label="Primary navigation">`.
- Mobile nav must use a separate `<nav aria-label="Mobile navigation">`.

Variants:
- Default fixed header must use dark translucent surface and inverse text over hero imagery.
- Internal pages should reuse the same header unless a page has no hero image.

States:
- Default must keep logo, nav, and CTA visible above hero content.
- Hover should underline desktop nav links and lift CTA only subtly.
- Focus-visible must show a visible outline on logo, links, CTA, and menu button.
- Active must maintain current route clarity through URL and optional underline.
- Disabled nav items must not be rendered as links.
- Loading must not hide the header; use stable skeleton only if nav data is delayed.
- Error must fall back to Home, Contact, and Product links.

Behavior:
- Keyboard: Tab order must be logo, nav links, CTA, menu button on desktop; menu button must toggle mobile nav with Enter and Space.
- Pointer: click on any nav item must navigate or scroll to a valid target.
- Touch: menu button must be at least 44px square; mobile nav items must have at least 48px height.
- Edge cases: more than 6 primary links should move secondary items into the mobile menu or footer, not squeeze desktop nav.

### Hero Sections

Anatomy:
- Hero must include background media, overlay, eyebrow, H1, support copy, and one or two actions.

Variants:
- Landing hero uses full-viewport visual carousel.
- Detail and contact heroes use shorter full-bleed photographic sections.

States:
- Default must keep foreground text readable over imagery.
- Hover should only affect hero controls and links.
- Focus-visible must be visible on all hero links and carousel controls.
- Active controls must show reduced opacity or pressed feedback.
- Disabled carousel controls must be hidden or marked disabled when only one slide exists.
- Loading must show a stable image area and preserve text layout.
- Error must replace failed imagery with `--color-surface-base` or `--color-surface-soft`, never a broken image icon.

Behavior:
- Keyboard: carousel controls must be reachable and operable by Enter and Space.
- Pointer: arrows must be large enough to target and must not cover primary text.
- Touch: arrows should move below content on small screens or remain clear of CTA hit areas.
- Edge cases: long H1 copy must wrap within the content width and never exceed the viewport.

### Buttons and CTAs

Anatomy:
- Button text must be a descriptive verb phrase.
- Links that navigate must be `<a>` or framework `Link`; actions that mutate state must be `<button>`.

Variants:
- Primary CTA must use accent surface and primary text.
- Secondary CTA must use transparent or outline treatment.
- Compact submit button may use dark fill for contact form submission when matching the current compact form pattern.
- Icon-only buttons must use recognizable icon shapes and accessible labels.

States:
- Default must use tokenized fill, text, border, radius, and spacing.
- Hover should lift with `--shadow-2` or increase border contrast.
- Focus-visible must show an outline that meets WCAG visibility expectations.
- Active must reduce lift and show pressed feedback.
- Disabled must reduce opacity, remove pointer cursor, and prevent activation.
- Loading must preserve button width and expose loading text or `aria-busy`.
- Error must pair the button with a visible error message near the failed action.

Behavior:
- Keyboard: Enter and Space must activate buttons; Enter must activate links.
- Pointer: hover feedback must not move surrounding layout.
- Touch: buttons must be at least 44px high; mobile form submit should span full width.
- Edge cases: long labels should wrap or use shorter copy, not shrink below readable size.

### Text Links

Anatomy:
- Links must describe the destination or action.
- Inline links must be visually distinguishable from surrounding text.

Variants:
- Primary inline link uses teal-dark text.
- Inverse inline link uses white text with underline on image overlays.
- Footer link uses subdued inverse text with accent hover.

States:
- Default must meet contrast requirements.
- Hover should change color or underline.
- Focus-visible must show visible outline.
- Active must maintain accessible contrast.
- Disabled links must render as text, not inert anchors.
- Loading links must avoid navigation until destination is known.
- Error links must point to a valid fallback destination or be removed.

Behavior:
- Keyboard: all links must be reachable in logical reading order.
- Pointer: hit area should include enough vertical padding in nav and footer lists.
- Touch: links in dense areas should have line-height at least 1.7.
- Edge cases: email, phone, and external links must keep full readable labels.

### Product Cards and Stat Cards

Anatomy:
- Cards must include media or metric, category/meta text, title, and concise body copy.
- Product card images must use meaningful alt text.

Variants:
- Product card: image bed plus text block.
- Stat card: metric, heading, explanation.
- Related-product card: denser content and smaller text.

States:
- Default must use `--white` surface, `--line` border, and square corners.
- Hover should lift slightly using neutral shadow.
- Focus-visible must be available when card is clickable.
- Active must show pressed state when card is a link.
- Disabled must not appear clickable.
- Loading must preserve image aspect ratio and card height.
- Error must show fallback text or placeholder image with accessible label.

Behavior:
- Keyboard: if the whole card is clickable, it must be a single link with a clear accessible name.
- Pointer: hover lift must not cause grid reflow.
- Touch: cards should stack cleanly and maintain readable text.
- Edge cases: long product names must wrap; product images must use `object-fit: contain`.

### Feature Sections and Media Panels

Anatomy:
- Feature sections must pair copy with a media panel or full-bleed background.
- Copy must include eyebrow, heading, and lead body.

Variants:
- Split feature.
- Reverse split feature.
- Full-bleed visual band.
- Detail band with image and copy.

States:
- Default must preserve image aspect ratio and copy readability.
- Hover should only apply to interactive descendants.
- Focus-visible must be visible for descendant links.
- Active applies only to descendant controls.
- Disabled is not applicable unless the section contains controls.
- Loading must reserve media dimensions.
- Error must show fallback surface and keep text visible.

Behavior:
- Keyboard: reading order must match visual order after responsive collapse.
- Pointer: media-only panels must not imply interactivity unless clickable.
- Touch: split sections must collapse without overlapping text and imagery.
- Edge cases: dark overlays must keep text contrast at AA or higher.

### Specification Tables

Anatomy:
- Use semantic role table or actual table markup for structured specs.
- Each row must include label and value.

Variants:
- Compact two-column specification table.
- Detail page expanded specification table.

States:
- Default must use `--white` surface, `--line` dividers, and readable row padding.
- Hover should not be required unless rows are interactive.
- Focus-visible must apply if rows contain links or controls.
- Active must apply only to interactive row controls.
- Disabled rows must be visually subdued and explained.
- Loading must preserve row rhythm with skeleton rows.
- Error must show a visible message near the table.

Behavior:
- Keyboard: interactive content inside tables must follow row order.
- Pointer: row hover must not be used as the only affordance.
- Touch: below 620px, rows must stack label over value.
- Edge cases: long values must wrap, not overflow.

### Forms and Inputs

Anatomy:
- Forms must use fieldsets and legends for grouped contact information.
- Required fields must be indicated in text and validated.
- Labels must be programmatically associated with controls.
- Help text must sit next to or below the related control.

Variants:
- Compact inquiry form with contact person, company information, and other fields.
- Sidebar contact info plus form layout.
- Single-column mobile form.

States:
- Default must use light surface, subtle border, compact field rhythm, and tokenized text.
- Hover should increase input border contrast.
- Focus-visible must show visible focus ring on inputs, selects, checkboxes, and buttons.
- Active must show checkbox checked state with accent token.
- Disabled fields must be visibly muted and excluded from validation.
- Loading must set `aria-busy` and prevent duplicate submission.
- Error must show field-specific message and error summary for failed submission.

Behavior:
- Keyboard: Tab must follow visual order; Space must toggle checkboxes; Enter must submit only when expected.
- Pointer: clicking a label must focus or toggle its control.
- Touch: mobile labels and controls must stack to one column; submit must span full width.
- Edge cases: long checkbox labels must wrap; verification code row must stack on mobile; URL and telephone help text must stay associated with the field.

### FAQ Details

Anatomy:
- Use native `<details>` and `<summary>` for disclosure.
- Summary text must be a clear question.

States:
- Default must show summary only.
- Hover should show pointer cursor and subtle color emphasis.
- Focus-visible must show outline on summary.
- Active/open must reveal answer content with stable spacing.
- Disabled is not supported for native details; remove unavailable items.
- Loading must reserve item height or show skeleton summaries.
- Error must show a short failure message in the FAQ area.

Behavior:
- Keyboard: Enter and Space must toggle each summary.
- Pointer: click on summary must toggle only that item.
- Touch: summary rows must be at least 44px high.
- Edge cases: answers must remain concise and wrap within the container.

### Footer and Contact Information

Anatomy:
- Footer must include logo, research-use statement, company name, address, emails, website, and telephone.
- Contact page must repeat essential contact information beside the form.

States:
- Default must use dark surface and readable inverse text.
- Hover should accent links.
- Focus-visible must be visible on every footer link.
- Active must maintain contrast.
- Disabled contact methods must be omitted.
- Loading must preserve footer structure.
- Error must not hide legal or contact information.

Behavior:
- Keyboard: all links must be reachable after main content.
- Pointer: email, website, and phone links must be clickable.
- Touch: footer links must have readable spacing.
- Edge cases: long addresses must wrap without horizontal scroll.

## Accessibility Requirements and Testable Acceptance Criteria

The implementation must target WCAG 2.2 AA.

Pass/fail checks:
- Text contrast must be at least 4.5:1 for normal text and 3:1 for large text.
- Non-text focus indicators must be visible against adjacent colors.
- Every interactive control must be reachable and operable by keyboard.
- Every image conveying product or workflow information must have descriptive alt text.
- Decorative images must use empty alt text or be hidden from assistive technology.
- Forms must expose labels, required state, validation errors, and help text programmatically.
- Error messages must not rely on color alone.
- Touch targets must be at least 44px by 44px, except inline text links inside paragraphs.
- Page zoom at 200% must not cause horizontal scroll for primary content.
- Mobile viewport at 375px width must not show horizontal overflow.
- Reduced motion users should not be forced through essential motion; carousel transitions should remain non-blocking.
- Navigation order must be logical: header, main content, contact actions, footer.
- The current page must be identifiable through URL, heading, or active nav state.

## Content and Tone Standards

Tone must be concise, confident, and implementation-focused.

Copy rules:
- Headings must name the product, application, or customer outcome.
- CTA labels must be specific, such as "Explore Signal-Direct", "View specifications", or "Contact SISBIO".
- Body copy should use short paragraphs and concrete lab workflow language.
- Technical claims must be supported by specs or product brochure content.
- Form labels must be direct: "Company", "Telephone", "Main Product Line".
- Empty states must tell users what is missing and how to continue.

Examples:
- Good: "Request product information or consultation."
- Good: "Compact bench footprint, high-resolution data output."
- Avoid: "Learn more" without nearby context.
- Avoid: "Click here" as a standalone action.

## Anti-Patterns and Prohibited Implementations

These rules are non-negotiable:
- Components must not use raw colors in component-specific CSS when a semantic token exists.
- Interactive elements must not hide focus indicators.
- Body copy must not use low-contrast gray on image overlays.
- Buttons must not shrink below touch target minimums.
- Cards must not reflow or resize on hover.
- Product grids must not use arbitrary column counts that create unreadable cards.
- Long text must not be clipped without a visible expansion or wrapping strategy.
- Form errors must not be color-only.
- The header must not contain more primary links than can fit comfortably at desktop width.
- Hero copy must not sit in a card over split media; hero text should sit directly over or beside the immersive visual treatment.
- Decorative gradients, blobs, or ornamental shapes should not replace product, lab, or workflow imagery.
- New one-off spacing values should not be introduced unless first added to the token scale.

Migration notes:
- Existing raw values in `app/globals.css` should be promoted to semantic aliases when touched.
- Existing corrupted text encodings in legacy documentation must be cleaned when content is edited.
- Contact form compact styling should remain compatible with the current image-reference layout but must keep the site's teal and neutral palette.
- Arise reference guidance should inform structure and tone, but SISBIO product content must remain the source of truth for this project.

## Edge-Case Handling

Long content:
- Headings should wrap within `min(760px, 100%)`.
- Product descriptions should clamp only when a clear route to detail content exists.
- Email and URL links should wrap with normal line breaks.

Overflow:
- All major sections must set `min-width: 0` on grid children when text can wrap.
- Tables must stack rows on narrow screens.
- Form verification rows must collapse to a single column on mobile.

Empty states:
- Missing product images must show a soft placeholder with descriptive text.
- Empty product arrays must show a short message and a contact CTA.
- Empty FAQ lists must be hidden or replaced by a support CTA.

Loading:
- Hero images must reserve space before image load.
- Cards must preserve aspect ratio during loading.
- Form submission must prevent duplicate submits and expose status with `aria-live`.

Errors:
- Failed image loads must not break layout.
- Failed form submission must show an error summary and preserve user input.
- Invalid fields must identify the field and required correction.

## QA Checklist

Before shipping a page or component:
- Confirm all component colors use semantic tokens or approved aliases.
- Confirm every interactive component has default, hover, focus-visible, active, disabled, loading, and error states.
- Confirm keyboard navigation reaches all controls in logical order.
- Confirm focus-visible is clear on dark hero, light cards, forms, and footer.
- Confirm text contrast passes WCAG 2.2 AA.
- Confirm desktop, tablet, and mobile layouts have no horizontal overflow.
- Confirm images have correct alt text and stable dimensions.
- Confirm cards do not shift surrounding layout on hover.
- Confirm forms expose labels, help text, required state, and errors accessibly.
- Confirm footer and contact page include the same essential company contact information.
- Confirm CTA labels are descriptive and destination-specific.
- Confirm page density remains consistent with the marketing surface: link-heavy navigation and footer, limited buttons, structured lists, and two navigation surfaces.
- Confirm implementation prefers existing CSS patterns before adding new abstractions.
