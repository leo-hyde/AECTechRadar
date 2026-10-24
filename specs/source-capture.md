# Source capture: save a copy of every cited page

Status: **built 24 Oct 2026** in the private repository (a project folder on
GitHub only Leo can see) `leo-hyde/AECTechRadar-sources`. Its README explains
how it works. It asks the Internet Archive to save pages without an account,
so the project still has no secrets (passwords or keys). This is step 3.5 of
[phase-1-research-system.md](phase-1-research-system.md), done early.

## Why
Today no claim can be checked against what its source actually said. Cloud
sessions only see search summaries (the 1a report says so in its "limits"
section), and pages change or vanish. A GitHub Action (a small job that runs
on GitHub's computers, which have open internet) can fetch each cited page
and save its text with the date, so any session, on the phone or the Mac, can
read the real page later.

**Why build it before the step 2 decisions:** it files everything by web
address, so it doesn't depend on the new data format step 2 will choose.
Whatever step 2 decides about claims and quotes, it will need the page text.
And the copies are worth more the earlier we take them.

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
The project's repository is public. Putting full copies of other people's pages in it
would be republishing them, which most websites' terms don't allow.

| Option | How | For | Against |
|---|---|---|---|
| **A. A private repository** `AECTechRadar-sources` *(recommended)* | The Action lives in the private repository, reads the public one (no password needed) and saves the text in itself | Copies stay private; **no secrets or keys at all**; any session can add it to read the text | One more repository to look after. Private repositories get a monthly allowance of free time for Actions (2,000 minutes on the free plan: not confirmed, check before building), plenty for this |
| B. The public repository | Action and copies in this repository | Simplest | Republishes others' pages; rules this out for me |
| C. The Internet Archive only | Ask web.archive.org to save each page, store only its archive link | Independent public proof of what the page said; nothing copied by us | Slow and sometimes refused; cloud sessions may not be able to open archive.org; we'd have no text of our own |

**Recommendation: A, plus C as a bonus** (send each new link to the Internet
Archive too and record its archive link), if you're happy for the list of
pages we cite to go to archive.org. The pages are public, so I think that's
fine, but it's your call. Later, step 3.5 can show "Source archived on
<date>" on the public site using only the date and result, never the text.

## How it behaves on the web (safety and terms)
- Reads each site's `robots.txt` (its rules for automatic visitors) and skips
  any page it disallows, recording "not allowed".
- Says who it is: each request carries a name tag (the "user-agent") with
  the project's name and GitHub address.
- At least 2 seconds between requests to the same website; gives up after one
  retry. No logins and no getting round paywalls or bot checks: those pages
  are recorded as "blocked".
- Expect some failures: ScienceDirect, ResearchGate and LinkedIn commonly
  block automatic visitors (from experience, not tested here). The report
  makes these visible; the Internet Archive copy may cover some.

## When it runs
- Once a day, early morning (it catches anything pushed since; first run
  fetches all 191, perhaps 10–15 minutes: an estimate).
- By hand, from the Actions tab of the repository on GitHub, with an option to re-fetch everything.

## The parts (to build in a fresh session, Mac preferred)
| Part | Where (private repo) | Job |
|---|---|---|
| `capture.py` | `tools/` | Collects links, fetches, extracts text, writes files |
| `test_capture.py` | `tools/` | Tests link-collecting and text extraction on saved sample pages (no internet) |
| `capture.yml` | `.github/workflows/` | The schedule and the steps |
| `index.json` | root | One row per link: date, result, hash, archive link |
| `pages/<website>/<id>.md` | | The saved text, with the link and date at the top |
| `REPORT.md` | root | The failures, grouped by reason |

Python 3, with two well-known libraries for pulling the main text from web
pages and PDFs (choose exact versions when building and fix them there;
installed only on GitHub's computers, not your Mac). The public repository
gets one line in CLAUDE.md and ARCHITECTURE.md saying where the copies are.

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
1. **Where the copies live:** A (a private repository), recommended.
2. **Internet Archive as well:** yes recommended.
3. **Build now, before the step 2 decisions:** yes recommended (reasons above).
4. **Who creates the private repository:** Claude, from the Mac. Done 24 Oct 2026.
