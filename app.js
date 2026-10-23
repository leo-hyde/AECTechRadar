// AEC Tech Radar: draws the pages from window.RADAR (built by tools/build.py).
// Plain JavaScript, no build step. Pages are chosen by the address's #part:
//   #/  map   #/companies   #/sources   #/about   #/company/<id>   #/category/<id>

(function () {
  "use strict";
  var R = window.RADAR;
  var view = document.getElementById("view");
  var REPO = R ? R.repo : "https://github.com/leo-hyde/AECTechRadar";

  var RING_MEANING = {
    adopt: "Proven at scale: a sensible default for a large firm today.",
    trial: "Proven on real projects: worth a pilot on a live job.",
    assess: "Promising: worth investigating, not yet piloting widely.",
    hold: "Don't start new commitments: problems or doubts outweigh the promise.",
    none: "No ring: not a current option (for example, the company has closed)."
  };
  var AI_ROLE = {
    core: "AI is the product",
    embedded: "AI added to an established product",
    enabler: "Makes AI-driven work possible (data, hardware, process)"
  };
  var LAYER = {
    foundation: ["Foundation", "the data everything else depends on"],
    design: ["Design", "deciding what to build"],
    plan: ["Plan", "winning and programming the work"],
    build: ["Build", "doing the work on site and in factories"],
    operate: ["Operate", "after handover"]
  };
  var filters = { q: "", ring: "", cat: "", role: "" };

  // ---------- small helpers ----------

  // Every piece of text from the data goes through esc() before it reaches the page.
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Only https links are shown as links (build.py checks this too).
  function safeUrl(u) { return /^https:\/\/\S+$/.test(String(u || "")) ? u : null; }
  function markdown(text) {
    if (!window.marked || !window.DOMPurify) return "<p>" + esc(text) + "</p>";
    return DOMPurify.sanitize(marked.parse(String(text || "")));
  }
  function ringOf(c) { return c.ring || "none"; }
  function ringBadge(c) {
    var r = ringOf(c);
    return '<span class="ring ' + r + '">' + (r === "none" ? "No ring" : esc(r)) + "</span>";
  }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function catName(id) { var c = byId(R.categories, id); return c ? c.name : id; }
  function companiesIn(catId) { return R.companies.filter(function (c) { return c.categories.indexOf(catId) >= 0; }); }
  function fmtDate(d) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(d || ""));
    if (!m) return esc(d || "");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return +m[3] + " " + months[+m[2] - 1] + " " + m[1];
  }
  function verifiedTag(c) {
    return c.verification === "checked"
      ? '<span class="tag">✓ Checked by a person</span>'
      : '<span class="tag">AI draft, not yet checked</span>';
  }
  function fileLinks(file) {
    return '<div class="actions">' +
      '<a class="btn small" href="' + esc(REPO + "/blob/main/" + file) + '">See the source file</a>' +
      '<a class="btn small" href="' + esc(REPO + "/edit/main/" + file) + '">Correct it on GitHub</a>' +
      "</div>";
  }

  // ---------- pages ----------

  function mapPage() {
    var counts = { adopt: 0, trial: 0, assess: 0, hold: 0 };
    R.companies.forEach(function (c) { if (c.ring) counts[c.ring]++; });
    var h = '<div class="card"><h2>Technology for an AI-centred construction firm</h2>' +
      '<p class="hint" style="margin-top:6px">' + R.companies.length + " firms in " + R.categories.length +
      " categories, from the data foundation to running finished assets. Tap a firm for its sources.</p>" +
      '<div class="ring-counts">' + ["adopt", "trial", "assess", "hold"].map(function (r) {
        return '<div class="ring-count ' + r + '" title="' + esc(RING_MEANING[r]) + '"><b>' + counts[r] + "</b><span>" + r + "</span></div>";
      }).join("") + "</div>" +
      '<div class="key">' + ["adopt", "trial", "assess", "hold"].map(function (r) {
        return '<span><i class="dot ' + r + '" aria-hidden="true"></i>' + r + "</span>";
      }).join("") + '<span><a href="#/about">What the rings mean</a></span></div></div>';

    R.layers.forEach(function (layer) {
      var cats = R.categories.filter(function (c) { return c.layer === layer; });
      if (!cats.length) return;
      h += '<section class="layer"><div class="layer-head"><h2>' + esc(LAYER[layer][0]) + '</h2><span class="hint">' +
        esc(LAYER[layer][1]) + '</span></div><div class="cat-grid">';
      cats.forEach(function (cat) {
        var cos = companiesIn(cat.id);
        h += '<article class="card cat-card"><h3><a href="#/category/' + esc(cat.id) + '">' + esc(cat.name) + "</a></h3>" +
          '<p class="hint">' + esc(cat.question) + '</p><div class="chips">' +
          (cos.length ? cos.map(chip).join("") : '<span class="hint">No firms yet</span>') + "</div></article>";
      });
      h += "</div></section>";
    });
    return h;
  }

  function chip(c) {
    return '<a class="chip' + (c.status === "closed" ? " closed" : "") + '" href="#/company/' + esc(c.id) + '">' +
      '<span class="dot ' + ringOf(c) + '" aria-hidden="true"></span>' + esc(c.name) +
      '<span class="sr"> (' + esc(ringOf(c)) + ")</span></a>";
  }

  function companiesPage() {
    var opts = function (values, labels, chosen, all) {
      return '<option value="">' + all + "</option>" + values.map(function (v, i) {
        return '<option value="' + esc(v) + '"' + (v === chosen ? " selected" : "") + ">" + esc(labels[i]) + "</option>";
      }).join("");
    };
    return '<div class="filters">' +
      '<input class="search" type="search" id="f-q" placeholder="Search names and descriptions" value="' + esc(filters.q) + '" aria-label="Search">' +
      '<select id="f-ring" aria-label="Ring">' + opts(R.rings, R.rings, filters.ring, "All rings") + "</select>" +
      '<select id="f-cat" aria-label="Category">' + opts(R.categories.map(function (c) { return c.id; }),
        R.categories.map(function (c) { return c.name; }), filters.cat, "All categories") + "</select>" +
      '<select id="f-role" aria-label="Role of AI">' + opts(R.ai_roles, R.ai_roles.map(function (r) { return AI_ROLE[r]; }), filters.role, "Any role of AI") + "</select>" +
      '</div><div id="co-list"></div>';
  }

  function drawCompanyList() {
    var q = filters.q.toLowerCase();
    var list = R.companies.filter(function (c) {
      return (!filters.ring || c.ring === filters.ring) &&
        (!filters.cat || c.categories.indexOf(filters.cat) >= 0) &&
        (!filters.role || c.ai_role === filters.role) &&
        (!q || (c.name + " " + c.summary + " " + c.body).toLowerCase().indexOf(q) >= 0);
    });
    document.getElementById("co-list").innerHTML =
      '<p class="hint" style="margin-bottom:8px">' + list.length + " of " + R.companies.length + " firms</p>" +
      (list.length ? list.map(function (c) {
        return '<a class="card co-card" href="#/company/' + esc(c.id) + '"><div class="co-head"><h3>' + esc(c.name) +
          "</h3>" + ringBadge(c) + "</div><p>" + esc(c.summary) + '</p><div class="co-meta">' +
          c.categories.map(function (id) { return '<span class="tag">' + esc(catName(id)) + "</span>"; }).join("") +
          (c.status !== "active" ? '<span class="tag">' + esc(c.status.replace("-", " ")) + "</span>" : "") +
          "</div></a>";
      }).join("") : '<div class="card empty hint">No firms match. Clear a filter to see more.</div>');
  }

  function companyPage(c) {
    if (!c) return notFound();
    var facts = [
      ["Website", safeUrl(c.website) ? '<a href="' + esc(c.website) + '">' + esc(c.website.replace(/^https:\/\/(www\.)?/, "")) + "</a>" : "None"],
      ["Based in", esc(c.hq)],
      ["Founded", c.founded ? esc(c.founded) : "Not confirmed"],
      ["Type", esc(c.type)],
      ["Status", esc(c.status.replace("-", " "))],
      ["Role of AI", esc(AI_ROLE[c.ai_role] || c.ai_role)],
      ["Categories", c.categories.map(function (id) { return '<a href="#/category/' + esc(id) + '">' + esc(catName(id)) + "</a>"; }).join(", ")],
      ["Last checked", fmtDate(c.last_checked)]
    ];
    return '<a class="back" href="#/companies">← All companies</a>' +
      '<div class="card"><div class="detail-head"><h2>' + esc(c.name) + "</h2>" + ringBadge(c) + verifiedTag(c) + "</div>" +
      '<p style="margin-top:8px">' + esc(c.summary) + '</p></div>' +
      '<div class="card view-box"><h3>Radar view: ' + esc(ringOf(c) === "none" ? "no ring" : c.ring) + "</h3>" +
      '<p style="margin-top:6px">' + esc(c.ring_note) + "</p>" +
      '<p class="hint">' + esc(RING_MEANING[ringOf(c)]) + " This is a judgement, drafted by AI" +
      (c.verification === "checked" ? " and reviewed" : " and not yet reviewed") + ".</p></div>" +
      '<div class="card"><dl class="facts">' + facts.map(function (f) { return "<dt>" + f[0] + "</dt><dd>" + f[1] + "</dd>"; }).join("") + "</dl></div>" +
      '<div class="card prose">' + markdown(c.body) + "</div>" +
      '<h3 class="section-title">Sources (' + c.sources.length + ")</h3>" +
      '<div class="card">' + c.sources.map(sourceRow).join("") + "</div>" + fileLinks(c.file);
  }

  function sourceRow(s) {
    var url = safeUrl(s.url);
    return '<div class="source">' + (url ? '<a href="' + esc(url) + '">' + esc(s.title) + "</a>" : esc(s.title)) +
      ' <span class="tag">' + esc(s.kind) + "</span>" +
      '<p class="hint">' + esc(s.publisher) + (s.date ? ", " + fmtDate(s.date) : "") + ". Supports: " + esc(s.supports) + "</p></div>";
  }

  function categoryPage(cat) {
    if (!cat) return notFound();
    var cos = companiesIn(cat.id);
    return '<a class="back" href="#/">← Map</a>' +
      '<div class="card"><h2>' + esc(cat.name) + '</h2><p class="hint" style="margin-top:6px">' +
      esc(LAYER[cat.layer][0]) + " layer · " + esc(cat.question) + "</p></div>" +
      '<div class="card prose">' + markdown(cat.body) + "</div>" +
      '<h3 class="section-title">Firms in this category (' + cos.length + ")</h3>" +
      '<div class="card"><div class="chips">' + (cos.length ? cos.map(chip).join("") : '<span class="hint">None yet</span>') + "</div></div>" +
      fileLinks(cat.file);
  }

  function sourcesPage() {
    var all = [];
    R.companies.forEach(function (c) { c.sources.forEach(function (s) { all.push({ s: s, c: c }); }); });
    var kinds = {};
    all.forEach(function (x) { kinds[x.s.kind] = (kinds[x.s.kind] || 0) + 1; });
    return '<h2 class="section-title" style="margin-top:0">Other people\'s analysis</h2>' +
      '<p class="hint" style="margin-bottom:12px">Reports, lists and articles that map the same landscape, with who wrote them and how independent they are.</p>' +
      R.analyses.map(function (a) {
        var url = safeUrl(a.url);
        return '<article class="card"><h3>' + (url ? '<a href="' + esc(url) + '">' + esc(a.title) + "</a>" : esc(a.title)) + "</h3>" +
          '<p class="hint" style="margin:4px 0 8px">' + esc(a.publisher) + " · " + esc(a.date) + ' · <span class="tag">' + esc(a.kind) + "</span></p>" +
          '<p class="hint" style="margin-bottom:8px"><b>Independence:</b> ' + esc(a.independence) + "</p>" +
          '<div class="prose">' + markdown(a.body) + "</div></article>";
      }).join("") +
      '<h2 class="section-title">Every source cited (' + all.length + ")</h2>" +
      '<p class="hint" style="margin-bottom:12px">' + Object.keys(kinds).sort().map(function (k) { return kinds[k] + " " + esc(k); }).join(" · ") +
      ". \"company\" means the firm wrote it about itself, so treat its claims as claims.</p>" +
      '<div class="card">' + all.map(function (x) {
        return '<div class="source"><a href="#/company/' + esc(x.c.id) + '" style="font-weight:400">' + esc(x.c.name) + "</a> · " +
          (safeUrl(x.s.url) ? '<a href="' + esc(x.s.url) + '">' + esc(x.s.title) + "</a>" : esc(x.s.title)) +
          ' <span class="tag">' + esc(x.s.kind) + '</span><p class="hint">' + esc(x.s.publisher) + ". Supports: " + esc(x.s.supports) + "</p></div>";
      }).join("") + "</div>";
  }

  function aboutPage() {
    return '<div class="card prose"><h2>What this is</h2>' +
      "<p>A research map of construction, engineering and architecture (AEC) technology, built to help advise firms moving from " +
      "<em>using some AI</em> to <em>putting AI at the centre of how they work</em>. Every fact links to its source.</p>" +
      "<h2>How far to trust it</h2><p>This is an early prototype. Entries marked <b>AI draft</b> were researched by an AI " +
      "assistant from web sources and haven't yet been checked by a person. Facts can go out of date: each entry shows when it was last checked. " +
      "Company claims (speed, accuracy, savings) are the companies' own unless a source says otherwise.</p>" +
      "<h2>The rings</h2><ul>" + ["adopt", "trial", "assess", "hold"].map(function (r) {
        return "<li><b>" + r[0].toUpperCase() + r.slice(1) + ":</b> " + esc(RING_MEANING[r]) + "</li>";
      }).join("") + "</ul><p>The rings are borrowed from the Thoughtworks Technology Radar and judged for a <em>large construction firm today</em>. " +
      "They are opinions, not facts, and are labelled as such.</p>" +
      "<h2>Role of AI</h2><ul>" + R.ai_roles.map(function (r) { return "<li><b>" + esc(r) + ":</b> " + esc(AI_ROLE[r]) + "</li>"; }).join("") + "</ul>" +
      "<h2>For AI tools</h2><p>Everything here is plain text that AI tools can read directly: " +
      '<a href="llms.txt">llms.txt</a> (an index), <a href="data/radar.json">data/radar.json</a> (all the data in one file), ' +
      'or the Markdown files in the <a href="' + esc(REPO) + '">GitHub repository</a>. The method is in ' +
      '<a href="' + esc(REPO + "/blob/main/docs/METHOD.md") + '">docs/METHOD.md</a>.</p></div>';
  }

  function notFound() {
    return '<div class="card empty"><p>That page doesn\'t exist (it may have been renamed).</p><p style="margin-top:8px"><a href="#/">Back to the map</a></p></div>';
  }

  // ---------- routing ----------

  function route() {
    if (!R) {
      view.innerHTML = '<div class="card error">The research data didn\'t load (data/radar.js). If you\'re working on the files, run: python3 tools/build.py</div>';
      return;
    }
    var parts = (location.hash.replace(/^#\/?/, "") || "map").split("/");
    var tab = { map: "map", companies: "companies", company: "companies", sources: "sources", about: "about", category: "map" }[parts[0]] || "map";
    var html;
    if (parts[0] === "company") html = companyPage(byId(R.companies, parts[1]));
    else if (parts[0] === "category") html = categoryPage(byId(R.categories, parts[1]));
    else if (parts[0] === "companies") html = companiesPage();
    else if (parts[0] === "sources") html = sourcesPage();
    else if (parts[0] === "about") html = aboutPage();
    else html = mapPage();
    view.innerHTML = html;
    if (parts[0] === "companies") wireFilters();
    document.querySelectorAll(".tabs button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    window.scrollTo(0, 0);
  }

  function wireFilters() {
    drawCompanyList();
    [["f-q", "q", "input"], ["f-ring", "ring", "change"], ["f-cat", "cat", "change"], ["f-role", "role", "change"]].forEach(function (f) {
      document.getElementById(f[0]).addEventListener(f[2], function (e) { filters[f[1]] = e.target.value; drawCompanyList(); });
    });
  }

  document.querySelectorAll(".tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      var t = b.getAttribute("data-tab");
      location.hash = t === "map" ? "#/" : "#/" + t;
    });
  });
  if (R) {
    var drafts = R.companies.filter(function (c) { return c.verification !== "checked"; }).length;
    document.getElementById("status-line").textContent = R.companies.length + " firms · data as of " +
      fmtDate(R.data_as_of).replace(/<[^>]*>/g, "") + (drafts ? " · " + drafts + " AI drafts not yet checked" : "");
  }
  window.addEventListener("hashchange", route);
  route();
})();
