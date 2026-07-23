# Content change log

Authoritative log of public-content changes on SyriaInsight.ca. Append a new entry (newest first) when `site/` copy, sources, Tools/Support fields, or sector briefs change. Mirror the same entry on [`site/changelog.html`](../site/changelog.html).

Required by the [Pre-push review gate](PRE_PUSH_GATE.md).

---

## 2026-07-23 — Mega-projects & bids research brief

- **Pages:** `site/sectors/mega-projects.html` (new); Sectors hub featured card; banking / energy / telecom / real-estate / contribution / investment / FAQ cross-links; Tools/Support `mega-projects` option + `site.js`; References `#mega-projects`; CI
- **Summary:** Ingested skeptic-tested mega-projects ranking (ops / CapEx / concession / tender / MoU stages). Investor Guides used only for short Canadian-facing sector-context paraphrase — not as deal evidence. Dropped Aug 2025 $14bn MoU ceremony, Starlink, TAV≠energy, WB $216bn-as-deal.
- **Sources:** DP World; AD Ports / CMA; SANA; Tadawul (stc SilkLink); Reuters power; AP pipeline; White & Case airport; WINEP / Forbes / ARI secondary; WB $216bn cost frame; *Doing Business in Syria* paraphrase attribution only.

## 2026-07-23 — Compliance audit fixes

- **Pages:** sitewide footers; `tools.html`; `index.html`; `sanctions.html`; `faq.html`; `privacy.html`; `404.html`; `docs/PRE_PUSH_GATE.md`; `docs/CONTENT_PIPELINE.md`; `docs/MONITORING_CHECKLIST.md`; CI
- **Summary:** Removed developer “next sprint” note; definitive NPO footer (independent research / not currently CRA charity); Changelog on all footers; renamed Decision→Screening assistant; OFAC/foreign-regime callouts on Sanctions and FAQ; Privacy Formspree/Vercel + cross-border disclosure; gate checklist hardened.
- **Sources:** GAC Essential information (cross-jurisdiction principle); existing GoC baseline unchanged.

## 2026-07-22 — AML / CFT / KYC decision brief

- **Pages:** `site/sectors/aml-cft-kyc.html` (new); hub featured + grid; banking / compliance / FAQ Q16–Q23 / investment / contribution cross-links; Tools/Support `aml-cft-kyc` option + `site.js`; References (FINTRAC, PCMLTFA, FATF, GAC FAQ); CI
- **Summary:** Ingested gated AML/CFT/KYC research as a Canadian-first obligations & friction brief (three-track SEMA ≠ AML ≠ CFT; GAC FAQ bankability; CFT residual; FATF grey list + FINTRAC advisory; KYC/BO ≥25%; practical checklist). Distinct from RegTech `compliance.html`.
- **Sources:** GAC FAQ / Essential information / terrorists; SOR/2026-23; PCMLTFA / PCMLTFR; Criminal Code s. 83.03; FINTRAC guidance + 15 Jul 2026 advisory; FATF increased monitoring 19 Jun 2026; EU/UK foreign overlay; Cassels secondary.

## 2026-07-22 — Sectors PR2: compliance, agri-food, WASH briefs

- **Pages:** `site/sectors/compliance.html`, `agri-food.html`, `wash.html` (new); hub + contribution links; banking cross-link; Tools/Support sector options + `site.js`; References (StatCan 16-511); CI
- **Summary:** Closed contribution-ranking gaps #3/#5/#7 with dedicated Canadian-first briefs; SWIFT-reconnect kill on compliance; FAO + chemicals diligence on agri-food; WB WASH demand class on wash; logistics remains unranked.
- **Sources:** GAC / SOR; FAO GIEWS; World Bank reconstruction release; StatCan ECT Daily + cleantech taxonomy; Cassels secondary on compliance only.

## 2026-07-22 — Contribution ranking (research-report ingest)

- **Pages:** `site/sectors/contribution.html` (new); `site/sectors.html` (hub); `site/sectors/energy.html`, `telecom.html`, `real-estate.html` (dossier enrichment); `site/references.html`; `.github/workflows/build.yml`
- **Summary:** Published ranked “where Canadians may contribute” research (method A1–A5 + skeptic, top 7, dropped-claim callout) from the gated research report; deepened energy (WB/StatCan power-first), telecom (SOR telecom-monitoring repeal + delist caveat), and real-estate/construction (WB residential/non-res); agri/WASH/compliance briefs deferred.
- **Sources:** World Bank ($216B; SEEP $146M); StatCan ECT; FAO GIEWS; GAC / SOR/2026-23; Cassels and Reuters labelled secondary.

## 2026-07-22 — Canadian investment lens under Sectors

- **Pages:** `site/sectors/investment.html` (new); `site/sectors.html` (hub featured link); `site/faq.html` (Q13 link); `.github/workflows/build.yml`
- **Summary:** Ingested the gated Canadian investment-2026 draft as a Sectors subpage (not a fifth market brief): SEMA in-force vs announce dates, Schedule 1 / delistings, lawful ≠ processable, sector cross-links, Syrian local-law market-entry caveats (no tax % / no DTA claim), investor checklist + short FAQ. Secondary Investor Guides paraphrase + attribution only.
- **Sources:** GAC Syria; SOR/2011-114; Canada Gazette SOR/2026-23; Feb 2026 GAC news release and backgrounder; GAC sanctions guidance; secondary *Doing Business in Syria* (attribution via References).

## 2026-07-22 — Canadians doing business with Syria FAQ

- **Pages:** `site/faq.html` (new); nav/footer on public pages; `site/index.html` (Start here); `site/css/styles.css` (FAQ accordion); `.github/workflows/build.yml`
- **Summary:** Published 25-question FAQ from the gated draft: SEMA in-force vs announce dates, Schedule 1 / delistings, trade/services, investment caveats, lawful ≠ bankable, cross-border analysis labels, NGO vs commercial, compliance checklist. Primary GoC cites; no clearance language; list counts as announced Feb 2026.
- **Sources:** GAC Syria sanctions page; SOR/2011-114; Canada Gazette SOR/2026-23 (also added to `site/references.html`); Feb 2026 GAC news release and backgrounder; GAC sanctions guidance.

## 2026-07-19 — Tools/Support economic sector field + public changelog

- **Pages:** `site/tools.html`, `site/support.html`, `site/js/site.js`, `site/changelog.html`, `site/about.html`, `site/references.html`
- **Summary:** Harmonized audience Segment values across Tools and Support; added required Economic sector field aligned to Investor Guide sectors (banking, energy, telecom, real estate, humanitarian, cross-cutting); Tools result links to related sector briefs; Support mailto includes sector; published content change log page.
- **Sources:** GAC / SOR (unchanged legal baseline); secondary Investor Guides remain paraphrase-only ([SOURCE_LICENSING.md](SOURCE_LICENSING.md)).

## 2026-07-19 — Business sector briefs (guides reuse)

- **Pages:** `site/sectors.html`, `site/sectors/banking.html`, `site/sectors/energy.html`, `site/sectors/telecom.html`, `site/sectors/real-estate.html`, `site/references.html` (Secondary — US), `docs/SOURCE_LICENSING.md`
- **Summary:** Canadian-first sector briefs for banking, energy (oil/gas/electricity), telecom, and real estate; paraphrase + attribution for State-funded Investor Guides; no PDF republish on the public site.
- **Sources:** GAC Syria sanctions, SOR/2011-114, Feb 2026 GAC announcements; secondary *Doing Business in Syria* Investor Guides (Apr 2026; Creative Associates / Karam Shaar).
