# SyriaInsight.ca

Canada-facing public research site on Syria sanctions easing, residual compliance risk, and economic access.

**Production site source:** [`site/`](site/)  
**Live (Vercel):** [canada-syria-access.vercel.app](https://canada-syria-access.vercel.app)  
**Custom domain:** [SyriaInsight.ca](https://syriainsight.ca) (attach in Vercel when DNS is ready)

## Environments

| Env | How |
|---|---|
| **Development** | Local static server from `site/` |
| **Staging** | Vercel Preview deployments (PRs / non-`main` branches) |
| **Production** | Vercel Production on `main` → `syriainsight.ca` |

### Local development

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080/
```

### Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new). Root directory: repository root (uses [`vercel.json`](vercel.json) to publish `site/`).
3. **Production branch:** `main`
4. **Preview = Staging:** every PR and `develop` push gets a unique Preview URL.
5. Add custom domains:
   - Production: `syriainsight.ca` and `www.syriainsight.ca`
   - Optional staging: `staging.syriainsight.ca` → attach to a Preview branch or use Preview URLs until DNS is ready

DNS (once the domain is registered): follow Vercel’s A/CNAME instructions for the project.

### Support form

[`site/support.html`](site/support.html) posts to Formspree. Replace `YOUR_FORM_ID` with your form ID, or leave it — the page falls back to `mailto:hello@syriainsight.ca`.

## Launch pages

- Home, Sanctions (overview + timeline + eased vs restricted), Sectors (overview), Tools (rule-tree), Figures, Support, About, Privacy, 404

## Content & compliance

- Sitewide “not legal advice” bar
- Privacy notice (PIPEDA-oriented)
- KPIs linked to Global Affairs Canada / Justice Laws primary sources
- See [`docs/CONTENT_PIPELINE.md`](docs/CONTENT_PIPELINE.md) and [`docs/MONITORING_CHECKLIST.md`](docs/MONITORING_CHECKLIST.md)

## Prototype archives

Older HTML prototypes remain in the repo for reference (`canada_syria_site_multi/`, root `index.html`, etc.) and are **not** deployed.
