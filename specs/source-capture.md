# Source capture: save a copy of every cited page

Status: **built 24 Oct 2026** in the private repo `leo-hyde/AECTechRadar-sources` (its README says how it works). Internet Archive saves are anonymous, so there are still no secrets. This is step 3.5 of
[phase-1-research-system.md](phase-1-research-system.md), brought forward.

## Why
Today no claim can be checked against what its source actually said. Cloud
sessions only see search summaries (the 1a report says so in its "limits"
section), and pages change or vanish. A GitHub Action (a small job that runs
on GitHub's computers, which have open internet) can fetch each cited page
and save its text with the date, so any session, on the phone or the Mac, can
read the real page later.

**Why build it before the step 2 decisions:** it keys everything by web
address, not by the data model. Whatever step 2 decides about claims and
quotes, it will need the page text, and the copies are worth more the earlier
they're taken.

## What it does
1. **Collects the links**: every `https://` address in `companies/`,
   `categories/`, `analyses/` and `docs/research/` (191 distinct ones today,
   from 144 websites; at least 17 are PDFs).
2. **Fetches only new ones**: a link already saved is not fetched again
   (polite to the websites, and cheap). A manual "refresh" run can re-fetch.
3. **Saves, per link**: the page's main text (menus and adverts stripped),
   the date and time, the result (worked / blocked / gone / not allowed), and
   a fingerprint of the text (a "hash") so a later change is detectable. PDFs
   (many of the research sources) get their text extracted too.
4. **Writes a report**: a list of links that failed and why, so a session
   knows which claims still rest on summaries only.

## Where the copies live (the main decision)
The project repo is public. Putting full copies of other people's pages in it
would be republishing them, which most websites' terms don't allow.

| Option | How | For | Against |
|---|---|---|---|
| **A. A private repo** `AECTechRadar-sources` *(recommended)* | The Action lives in the private repo, reads the public repo (no password needed) and saves the text in itself | Copies stay private; **no secrets or tokens at all**; any session can attach it to read the text | One more repo; private repos get a monthly allowance of free Action minutes (2,000 on the free plan: unverified, check before building), ample for this |
| B. The public repo | Action and copies in this repo | Simplest | Republishes others' pages; rules this out for me |
| C. The Internet Archive only | Ask web.archive.org to save each page, store only its archive link | Independent public proof of what the page said; nothing copied by us | Slow and sometimes refused; cloud sessions may not be able to open archive.org; we'd have no text of our own |

**Recommendation: A, plus C as a bonus** (send each new link to the Internet
Archive too and record its archive link), if you're happy for the list of
pages we cite to go to archive.org. The pages are public, so I think that's
fine, but it's your call. Later, step 3.5 can show "Source archived on
<date>" on the public site using only the date and result, never the text.

## How it behaves on the web (safety and terms)
- Reads each site's `robots.txt` (its rules for automatic visitors) and skips
  any page it disallows, recording "not allowed".
- Says who it is: a user-agent naming the project and its GitHub address.
- At least 2 seconds between requests to the same website; gives up after one
  retry. No logins and no getting round paywalls or bot checks: those pages
  are recorded as "blocked".
- Expect some failures: ScienceDirect, ResearchGate and LinkedIn commonly
  block automatic visitors (from experience, not tested here). The report
  makes these visible; the Internet Archive copy may cover some.

## When it runs
- Once a day, early morning (it catches anything pushed since; first run
  fetches all 191, perhaps 10–15 minutes: an estimate).
- By hand from the repo's Actions tab, with an option to re-fetch everything.

## The parts (to build in a fresh session, Mac preferred)
| Part | Where (private repo) | Job |
|---|---|---|
| `capture.py` | `tools/` | Collects links, fetches, extracts text, writes files |
| `test_capture.py` | `tools/` | Tests link-collecting and text extraction on saved sample pages (no internet) |
| `capture.yml` | `.github/workflows/` | The schedule and the steps |
| `index.json` | root | One row per link: date, result, hash, archive link |
| `pages/<website>/<id>.md` | | The saved text, with the link and date at the top |
| `REPORT.md` | root | The failures, grouped by reason |

Python 3 with two well-known libraries for pulling the main text from web
pages and PDFs (choose and pin exact versions when building; installed only
on GitHub's computers, not your Mac). The public repo gets one line in
CLAUDE.md and ARCHITECTURE.md saying where the copies are.

## Out of scope
Showing anything on the site (that's step 3.5 proper, after the data model);
checking claims against the text (step 3.3/3.4); fetching pages that aren't
cited; paid or logged-in sources.

## How we'll check it's done
1. The tests pass.
2. A first hand-started run on **5 links** (one news page, one company page,
   one PDF, one likely-blocked site, one robots-disallowed if we can find
   one): each ends with the right result, and the saved text matches the page
   when you open both side by side.
3. The full run: `REPORT.md` lists every failure with a reason; I spot-check
   10 saved pages against the live ones and say how many matched.
4. A second run fetches nothing already saved.

## Decisions (agreed; see docs/decisions.md)
1. **Where the copies live:** A (private repo) recommended.
2. **Internet Archive as well:** yes recommended.
3. **Build now, before the step 2 decisions:** yes recommended (reasons above).
4. **Who creates the private repo:** Claude, from the Mac. Done 24 Oct 2026.
