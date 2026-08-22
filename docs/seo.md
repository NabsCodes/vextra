# SEO and Metadata

## Status

The current site has centralized root and route metadata, canonical URLs for
all public pages, generated crawl files, verified Organization/WebSite
structured data, and the existing production Open Graph/Twitter images.

Local implementation and rendering are verified. Production indexing and
social-card cache refresh remain deployment checks, not repository claims.

## Ownership

- `content/seo.ts` — route titles, descriptions, canonical paths, and indexable
  route records
- `lib/metadata.ts` — shared metadata construction
- `app/layout.tsx` — root metadata defaults, title template, metadata base, and
  site-wide social defaults
- route `page.tsx` files — static metadata exports or `generateMetadata` when
  route data is dynamic
- `app/robots.ts` — crawler rules
- `app/sitemap.ts` — indexable route list
- `components/layout/site-structured-data.tsx` — site-wide verified JSON-LD
- `app/opengraph-image.jpg` and `app/twitter-image.jpg` — current production
  social images

SEO copy should not live inside presentation components. Presentation copy and
search metadata may communicate the same idea, but they have different owners.

## Site Identity

Use one canonical production origin:

```text
https://vextralimited.com
```

The root title template is:

```text
%s | Vextra Limited
```

The default identity remains centered on:

- Vextra Limited
- dependable digital products
- web, mobile, custom software, and APIs
- Nigeria and Africa with global delivery
- `Built to Work`

Avoid keyword stuffing or unsupported location/service claims.

## Route Requirements

Every indexable public route needs:

- unique title
- concise description
- canonical path
- appropriate Open Graph title, description, and URL
- inclusion in the sitemap when publicly launched

The root title template should prevent manually repeating `| Vextra Limited`
in page titles.

## System Pages

`app/not-found.tsx` is a recovery surface, not an indexable marketing route.
It uses `noindex, follow`, stays out of the sitemap, and reuses site chrome so
visitors remain inside the public brand shell. Presentation copy lives in
`content/system-pages.ts`.

## Crawl and Launch Rules

- Only approved public routes belong in `sitemap.ts`.
- Preview, experimental, or unfinished routes must not be added to the sitemap.
- An unlinked deployed URL is still public; absence from navigation is not
  access control.
- Prefer building unfinished pages locally or on an isolated branch.
- If a preview route must be deployed, add explicit `noindex` metadata and keep
  it out of the sitemap. This prevents ordinary indexing but does not make the
  content private.
- Do not disallow a route in `robots.txt` when the goal is removal from search;
  crawlers need access to observe a `noindex` directive.

## Social Sharing

The current social images are approved assets:

- `app/opengraph-image.jpg`
- `app/twitter-image.jpg`

Do not regenerate or replace them as part of a metadata refactor. Verify that
route metadata inherits or references them correctly.

## Structured Data

The first justified structured-data scope is small:

- `Organization` for Vextra Limited
- `WebSite` for the canonical site

Only include verified company identity, URLs, and social profiles. Do not add
ratings, reviews, awards, founding details, client relationships, metrics, or
service-area claims that are not approved and publicly supportable.

## Verification

For SEO changes:

1. Run `pnpm lint` and `pnpm typecheck`.
2. Run `pnpm build` for route, metadata, sitemap, or robots changes.
3. Inspect rendered `<head>` output for representative routes.
4. Open `/robots.txt` and `/sitemap.xml` locally.
5. Distinguish local verification from production indexing or social-cache
   confirmation.

Search-engine indexing and social-card cache refreshes are external outcomes;
a successful local build does not confirm them.
