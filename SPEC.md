# AEC Tech Radar: Product Spec

Status: **draft for Leo's review**.

## The idea
A research tool for Leo's advisory work with construction, engineering and
architecture firms. It maps the technology landscape (who makes what, how
mature it is, what the evidence says) and is a data source other AI tools can
read. The first lens: what technology lets a large construction firm move
from using AI a little to putting AI at the centre of its business.

## Key concepts
- **Category:** a part of the landscape (e.g. site capture), in one of five
  layers: foundation, design, plan, build, operate.
- **Company:** a firm, with sourced facts, analysis, a ring and its sources.
- **Ring:** a labelled judgement of readiness: adopt, trial, assess, hold.
- **Analysis:** someone else's map, report or list of the same landscape.
- **Verification:** `ai-draft` until Leo has checked the entry.

## Version 1 (prototype)
| # | Step | Status |
|---|---|---|
| 1 | Data format, checks and tests (`tools/build.py`) | Done |
| 2 | First research pass: 10 categories, 17 firms, 6 analyses | Done (AI draft) |
| 3 | Site: map, company list with filters, detail pages, sources, about | Done |
| 4 | AI-readable outputs: `radar.json`, `llms.txt`, raw Markdown | Done |
| 5 | Research skill (`/research-firm`) | Done |
| 6 | Leo reviews the entries and rings; marks checked ones | Next |

## Later (not in version 1)
- **A. Visual radar** (the classic circle chart). Waits until the rings have
  been reviewed, so the picture doesn't lend false confidence.
- **B. Signals and trends**, not just companies (regulation, big pilots,
  research), with time horizons. The main gap against horizon-scanning
  practice (docs/METHOD.md).
- **C. Scoring rubric for rings**, so they're repeatable.
- **D. Automatic re-checks**: a scheduled job that flags entries not checked
  for 6 months.
- **E. An MCP server** (a plug-in that lets AI tools query the radar live), if
  reading the files turns out not to be enough.
- **F. Client-specific views** in a private repo that reads this public data.

## Open questions
1. Which regions matter most (UK, Europe, US, global)? The first pass is
   mostly US/UK/Israel/Finland firms.
2. Should the radar judge for "a large contractor" only, or have separate
   rings per client type (architects, engineers, contractors)?
3. Which AI tools will read it? That decides whether E is needed.
