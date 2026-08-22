# Implementation Log

This is an append-only record of meaningful completed work. It is not a daily
diary or a substitute for Git history.

## Entry Format

```text
## YYYY-MM-DD — Area

- Changed: concise outcome
- Verified: checks actually completed
- Follow-up: remaining gate, or `None`
```

Add newest entries immediately below this guidance.

## 2026-08-21 — Selected-work responsive verification

- Changed: served the selected-work public share images directly from `public/`
  rather than relying on the local image-optimizer path, then removed the
  superseded source PNG copies and prior development-placeholder artwork.
- Verified: all three 1200×630 images load at 390px with no horizontal
  overflow; their 40:21 frame was also inspected at desktop. The Q-DAS card
  retains its full public composition at both widths.
- Follow-up: broader current-site keyboard, provider, and deployed-domain
  readiness checks remain in Goal 5.

## 2026-08-21 — Branded 404 recovery page

- Changed: added a root `not-found` surface with site chrome, content-owned
  copy, recovery CTAs to current public routes, and a structural route-diagram
  illustration aligned to Vextra's teal/charcoal language.
- Verified: targeted formatting; `pnpm lint`; `pnpm typecheck`; `pnpm build`;
  desktop and 390px browser checks for `/does-not-exist`.
- Follow-up: optional `error` / `global-error` system pages remain out of scope
  until needed.

## 2026-08-21 — Selected-work public imagery

- Changed: replaced the non-Vextra Zamfara BPP record with Q-DAS Global and
  replaced all selected-work development placeholders with the corresponding
  product's user-authorized public share image.
- Verified: the source share images are public 2400×1260 assets from the local
  WardWise, Q-DAS Global, and iProduce Africa sites; their 1200×630 local
  derivatives preserve the composition at approximately 46–100 KB each and
  render in a consistent, uncropped 40:21 media frame.
- Follow-up: verify image crops at the required desktop and mobile checkpoints
  before declaring the current-launch content gate complete.

## 2026-08-21 — Goal 5 local and deployed readiness audit

- Changed: recorded current launch-readiness evidence in the canonical roadmap
  rather than inferring completion from local code.
- Verified: current checkout Home, Contact, and Privacy have no desktop
  horizontal overflow; Contact exposes accessible invalid feedback and the
  conditional Other input; local configuration contains the required variable
  names without exposing values; configured email, telephone, and social links
  are consistent with shared site content (X and Instagram resolve publicly;
  LinkedIn blocks automated verification); and the deployed homepage is still
  the older teaser with the old hero eyebrow and without the current generated
  crawl files. Motion respects the user reduced-motion preference through the
  shared app provider and a CSS safety net.
- Follow-up: approved project names/captures, multi-device and keyboard QA, an
  intentional deployment, Vercel/provider confirmation, and authorized live
  delivery checks are required before Goal 5 can be complete.

## 2026-08-21 — Test runner and email development workflow

- Changed: standardized focused tests on Vitest; reorganized React Email into
  reusable components, render-only templates, non-JSX builders/delivery, and
  safe local preview fixtures; added the local email-preview command; removed
  empty legacy folders; and resolved structured-data, legal-key, and Turnstile
  accessibility analyzer findings.
- Verified: `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, ten Vitest tests,
  and `pnpm build`; all three React Email examples rendered through the local
  preview server with HTTP 200 responses; analyzer-pattern and empty-folder
  scans; and `git diff --check`.
- Follow-up: production email delivery remains an authorized Goal 5 provider
  check; local previewing does not contact Resend.

## 2026-08-21 — Form/server boundaries and SEO foundation

- Changed: extracted enquiry and launch-list client behavior into focused
  hooks; moved Zod schemas and public response contracts to their accepted
  owners; flattened server workflows; consolidated email rendering/delivery;
  centralized request-IP handling; added explicit server-only
  boundaries and app providers; centralized route metadata; and added robots,
  sitemap, and verified Organization/WebSite structured data.
- Verified: `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, seven focused
  tests, and `pnpm build`; local invalid-input and honeypot API contracts without
  provider calls; rendered title, description, canonical, robots, Open Graph,
  Twitter image, and JSON-LD output for current routes; local robots and sitemap
  output; and browser checks for conditional Other input, accessible invalid
  feedback, horizontal overflow, and console warnings/errors.
- Follow-up: begin Goal 5, Current-Site Launch Readiness. Production indexing,
  social-card caches, provider delivery, and deployment configuration remain
  external verification gates.

## 2026-08-21 — Structure and page ownership

- Changed: introduced behavior-preserving `(site)` and `(legal)` shells; moved
  Home, Contact, and Privacy into their route groups; organized Home, layout,
  legal, and shared components by ownership; centralized site, Home, work, and
  legal content; and replaced the inline Privacy page with reusable legal
  rendering.
- Verified: `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm build`,
  stale-import scan, and browser regression checks for Home, Contact, and
  Privacy at desktop and 390px. Confirmed unchanged public URLs, no horizontal
  overflow, no broken images, no browser warnings/errors, all 13 Privacy
  sections, and Contact's footer CTA suppression.
- Follow-up: begin Goal 3, Form and Server Boundaries.

## 2026-08-21 — Company README and roadmap

- Changed: reframed the README around Vextra as a company and added one
  canonical roadmap covering completed foundations, remaining architecture
  work, SEO, launch readiness, external gates, and fuller-site work.
- Verified: targeted Prettier check, documentation-link review, roadmap review
  against the current repository, and `git diff --check`.
- Follow-up: begin Goal 2, Structure and Page Ownership.

## 2026-08-21 — Documentation foundation

- Changed: replaced the starter README and established the agent guide,
  architecture, design, layout, workflow, SEO, site-phase, documentation-index,
  and implementation-log sources of truth.
- Verified: targeted Prettier check, Markdown path/link review, content
  consistency review, and `git diff --check`.
- Follow-up: continue with Goal 2 in `roadmap.md`, beginning with
  behavior-preserving structure and page ownership.
