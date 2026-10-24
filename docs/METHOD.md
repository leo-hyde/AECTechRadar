# Research method

How we research each entry, what the fields mean, and how this compares with
how professionals do it. The `/research-firm` skill (Claude's saved
instructions, in `.claude/skills/research-firm/SKILL.md`) follows this
method: if you change one, change both.

## The approach in one paragraph
We sort the field into a fixed set of **categories** (in `categories/`),
grouped in five layers, from the data foundation to operations
(running a building once it is built). We fill them with **entries**, one file per company. Each entry
has its key facts, a written analysis and **at least two sources, one of
them not written by the company**. We keep judgements (the ring) apart from
facts and label them as judgements. Every entry has a **last checked** date
and a **verification** status, so you can see what a person has reviewed.
We keep other people's maps of the same field in `analyses/`, with a note on
how independent each one is. That lets us compare the radar with them,
rather than working on our own.

## Is this how professionals do it? (honest answer)
Partly. It follows the parts of professional practice that matter most, and
it has known gaps. Two kinds of practice are relevant. "Horizon scanning"
means searching widely and regularly for early signs of change. A
"technology radar" is a published list of technologies, each placed in a
ring that says whether to use it now or watch it.

**What it follows:**
- **Searching in a structured way, against fixed categories.** Reviews of
  horizon scanning find that a structured, systematic process is what makes
  scanning useful for decisions (Palomino et al., *Foresight*, 2012; a 2019
  systematic review in BMJ Open, a medical journal:
  https://bmjopen.bmj.com/content/9/5/e026764).
- **Rings for advice on what to use.** Adopt / Trial / Assess / Hold comes
  from the Thoughtworks Technology Radar. It's a widely copied format for
  advising what to use now and what to watch.
- **Keeping evidence apart from judgement, and citing everything.** This
  matters more when AI does the research, because AI tools can state wrong
  facts confidently and invent references. Every claim here links to a
  source a person can open.
- **A person reviews.** AI does the first pass and a person checks it
  (`verification: checked`). AI drafts; a person decides.
- **Files machines can read** (`data/radar.json`, `llms.txt`), so the
  research can feed other AI tools.

**Known gaps (to fill over time):**
- **Signals and trends, not just companies.** Mature horizon scanning
  tracks "weak signals": early hints of change, such as a new regulation, a
  research result or a big contractor's trial. It also tracks the wider
  forces behind change, often grouped as STEEP: social, technological,
  economic, environmental and political. This version only maps companies.
- **Timeframes.** Scanning usually places each item on a timeline (the BMJ
  review used 2–15 years). Our rings say "how ready now", not "when it will
  matter".
- **A scoring guide.** One researcher judges the rings. A written scoring
  guide (evidence that it's in real use, how well it fits, the risks) would
  mean two people reach the same ring.
- **Coverage.** 17 firms is a sample, not a full list: thousands of AEC
  technology companies exist (McKinsey mapped more than 3,000 in 2023).

## The fields (in each company file)
| Field | Meaning |
|---|---|
| `name`, `summary`, `website` | The firm's name, a one-line description and its website (`null`, meaning none, if it has no website) |
| `hq`, `founded` | Head office and founding year, only if a source states them; otherwise "Not checked yet" or `null` |
| `type` | `incumbent` (an established large supplier), `scale-up` (growing fast) or `startup` (early stage) |
| `status` | `active`, `being-acquired`, `acquired` or `closed` |
| `categories` | One or more category names from `categories/` |
| `ai_role` | `core` (AI is the product), `embedded` (AI added to an established product) or `enabler` (makes AI-driven work possible) |
| `ring` | `adopt`, `trial`, `assess` or `hold` (or `null` if the firm has closed); see below |
| `ring_note` | Why we chose that ring. It's a judgement, so say so |
| `verification` | `ai-draft` until a person has checked the facts against the sources, then `checked` |
| `last_checked` | The date someone last checked the facts |
| `sources` | For each source: `title`, `publisher`, `url` (an `https` web address), `kind` (`company`, `news`, `analysis` or `database`), `supports` (which facts it backs up), and the `date` if known |

**The rings**, judged for a large construction firm today:
- **Adopt:** proven at scale; a sensible default.
- **Trial:** proven on real projects; worth testing on a live job.
- **Assess:** promising; look into it, but don't test it widely yet.
- **Hold:** don't start anything new with it.

## Rules for researching an entry
1. Search for the company's own pages **and** for independent coverage:
   trade press, databases and analysts' reports.
2. Write down only facts a source states. Where sources disagree (founding
   years and funding totals often do), say so and leave the field blank
   rather than choose one.
3. Treat the company's own figures for speed, accuracy and savings as
   claims, and say so in the text.
4. Look for news from the last 12 months: takeovers, closures, new names.
5. Run `python3 tools/build.py`. It rejects entries without enough sources,
   with unknown categories, or with links that don't start `https`.
6. Leave `verification: ai-draft`. Only a person sets `checked`.

## Known limits of the sources
- Web search gives summaries. In the first round, we didn't read most source
  pages in full. Checking an entry means opening its sources.
- Funding databases (Crunchbase, PitchBook, CB Insights) disagree with each
  other, and you have to pay to see parts of them. Their terms usually forbid
  copying their data in bulk. Quote single figures with a link; never copy
  data from them automatically.
