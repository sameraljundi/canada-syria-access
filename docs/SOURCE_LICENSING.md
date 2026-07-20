# Source licensing & reuse

How SyriaInsight.ca treats U.S. government and U.S.-funded research materials used for **Business Sectors** briefs. Canadian legal claims always cite Government of Canada primaries (see [`site/references.html`](../site/references.html)).

---

## U.S. Embassy / State Department website text

**Link target:** [sy.usembassy.gov/business/](https://sy.usembassy.gov/business/)

- Prefer this as a **citation / outbound link**, not a scrape source, while the page returns errors or 403.
- U.S. State Department practice ([travel.state.gov Copyright & Disclaimer](https://travel.state.gov/content/travel/en/copyright-disclaimer.html); [USAGov — government copyright](https://www.usa.gov/government-copyright)):
  - **Unless a copyright notice says otherwise**, textual information on State Department sites is generally treated as **U.S. government work / public domain** for copying and redistribution; **citation is requested**.
  - **Exceptions:** photos/graphics with copyright notices; State notes an **international copyright on Country Commercial Guides**.
  - Re-check the live page footer for any page-specific copyright.

**Practical label:** `USG public-domain text (when no copyright indicated) — attribute U.S. Department of State / U.S. Embassy Damascus; do not reuse third-party photos without permission.`

---

## State-funded *Doing Business in Syria* Investor Guides

Local research corpus: [`data/investor Guide English/`](../data/investor%20Guide%20English/) (PDFs + [`business_guides_master.json`](../data/investor%20Guide%20English/business_guides_master.json)).

PDF disclaimers state (paraphrased):

- Drafted **April 2026**
- **Funded by the U.S. Department of State**
- Implemented by **Creative Associates International** with **Karam Shaar Advisory Limited**
- Informational only; no legal/policy advice; no USG warranty

These are **contractor-produced, USG-funded** materials. There is **no CC-BY / MIT / open license** in the guides. They are **not** automatically free to republish as SyriaInsight content.

| Use | Allowed under our policy |
|---|---|
| Link to embassy / official hosting when available | Yes |
| Short **paraphrased** Canadian-framed summaries with clear attribution | Yes (default) |
| Cite facts + overlay **Canadian sanctions** (primary) | Yes — required |
| Copy long passages or republish full PDFs on syriainsight.ca | **No**, until written redistribution permission |
| Present guides as Canadian legal clearance | **Never** |

**Chosen approach:** paraphrase + cite + link; keep PDFs offline/private in `data/` for research; **do not host PDFs** on the public site (`site/` / Vercel) until rights are confirmed in writing.

---

## Attribution language (site copy)

Use wording substantially like:

> Secondary source: U.S. Department of State–funded *Doing Business in Syria* Investor Guide (April 2026; Creative Associates International / Karam Shaar Advisory Limited). Informational only — not Canadian legal advice. Link: [U.S. Embassy Damascus — Business](https://sy.usembassy.gov/business/) when available.

See also Pre-push gate researcher checks in [`PRE_PUSH_GATE.md`](PRE_PUSH_GATE.md).
