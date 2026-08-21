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

## 2026-08-21 — Documentation foundation

- Changed: replaced the starter README and established the agent guide,
  architecture, design, layout, workflow, SEO, site-phase, documentation-index,
  and implementation-log sources of truth.
- Verified: targeted Prettier check, Markdown path/link review, content
  consistency review, and `git diff --check`.
- Follow-up: migrate the existing code into the accepted architecture in small,
  behavior-preserving slices.
