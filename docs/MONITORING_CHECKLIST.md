# Monitoring checklist (daily + launch + weekly)

Use this before merging sanctions or figures changes to **production** (`main`).

For agent-assisted daily passes, follow [`.cursor/skills/daily-content-monitor/SKILL.md`](../.cursor/skills/daily-content-monitor/SKILL.md): check sources → diff live site → **content plan** → human approve → PR. Do not auto-merge.

## Daily

Minimum pass = **Immediate** items below, plus a quick scan of World Bank Syria press / Finances One if figures or mega-projects may have moved. Output: no-change note, or a short content plan (must / should / draft-only).

**Lead funnel (aggregator → Syrian institutional → GoC/WB primaries):**

1. [news.jard.chat](https://news.jard.chat) — Telegram/ministry lead feed only; **never** sole citation for legal or IDA claims
2. [SANA English](https://sana.sy/en/) / [SIA news](https://invest.gov.sy/Home/News) / [CBS](https://www.cb.gov.sy/) / MoF press / [MoA](https://moaar.gov.sy/) — official Syrian colour; stage-label carefully
3. Promote to site only after verifying against GoC (GAC / SOR / Gazette) or WB / FATF primaries

## Immediate (same day)

- [ ] [GAC — Canadian Sanctions Related to Syria](https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/syria-syrie.aspx?lang=eng)
- [ ] [Justice Laws — Special Economic Measures (Syria) Regulations](https://laws.justice.gc.ca/eng/regulations/SOR-2011-114/index.html)
- [ ] Canada Gazette / official amendment notices for Syria regulations
- [ ] [GAC / Canada.ca Syria sanctions announcements](https://www.canada.ca/en/global-affairs/news/2026/02/minister-anand-announces-amendments-to-sanctions-related-to-syria.html)

**If anything changed:** update `site/sanctions.html` and `site/figures.html`, bump `Last reviewed` dates, open a PR → Preview (staging) → human approve → merge.

## Weekly

- [ ] GAC sanctions hub / information and guidance
- [ ] Humanitarian sector guidance (NGO path)
- [ ] General permit / permit expiry notes (historical context after Feb 2026)
- [ ] World Bank Syria press + [Finances One](https://financesone.worldbank.org/countries/syrian%20arab%20republic) (IDA Board rows / STARRT)
- [ ] [FATF increased monitoring](https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html) / FINTRAC if AML pages in scope
- [ ] SIA / CBS / MoF / MoA leads (licence ≠ CapEx; strategy ≠ grey-list exit; talks ≠ Board grants)

## Monthly

- [ ] World Bank Syria indicators (for future Figures expansion)
- [ ] Syrian Investment Authority / market portals (context only — label clearly; do not turn opportunity counts into Figures KPIs)
- [ ] Law-firm cross-jurisdiction notes (secondary — not primary legal claims)
- [ ] Draft or refresh **Canada–Syria Sanctions Monitor** issue

## Ownership

| Role | Responsibility |
|---|---|
| Editor | Source check + copy |
| Reviewer | Compliance-sensitive claim gate (required for prod) |
| Deploy | Merge to `main` only after Preview QA |

## Rule

**No auto-merge to production for sanctions content.** AI drafts are allowed; human review is mandatory.

## Future — primary URL link-rot monitoring

Not implemented yet. When added, prefer a scheduled Action that HEAD/GETs primary GoC citation URLs (GAC Syria, SOR/2011-114, Canada Gazette notices, FINTRAC advisories linked from the site) and opens a draft PR or issue on non-`200` responses. Until then, spot-check primary links during the Immediate and Weekly passes above.
