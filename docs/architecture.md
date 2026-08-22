# Architecture

## Status

- **Accepted target:** the structure in this document is the approved direction
  for the current public-site scale.
- **Migration state:** route, component, content, form/server, provider, and SEO
  ownership are aligned for the current public-site scope.
- **Last reviewed:** 2026-08-21.

This document is the canonical source for file ownership and application
boundaries.

## Architectural Posture

Vextra is currently a public studio website with two stateful workflows:

- project enquiries
- website launch-list signups

It is not an authenticated product application. Use a page-oriented marketing
structure rather than a full feature-first architecture.

The structure should stay:

- shallow enough to scan quickly
- explicit about where content and logic belong
- server-first by default
- ready for more public pages without pretending they already exist
- easy for a developer or agent to understand in one short reading pass

## Current Implemented Structure

```text
app/
  (site)/
    layout.tsx
    page.tsx
    contact/
      page.tsx

  (legal)/
    layout.tsx
    privacy/
      page.tsx

  api/
    enquiry/
      route.ts
    waitlist/
      route.ts

  layout.tsx
  not-found.tsx
  globals.css
  robots.ts
  sitemap.ts
  opengraph-image.jpg
  twitter-image.jpg

components/
  home/
  contact/
  legal/
  layout/
  shared/
  ui/

content/
  site.ts
  home.ts
  contact.ts
  legal.ts
  seo.ts
  system-pages.ts
  work.ts

hooks/
  use-project-enquiry-form.ts
  use-waitlist-form.ts

providers/
  app-providers.tsx

schemas/
  enquiry.ts
  waitlist.ts

types/
  enquiry.ts
  legal.ts
  system-pages.ts
  waitlist.ts

lib/
  email/
    components/
    previews/
    templates/
    delivery.ts
    render.ts
  enquiry/
    options.ts
  enquiry.ts
  env.ts
  form-results.ts
  metadata.ts
  rate-limit.ts
  request.ts
  turnstile.ts
  utils.ts
  waitlist.ts

db/
  client.ts
  schema.ts

drizzle/
  ...generated migrations

public/
  ...brand and project assets

tests/
  forms.test.ts
```

This is the implemented state after Goals 2–4. The route groups do not alter
the public URLs: Home remains `/`, Contact remains `/contact`, and Privacy
remains `/privacy`.

## Migration Map

| Previous/current location          | Accepted owner                                                                 | Status   |
| ---------------------------------- | ------------------------------------------------------------------------------ | -------- |
| `components/landing/*`             | Home-only files to `components/home/*`; global chrome to `components/layout/*` | Complete |
| `components/turnstile-widget.tsx`  | `components/shared/turnstile-widget.tsx`                                       | Complete |
| `lib/socials.ts`                   | `content/site.ts`                                                              | Complete |
| `lib/work/projects.ts`             | `content/work.ts`                                                              | Complete |
| Inline Privacy layout and sections | `components/legal/*` plus `content/legal.ts`                                   | Complete |
| `lib/enquiry/schema.ts`            | `schemas/enquiry.ts`                                                           | Complete |
| `lib/validation/waitlist.ts`       | `schemas/waitlist.ts`                                                          | Complete |
| `lib/enquiry/types.ts`             | `types/enquiry.ts`                                                             | Complete |
| `lib/waitlist/types.ts`            | `types/waitlist.ts`                                                            | Complete |
| `lib/enquiry/service.ts`           | `lib/enquiry.ts`                                                               | Complete |
| `lib/waitlist/service.ts`          | `lib/waitlist.ts`                                                              | Complete |
| `lib/emails/*`                     | `lib/email/*`                                                                  | Complete |
| Repeated route IP parsing          | `lib/request.ts`                                                               | Complete |
| Inline/root SEO metadata           | `content/seo.ts` plus `lib/metadata.ts`                                        | Complete |

Moves should preserve behavior. Do not redesign the UI or change provider
contracts during path-only migration work.

## Folder Ownership

### `app/`

Owns Next.js entry points:

- pages and layouts
- route metadata
- loading, error, and not-found boundaries
- route handlers
- file-based metadata such as icons and social images
- generated crawl files

Route files should compose imported components and server functions. Long-term
presentation, form state, email delivery, and database workflows do not belong
inside route files.

Route groups organize shared shells without changing public URLs:

- `(site)` — Home, Contact, and future studio pages using public chrome
- `(legal)` — Privacy and future legal documents using the reading shell

Do not add a route group for every page.

### `components/`

Owns presentation:

- `home/` — Home-only sections
- `contact/` — Contact-page composition and form UI
- `legal/` — reusable legal reading layout and section rendering
- `layout/` — global header, footer, logo, navigation, and social presentation
- `shared/` — genuinely cross-page presentation with a clear name, including
  system-page views such as the 404
- `ui/` — shadcn-style primitives and primitive variants

Avoid a large anonymous `shared` bucket. A component used twice does not
automatically become shared; promote it when the abstraction is stable.

### `content/`

Owns code-managed public content:

- company identity and contact channels
- navigation and social links
- page copy and repeated lists
- selected-work records
- legal copy
- SEO copy and indexable route records
- system-page copy such as the public 404

Content files do not contain React markup, provider clients, database queries,
or browser state.

### `hooks/`

Owns reusable client behavior. The first justified hooks are the enquiry and
waitlist submission lifecycles.

Hooks may own:

- local form state and React Hook Form setup
- client-side validation lifecycle
- request submission state
- user-facing feedback state
- resetting client widgets after submission

Hooks must not own secrets, direct database access, Resend clients, server-only
environment variables, or JSX presentation.

### `providers/`

`providers/app-providers.tsx` is the app-wide client composition root. It may
compose the toaster and future genuinely global providers.

Do not add React Query, global state, theme, authentication, or analytics
contexts until a real requirement exists. Route-specific providers belong at
the narrowest stable route layout.

### `schemas/` and `types/`

- `schemas/` owns Zod/runtime contracts shared by browser and server code.
- Infer input types from Zod when practical.
- `types/` owns response contracts and reusable content shapes that are not
  runtime validation schemas.
- Small component prop types stay beside their component.

### `lib/`

Owns infrastructure and server workflows:

- validated environment access
- email rendering and delivery
- rate limiting and Turnstile verification
- request helpers
- metadata construction
- enquiry and waitlist server workflows
- generic utilities

Keep `lib/` shallow. A nested folder is justified when a concern has several
related files, as email already does.

Email ownership follows one explicit split:

- `components/*.tsx` — reusable React Email presentation
- `templates/*.tsx` — complete email documents
- `previews/*.tsx` — safe example fixtures for `pnpm email:dev`
- root `*.ts` modules — rendering, delivery, provider access, formatting, and
  template builders

Use `.tsx` only when the module contains JSX. Do not mix provider calls or
workflow logic into template files.

Server-only modules should declare `import "server-only"` when they depend on
credentials, private environment variables, the database, or providers.

### Database

- `db/client.ts` owns the Drizzle client.
- `db/schema.ts` owns database tables and relations.
- `drizzle/` owns generated migrations and metadata.
- `drizzle.config.ts` owns migration-tool configuration.

Do not hand-edit generated Drizzle metadata. Database migrations and shared
database writes require explicit authorization.

## Server and Client Boundaries

Pages and layouts are Server Components unless interaction requires otherwise.

Use Client Components for:

- browser event handlers
- React state and effects
- React Hook Form
- browser-only widgets
- Motion-driven interaction or viewport animation

Keep the client boundary as narrow as practical. A server page may compose
several client section components; the page itself does not need `"use client"`.

## Public Form Flow

```text
Client form component
  -> client hook and browser feedback
  -> app/api/* route handler
  -> server-side Zod validation
  -> honeypot and rate limiting
  -> Turnstile verification where configured
  -> lib server workflow
  -> database and/or Resend
  -> typed generic public response
```

The route handler owns the HTTP contract. Shared helpers should remove genuine
duplication, such as client-IP extraction, without creating an internal API
framework for two endpoints.

## When to Reconsider `features/`

Do not introduce `features/` at the current scale. Reconsider it only when one
domain owns several routes and independently substantial components, hooks,
schemas, server workflows, and tests—for example an authenticated client portal
or a large CMS-backed work archive.

Until then, the page-oriented structure is clearer.

## Refactor Rules

1. Document the accepted boundary first.
2. Move one ownership area at a time.
3. Update every import and remove the old file.
4. Do not leave compatibility re-export files.
5. Keep relocation behavior-preserving.
6. Verify after every completed work item.
7. Update this document and the implementation log when the migration state
   changes.
