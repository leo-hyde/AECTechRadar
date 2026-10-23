# Research method

How entries are researched, what the fields mean, and how this compares with
established practice. The `/research-firm` skill
(`.claude/skills/research-firm/SKILL.md`) follows this; change both together.

## The approach in one paragraph
A fixed **taxonomy** (the categories in `categories/`, grouped in five layers
from the data foundation to operations) is filled with **entries** (one file
per company), each with structured facts, a written analysis and **at least
two sources, one of them not written by the company**. Judgements (the ring)
are kept apart from facts and labelled. Every entry has a **last checked**
date and a **verification** status, so it's clear what a person has
reviewed. Other people's maps of the same landscape are kept in `analyses/`
with a note on how independent they are, so the radar can be compared against
them rather than working in a vacuum.

## Is this current best practice? (honest answer)
Partly yes. It follows the parts of established horizon scanning and
technology radars that matter most, and it has known gaps.

**What it follows:**
- **Structured scanning against a taxonomy.** Horizon-scanning reviews find
  that structured, systematic processes are what make scanning useful for
  decisions (Palomino et al., *Foresight*, 2012; a 2019 BMJ Open systematic
  review: https://bmjopen.bmj.com/content/9/5/e026764).
- **Rings for adoption advice.** Adopt / Trial / Assess / Hold comes from the
  Thoughtworks Technology Radar, a widely copied format for advising on what to
  use now versus watch.
- **Separating evidence from judgement, and citing everything.** This matters
  more with AI research, because AI tools can state wrong facts confidently and
  invent references. Every claim here links to a source a person can open.
- **Human review.** AI does the first pass, a person checks it
  (`verification: checked`): AI drafts, a person decides.
- **Machine-readable output** (`data/radar.json`, `llms.txt`) so the research
  can feed other AI tools.

**Known gaps (to add over time):**
- **Signals and trends, not just companies.** Mature horizon scanning tracks
  weak signals (a regulation, a research result, a big contractor's pilot)
  and the wider drivers (often grouped as STEEP: social, technological,
  economic, environmental, political). This version only maps companies.
- **Time horizons.** Scanning usually places items on a timeline (the BMJ
  review used 2–15 years). Rings say "how ready now", not "when it matters".
- **Prioritisation criteria.** The rings are judged by one researcher; a
  scoring rubric (evidence of deployment, fit, risk) would make them
  repeatable.
- **Coverage.** 17 firms is a sample, not a census: thousands of AEC tech
  companies exist (McKinsey mapped 3,000+ in 2023).

## The fields (in each company file)
| Field | Meaning |
|---|---|
| `name`, `summary`, `website` | One-line description; website `null` if none |
| `hq`, `founded` | Only from sources; otherwise "Not checked yet" / `null` |
| `type` | `incumbent` (established large vendor), `scale-up`, `startup` |
| `status` | `active`, `being-acquired`, `acquired`, `closed` |
| `categories` | One or more ids from `categories/` |
| `ai_role` | `core` (AI is the product), `embedded` (AI added to an established product), `enabler` (makes AI-driven work possible) |
| `ring` | `adopt`, `trial`, `assess`, `hold` (or `null` if closed); see below |
| `ring_note` | Why that ring; it's a judgement, so say so |
| `verification` | `ai-draft` until a person has checked the facts against the sources, then `checked` |
| `last_checked` | Date the facts were last checked |
| `sources` | Each: `title`, `publisher`, `url` (https), `kind` (`company`, `news`, `analysis`, `database`), `supports` (which facts it backs), optional `date` |

**Rings**, judged for a large construction firm today:
- **Adopt:** proven at scale, a sensible default.
- **Trial:** proven on real projects; worth a pilot on a live job.
- **Assess:** promising; investigate, don't pilot widely yet.
- **Hold:** don't start new commitments.

## Rules for researching an entry
1. Search for the company's own pages **and** independent coverage (trade
   press, databases, analyst reports).
2. Write down only facts a source states. Where sources disagree (founding
   years, funding totals often do), say so and leave the field blank rather
   than pick one.
3. Treat speed, accuracy and savings figures from the company as claims, and
   say so in the text.
4. Look for news from the last 12 months (acquisitions, closures, rebrands).
5. Run `python3 tools/build.py`; it refuses entries without enough sources,
   with unknown categories, or with links that aren't https.
6. Leave `verification: ai-draft`. Only a person sets `checked`.

## Known limits of the sources
- Search results are summaries; most source pages weren't read in full in the
  first pass. Checking an entry means opening its sources.
- Funding databases (Crunchbase, PitchBook, CB Insights) disagree and are
  partly paywalled; their terms usually forbid copying data in bulk. Quote
  individual figures with a link, don't scrape.
