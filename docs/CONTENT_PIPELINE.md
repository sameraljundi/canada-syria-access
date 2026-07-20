# Content & coding pipelines

## Branch model (Dev → Staging → Prod)

```
feature/*  →  PR  →  Vercel Preview (Staging)
develop    →  optional long-lived staging branch
main       →  Vercel Production (syriainsight.ca)
```

1. Create a branch from `main`.
2. Edit files under `site/` (or later `content/` MDX).
3. Open a PR — Vercel posts a **Preview URL** (staging).
4. Run [`MONITORING_CHECKLIST.md`](MONITORING_CHECKLIST.md) if legal/figures changed.
5. Complete the **[Pre-push review gate](PRE_PUSH_GATE.md)** (proofreader + researcher + NPO/privacy). Paste `Pre-push gate: done` in the PR.
6. Approve and merge to `main` → Production (only after CI green + gate done).

Local **Development:** `npm run dev` (serves `site/` on port 8080).

## Pre-push gate (mandatory)

Before every production push, complete [`PRE_PUSH_GATE.md`](PRE_PUSH_GATE.md). That document is the pipeline step for:

- Proofreading (en-CA, no developer notes, disclaimer, dates)
- Research citations (primary GoC sources, references page, monitoring checklist when needed)
- Canadian NPO / privacy posture (no false charity claims, PIPEDA practices, triage framing)

CI automates smoke greps; humans complete the qualitative checklist.

## Content pipeline (semi-autonomous)

```
Official sources → AI draft summary → Human review → Commit → Preview → Production
```

### Now (manual)

1. Weekly pass on the top sources in the monitoring checklist / [`monitoring.csv`](../monitoring.csv).
2. Paste notes into PR description with source URLs.
3. Update HTML pages; never invent list counts.

### Next (Week 1–2)

1. Migrate evergreen pages to **Astro + MDX** so monitor issues are files under `content/monitors/`.
2. Add a GitHub Action (cron) that fetches GAC Syria page text, diffs against last snapshot, and opens a draft PR with an AI-generated change note.
3. **Required:** reviewer must approve; Action must not push to `main`.

### Guardrails

- Every material claim links to GAC / Justice Laws / Canada Gazette when it is a legal fact.
- Decision assistant stays rule-based; no generative “you may proceed” answers in production without counsel.
- Intake PII stays out of git; Formspree/email only.
- Sector briefs: Canadian sources first; paraphrase State-funded Investor Guides only — see [`SOURCE_LICENSING.md`](SOURCE_LICENSING.md). Never publish guide PDFs under `site/` / `public/`.

## Coding pipeline

- Agents/Cursor may edit UI and non-sensitive copy freely on feature branches.
- Sanctions, figures KPIs, and disclaimer/privacy text need human review before merge.
- Prefer small PRs: one content topic or one UI concern per PR.

## Week-1 schedule (post-launch)

| Day | Deliverable |
|---|---|
| 1–2 | DNS for syriainsight.ca + Formspree ID live |
| 3–4 | First **Sanctions Monitor** longform page (MD or HTML) |
| 5–7 | Sector briefs live under `site/sectors/` (banking, energy, telecom, real-estate); extend as needed |
| 8–10 | Official Resources hub page |
| 11–14 | Astro scaffold + MDX content collection; Preview still = staging |

## Long-term

- Semi-auto source monitor + changelog
- Charts/downloads for Syria in Figures
- Professional subscription / priority triage
- Optional Levant Policy Lab umbrella credit
- Full site-map depth + French
