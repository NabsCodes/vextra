# Workflow

This is the practical workflow for developers and agents working on Vextra.

## Before Work

1. Read `AGENTS.md` and `docs/README.md`.
2. Read the relevant canonical system document.
3. Read the latest entries in `implementation-log.md`.
4. Run `git status --short` and inspect the current diff.
5. Inspect the files immediately surrounding the requested change.
6. Confirm whether the request is review-only, implementation, deployment, or
   external-provider work.

Existing uncommitted changes belong to the current working context. Preserve
them unless the user explicitly asks to replace them.

## Planning a Slice

A good slice has one main purpose:

- path-only refactor
- UI change
- behavior change
- API/server change
- database change
- SEO change
- documentation reconciliation

Avoid mixing unrelated purposes. If moving a component requires a tiny import
or naming cleanup, keep it narrow and explain it.

For substantial UI changes, establish the intended layout or wireframe before
implementation. Do not invent unapproved client copy, project claims, images,
metrics, or testimonials.

## Editing

- Prefer the smallest file set that completes the slice.
- Reuse existing primitives and content sources.
- Keep routes thin and Server Components by default.
- Keep provider credentials and database access in server-only modules.
- Do not create an abstraction until the repeated pattern is stable and the
  abstraction makes ownership clearer.
- Update canonical documentation in the same slice when a durable decision or
  contract changes.

## Formatting

When the worktree contains unrelated changes, format only changed files:

```bash
pnpm exec prettier --write path/to/file.tsx docs/example.md
```

At a clean completion checkpoint, verify the repository without rewriting it:

```bash
pnpm format:check
```

Use `pnpm format` only when a repository-wide write is intended and safe.

## Verification Matrix

| Change                                                                             | Minimum verification                                                                                     |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Documentation only                                                                 | Targeted Prettier check, link/path review, content consistency review                                    |
| Content-only TypeScript                                                            | Targeted formatting, `pnpm lint`, `pnpm typecheck`                                                       |
| Component logic or hooks                                                           | Targeted formatting, `pnpm lint`, `pnpm typecheck`                                                       |
| Visual UI                                                                          | Component checks plus browser QA at relevant desktop and 390px mobile widths                             |
| Route, layout, metadata, config, dependency, server, environment, or database code | `pnpm lint`, `pnpm typecheck`, and `pnpm build`                                                          |
| API behavior                                                                       | Code checks plus local success and representative failure-contract checks                                |
| Database migration                                                                 | Generate/review SQL, local migration verification, and explicit authorization before shared environments |

Do not run browser QA for documentation-only or path-only work unless a rendered
surface may have changed. Do not skip browser QA for completed visual or
interactive changes merely because typecheck passes.

Local verification and production verification are different claims. A local
build does not prove provider configuration, deployment health, DNS, or email
delivery.

## Public Form Testing

- Use Cloudflare test keys locally.
- Do not send test enquiries or launch-list messages through production without
  authorization.
- Test invalid input and unavailable-verification behavior locally.
- Preserve generic public errors and inspect detailed failures in server logs.
- Never paste secrets or personal submissions into docs, issues, or commits.

## Documentation Updates

Update only the document that owns the changed decision:

- architecture/file ownership -> `architecture.md`
- visual tokens/components/motion -> `design-system.md`
- widths/spacing/responsive posture -> `layout-system.md`
- metadata/crawl/indexing -> `seo.md`
- teaser versus full-site boundary -> `site-phases.md`
- meaningful completed slice -> `implementation-log.md`

Do not duplicate the same status in several documents.

## Implementation Log

Append an entry after a meaningful completed slice. Include:

- date
- area
- what changed
- verification actually completed
- any remaining follow-up

Do not log exploratory reads, abandoned ideas, or trivial formatting.

## Handoff

A final handoff should state:

- outcome first
- important files changed
- verification completed
- local versus live/provider status
- unresolved decisions or launch gates

If the work is incomplete, say exactly what is done, what remains, and what is
blocking it. Do not mark a slice complete because the current turn is ending.
