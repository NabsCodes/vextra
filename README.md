<div align="center">
  <img src="./public/full-color-logo.png" alt="Vextra Limited" width="220" />

  <h1>Vextra Limited</h1>

  <p>
    Dependable digital products that work.<br />
    Web, mobile, custom software, and APIs—rooted in Nigeria and Africa,
    working globally.
  </p>

  <p>
    <a href="https://vextralimited.com">Website</a>
    ·
    <a href="https://linkedin.com/company/vextrahq">LinkedIn</a>
    ·
    <a href="https://x.com/vextrahq">X</a>
    ·
    <a href="https://instagram.com/vextrahq">Instagram</a>
  </p>

  <p><strong>Built to Work.</strong></p>
</div>

---

## About Vextra

Vextra Limited is a software studio that designs and builds dependable digital
products for organisations operating in the real world.

Our work spans customer-facing platforms, operational tools, public-sector
systems, marketplaces, mobile products, custom software, and API integrations.
We combine product thinking, interface design, and engineering to move from an
unclear problem to software people can actually use.

## What We Build

- Web applications and customer platforms
- Mobile applications
- Internal tools and operational systems
- Custom software
- APIs and third-party integrations
- Long-term product and engineering partnerships

## The Website

This repository powers Vextra's public website. The current release introduces
the studio, presents selected work, accepts project enquiries, and maintains a
launch list while the fuller company website is developed.

The site should communicate that Vextra is active and capable without presenting
unfinished pages as launched work.

### Current Routes

| Route           | Purpose                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| `/`             | Company introduction, services, selected work, principles, and launch list |
| `/contact`      | Project and partnership enquiries                                          |
| `/privacy`      | Current privacy baseline                                                   |
| `/api/enquiry`  | Protected project-enquiry delivery                                         |
| `/api/waitlist` | Protected launch-list registration                                         |

## Technology

| Area       | Technology                                            |
| ---------- | ----------------------------------------------------- |
| Framework  | Next.js 16 App Router and React 19                    |
| Language   | TypeScript                                            |
| Interface  | Tailwind CSS 4, Radix UI, shadcn-style primitives     |
| Forms      | React Hook Form and Zod                               |
| Database   | Drizzle ORM with Postgres/Neon                        |
| Email      | Resend and React Email                                |
| Protection | Cloudflare Turnstile, honeypot, Upstash rate limiting |
| Motion     | Motion for React                                      |
| Analytics  | Vercel Analytics                                      |
| Tooling    | pnpm, ESLint, Prettier                                |

## Project Structure

```text
app/(site)/          Home and Contact routes with the shared public-site shell
app/(legal)/         Privacy and future legal routes with the legal shell
app/api/             Enquiry and launch-list HTTP entry points
app/robots.ts        Generated crawler rules
app/sitemap.ts       Generated indexable-route sitemap
components/home/     Homepage-only sections
components/contact/  Contact composition and project-enquiry UI
components/layout/   Shared public header, footer, and social presentation
components/legal/    Reusable legal layout and document rendering
components/shared/   Cross-page widgets and presentation
components/ui/       shadcn-style interface primitives
content/             Site, page, work, legal, and SEO content
hooks/               Project-enquiry and launch-list client behavior
providers/           App-wide client provider composition
schemas/             Shared Zod request contracts
types/               Public response and reusable content contracts
lib/                 Server workflows, email, metadata, security, and utilities
db/                  Drizzle client and schema
drizzle/             Generated SQL migrations
public/              Brand and project assets
tests/               Focused form-contract and stable-result tests
docs/                Architecture, design, workflow, roadmap, and history
```

The structure above is the current implementation after Goals 2–4. See
[`docs/architecture.md`](./docs/architecture.md) for ownership rules and the
completed migration map.

## Project Status

The public teaser UI, selected-work treatment, project-enquiry form, launch-list
flow, privacy baseline, and documentation foundation are implemented in the
repository.

Route, component, content, form/server, provider, and SEO ownership now align
with the accepted architecture. Current-site launch readiness is the next
objective and includes content approvals, responsive/accessibility QA, and
authorized production-provider checks.

See [`docs/roadmap.md`](./docs/roadmap.md) for the authoritative list of what is
complete, what remains, the planned order, and the completion gates.

## Getting Started

### Requirements

- Node.js compatible with the repository toolchain
- pnpm
- Postgres database
- Resend, Upstash, and Cloudflare Turnstile credentials for complete local form
  flows

### Installation

```bash
pnpm install
cp .env.example .env.local
pnpm db:migrate
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Use Cloudflare test keys for routine local Turnstile testing. Never commit
`.env.local`, provider secrets, submitted form data, or private database
identifiers.

## Useful Commands

```bash
pnpm dev             # Start the development server
pnpm build           # Create a production build
pnpm start           # Run the production build
pnpm lint            # Run ESLint
pnpm lint:fix        # Apply supported ESLint fixes
pnpm typecheck       # Run TypeScript checks
pnpm format          # Format the repository
pnpm format:check    # Check formatting without writing
pnpm test            # Run focused form, server-result, and email-render tests
pnpm email:dev       # Preview React Email examples at http://localhost:3001
pnpm db:generate     # Generate Drizzle migrations
pnpm db:migrate      # Apply pending Drizzle migrations
pnpm db:studio       # Open Drizzle Studio
```

Prefer targeted Prettier commands when unrelated changes exist; repository-wide
formatting can touch files outside the current task.

## Documentation

This repository uses a compact documentation system so developers and agents can
continue without relying on chat history.

- [`AGENTS.md`](./AGENTS.md) — repository rules and required verification
- [`docs/README.md`](./docs/README.md) — documentation index and reading order
- [`docs/roadmap.md`](./docs/roadmap.md) — current objective and remaining work
- [`docs/architecture.md`](./docs/architecture.md) — current code ownership and structure
- [`docs/design-system.md`](./docs/design-system.md) — visual foundations and component rules
- [`docs/layout-system.md`](./docs/layout-system.md) — widths, gutters, spacing, and responsive behavior
- [`docs/workflow.md`](./docs/workflow.md) — implementation and verification workflow
- [`docs/seo.md`](./docs/seo.md) — metadata and indexing ownership
- [`docs/site-phases.md`](./docs/site-phases.md) — teaser and fuller-site boundary
- [`docs/implementation-log.md`](./docs/implementation-log.md) — completed work history

## Quality Gate

At a clean completion checkpoint:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

Visual changes also require browser QA at relevant desktop and 390px mobile
widths. Local checks do not prove Vercel deployment or live provider delivery.

---

<div align="center">
  <strong>Dependable digital products that work.</strong>
</div>
