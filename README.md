# SyriaInsight.ca

Canada-facing public research site on Syria sanctions easing, residual compliance risk, and economic access.

**Production site source:** [`site/`](site/)  
**Live:** [syriainsight.ca](https://syriainsight.ca) · [canada-syria-access.vercel.app](https://canada-syria-access.vercel.app)

## Environments

| Env | How |
|---|---|
| **Development** | Local static server from `site/` |
| **Staging** | Vercel Preview deployments (PRs / non-`main` branches) |
| **Production** | Vercel Production on `main` → `syriainsight.ca` |

**Before every production push:** complete [`docs/PRE_PUSH_GATE.md`](docs/PRE_PUSH_GATE.md) (proofread + citations + Canadian NPO/privacy). See also [`docs/DEPLOY.md`](docs/DEPLOY.md).

### Local development

```bash
npm run dev
# open http://localhost:8080/
```

### Deploy to Vercel

1. Push this repo to GitHub (already linked to project `canada-syria-access`).
2. **Production branch:** `main`
3. **Preview = Staging:** every PR gets a unique Preview URL.
4. Custom domains: `syriainsight.ca` / `www` (DNS at Porkbun → Vercel).

### Support form

[`site/support.html`](site/support.html) uses mailto fallback to `hello@syriainsight.ca` until a Formspree (or similar) endpoint is configured in the form `action`.

## Launch pages

- Home, Sanctions, Sectors, Tools, Figures, Support, About, Privacy, References, 404

## Content & compliance

- Sitewide “not legal advice” bar
- Privacy notice (PIPEDA fair-information practices)
- KPIs linked to Global Affairs Canada / Justice Laws primary sources
- Pre-push gate: [`docs/PRE_PUSH_GATE.md`](docs/PRE_PUSH_GATE.md)
- Content change log: [`docs/CONTENT_CHANGELOG.md`](docs/CONTENT_CHANGELOG.md) (public: [`site/changelog.html`](site/changelog.html))
- Source licensing (State/embassy text vs Investor Guides): [`docs/SOURCE_LICENSING.md`](docs/SOURCE_LICENSING.md)
- Pipelines: [`docs/CONTENT_PIPELINE.md`](docs/CONTENT_PIPELINE.md), [`docs/MONITORING_CHECKLIST.md`](docs/MONITORING_CHECKLIST.md), [`docs/DEPLOY.md`](docs/DEPLOY.md)

## Prototype archives

Older HTML prototypes remain in the repo for reference (`canada_syria_site_multi/`, root `index.html`, etc.) and are **not** deployed.
