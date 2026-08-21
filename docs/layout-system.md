# Layout System

## Purpose

Vextra uses a broad, editorial canvas with clear alignment. The layout should
feel deliberate and spacious without forcing every page into a centered SaaS
container.

## Public Gutter Baseline

Use this responsive horizontal padding on public page and section boundaries:

```text
px-6 md:px-12 lg:px-16
```

This aligns the header, page leads, primary sections, contact page, and footer.

The section or route boundary owns this padding. Do not add the public gutter to
cards, controls, badges, or other primitives.

## Width Policy

Vextra does not currently use a mandatory site-wide `max-w-*` container.

Default behavior:

- major marketing sections may use the full canvas inside the public gutters
- split layouts may reach across the available width
- individual text blocks control their own readable line length
- legal documents use a narrow reading width
- forms may use a practical form width inside their column

Use `max-w-*` for a clear content reason:

- `max-w-2xl` or similar for body copy
- `max-w-3xl` for legal reading content
- a bounded form or media surface where unlimited growth harms usability

Do not introduce a generic `Container` component that hides these decisions.
The width posture should remain visible at the section boundary.

## Alignment

- Header logo, section leads, Contact introduction, and footer content align to
  the same public gutter.
- A deliberate full-bleed divider or project image may cross the text alignment
  while its internal content returns to the baseline.
- Split sections should have one clear vertical anchor.
- Avoid nearly aligned edges; either align them or make the offset visibly
  intentional.

## Section Postures

Use a small set of recognizable compositions.

### Editorial Open

For hero statements, mission, narrative, and principles:

- spacing and typography create hierarchy
- minimal surface chrome
- controlled line length
- decorative layers remain secondary

### Split Narrative and Surface

For Contact or a future project lead:

- one side explains the context
- the other side contains a form, image, or product surface
- both sides share the page alignment
- one side remains visually dominant

### Evidence Band

For selected work:

- real interface imagery is the primary evidence
- project identity and Vextra's role remain easy to scan
- repeated projects use a consistent structure
- full-bleed media may be used when it serves the evidence

### Framed Action

For the launch list or project form:

- rounded card or panel
- subtle border
- focused action hierarchy
- no unnecessary dashboard decoration

## Vertical Rhythm

Choose section spacing deliberately rather than applying one fixed value
everywhere.

General range:

- mobile standard sections: around `py-12` to `py-16`
- desktop standard sections: around `py-16` to `py-24`
- hero and major evidence surfaces may use custom viewport-aware spacing
- dense form interiors use smaller repeated gaps

Adjacent sections should not accidentally duplicate large top and bottom gaps.
Inspect the transition between sections, not only each section in isolation.

## Responsive Checkpoints

Required design checkpoints for visual changes:

- 390px mobile
- tablet when a grid or large heading changes behavior
- a representative desktop width
- wide desktop when the composition uses open canvas or absolute decoration

Mobile is an intentional layout:

- use a clear reading order
- stack split layouts
- reduce decorative layers before reducing legibility
- keep primary actions reachable and full-width where appropriate
- avoid horizontal overflow from large headings or provider widgets

Desktop should preserve negative space without leaving an area purposeless. Use
real product imagery or meaningful information when adding to open space; avoid
generic decorative dashboards.

## Header and Footer

- The public header is sticky and uses a restrained translucent surface.
- The sticky header must not cover route anchors or initial content.
- Header and footer share the public gutters.
- The Contact route may suppress a repeated project CTA in the footer.
- Legal pages may use a quieter reading header while retaining recognizable
  Vextra identity.

## Forms

- Form columns use equal control widths and matching single-line heights.
- On mobile, two-column field rows stack in reading order.
- Major form surfaces may use `rounded-2xl`; internal controls use the smaller
  control radius.
- Turnstile sits in normal document flow and may retain its provider width.
- The submit button may span the form content width.
- Feedback and the direct-email fallback stay close to the form action.

## Exceptions

Break the baseline only when an approved design needs a clearly different
posture. Record durable exceptions here rather than creating isolated CSS
conventions in individual components.
