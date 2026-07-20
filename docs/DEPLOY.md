# Deploy runbook — SyriaInsight.ca

## Current deployment

- **Production:** https://syriainsight.ca (also https://www.syriainsight.ca)
- **Vercel alias:** https://canada-syria-access.vercel.app
- **Project:** `smartfusion/canada-syria-access` on Vercel
- **Git:** https://github.com/sameraljundi/canada-syria-access (Preview = Staging on PRs)

## One-time setup

1. GitHub repo connected to Vercel (Git integration).
2. Confirm build settings match [`vercel.json`](../vercel.json):
   - Build Command: `npm run build`
   - Output Directory: `public`
   - Install Command: can be empty / echo
3. Production Branch: `main`
4. Domains: `syriainsight.ca` and `www` attached; DNS A/CNAME at registrar (Porkbun) pointing to Vercel

## Every release (pipeline)

1. Open PR → confirm **Vercel Preview** (staging) looks correct on mobile and desktop.
2. Confirm GitHub Actions **Build** is green (includes compliance smoke greps).
3. Complete **[`PRE_PUSH_GATE.md`](PRE_PUSH_GATE.md)** — proofreader, researcher, NPO/privacy. Paste `Pre-push gate: done` in the PR.
4. If sanctions or figures changed, also complete [`MONITORING_CHECKLIST.md`](MONITORING_CHECKLIST.md).
5. Merge to `main` → Vercel Production.
6. Confirm https://syriainsight.ca (Home KPIs, disclaimer, About non-charity line, Privacy).

**Do not skip step 3.** Preview alone is not a compliance sign-off.

## Rollback

- Revert the merge commit on `main` and push, or redeploy a previous Vercel deployment from the dashboard.
