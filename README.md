# Vextra Limited Website

The public website for Vextra Limited, a software studio building dependable
web applications, mobile products, custom software, and API integrations.

The current release is a deliberate teaser site rather than the full studio
website. It introduces the company, shows selected work, accepts project
enquiries, and maintains a launch list while the fuller site is developed.

## Current Public Surface

- `/` — studio introduction, services, selected work, principles, and launch
  list
- `/contact` — project and partnership enquiry form
- `/privacy` — current privacy baseline
- `/api/waitlist` — launch-list submission endpoint
- `/api/enquiry` — project-enquiry submission endpoint

The social share images under `app/opengraph-image.jpg` and
`app/twitter-image.jpg` are production assets and should not be regenerated as
part of routine SEO work.

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4 and shadcn-style UI primitives
- React Hook Form and Zod
- Drizzle ORM with Postgres/Neon
- Resend and React Email
- Cloudflare Turnstile
- Upstash Redis rate limiting
- Motion for selected interface animation
- Vercel Analytics

## Local Setup

Requirements:

- Node.js compatible with the repository toolchain
- pnpm
- Postgres database
- Resend, Upstash, and Cloudflare Turnstile credentials for complete form flows

Install and configure:

```bash
pnpm install
cp .env.example .env.local
pnpm db:migrate
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Do not use production credentials for routine local UI work. Cloudflare test
keys should be used when testing Turnstile locally.

## Environment Variables

Copy `.env.example` and provide:

- `DATABASE_URL`
- `RESEND_API_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

Optional delivery overrides are documented in `.env.example`.

Never commit `.env.local`, provider secrets, submitted form data, or private
database identifiers.

## Commands

```bash
pnpm dev             # local development server
pnpm lint            # ESLint
pnpm lint:fix        # auto-fix supported ESLint findings
pnpm typecheck       # TypeScript without emit
pnpm format          # write-format the full repository
pnpm format:check    # verify formatting without writing
pnpm build           # production build
pnpm start           # run the production build
pnpm db:generate     # generate Drizzle migrations
pnpm db:migrate      # apply pending Drizzle migrations
pnpm db:studio       # open Drizzle Studio
```

Prefer targeted Prettier commands when unrelated work is present; the full
`pnpm format` command can touch files outside the current task.

## Repository Guidance

Start with:

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/architecture.md`
4. The system document relevant to the task
5. The latest entries in `docs/implementation-log.md`

The documentation is intentionally compact. It records durable decisions and
current boundaries, not every implementation detail.

## Delivery Safety

Local checks do not prove that Vercel, Resend, Cloudflare, Upstash, DNS, or the
production database are correctly configured. Deployment and provider
verification must be reported separately and only performed when authorized.
