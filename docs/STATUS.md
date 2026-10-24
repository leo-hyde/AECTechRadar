# Live status

The current state of the project, shared between Leo's phone and computer
sessions. **Every Claude session reads this first and updates it after every
finished step**, then commits and pushes. Current state only: overwrite, don't
append. History is in `git log`; decisions are in `docs/decisions.md`.

## Handover (overwrite this block every session)

| | |
|---|---|
| Last session | Cloud, 24 Oct 2026 (step 1a) |
| Ended cleanly? | Yes, all pushed to `main` |
| Mid-flight work | None |
| Next step | Leo answers the 6 "Decisions for Leo" at the end of docs/research/1a-foresight-methods.md; steps 1b and 1c in fresh sessions (can run in parallel) |
| Check first | docs/research/1a-foresight-methods.md, "What this means for us" |
| Note | The 1a sources were read via search summaries only (no full texts): its "limits" section lists the claims to check before quoting them in public |

## Where we are

Prototype live-ready (Pages needs switching on by Leo): 10 categories, 17
firms, 6 outside analyses, all AI drafts with sources. Phase 1 (build the
research method and tool, AEC as the test case) is under way:
**step 1a done**: docs/research/1a-foresight-methods.md, a sourced review of
foresight methods ending with 14 proposed method decisions (each with a
confidence level) and 6 questions for Leo. Steps 1b (AI research
reliability) and 1c (users and lenses) not started.

## Next steps

1. Leo answers the 6 decisions in the 1a report.
2. Steps 1b and 1c deep research: one fresh session each.
3. Step 2: turn the three reports into decisions.md entries and data model v2; then build steps 3.1–3.6.

## Open questions

- Is the site live (GitHub Pages switched on)?
- The 6 "Decisions for Leo" in docs/research/1a-foresight-methods.md.
- Cloudflare: no credentials in cloud sessions; using it needs Leo to create an API token and store it as a GitHub secret (only if step 2 shows we need it).
