# Decisions

One entry per decision, newest first. If we reverse one, we add a new entry
and mark the old one "Replaced by <date>".

## 2026-10-24: Build a research method and tool, with AEC as the test case (Phase 1)
- **What:** the project is no longer only a map of AEC firms. Phase 1
  builds a method for looking ahead at a field of technology, and a tool
  that carries it out and scores its own quality. AEC is the test case;
  Phase 2 redoes the AEC analysis with the finished method. Facts are kept
  apart from judgements, which are made per lens (a type of user). The plan
  is in specs/phase-1-research-system.md. (I wrote this entry on 25 Oct;
  the plan was agreed on 24 Oct but not logged here then.)
- **Why:** different users (a contractor, an architect, an investor) need
  different judgements from the same facts, and one ring per company mixes
  the two. Without a way to measure quality, we can't show the AI research
  is improving.
- **Rejected:** carrying on adding firms to the prototype first (more
  content in a format we expect to change); building before the three
  research reports (step 1) are done.

## 2026-10-24: Docs rewritten in plain English, as the playbook asks
- **What:** I rewrote the project's documents for people (README, SPEC,
  DESIGN, STATUS, ARCHITECTURE, METHOD, these decisions and both specs) in
  UK plain English, keeping every fact and decision the same. The long
  research report (`docs/research/1a-foresight-methods.md`) got a plain
  summary, a glossary and plain-English decisions at the top instead of a
  full rewrite. Recorded in `docs/playbook-catch-up.md`.
- **Why:** the playbook's "Writing for people" rule (24 Oct 2026) changed how
  Claude wrote from then on, but nothing rewrote the documents that already
  existed. The playbook now has "catch-ups" so this happens in every project.
- **Rejected:** a full rewrite of the research report and the firm entries in
  this session: they hold hundreds of sourced claims, and rewording them
  risks changing a fact. Offered as a separate session.

## 2026-10-24: Source capture asks the Internet Archive anonymously, and uses trafilatura and pypdf
- **What:** we ask web.archive.org (the Internet Archive, a public library
  of saved web pages) to save each page without an account: at most one
  request every 25 seconds and 100 per run. We skip pages it saved in the
  last 30 days, and pages whose `robots.txt` (a site's rules for automatic
  visitors) says no. Two libraries pull out the text: trafilatura 2.2.0 for
  web pages and pypdf 6.19.0 for PDFs. Every library is fixed to a version at
  least two weeks old.
- **Why:** the Archive's own documentation says its full save service needs
  an account key. That would be the project's first secret. Saving without
  an account allows 3 a minute and 200 a day, enough for about 190 links.
  trafilatura is widely used to pull the main text out of a page, and gives
  it as Markdown; pypdf needs nothing else installed on the computer.
- **Rejected:** an Archive account key stored as a GitHub secret (not needed
  yet); fetching pages with trafilatura's own downloader (gives us less
  control over `robots.txt`, timing and results).

## 2026-10-24: Save a copy of every cited page, in a private repository, built now
- **What:** a GitHub Action (a job that runs on GitHub's computers) in the
  private repository `leo-hyde/AECTechRadar-sources` reads the links in this
  public one, saves each page's text there, and asks the Internet Archive to
  save it too. We built it before the step 2 decisions. The plan is in
  specs/source-capture.md.
- **Why:** we can then check claims against the full page, not search
  summaries. Copies are worth more the earlier we take them. They're filed
  by web address, so whatever new data format step 2 chooses can use them.
  The repository is private because copying other people's pages into a
  public one would republish them. Setting it up needed no secrets.
- **Rejected:** copies in this public repository (that republishes them);
  Internet Archive links only (slow, sometimes refused, and no text of our
  own); waiting until after step 2.

## 2026-10-23: Keep copies of marked and DOMPurify in `vendor/`, not load them from a CDN
- **What:** the site's two libraries are copied into the project, rather
  than loaded from a CDN (a public server that hosts libraries for websites).
- **Why:** the cloud session couldn't reach CDNs to check them; the copies
  from npm (a public library store) are exact versions; and the site keeps
  working if a CDN changes.
- **Rejected:** CDN links (we couldn't check them); turning Markdown into
  web pages in `build.py` (needs another Python library).

## 2026-10-23: Thoughtworks-style rings, judged for "a large construction firm today"
- **Why:** advisers know the format (adopt / trial / assess / hold), and
  Leo's first client question is about a large contractor.
- **Rejected:** technology readiness levels, or TRLs, a 1–9 scale of how
  mature a technology is (they describe the technology, not whether a firm
  should use it); a single number as the score (looks more precise than it is before we
  have a scoring guide).

## 2026-10-23: Plain-text Markdown files with their facts at the top, built into one data file; no database
- **What:** each entry is a Markdown file starting with a block of labelled
  facts (YAML "front matter"); a script joins them into one JSON data file.
- **Why:** people and AI tools can read the files as they are; git (the
  version history) keeps every change; Leo can edit them on GitHub from his
  phone; and hosting is free. This works up to a few thousand entries.
- **Rejected:** a database or Airtable (harder for AI tools to read, costs
  money, and the history isn't in git); one big spreadsheet (no room for the
  analysis and sources).

## 2026-10-23: A public repository, named AECTechRadar (Leo created it on GitHub)
- **Why:** Leo wants to share the site with testers, and free GitHub Pages
  hosting needs a public repository. We can make it private later.
- **Consequence:** no client names, notes or exports from paid databases here.
