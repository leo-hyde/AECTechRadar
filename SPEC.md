# AEC Tech Radar: what we're building

Status: **draft for Leo's review** (updated 25 Oct 2026 to match the Phase 1
plan).

## The idea
A research tool for Leo's advisory work with construction, engineering and
architecture (AEC) firms. It maps the technology on offer: who makes what,
how mature it is, and what the evidence says. Other AI tools can read it as
a data source too.

**The plan changed on 24 Oct 2026.** The first version was a map of AEC
firms. Now we're building two things that improve together:
- **The method:** how to look ahead at a field of technology well, and what
  part AI should play.
- **The tool:** software and AI steps that carry out the method, and that
  measure their own quality, so we can show each round beats the last.

AEC is the **test case** in Phase 1: enough real content to put the tool
through its paces. Phase 2 redoes the AEC analysis properly with the
finished method and tool. The full plan is in
[specs/phase-1-research-system.md](specs/phase-1-research-system.md).

**Users vary.** A large contractor putting AI at the centre of its business
is one user (Leo's first client question). An architecture practice, an
investor or a government client would want different things from the same
field. So the tool takes "who is asking, and why?" as an input.

## Key ideas
- **Category:** one part of the field (for example, site capture: recording
  what's been built on site). Each sits in one of five layers: foundation,
  design, plan, build, operate.
- **Company:** a firm, with facts and their sources, and our analysis.
- **Claim** (new): one fact, with its source, the passage that supports it,
  its date and how confident we are. Claims, not company pages, are the
  building blocks of evidence, so each can be checked on its own.
- **Lens** (new): a profile of one kind of user: the type of organisation,
  its aims, the decisions it faces, how far ahead it's looking, and how much
  risk it will take. Facts are the same for everyone; judgements are made
  for a lens.
- **Ring:** our judgement of how ready something is for use: adopt, trial,
  assess or hold. It's labelled as a judgement, not a fact. Today each
  company has one ring, for "a large construction firm today". In Phase 1,
  rings are made per lens. Whether rings go on technologies, companies or
  both is still open (decision 1 in the 1a report).
- **Gold set** (new): about 30 claims Leo checks by hand, used as an answer
  key to score each version of the AI research process.
- **Analysis:** someone else's map, report or list of the same field.
- **Verification:** each entry says `ai-draft` until Leo has checked it.

## Version 1: the prototype (done)
| # | Step | Status |
|---|---|---|
| 1 | The file format, and a script that checks the files and its tests (`tools/build.py`) | Done |
| 2 | First round of research: 10 categories, 17 firms, 6 analyses | Done (AI draft) |
| 3 | The site: map, filterable company list, a page per entry, sources, an About page | Done |
| 4 | Files for AI tools: `radar.json`, `llms.txt`, and the raw Markdown | Done |
| 5 | A research skill (`/research-firm`: saved instructions Claude follows to research a firm) | Done |
| 6 | Leo reviews the entries and rings | Paused (my proposal): step 3.1 moves the firms into a new format, so Leo's checking time is better spent on the gold set (step 3.4) |

## Phase 1: build the research method and tool (under way)
Details, design principles and how we'll know it's done are in
[specs/phase-1-research-system.md](specs/phase-1-research-system.md).

| # | Step | Status |
|---|---|---|
| 1a | Research: how professionals look ahead at technology | Done: [report](docs/research/1a-foresight-methods.md), with 6 decisions waiting for Leo |
| 1b | Research: how AI can do research like this reliably | Not started |
| 1c | Research: who uses this kind of analysis, and what they need | Not started |
| 2 | Decide: turn the three reports into decisions and data format version 2 | Waits for 1a–1c |
| 3.1 | Data format version 2: claims, sources, lenses and judgements | Waits for step 2 |
| 3.2 | Lenses: 2–3 example users, with judgements for each | Waits for step 2 |
| 3.3 | The research process, version 1: Claude skills, one per stage | Waits for step 2 |
| 3.4 | Measuring quality: the gold set and a scoring script | Waits for step 2 |
| 3.5 | Source capture: save a copy of every cited page | Done early ([spec](specs/source-capture.md)), running daily in a private repository |
| 3.6 | The site, version 2: lens view, evidence per claim, visual radar, signals | Waits for step 2 |

## Phase 2 (later)
Re-run the whole AEC analysis with the Phase 1 process, scored against the
gold set, through the first real client's lens.

## Ideas from the first version, and where they went
- **A. A visual radar:** now part of step 3.6. It still waits until the
  rings have a scoring guide, so the picture doesn't look more certain than
  it is.
- **B. Signals and trends**, not just companies: now part of step 3.6, and
  what we track is decided in step 2 (1a report).
- **C. A scoring guide for rings:** part of step 2 (the 1a report proposes
  one).
- **D. Automatic re-checks** and "out of date" flags: part of step 2 (1a
  report, decision 5).
- **E. An MCP server** (a plug-in that lets AI tools ask the radar questions
  directly): still later, only if reading the files isn't enough.
- **F. Views for particular clients:** now lenses (step 3.2). Any lens
  shaped around a real client stays in a private repository.

## Not part of Phase 1
Real client names or notes (the repository is public); paid databases; a
server or database (unless step 1 shows we need one); polishing the AEC
content beyond what testing needs.

## Open questions
1. The 6 decisions at the top of the
   [1a report](docs/research/1a-foresight-methods.md), each with my
   recommendation.
2. Which regions matter most: the UK, Europe, the US, or worldwide? The first
   round is mostly US, UK, Israeli and Finnish firms. (Step 1c may answer
   this.)
3. Which AI tools will read it? That decides whether we need E.
