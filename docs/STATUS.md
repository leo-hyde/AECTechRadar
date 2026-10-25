# Live status

Where the project stands right now, shared between Leo's phone and Mac
sessions. **Every Claude session reads this first, and updates it after
every finished step**, then saves and uploads the change (commit and push).
It shows the current state only: overwrite it, don't add to the bottom. The
history is in `git log`; the decisions are in `docs/decisions.md`.

## Handover (overwrite this block every session)

| | |
|---|---|
| Last session | Phone/cloud, 25 Oct 2026 (plan documents brought up to date; playbook now keeps them up to date) |
| Ended cleanly? | Yes, everything uploaded to `main` (this project and the playbook) |
| Work in progress | None. SPEC.md describes Phase 1 with one status table for every step. The playbook has a new "Keeping the docs true" rule, and the end-of-reply check now blocks if `specs/` changes but SPEC.md doesn't |
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

The full plan, with every step's status, is in SPEC.md.
1. Leo answers the 6 decisions in the 1a report (SPEC.md open question 1).
2. Steps 1b and 1c (research): one fresh session each.

## Open questions

- Is the site live yet (GitHub Pages switched on)?
- The 6 "Decisions for Leo" at the top of the 1a report.
- Cloudflare (a service that could run small bits of code for us): cloud
  sessions have no login for it. Using it needs Leo to create a key and
  store it as a GitHub secret. Only needed if step 2 shows we need it.
