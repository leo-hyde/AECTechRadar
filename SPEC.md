# AEC Tech Radar: what we're building

Status: **draft for Leo's review**.

## The idea
A research tool for Leo's advisory work with construction, engineering and
architecture (AEC) firms. It maps the technology on offer: who makes what,
how mature it is, and what the evidence says. Other AI tools can read it as
a data source too. The first question it answers: what technology lets a
large construction firm move from using AI a little to putting AI at the
centre of its business?

## Key ideas
- **Category:** one part of the field (for example, site capture: recording
  what's been built on site). Each sits in one of five layers: foundation,
  design, plan, build, operate.
- **Company:** a firm, with facts and their sources, our analysis, and a ring.
- **Ring:** our judgement of how ready a firm's technology is for use: adopt,
  trial, assess or hold. It's labelled as a judgement, not a fact.
- **Analysis:** someone else's map, report or list of the same field.
- **Verification:** each entry says `ai-draft` until Leo has checked it.

## Version 1 (prototype)
| # | Step | Status |
|---|---|---|
| 1 | The file format, and a script that checks the files and its tests (`tools/build.py`) | Done |
| 2 | First round of research: 10 categories, 17 firms, 6 analyses | Done (AI draft) |
| 3 | The site: map, filterable company list, a page per entry, sources, an About page | Done |
| 4 | Files for AI tools: `radar.json`, `llms.txt`, and the raw Markdown | Done |
| 5 | A research skill (`/research-firm`: saved instructions Claude follows to research a firm) | Done |
| 6 | Leo reviews the entries and rings, and marks the ones he has checked | Next |

## Later (not in version 1)
- **A. A visual radar** (the usual circle chart). This waits until Leo has
  reviewed the rings, so the picture doesn't look more certain than it is.
- **B. Signals and trends**, not just companies: new rules, big trials,
  research results, each with a timeframe. This is the main gap compared
  with how professionals scan for change (see docs/METHOD.md).
- **C. A scoring guide for rings**, so two people would give the same ring.
- **D. Automatic re-checks**: a job that runs on a schedule and flags entries
  nobody has checked for 6 months.
- **E. An MCP server**: a plug-in that lets AI tools ask the radar questions
  directly. Only if reading the files turns out not to be enough.
- **F. Views for particular clients**, kept in a private repository (a
  project folder on GitHub only Leo can see) that reads this public data.

## Open questions
1. Which regions matter most: the UK, Europe, the US, or worldwide? The first
   round is mostly US, UK, Israeli and Finnish firms.
2. Should the rings judge only for "a large contractor", or have separate
   rings for each type of client (architects, engineers, contractors)?
3. Which AI tools will read it? That decides whether we need E.
