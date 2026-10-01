# VIC Premier Construction Team

Official website project for **VIC PREMIER CONSTRUCTION TEAM**, a Melbourne-based residential and commercial construction and renovation business.

## Primary objective

Build a premium, fast, accessible, SEO-focused lead-generation website that turns visitors into qualified free-quote enquiries.

## Core services

- Residential construction & renovation
- Commercial construction & renovation
- Interior & exterior painting
- Roof restoration
- Gutter installation, repair & replacement
- Tiling
- Wall rendering
- General carpentry

## Planned stack

- Next.js
- TypeScript
- Tailwind CSS
- Server-side form handling for quote requests
- Structured data / local SEO
- Automated lint, type-check and build validation

## Project workflow

`main` is the stable integration branch. Product work should be completed on focused feature branches and reviewed before merge.

See [`AGENTS.md`](./AGENTS.md) and the documents in [`docs/`](./docs/) for the source of truth on business facts, content rules, architecture and design direction.

## Content safety rule

Do not invent licences, registrations, certifications, testimonials, awards, project details, years of experience, service areas or other business claims. Only publish facts supplied by the client or independently verified from an authoritative source.

## Phase 1 development

Use Node.js 22 or later and npm. Install the locked dependencies with `npm ci`,
then run `npm run dev`. Open `http://localhost:3000`.

Required validation (also run by `.github/workflows/validate.yml`):

```sh
npm run lint
npm run type-check
npm run build
```

`npm start` serves the production build. Type checking generates Next.js route
types first, so it works on a clean checkout before building.

### Architecture

- `src/app/`: App Router composition, global design tokens and metadata routes.
- `src/data/business.ts`: single source for client-supplied business/contact facts
  and derived telephone/email/quote links.
- `src/data/services.ts`: typed service records with approved future route slugs.
- `src/data/navigation.ts`: only routes/sections that exist in Phase 1.
- `src/components/layout/`: global header/footer and mobile disclosure navigation.
- `src/components/ui/`: container, link-button, section and heading primitives.
- `src/components/home/`: contact/quote section for explicit homepage composition.
- `src/lib/site.ts`: server-only origin validation shared by metadata/robots/sitemap.

Server Components are the default; only mobile navigation uses client state.
The mobile menu is a non-modal disclosure with native link tab order, Escape
closing/focus restoration, focus-out closing and desktop-breakpoint reset.
No focus trap is needed because the page remains interactive.

### Domain and indexing

No production domain has been approved in the repository. With `SITE_URL` unset,
metadata is `noindex, nofollow`, robots disallows crawling and the sitemap is
empty. Copy `.env.example` to `.env.local` only when an approved HTTP(S) origin is
available. Configure `SITE_URL` in the production build environment and rebuild
to enable canonical URLs, indexing and the homepage sitemap entry. Leave it
unset for previews. Do not commit `.env.local`.

### Visual and content decisions

Warm off-white, charcoal and a provisional deep red establish the editorial
system. The red must be refined against the approved logo once it is supplied.
The wordmark is plain business-name text, not a replacement logo. A system sans
stack avoids external font requests and build-time font downloads.

Only the homepage is implemented. Services appear as a restrained numbered list;
those numbers are list positions, not business statistics. There are no links
to unbuilt pages. Quote CTAs open the visitor's email application; no form
submission or delivery backend is implied.

### Intentionally deferred

- Approved logo and curated real project photography (use `next/image` when added).
- `ProjectMedia` and service-card components until real imagery/card composition
  establishes their requirements; no speculative empty abstractions.
- Full homepage storytelling, featured projects, confirmed process and mobile
  contact bar (Phase 2).
- About, service detail, Projects, Service Areas, Contact/Quote and Privacy pages.
- JSON-LD and further SEO work, analytics, form delivery, uploads and deployment.
- All unverified registrations, licences, reviews, project facts and other claims.

`AGENTS.md` and the original project/design briefs remain authoritative.

### Toolchain compatibility note

ESLint is pinned to 9.39.5 because the React plugin bundled with the selected
Next.js ESLint configuration fails under ESLint 10 (`getFilename` API removal).
npm marks ESLint 9 deprecated. Upgrade it together with a compatible Next.js
React lint plugin/configuration; do not disable the React rules to hide the error.
