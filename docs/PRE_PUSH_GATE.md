# Pre-push review gate

**Required** before every push or merge to `main` (production → [syriainsight.ca](https://syriainsight.ca)).

CI runs automated smoke checks (see [`.github/workflows/build.yml`](../.github/workflows/build.yml)). This gate is the **human** portion: proofreading, research citations, and Canadian not-for-profit / privacy posture.

Paste into the PR description when complete:

```text
Pre-push gate: done
```

```mermaid
flowchart TD
  edit[Edit site/] --> pr[Open PR]
  pr --> ci[CI build plus compliance greps]
  pr --> preview[Vercel Preview Staging]
  ci --> gate[Pre-push review gate]
  preview --> gate
  gate --> proof[Proofread]
  gate --> research[Research and citations]
  gate --> npo[NPO and privacy]
  proof --> merge[Merge to main]
  research --> merge
  npo --> merge
  merge --> prod[Production syriainsight.ca]
```

---

## 1. Proofreader

- [ ] Spelling and clarity in Canadian English (`lang="en-CA"` where set)
- [ ] Dates consistent (ISO in `<time datetime>` + readable “19 July 2026” style)
- [ ] No developer-only notes in public UI (for example “Replace YOUR_FORM_ID” instructional copy)
- [ ] Sitewide disclaimer bar present: **Not legal advice**
- [ ] “Last reviewed” / snapshot dates bumped on pages whose content changed
- [ ] Mobile check on Preview URL (nav, forms, tables)
- [ ] 404 page still works for unknown paths

## 2. Researcher (citations & Canadian source discipline)

- [ ] Every material legal or KPI claim links to a **primary** Government of Canada source (GAC, Justice Laws, Canada Gazette / Canada.ca announcement)
- [ ] Operational analysis (for example “bankability”, cross-jurisdiction friction) is labelled as analysis, not statute
- [ ] List counts state **as-of announcement date**; do not invent live totals
- [ ] New sources added to [`site/references.html`](../site/references.html)
- [ ] If `sanctions.html` or `figures.html` changed: run [`MONITORING_CHECKLIST.md`](MONITORING_CHECKLIST.md)
- [ ] Decision assistant still rule-based; no generative “you may proceed” as legal clearance
- [ ] **Sector pages** (`site/sectors/*.html`): Canada / GAC block first; Investor Guide material is short paraphrase + attribution only — see [`SOURCE_LICENSING.md`](SOURCE_LICENSING.md). Do **not** host or link to local guide PDFs on the public site; embassy business URL may be linked as a target.
- [ ] Hub [`site/sectors.html`](../site/sectors.html) links remain valid for banking, energy, telecom, real-estate

## 3. NPO / privacy (Canadian public-interest posture)

- [ ] About still states: **not a CRA-registered charity** unless a registration number is published
- [ ] No donation solicitation or tax-receipt promises
- [ ] Support framed as **informational triage**, not a legal clinic or guaranteed service
- [ ] Privacy still covers PIPEDA fair-information practices and OPC links
- [ ] Footer trust language intact (methodology, privacy, references; non-charity line)
- [ ] Contact / privacy inbox (`hello@syriainsight.ca`) still accurate

---

## Gate rule

**Do not merge to `main` until sections 1–3 are checked and CI is green.**

Staging Preview alone is not enough for sanctions, figures, disclaimer, privacy, or About status text.

## After merge

1. Confirm production: https://syriainsight.ca  
2. Spot-check Home KPIs, Sanctions sources, Privacy, About status  
3. If DNS/SSL pending, also confirm https://canada-syria-access.vercel.app  
