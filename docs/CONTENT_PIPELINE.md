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
5. Approve and merge to `main` → Production.

Local **Development:** `npm run dev` (serves `site/` on port 8080).

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

## Coding pipeline

- Agents/Cursor may edit UI and non-sensitive copy freely on feature branches.
- Sanctions, figures KPIs, and disclaimer/privacy text need human review before merge.
- Prefer small PRs: one content topic or one UI concern per PR.

## Week-1 schedule (post-launch)

| Day | Deliverable |
|---|---|
| 1–2 | DNS for syriainsight.ca + Formspree ID live |
| 3–4 | First **Sanctions Monitor** longform page (MD or HTML) |
| 5–7 | Banking & payments + energy sector briefs |
| 8–10 | Official Resources hub page |
| 11–14 | Astro scaffold + MDX content collection; Preview still = staging |

## Long-term

- Semi-auto source monitor + changelog
- Charts/downloads for Syria in Figures
- Professional subscription / priority triage
- Optional Levant Policy Lab umbrella credit
- Full site-map depth + French
