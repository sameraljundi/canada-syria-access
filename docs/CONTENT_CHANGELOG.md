# Content change log

Authoritative log of public-content changes on SyriaInsight.ca. Append a new entry (newest first) when `site/` copy, sources, Tools/Support fields, or sector briefs change. Mirror the same entry on [`site/changelog.html`](../site/changelog.html).

Required by the [Pre-push review gate](PRE_PUSH_GATE.md).

---

## 2026-09-27 — Tartous MHC milestone + daily-monitor review bump

- **Pages:** `site/sectors/mega-projects.html`; `site/references.html` (`#mega-projects`); last-reviewed on sanctions, figures, AML, banking; changelog
- **Summary:** DP World Tartus CapEx update — company reports three mobile harbour cranes delivered 17 Aug 2026 (after first MHC 1 Jul 2026); ~40% capacity claim labelled company figure. Daily monitor verify: no new GoC SOR package; no new Board-approved IDA row (railway / secondary $50M transport claims remain pipeline / unconfirmed).
- **Sources:** [DP World, 17 Aug 2026](https://www.dpworld.com/en/news/dp-world-advances-syrias-economic-recovery-through-port-of-tartous-modernisation).

## 2026-09-04 — Cross-jurisdiction refresh (US SST + Canada Dec 2025 + AML/WB)

- **Pages:** `site/sanctions.html` (timeline); `site/faq.html` (Q18–Q19); `site/sectors/aml-cft-kyc.html`; `site/sectors/banking.html`; `site/figures.html` (review date only); `site/references.html` (`#foreign-us-sst` + GoC Dec 2025); changelog
- **Summary:** Documented U.S. State Sponsor of Terrorism rescission (effective 24 Aug 2026) as foreign overlay; strengthened Canada Dec 2025 State Immunity / HTS delisting with Canada.ca primary; cross-linked WB FS IDA AML/FIU capacity without claiming FATF grey-list exit. Lawful ≠ bankable framing unchanged; Schedule 1 as-announced Feb 2026 counts unchanged.
- **Sources:** [Federal Register SST rescission](https://www.federalregister.gov/documents/2026/08/31/2026-17653/rescission-of-the-state-sponsor-of-terrorism-determination-regarding-syria); [State Jul 2026 process notice](https://www.state.gov/releases/office-of-the-spokesperson/2026/07/initiating-rescission-process-of-syrias-designation-as-a-state-sponsor-of-terrorism); [Canada.ca 5 Dec 2025](https://www.canada.ca/en/global-affairs/news/2025/12/canada-announces-measures-related-to-syria.html); [SOR/2025-251](https://gazette.gc.ca/rp-pr/p2/2025/2025-12-17/html/sor-dors251-eng.html); [WB FS 7 Aug 2026](https://www.worldbank.org/en/news/press-release/2026/08/07/syria-world-bank-approves-us-100-million-grant-for-financial-sector-modernization); FATF increased monitoring 19 Jun 2026 (existing).

## 2026-08-08 — Homepage economic-access refresh

- **Pages:** `site/index.html`; `site/css/styles.css` (hero title width); changelog; CI
- **Summary:** Reframed Home as economic-access research hub (not sanctions dashboard): new hero, removed Schedule 1 KPIs from first viewport, added Research you can use (contribution, mega-projects, sectors, WB IDA, AML, investment), reordered Start here, legal baseline below fold.
- **Sources:** Existing GoC announcement links retained in legal baseline; no new legal claims.

## 2026-08-08 — WB Financial Sector Modernization $100M (Figures)

- **Pages:** `site/figures.html` (`#wb-ida` fifth row); `site/sectors/banking.html`; `site/references.html`; draft `drafts/syria-wb-ida-engagement-2026-08.md`; CI
- **Summary:** Promoted Syria Financial Sector Modernization Project (US$100M IDA; Board 6 Aug / PR 7 Aug 2026) from pipeline to confirmed. Syrian-side financing framing; not SWIFT reconnect; not Canadian bank clearance. Railway remains pipeline. Listed-grant arithmetic sum US$491M.
- **Sources:** [WB 7 Aug 2026](https://www.worldbank.org/en/news/press-release/2026/08/07/syria-world-bank-approves-us-100-million-grant-for-financial-sector-modernization).

## 2026-08-08 — World Bank IDA grants on Figures

- **Pages:** `site/figures.html` (`#wb-ida`); `site/sectors/wash.html`; `site/sectors/contribution.html` (power/WASH notes); `site/sectors/banking.html` (Figures cross-link); `site/references.html` (`#wb-ida`); draft `drafts/syria-wb-ida-engagement-2026-08.md`; CI
- **Summary:** Criteria-gated table of Board-approved IDA grants (electricity $146M; PFM $20M; water $150M; health $75M). Arrears/eligibility + $216bn cost-frame hygiene. Financial Sector ~$100M initially held as pipeline (promoted same day once WB PR published).
- **Sources:** World Bank press releases (Jun 2025; Mar 2026; Apr 2026); WB Syria country page; Finances One.

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
