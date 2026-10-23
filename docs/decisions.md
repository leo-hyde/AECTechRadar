# Decisions

One entry per decision, newest first. If one is reversed, add a new entry and
mark the old one "Replaced by <date>".

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

## 2026-10-23: Public repo, named aec-tech-radar
- **Why:** Leo wants to share the site with testers; free GitHub Pages needs
  public. Can be made private later.
- **Consequence:** no client names, notes or paid-data exports here.
