# Phase 1: build the research system (with AEC as the test case)

Status: **draft for Leo's review** (24 Oct 2026). We're working this out
together: where neither of us knows the answer, the plan says so, and the
research in step 1 finds out.

## The idea
Two things improve together, each feeding the other:
- **The method:** how to do horizon scanning well (searching widely and
  regularly for early signs of change in a field of technology), and what
  part AI should play in it.
- **The tool:** software and AI steps that carry out that method. They also
  measure their own quality, so we can show each round is better than the
  last.

In Phase 1, construction, engineering and architecture (AEC) technology is
the **test case**: enough real content to put the tool through its paces.
**Phase 2** redoes the AEC analysis properly, with the finished method and
tool.

**Users vary.** A large contractor planning a strategy with AI at its centre
is one user. An architecture practice, an investor or a government client
would want different things from the same field. So the system must take
"who is asking, and why?" as an input.

## Design principles (proposed; step 1 tests them)
1. **Facts are shared; judgements belong to a user.** A company's founding
   year is the same for everyone. Whether it's "adopt" depends on who's
   asking. Today, one `ring` per company mixes the two. Phase 1 separates
   them: facts (with sources) in one place, and judgements made per **lens**.
   A lens is a profile of one kind of user: the type of organisation, its
   strategy and aims, the decisions it faces, how far ahead it's looking,
   and how much risk it will take.
2. **Each claim is the building block of evidence**, not the company page.
   Each claim carries its source, the passage that supports it, its date and
   how confident we are. A person or an AI can then check it on its own.
3. **Measure it, or it isn't improving.** Leo checks a small set of claims by
   hand: the "gold set", our answer key. We can then score each version of
   the AI process against it: how often facts are right, whether the sources
   really support them, whether anything important was missed, and whether
   anything is out of date. We judge every change to the method by that score.
4. **AI drafts, a person decides**, at fixed checkpoints. Every step is
   recorded: which version of the method, which AI model, and when.
5. **Everything stays readable by people and AI** (Markdown, JSON,
   llms.txt), as now.

## Step 1: research (three reports, each with sources)
Each report goes in `docs/research/`. It ends with a short "what this means
for us" section that turns the findings into proposed decisions.

| # | Question | What it decides |
|---|---|---|
| 1a | **How do professionals look ahead at technology and map a field?** Horizon scanning; technology radars; readiness levels (scales of how mature a technology is); hype cycles (charts of rising and falling excitement) and their critics; Wardley maps (strategy maps of how products mature); scenario planning; structured ways of asking experts, such as Delphi (anonymous rounds of expert opinion); counting patents and research papers; weak signals (early hints of change). What does good look like, and what goes wrong? | The method: what we track (companies, technologies, signals, wider forces), how we rate them, how often we update |
| 1b | **How can AI do research like this reliably?** How "deep research" AI tools work (AI that runs many searches and writes a report); how they fail (invented sources, out-of-date facts, overconfidence); how to check their claims; how research teams measure the quality of AI research; knowledge graphs (data stored as linked facts); keeping a person involved at the key points | The tool: its stages, how claims are checked, the gold set, and what not to automate |
| 1c | **Who uses this kind of analysis, and what do they need?** Types of organisation (contractors, consultancies, clients who own buildings, investors, governments, technology suppliers), their aims, the decisions they're making, and how they like to receive research | How lenses work, and what the site must answer for each type of user |

## Step 2: decide (one short session with Leo)
Turn the three reports into decisions in `docs/decisions.md`, and a second
version of the data format in this plan. We build nothing before this is
agreed.

## Step 3: build (each step ends with something you can see)
| # | Step | You'll see |
|---|---|---|
| 3.1 | Data format, version 2: claims, sources, lenses and judgements. Move the 17 firms into it | The same site, but each fact shows its own source and quote |
| 3.2 | Lenses: 2–3 example users (with no real names), and judgements for each | A lens switcher on the site: the rings change with the user |
| 3.3 | The research process, version 1: a series of Claude skills (saved instructions), each a stage: scope → scan → pull out claims → check them → combine → review. Each stage writes files | A process that leaves a record of every step, replacing `/research-firm` |
| 3.4 | Measuring quality: Leo checks about 30 claims (the gold set); a script scores any research run against them | A scorecard page: accuracy, whether sources back the claims, and how current they are |
| 3.5 | Source capture: a GitHub Action (a job that runs on GitHub's computers, which can open any website) saves the text of each cited page, so we can check claims against what the page actually said | "Source archived on <date>" next to each claim |
| 3.6 | The site, version 2: a lens view, evidence for each claim, a visual radar, signals | The tool Leo would show a client |

## Phase 2 (later)
Re-run the whole AEC analysis with the Phase 1 process, scored against the
gold set, through the first real client's lens.

## Not part of Phase 1
Real client names or notes (the repository is public); paid databases; a
server or database (unless step 1 shows we need one); polishing the AEC
content beyond what testing needs.

## Known limits (say these out loud)
- **Cloud sessions can't open most web pages**, only search summaries. Real
  checking needs the full text of each page. A GitHub Action (step 3.5) or a
  session on the Mac can fetch pages.
- **This kind of research is expensive.** Each report in step 1 is a long
  task with many searches: run each one in its own fresh session.
- **The gold set needs Leo's time**: about an hour for about 30 claims.
  Without it, we have no honest measure of quality.

## How we'll know Phase 1 is done
- The three reports exist, with sources. We have either adopted each
  recommendation (in decisions.md) or rejected it with a reason.
- We can score any research run against the gold set, and the site shows
  the score.
- Switching lens changes the judgements, but never the facts.
