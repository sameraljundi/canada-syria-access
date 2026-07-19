# Deploy runbook — SyriaInsight.ca

## Current deployment

- **Production alias:** https://canada-syria-access.vercel.app  
- **Project:** `smartfusion/canada-syria-access` on Vercel  
- Connect the GitHub remote and enable Preview deployments so PRs become **Staging**.

## One-time setup

1. Create GitHub repo (if not already) and push `main`.
2. Vercel → Project → Settings → Git → connect repository (or re-import).
3. Confirm build settings match [`vercel.json`](../vercel.json):
   - Build Command: `npm run build`
   - Output Directory: `public`
   - Install Command: can be empty / echo
4. Production Branch: `main`
5. Domains:
   - Add `syriainsight.ca` and `www`
   - Optional: `staging.syriainsight.ca` assigned to the `develop` branch (Vercel → Domains → Git Branch)

## Every release

1. PR → check Preview URL (staging)
2. Mobile + disclaimer + KPI source links + support form
3. Merge to `main`
4. Confirm Production URL

## If domain is not ready yet

Ship on the `*.vercel.app` Production URL immediately; attach custom domain when DNS is available. Update public materials once the `.ca` domain resolves.
