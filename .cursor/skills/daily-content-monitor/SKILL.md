---
name: daily-content-monitor
description: >-
  Check official Canada–Syria and World Bank sources for updates, diff against
  the live site, and produce a content plan. Use when the user asks for a daily
  update, morning briefing, source check, or “any new content to publish?”
---

# Daily content monitor

Run a source pass, compare to production copy, and propose what to publish. Do **not** invent list counts or Board approvals. Do **not** merge to `main` without human confirmation and the Pre-push gate.

## Procedure

1. Read [`docs/MONITORING_CHECKLIST.md`](../../docs/MONITORING_CHECKLIST.md) (Daily / Immediate items are the minimum pass).
2. Skim live pages that usually move:
   - [`site/sanctions.html`](../../site/sanctions.html)
   - [`site/figures.html`](../../site/figures.html) (`#wb-ida`)
   - [`site/sectors/mega-projects.html`](../../site/sectors/mega-projects.html)
   - AML / banking pages if in scope that week
3. **Check sources** (fetch or search as available):
   - [GAC — Canadian Sanctions Related to Syria](https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/syria-syrie.aspx?lang=eng)
   - [Justice Laws — SOR/2011-114](https://laws.justice.gc.ca/eng/regulations/SOR-2011-114/index.html)
   - Canada Gazette / Canada.ca Syria sanctions announcements
   - World Bank Syria country page, latest press releases, Finances One Syria projects
   - Optional: FATF / FINTRAC if AML content is in scope
4. **Diff** against what the site already claims (list counts as announced, IDA table rows, mega-project stages, last-reviewed dates).
5. **Output a content plan** for the user (markdown):

| Priority | Meaning |
|---|---|
| No change / monitor only | Sources unchanged vs site |
| Must-update | Sanctions / figures — same-day path |
| Should-update | Sector briefs, mega-projects, home cards |
| Draft-only | Needs skeptic / counsel gate before public copy |

For each proposed change include: target page(s), draft filenames if new, and whether [`site/references.html`](../../site/references.html) needs new subsection entries.

6. Prefer `worldbank.org` / GoC primaries. Prefer paraphrase + attribution for Investor Guides; never host those PDFs under `site/` / `public/`.
7. **Stop after the plan** unless the user confirms. Then open a feature branch, edit under `site/`, update References in the same PR, changelog, Preview, Pre-push gate — never skip human review for sanctions content.

## Guardrails

- List counts: **as announced** (e.g. Feb 2026); do not invent live totals.
- Lawful ≠ bankable; no “green light” / SWIFT reconnect claims.
- No auto-merge to production for sanctions or figures.
