# Live status

Where the project stands right now, shared between Leo's phone and Mac
sessions. **Every Claude session reads this first, and updates it after
every finished step**, then saves and uploads the change (commit and push).
It shows the current state only: overwrite it, don't add to the bottom. The
history is in `git log`; the decisions are in `docs/decisions.md`.

## Handover (overwrite this block every session)

| | |
|---|---|
| Last session | Phone/cloud, 25 Oct 2026 (brought the plan documents up to date with Phase 1) |
| Ended cleanly? | Yes, everything uploaded to `main` |
| Work in progress | None. SPEC.md now describes Phase 1 (the method and tool, with AEC as the test case), with one status table for every step. decisions.md now records the Phase 1 decision itself |
| Next step | Leo answers the 6 decisions at the top of docs/research/1a-foresight-methods.md (each has my recommendation); then steps 1b and 1c, each in a fresh session |
| Check first | `REPORT.md` in the private repository, to see which sources we still only know from search summaries |
| Note | The firm, category and analysis entries haven't had the plain-English pass yet. SPEC.md marks prototype step 6 (Leo reviews every entry) as paused, my proposal: Leo to confirm |

## Where we are

The prototype is ready to go live once Leo switches on GitHub Pages (GitHub's
free web hosting). It has 10 categories, 17 firms and 6 outside analyses,
all AI drafts with sources.

Phase 1 (building the research method and tool, with AEC as the test case)
is under way:
- **Step 1a is done:** docs/research/1a-foresight-methods.md reviews, with
  sources, how professionals look ahead at technology. It ends with 14
  proposals (each with a confidence level) and 6 decisions for Leo.
- **Steps 1b** (how AI can do research reliably) **and 1c** (who the users
  are and what they need) haven't started.
- **Source capture is built** (step 3.5, done early). Every day, a GitHub
  Action (a job on GitHub's computers) in the private repository
  `leo-hyde/AECTechRadar-sources` saves the text of every page we cite. So
  far it has saved 126 of 187. The rest were blocked, have gone, are
  forbidden to automatic visitors, or need JavaScript to show their text. It
  also asks the Internet Archive to save each page.

## Next steps

1. Leo answers the 6 decisions in the 1a report.
2. Research for steps 1b and 1c: one fresh session each.
3. Step 2: turn the three reports into entries in decisions.md and version 2
   of the data format; then build steps 3.1 to 3.6.

## Open questions

- Is the site live yet (GitHub Pages switched on)?
- The 6 "Decisions for Leo" at the top of the 1a report.
- Cloudflare (a service that could run small bits of code for us): cloud
  sessions have no login for it. Using it needs Leo to create a key and
  store it as a GitHub secret. Only needed if step 2 shows we need it.
