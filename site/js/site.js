(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("si-theme");
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  let mode = stored || (prefersDark ? "dark" : "light");

  function applyTheme() {
    if (mode === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = mode === "light" ? "Dark" : "Light";
  }

  applyTheme();

  document.getElementById("themeBtn")?.addEventListener("click", () => {
    mode = mode === "light" ? "dark" : "light";
    localStorage.setItem("si-theme", mode);
    applyTheme();
  });

  // Decision assistant
  const form = document.getElementById("decisionForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const segment = form.segment.value;
      const issue = form.issue.value;
      const listed = form.listed.value;
      const cross = form.cross.value;
      const out = document.getElementById("decisionResult");
      if (!out) return;

      let level = "needs-review";
      let title = "Needs expert review";
      let body =
        "Your activity may be lawful under Canada’s eased sectoral rules, but screening, documentation, and bankability still need case-specific review.";

      if (listed === "yes") {
        level = "likely-restricted";
        title = "Likely restricted / high sensitivity";
        body =
          "Dealings involving listed persons or entities under the Special Economic Measures (Syria) Regulations remain prohibited unless an exception or permit applies. Verify current official Canadian sanctions resources (GAC Syria page and SOR/2011-114) before proceeding.";
      } else if (issue === "chemicals" || (cross === "yes" && issue === "banking")) {
        level = "needs-review";
        title = "Needs careful multi-jurisdiction review";
        body =
          "Cross-border payment or controlled-goods issues often trigger US, EU, or UK rules even when Canadian sectoral prohibitions have been eased. Map counterparties and jurisdictions before moving funds.";
      } else if (
        (segment === "ngo" && (issue === "humanitarian" || issue === "banking")) ||
        (issue === "trade" && listed === "no" && cross === "no")
      ) {
        level = "likely-allowed";
        title = "Likely within eased Canadian sectoral rules — still verify";
        body =
          "Broad Canadian sectoral prohibitions were repealed in February 2026, but targeted listings, AML/CTF controls, and bank internal policies still apply. Confirm counterparties against official lists and document the transaction trail.";
      }

      out.className = "result-box visible callout " + (level === "likely-allowed" ? "ok" : level === "likely-restricted" ? "risk" : "");
      out.innerHTML =
        "<strong>" +
        title +
        "</strong><p class=\"small\" style=\"margin:8px 0 0\">" +
        body +
        '</p><p class="small" style="margin:10px 0 0">This is screening guidance only — not legal advice. Check: <a href="https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/syria-syrie.aspx?lang=eng" target="_blank" rel="noopener noreferrer">GAC Syria sanctions</a> · <a href="https://laws.justice.gc.ca/eng/regulations/SOR-2011-114/index.html" target="_blank" rel="noopener noreferrer">Justice Laws regulations</a> · <a href="/references.html">References</a> · <a href="/support.html">Request support</a></p>';
    });
  }

  // Support form mailto fallback when no Formspree endpoint
  const support = document.getElementById("supportForm");
  if (support) {
    support.addEventListener("submit", (e) => {
      const endpoint = support.getAttribute("action") || "";
      if (endpoint.includes("formspree.io") && !endpoint.includes("YOUR_FORM_ID")) return;
      e.preventDefault();
      const data = new FormData(support);
      const lines = [
        "SyriaInsight support request",
        "Segment: " + data.get("segment"),
        "Issue: " + data.get("issue"),
        "Jurisdictions: " + data.get("jurisdictions"),
        "Research consent: " + (data.get("research_consent") ? "Yes" : "No"),
        "",
        data.get("description") || "",
        "",
        "From: " + data.get("email"),
      ];
      const mailto =
        "mailto:hello@syriainsight.ca?subject=" +
        encodeURIComponent("Support request — " + data.get("issue")) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));
      window.location.href = mailto;
      const note = document.getElementById("formNote");
      if (note) {
        note.hidden = false;
        note.textContent =
          "Opening your email client. To enable web submit, set FORMSPREE_ID in the form action.";
      }
    });
  }
})();
