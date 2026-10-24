# Decisions

One entry per decision, newest first. If one is reversed, add a new entry and
mark the old one "Replaced by <date>".

## 2026-10-24: Source capture asks the Internet Archive anonymously, with trafilatura and pypdf
- **What:** save requests to web.archive.org go without an account, at most
  one every 25 seconds and 100 a run, skipping pages it saved in the last 30
  days and pages whose robots.txt says no. Text comes from trafilatura 2.2.0
  (web pages) and pypdf 6.19.0 (PDFs), every library pinned to a version at
  least two weeks old.
- **Why:** the Archive's own API docs say its full save service needs an
  account key, which would be the project's first secret; anonymous saves
  (3 a minute, 200 a day) are enough for about 190 links. trafilatura is a
  widely used main-text extractor that outputs Markdown; pypdf has no
  system dependencies.
- **Rejected:** an Archive account key stored as a GitHub secret (not needed
  yet); fetching pages with trafilatura's own downloader (less control over
  robots.txt, pacing and results).

## 2026-10-24: Save a copy of every cited page, in a private repo, built now
- **What:** a GitHub Action in the private repo `leo-hyde/AECTechRadar-sources`
  reads this public repo's links, saves each page's text there, and also asks
  the Internet Archive to save it. Built before the step 2 decisions. Plan:
  specs/source-capture.md.
- **Why:** claims can then be checked against the full page, not search
  summaries; copies are worth more the earlier they're taken, and they're
  keyed by web address so any data model can use them. Private, because
  copying others' pages into a public repo would republish them. The
  private-repo set-up needs no secrets.
- **Rejected:** copies in this public repo (republishing); Internet Archive
  links only (slow, sometimes refused, no text of our own); waiting until
  after step 2.

## 2026-10-23: Bundle marked and DOMPurify in `vendor/` instead of a CDN
- **Why:** the cloud session couldn't reach CDNs to check them, the npm copies
  are exact versions, and the site keeps working if a CDN changes.
- **Rejected:** CDN links (unverifiable from here); rendering Markdown in
  build.py (needs another Python library).

## 2026-10-23: Thoughtworks-style rings, judged for "a large construction firm today"
- **Why:** a familiar format for advice (adopt / trial / assess / hold), and
  Leo's first client question is about a large contractor.
- **Rejected:** technology readiness levels (TRLs) (they describe the
  technology, not whether a firm should use it); a numeric score (false
  precision before a rubric exists).

## 2026-10-23: Markdown files with YAML front matter, built into JSON; no database
- **Why:** readable by people and AI tools as-is, full history in git,
  editable from a phone on GitHub, free hosting. Fine up to a few thousand
  entries.
- **Rejected:** a database or Airtable (harder for AI tools to read, costs,
  history not in git); one big spreadsheet (no room for analysis text and
  sources).

## 2026-10-23: Public repo, named AECTechRadar (Leo created it on GitHub)
- **Why:** Leo wants to share the site with testers; free GitHub Pages needs
  public. Can be made private later.
- **Consequence:** no client names, notes or paid-data exports here.
