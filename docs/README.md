# Vextra Documentation

This folder contains the small set of documents needed to understand and safely
extend the Vextra website. The documents describe durable decisions; the code
remains the source of truth for current behavior.

## Reading Order

| Document                                         | Use it for                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [`roadmap.md`](roadmap.md)                       | Current objective, completed foundations, remaining work, order, and completion gates      |
| [`architecture.md`](architecture.md)             | Current structure, completed migration map, folder ownership, and server/client boundaries |
| [`design-system.md`](design-system.md)           | Brand tokens, typography, radius, controls, motion, and accessibility rules                |
| [`layout-system.md`](layout-system.md)           | Gutters, widths, section rhythm, responsive behavior, and page postures                    |
| [`workflow.md`](workflow.md)                     | How to inspect, change, verify, document, and hand off work                                |
| [`seo.md`](seo.md)                               | Metadata, canonical URLs, crawl files, structured data, and social sharing                 |
| [`site-phases.md`](site-phases.md)               | Current teaser boundary, launch gates, and deferred full-site scope                        |
| [`implementation-log.md`](implementation-log.md) | Concise chronological record of meaningful completed work                                  |

## Documentation Rules

- Keep one canonical document per system concern.
- Update a document when its decision changes, not for every small code edit.
- Do not create route specs until a route has enough approved behavior to need
  a durable contract.
- Do not copy the same status across multiple files.
- Historical implementation-log entries are append-only.
- When documentation and the current implementation disagree, verify the code,
  state the mismatch, and update the documentation in the same approved work.

## New Session Checklist

1. Read the root `AGENTS.md`.
2. Read `architecture.md`.
3. Read `roadmap.md` and locate the first unchecked goal marked **Next**.
4. Read the document relevant to the requested area.
5. Read the latest implementation-log entries.
6. Inspect the current worktree and nearby code before planning changes.

The root `README.md` owns setup and command reference. Avoid duplicating it
here.
