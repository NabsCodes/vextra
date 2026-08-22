# Vextra Agent Guide

Vextra Limited is a software studio building dependable web, mobile, custom
software, and API products. This repository currently serves the public teaser
site, project enquiry flow, launch list, and legal baseline while the fuller
studio site is developed through approved milestones.

## Start Here

Before changing the repository:

1. Read `README.md`.
2. Read `docs/README.md`.
3. Read `docs/architecture.md`.
4. Read `docs/roadmap.md` for the current objective and remaining work.
5. Read the relevant system document for the task.
6. Read the newest entries in `docs/implementation-log.md`.
7. Inspect `git status`, the current diff, and the nearby implementation.

Treat `docs/architecture.md` as the current ownership map. When a future
roadmap item proposes a different structure, distinguish that proposal from the
implemented filesystem until its migration is verified.

## Product Boundary

- The public site is live, but the fuller studio site is still being developed.
- Preserve the current Home, Contact, Privacy, launch-list, and project-enquiry
  behavior unless the task explicitly changes them.
- Do not publish placeholder project artwork or unapproved client material.
- Do not add About, Team, Blog, Academy, CMS, case-study routes, metrics, or a
  `/work` archive without an approved roadmap goal.
- Pages may be developed locally or on a branch. An unlinked deployed route is
  still public and must not be treated as hidden.

See `docs/site-phases.md` for the current launch boundary.

## Architecture Rules

- `app/` owns routes, layouts, metadata, and API entry points.
- Pages and layouts are Server Components by default.
- Add `"use client"` only to interactive leaves that require browser state,
  effects, event handlers, or animation libraries.
- `components/` is organized by page area plus `layout`, `shared`, and `ui`.
- `content/` owns code-managed public copy and repeated content collections.
- `schemas/` owns reusable Zod/runtime contracts.
- `hooks/` owns real reusable client behavior; do not extract render markup into
  hooks or create hooks only to reduce line count.
- `lib/` owns infrastructure and server workflows. Keep it shallow unless a
  concern has several related files.
- Use `.tsx` only for modules that render JSX. Keep schemas, helpers, builders,
  provider clients, delivery logic, and other non-JSX modules in `.ts` files.
- `providers/app-providers.tsx` is the single app-wide client-provider
  composition point. Do not introduce global state without a real requirement.
- `db/` owns the Drizzle client/schema; `drizzle/` owns generated SQL migrations.
- Do not introduce `features/` or move the project into `src/` at the current
  site scale.

The implemented tree and ownership rules live in `docs/architecture.md`.

## UI Rules

- Follow `docs/design-system.md` and `docs/layout-system.md` before changing UI.
- Preserve the public gutter baseline: `px-6 md:px-12 lg:px-16`.
- Let route or section boundaries own width. Do not hide page-width decisions
  inside small reusable components.
- Use existing shadcn primitives before creating new controls.
- Reuse semantic theme utilities from `app/globals.css` before adding one-off
  colors.
- Treat 390px mobile and desktop as deliberate layouts, not one as a compressed
  version of the other.
- Motion must support the content hierarchy and respect reduced-motion users.

## Public Form Rules

- Browser validation improves UX; server-side Zod validation remains required.
- Preserve honeypot, rate limiting, Turnstile verification, generic public
  errors, and detailed server logs.
- Never expose provider errors, secrets, tokens, private database identifiers,
  or submitted user data in public responses.
- Do not submit production forms, run live delivery tests, or change provider
  configuration without explicit authorization.

## Working Rules

- Preserve unrelated changes in a dirty worktree.
- Prefer small, behavior-preserving work items within the active roadmap goal.
- Do not combine file relocation, UI redesign, and behavior changes in one
  change unless they are inseparable.
- Do not create empty architecture folders for future possibilities.
- Do not add generic `common`, `helpers`, or `services` dumping grounds.
- Do not commit, push, deploy, migrate a shared database, or modify external
  services unless explicitly asked.
- Update the matching canonical doc when an architectural, design, layout, SEO,
  workflow, or launch-boundary decision changes.
- Append one concise entry to `docs/implementation-log.md` after a meaningful
  completed work item. Do not log trivial formatting or exploratory reads.

## Verification

Use the smallest verification set that gives honest confidence:

- Documentation only: targeted Prettier check and link/content review.
- TypeScript or component logic: targeted formatting, `pnpm lint`,
  `pnpm typecheck`, and relevant focused tests.
- Routing, metadata, server, dependency, environment, or database changes: add
  `pnpm build`.
- UI or interaction changes: add browser QA at relevant desktop and 390px
  mobile widths.
- API changes: exercise local success/failure contracts without contacting live
  providers unless authorized.
- Email-template changes: run focused rendering tests and inspect the examples
  with `pnpm email:dev` when visual presentation changes.

Use targeted formatting while the worktree is dirty:

```bash
pnpm exec prettier --write <changed-files>
```

Use the full commands at a clean completion checkpoint:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

If a required check cannot run, report exactly which check was skipped and why.
