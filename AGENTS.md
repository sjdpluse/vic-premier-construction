# AGENTS.md

This file is the operating brief for AI coding agents and human contributors working on this repository.

## Project

**Business:** VIC PREMIER CONSTRUCTION TEAM  
**Market:** Melbourne, Victoria, Australia  
**Primary website goal:** Generate qualified residential and commercial construction enquiries and free-quote requests.

## Verified client-supplied business facts

- Business name: VIC PREMIER CONSTRUCTION TEAM
- Holder type: Individual
- ABN: 25 938 974 580
- Address: 6 Windsor St, Hallam VIC 3803, Australia
- Phone: 0411 786 573
- Email: vicpremier_constructionteam@yahoo.com
- Free quotes are available.

## Client-supplied services

- Residential construction and renovation
- Commercial construction and renovation
- Interior and exterior painting
- Roof restoration
- Gutter installation, repair and replacement
- Tiling for kitchens, bathrooms and living areas
- Wall rendering
- General carpentry for structural and finishing work

## Non-negotiable content rules

Never invent or imply any of the following unless the repository contains authoritative supporting evidence:

- Builder/practitioner registration status or number
- Licences
- Certifications
- Insurance or warranties
- Awards
- Years of experience
- Number of completed projects
- Testimonials or customer ratings
- Specific project locations/details
- Service-area suburbs beyond what has been explicitly approved
- Affiliations, memberships or partnerships

The client supplied a logo image that contains the words “BUILDER REGISTRATION”. Treat it as a client-provided brand asset, but **do not turn the wording on the logo into additional factual claims in site copy or structured data** without verified registration evidence.

## Product direction

This must not look like a generic construction template. The target is a premium Melbourne contractor / architectural-services aesthetic:

- restrained, modern, editorial layout
- real project photography as the dominant visual asset
- warm off-white / charcoal / graphite palette with deep red accent derived from the client logo
- large typography, strong spacing, minimal ornament
- subtle motion only when it improves hierarchy or feedback
- mobile-first conversion design

Avoid:

- cartoon construction icons
- excessive gradients
- noisy glassmorphism
- stock-photo-heavy layouts
- fake statistics and trust badges
- gratuitous animation

## Information architecture

Primary navigation:

- Home
- About
- Services
- Projects
- Service Areas
- Contact

Persistent primary CTA: **Get a Free Quote**

Planned service routes:

- /services/residential-construction-renovation
- /services/commercial-construction-renovation
- /services/painting
- /services/roof-restoration
- /services/guttering
- /services/tiling
- /services/rendering
- /services/carpentry

## Technical baseline

Use:

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- React Server Components by default
- Client Components only where interaction requires them
- next/image for local imagery
- semantic HTML and WCAG-conscious interaction patterns
- metadata API, sitemap and robots
- JSON-LD where facts are verified
- lint, type-check and production build as merge gates

Prefer simple local data modules for business/services/projects before introducing a CMS or database. Do not add infrastructure without a concrete requirement.

## Architecture rules

- Keep business contact data in one source of truth.
- Keep service content in structured data rather than duplicating it across pages.
- Build reusable primitives only after repeated use is evident; avoid premature abstraction.
- Keep page composition explicit and readable.
- Do not add dependencies for trivial utilities.
- Do not expose secrets to the browser or commit `.env` files.
- Quote-form uploads must be treated as untrusted input and validated server-side.

## SEO / local-search rules

- Write for users first; no keyword stuffing.
- Use unique page titles and descriptions.
- Maintain accurate NAP (name, address, phone) data.
- Structured data must never contain unsupported claims.
- Project pages should only state locations, scopes and dates supported by client-supplied project information.

## Development workflow

- `main` is the stable integration branch.
- Build substantial work in focused feature branches.
- Keep commits scoped and descriptive.
- Run lint, type-check and build before proposing merge.
- Do not rewrite unrelated code while implementing a feature.
- Explain architectural changes in the PR description.

## Current phase

Phase 1: project foundation and homepage design system.  
Do not implement speculative backend, CMS, authentication or admin features in this phase.
