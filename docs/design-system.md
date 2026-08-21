# Design System

## Purpose

Vextra should feel dependable, technically capable, contemporary, and grounded.
The interface can use structural details, but it should not look like an
engineering dashboard, a generic SaaS launch template, or an over-designed
architectural concept.

The system is intentionally small:

- `app/globals.css` owns CSS variables and Tailwind theme bridging.
- `components/ui/*` owns reusable primitive behavior and variants.
- page and section components own composition.
- this document owns the durable usage rules.

Do not create a parallel `tokens.ts` file while CSS variables and Tailwind
utilities cover the implementation.

## Brand Foundations

### Colour

Current code-defined palette:

| Role          | Token           | Value     | Typical use                                |
| ------------- | --------------- | --------- | ------------------------------------------ |
| Primary brand | `vextra-green`  | `#14b8a6` | Primary actions, key words, active accents |
| Brand depth   | `deep-teal`     | `#14a590` | Hover states and stronger teal surfaces    |
| Primary text  | `charcoal-grey` | `#2f3a3f` | Headlines, body copy, interface text       |
| Soft border   | `soft-grey`     | `#d5dadf` | Borders and subdued dividers               |
| Page surface  | `off-white`     | `#f9fafb` | Main public-site background                |
| White surface | `white`         | `#ffffff` | Cards, inputs, elevated content surfaces   |

Prefer registered Tailwind theme roles before adding a one-off hex value:

- `bg-background`, `text-foreground`
- `bg-card`, `text-card-foreground`
- `border-border`
- `bg-primary`, `text-primary-foreground`
- `bg-muted`, `text-muted-foreground`
- Vextra brand utilities when visible brand expression is intended

Opacity variants such as `text-charcoal-grey/60` are part of the current
editorial hierarchy. Use a small, repeatable set rather than a different
opacity on every element.

The current public site is light-first. Existing dark variables are technical
scaffolding, not an approved dark-mode product requirement.

### Typography

- `Funnel Display` (`font-display`) is the brand display voice.
- `Geist` (`font-sans`) is the body and interface voice.

Use `font-display` for:

- hero statements
- page titles
- major section headings
- large numeric or project markers

Use `font-sans` for:

- paragraphs
- navigation
- form labels and controls
- buttons
- metadata and supporting information

Large type should remain legible and controlled at mobile widths. Avoid
oversized desktop typography that wraps into accidental shapes on tablet.

### Radius

Use a small hierarchy:

- `rounded-md` — inputs, selects, textareas, and compact buttons
- `rounded-lg` — prominent CTA buttons and medium product surfaces
- `rounded-xl` or `rounded-2xl` — major forms, waitlist panels, and deliberate
  feature cards
- `rounded-full` — circular social controls and true pills

Do not mix several radii within one card family. Large rounded surfaces should
soften Vextra's structural language, not turn every section into a floating
SaaS card.

### Borders and Elevation

Vextra primarily uses hierarchy through:

- spacing
- one-pixel dividers
- subtle surface contrast
- typography

Most surfaces should have no shadow. Use borders such as
`border-charcoal-grey/10` or semantic `border-border`. Reserve visible shadow
for overlays, dropdowns, and clearly floating browser UI.

## Components

### Buttons

Use `components/ui/button.tsx` as the primitive source of truth for application
forms and reusable actions.

- Primary action: Vextra green, charcoal or white text depending on contrast
- Hover: deep teal with an explicit readable foreground
- Secondary action: quiet border or text treatment
- Destructive styling: only for destructive behavior
- Loading: disable repeated submission and show a progress indicator

Button labels should describe the action: `Send enquiry`, `Notify me`, or
`Start a Project`.

### Form Controls

- Inputs, selects, and textareas within the same form use the same control
  height where applicable.
- Current standard single-line control height is `h-11`.
- Labels are visible; required fields do not need decorative asterisks when the
  form clearly marks optional fields and provides accessible required semantics.
- Browser `required` attributes support semantics and immediate UX.
- Zod remains the actual shared validation contract.
- Error text appears close to the relevant field and is also represented in a
  form-level accessible status where useful.
- Focus states use the Vextra brand ring and remain visible against white and
  off-white surfaces.

Cloudflare Turnstile is a provider-owned fixed-size surface. Align it within the
form flow rather than attempting to visually stretch its internal widget. A
full-width submit button may follow it.

### Cards and Panels

Use cards only when grouping improves understanding. Vextra sections may remain
open, split, or line-based.

Appropriate card uses:

- waitlist signup
- project enquiry form
- actual product imagery and evidence
- repeated content that benefits from consistent comparison

Avoid wrapping every paragraph, principle, or section in a card.

### Project Imagery

- Use approved real interface captures where possible.
- Do not generate fake product dashboards to imply shipped work.
- Preserve client confidentiality and remove private data.
- Placeholder artwork must be visibly identified during development and must
  not be treated as publishable evidence.
- Homepage imagery should prove the work rather than decorate empty space.

## Motion

Motion is part of Vextra's presentation, but content remains understandable
without it.

Current motion families:

- short entrance transitions around `0.4–0.7s`
- viewport reveals that run once
- restrained hover movement on links and controls
- very slow ambient background movement where it does not distract

Rules:

- animate hierarchy, state, or orientation—not every available element
- avoid large parallax or scroll-jacking
- do not delay access to primary content or form controls
- preserve focus and keyboard behavior
- support `prefers-reduced-motion` in new motion work and retrofit existing
  motion when those components are next materially changed
- keep animated components as focused client leaves

## Accessibility

- Maintain sufficient text and control contrast.
- Do not communicate state by colour alone.
- Preserve visible keyboard focus.
- Interactive icon-only controls require accessible names.
- Respect semantic heading order.
- Decorative images use empty alternative text or appropriate presentation
  semantics; meaningful product captures use accurate descriptions.
- Form feedback uses appropriate `status`, `alert`, and `aria-live` behavior.
- Touch targets should remain comfortable at mobile widths.

## Adding to the System

Add a shared token or primitive only when:

1. the pattern has repeated,
2. the meaning is stable,
3. centralizing it reduces drift, and
4. the abstraction remains easy to read in component JSX.

When changing a foundation, update `app/globals.css`, the owning primitive, and
this document together.
