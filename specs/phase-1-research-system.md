# Phase 1: build the research system (AEC as the test case)

Status: **draft for Leo's review** (24 Oct 2026). Co-developed: where neither
of us knows the answer, the plan says so and the research in step 1 finds out.

## The idea
Two things improve together, each feeding the other:
- **The method:** how to do frontier and horizon analysis of a technology
  landscape well, and how AI should take part in it.
- **The tool:** software and AI workflows that carry out that method, and that
  measure their own quality so each round can be shown to be better than the
  last.

AEC (construction, engineering, architecture) technology is the **test
case** in Phase 1: enough real content to exercise the tool. **Phase 2**
redoes the AEC analysis properly with the finished method and tool.

**Users are a variable, not a constant.** A large contractor planning an
AI-centred strategy is one user; an architecture practice, an investor or a
government client would want different things from the same landscape. The
system must handle "who is asking, and why" as an input.

## Design principles (proposed; step 1 tests them)
1. **Facts are shared; judgements belong to a user.** A company's founding
   year is the same for everyone; whether it's "adopt" depends on who's asking.
   Today one `ring` per company mixes the two. Phase 1 separates them: facts
   (with sources) in one place, assessments per **lens** (a user profile:
   organisation type, strategy, objectives, the decisions they face, time
   horizon, appetite for risk).
2. **The claim is the unit of evidence**, not the company page. Each claim
   carries its source, the supporting quote or passage, its date and a
   confidence level, so a person or an AI can check it in isolation.
3. **Measure, or it isn't improving.** A small "gold standard" set of claims
   checked by Leo lets each version of the AI process be scored (how often
   facts are right, sources really support them, nothing important missed,
   nothing stale). Every change to the method is judged against it.
4. **AI drafts, a person decides**, at fixed checkpoints, with every step
   recorded (which method version, which model, when).
5. **Everything stays readable by people and AI** (Markdown, JSON,
   llms.txt), as now.

## Step 1: deep research (three reports, each with sources)
Each report goes in `docs/research/`, with a short "what this means for us"
section at the end that turns findings into proposed decisions.

| # | Question | What it decides |
|---|---|---|
| 1a | **How do professionals do technology foresight and landscape analysis?** Horizon scanning, technology radars, readiness levels, hype cycles (and their critics), Wardley maps, scenario planning, expert elicitation such as Delphi, patent and publication analysis, weak signals. What does good look like, and what goes wrong? | The method: what we track (companies, technologies, signals, drivers), how we rate them, how often we refresh |
| 1b | **How should AI be used to do research like this, reliably?** How "deep research" AI agents work, their failure modes (invented sources, stale facts, overconfidence), how to verify claims, how research teams evaluate AI research quality, knowledge graphs, keeping a human in the loop | The tool: pipeline stages, verification, the evaluation set, what not to automate |
| 1c | **Who uses technology landscape analysis, and what do they need?** Types of organisation (contractors, consultancies, owners, investors, governments, vendors), their objectives, the decisions they're making, how they consume research | The lens model, and what the front end must answer for each user type |

## Step 2: decide (one short session with Leo)
Turn the three reports into decisions in `docs/decisions.md` and a data model
v2 in this spec. No building before this is agreed.

## Step 3: build (each step ends with something visible)
| # | Step | You'll see |
|---|---|---|
| 3.1 | Data model v2: claims, sources, lenses, assessments; migrate the 17 firms | Same site, but each fact shows its own source and quote |
| 3.2 | Lenses: 2–3 example users (anonymised); assessments per lens | A lens switcher on the site; rings change with the user |
| 3.3 | Research pipeline v1: stages as Claude skills (scope → scan → extract claims → verify → synthesise → review), each writing files | `/research-firm` replaced by a pipeline that leaves a trail |
| 3.4 | Evaluation: Leo checks ~30 claims (the gold set); a script scores any run against it | A scorecard page: accuracy, source support, freshness |
| 3.5 | Source capture: a GitHub Action (which has open internet) saves the text of each cited page, so claims can be checked against what the page actually said | "Source archived on <date>" next to each claim |
| 3.6 | Front end v2: lens view, claim-level evidence, a visual radar, signals | The tool Leo would show a client |

## Phase 2 (later)
Re-run the whole AEC analysis with the Phase 1 pipeline, scored against the
gold set, through the first real client lens.

## Out of scope for Phase 1
Real client names or notes (public repo); paid databases; a server or
database (unless step 1 shows we need one); polishing the AEC content beyond
what testing needs.

## Known constraints (say these out loud)
- **Cloud sessions can't open most web pages**, only search summaries. Real
  verification needs full page text: a GitHub Action (step 3.5) or Mac
  sessions can fetch pages.
- **Deep research is expensive.** Each report in step 1 is a long, many-search
  task: run each in its own fresh session.
- **The gold set needs Leo's time** (about an hour for ~30 claims). Without
  it there's no honest measure of quality.

## How we'll know Phase 1 is done
- The three reports exist, with sources, and their recommendations are
  either adopted (in decisions.md) or rejected with a reason.
- Any research run can be scored against the gold set, and the score is
  shown on the site.
- Switching lens changes the assessments but never the facts.
