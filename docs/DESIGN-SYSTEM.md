# Initial Design System

This is the starting visual direction for Phase 1. It may be refined after reviewing the full project-photo set.

## Brand character

Premium, grounded, architectural, direct, durable.

The visual system should communicate craftsmanship through layout, spacing, typography and real work rather than decorative construction clichés.

## Colour direction

Use a restrained neutral system with one controlled red accent derived from the client-provided logo.

Suggested starting tokens:

- `--background`: warm off-white
- `--surface`: clean white / near-white
- `--foreground`: near-black charcoal
- `--muted`: medium graphite
- `--border`: warm light grey
- `--accent`: deep construction red sampled/refined from the supplied logo
- `--accent-foreground`: white

Do not lock exact production hex values until the logo asset is prepared and sampled consistently.

## Typography

Direction:

- strong grotesk/sans-serif display face for headlines
- highly readable sans-serif for body and interface text
- large but controlled headline scale
- compact uppercase eyebrow labels may be used sparingly

Requirements:

- avoid overly futuristic fonts
- avoid condensed novelty fonts for paragraphs
- keep body text comfortable on mobile
- preserve a strong hierarchy without relying on font weight alone

## Layout

- wide editorial desktop grid
- generous section spacing
- controlled maximum text widths
- full-bleed or near-full-bleed project photography where useful
- asymmetric composition is allowed when responsive behaviour remains robust
- cards should not dominate every section

## Imagery

Primary imagery must come from the client's real work.

Priorities:

1. strongest completed-work hero image
2. before/after pairs
3. detail shots showing finish quality
4. wider environmental shots showing project context

Avoid stock photos unless there is a specific approved gap that cannot be covered by real imagery.

## Motion

Use motion only for:

- subtle hero/media reveal
- navigation state changes
- hover/focus feedback
- light scroll-triggered section reveals where they do not impair performance or accessibility

Respect `prefers-reduced-motion`.

## Components to establish in Phase 1

- SiteHeader
- MobileNavigation
- Container
- SectionHeading
- PrimaryButton / SecondaryButton
- ProjectMedia
- ServiceCard
- CTASection
- SiteFooter

Do not create an oversized design-system abstraction before real page composition proves a repeated pattern.

## Accessibility baseline

- semantic landmarks
- visible keyboard focus
- sufficient colour contrast
- logical heading order
- useful image alt text based on verified project context
- buttons for actions, links for navigation
- touch targets appropriate for mobile

## Mobile conversion pattern

Consider a compact sticky action bar on small screens with:

- Call
- Email or Contact
- Free Quote

This must not obscure content or conflict with browser safe areas.
