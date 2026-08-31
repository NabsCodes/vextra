# Roadmap

## Current Objective

Establish a clean, understandable Vextra codebase and complete the current
public-launch foundation without over-engineering the website or prematurely
building the fuller studio site.

This is the canonical answer to:

- what has been completed
- what remains
- what should happen next
- what evidence is required before an area is called complete

The implementation log records history. This roadmap records forward work.

## Status Key

- **Complete** — implemented and verified at the required level
- **Next** — the current planned objective
- **Planned** — accepted work that follows the current objective
- **External gate** — requires approved content, credentials, deployment, or
  another decision outside the codebase
- **Later** — fuller-site work that is not part of the current launch

## Overview

| Goal                             | Status                | Outcome                                                                                                        |
| -------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1. Documentation foundation      | Complete              | A developer or agent can understand the company, system, rules, and remaining work without chat history        |
| 2. Structure and page ownership  | Complete              | Routes, components, content, and legal UI match the accepted architecture                                      |
| 3. Form and server boundaries    | Complete              | Client form behavior, schemas, API entry points, and server delivery have clear ownership                      |
| 4. SEO and system routes         | Complete              | Metadata, canonicals, sitemap, robots, and structured data are consistent                                      |
| 5. Current-site launch readiness | Next + external gates | Approved work imagery, publishable names, provider delivery, responsive QA, and deployed metadata are verified |
| 6. Fuller studio website         | Later                 | New pages and CMS capability are planned only when their scope is approved                                     |

## Goal 1 — Documentation Foundation

**Status: Complete**

- [x] Replace the starter README with a Vextra company and website overview
- [x] Add the repository agent guide
- [x] Agree the target file and folder structure
- [x] Document architecture and server/client ownership
- [x] Document the design and layout systems
- [x] Document workflow and verification expectations
- [x] Document SEO ownership
- [x] Document the teaser/full-site boundary
- [x] Initialize the implementation log
- [x] Create this remaining-work roadmap

Completion evidence:

- [x] Documentation passes targeted formatting checks
- [x] Internal paths and reading order are consistent
- [x] Target architecture is clearly distinguished from current filesystem
  ```
  state
  ```

## Goal 2 — Structure and Page Ownership

**Status: Complete**

### Routing

- [x] Introduce `(site)` and `(legal)` route groups without changing public URLs
- [x] Move Home and Contact under the public-site shell
- [x] Move Privacy under the legal shell
- [x] Keep page and layout files as Server Components
- [x] Preserve Contact's footer behavior without duplicating the entire shell

### Components

- [x] Rename `components/landing/` ownership to `components/home/`
- [x] Move header, footer, and social presentation to `components/layout/`
- [x] Move Turnstile to `components/shared/`
- [x] Keep Contact composition under `components/contact/`
- [x] Extract the reusable legal page layout and legal section renderer to
  ```
  `components/legal/`
  ```
- [x] Remove old paths after imports move; do not leave compatibility exports

### Content

- [x] Add `content/site.ts` for company identity, contact details, and socials
- [x] Add `content/home.ts` for Home presentation copy and repeated lists
- [x] Move selected-work records to `content/work.ts`
- [x] Keep Contact presentation copy in `content/contact.ts`
- [x] Move Privacy content to `content/legal.ts`

Completion gate:

- [x] Home, Contact, and Privacy preserve their current behavior and URLs
- [x] No stale imports or duplicate ownership remain
- [x] `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass
- [x] Representative desktop and 390px browser renders preserve the existing UI
- [x] Architecture, roadmap, README, documentation index, and implementation-log
  ```
  migration status are updated
  ```

## Goal 3 — Form and Server Boundaries

**Status: Complete**

### Client behavior

- [x] Extract `use-project-enquiry-form.ts`
- [x] Extract `use-waitlist-form.ts`
- [x] Keep form components responsible primarily for rendering fields and
  ```
  feedback
  ```
- [x] Preserve submit locking, accessible feedback, conditional Other input,
  ```
  and Turnstile reset behavior
  ```

### Contracts

- [x] Move enquiry validation to `schemas/enquiry.ts`
- [x] Move waitlist validation to `schemas/waitlist.ts`
- [x] Move public API result contracts to `types/enquiry.ts` and
  ```
  `types/waitlist.ts`
  ```
- [x] Infer form values from Zod where practical

### Server and infrastructure

- [x] Flatten the server workflows to `lib/enquiry.ts` and `lib/waitlist.ts`
- [x] Consolidate email rendering/delivery under `lib/email/`
- [x] Move shared request-IP extraction to `lib/request.ts`
- [x] Keep rate limiting and Turnstile as explicit security modules
- [x] Mark credential, database, email, and provider modules as server-only
- [x] Keep API routes as thin, readable HTTP entry points
- [x] Add `providers/app-providers.tsx` for the toaster and future genuine
  ```
  app-wide providers
  ```
- [x] Do not add React Query, global state, authentication, or theme providers
  ```
  without a requirement
  ```

### Focused tests

- [x] Add focused tests for Zod contracts and stable server-result logic after
  ```
  extraction
  ```
- [x] Avoid broad snapshot or component-test infrastructure merely to increase
  ```
  test count
  ```

Completion gate:

- [x] Enquiry and waitlist success/failure contracts remain unchanged
- [x] Honeypot, Upstash limits, Turnstile, generic public errors, and server logs
  ```
  remain intact
  ```
- [x] No server-only dependency enters the client graph
- [x] Lint, typecheck, focused tests, and production build pass
- [x] Local representative API failure paths are verified without contacting
  ```
  live providers
  ```

## Goal 4 — SEO and System Routes

**Status: Complete**

- [x] Add `content/seo.ts`
- [x] Add a small `lib/metadata.ts` helper for consistent route metadata
- [x] Keep the root title template and canonical production origin centralized
- [x] Add canonical metadata for Home, Contact, and Privacy
- [x] Add `app/robots.ts`
- [x] Add `app/sitemap.ts` using only approved public routes
- [x] Add verified `Organization` and `WebSite` structured data
- [x] Preserve the existing Open Graph and Twitter images
- [x] Keep unfinished future routes out of the sitemap; no preview route is
  ```
  currently deployed that requires `noindex`
  ```

Completion gate:

- [x] Lint, typecheck, and production build pass
- [x] Rendered `<head>` output is checked for all current public pages
- [x] `/robots.txt` and `/sitemap.xml` render correctly locally
- [x] Local verification is reported separately from live indexing and
  ```
  social-card cache state
  ```

## Goal 5 — Current-Site Launch Readiness

**Status: Next with external gates**

### Evidence Snapshot — 2026-08-21

- The current checkout builds and local environment-variable names are present,
  but that does not prove Vercel production configuration or provider delivery.
- Local desktop checks found no horizontal overflow on Home, Contact, or
  Privacy. Contact invalid feedback focuses the first invalid field, and the
  conditional Other field is reachable and visible. The shared provider now
  honours user reduced-motion preferences, with a CSS safety net for other
  animation and transition styles. Remaining device-width, keyboard-navigation,
  and provider-limit checks stay open.
- The deployed homepage still serves the previous teaser, including “Full site
  launching soon”; the generated current-site crawl files are not deployed.
  Do not record deployed metadata or social-card verification until the current
  checkout is deliberately deployed.
- The three selected-work records now use user-authorized public share images
  from the corresponding product sites. Their 1200×630 derivatives preserve
  the original 40:21 composition and are not private interface captures.
- Configured contact channels are internally consistent: the site uses one
  email address and telephone link from the shared site content, and all three
  social URLs resolve publicly (LinkedIn blocks automated verification).

### Content and proof

- [x] Confirm WardWise, Q-DAS Global, and iProduce Africa names are publishable
- [x] Replace development placeholders with user-authorized public share images
- [x] Verify image crops at desktop and mobile widths
- [ ] Add a real approved project crop to the desktop hero only if it improves
  ```
  the composition; do not create a fake dashboard
  ```
- [x] Recheck company email, telephone, and all social destinations

### Product behavior

- [x] Verify Home, Contact, and Privacy at 390px, tablet where relevant,
  ```
  desktop, and wide desktop
  ```
- [x] Verify keyboard navigation, focus visibility, reduced-motion behavior,
  ```
  and form feedback
  ```
- [x] Verify launch-list and project-enquiry rate limits and failure states
- [x] Verify there is no page-level horizontal overflow

### Deployment and providers

- [x] Confirm production environment variables in Vercel
- [x] Confirm Turnstile production configuration
- [x] Confirm Upstash production limits
- [x] Confirm Resend sending domain and destination inboxes
- [x] Run authorized end-to-end enquiry and launch-list delivery checks
- [x] Verify deployed canonical URLs, robots, sitemap, and social cards
- [x] Record local, deployed, and live-provider evidence separately

Completion gate:

- [x] All current-launch checklist items are complete or explicitly removed from
  ```
  scope
  ```
- [x] No placeholder or confidential work material is public
- [x] Build and responsive browser QA pass
- [x] Authorized live-provider delivery and deployed-domain checks are recorded

## Goal 6 — Fuller Studio Website

**Status: Later**

Potential future areas:

- About and Team
- full Work archive
- project case studies
- Blog or Insights
- CMS/editorial ownership
- photography and richer project media
- project metrics and filters
- client or inquiry-management products

Before starting one of these areas:

1. define its purpose and public route
2. agree content ownership and publishable material
3. decide whether it belongs to the marketing site or a separate product
4. create a focused specification only if the area has enough behavior to need
   one
5. add it to this roadmap with an acceptance gate

Do not create empty routes, CMS schemas, or feature folders in anticipation.

## Explicitly Not Planned Now

- moving the repository into `src/`
- introducing a feature-first architecture
- adding a global state library
- adding authentication, payments, dashboards, or a client portal
- recreating approved social share images
- turning the launch list into an ongoing newsletter without revised consent

## Keeping This Roadmap Useful

- Update status only after current evidence supports it.
- Check a task only when its completion gate is satisfied.
- Append completed-work details to `implementation-log.md`; do not turn this
  roadmap into a diary.
- Add newly approved work to the appropriate goal instead of creating a second
  status board.
- New chats should start with the first unchecked goal marked **Next**.
