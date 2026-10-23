# Live status

The current state of the project, shared between Leo's phone and computer
sessions. **Every Claude session reads this first and updates it after every
finished step**, then commits and pushes. Current state only: overwrite, don't
append. History is in `git log`; decisions are in `docs/decisions.md`.

## Handover (overwrite this block every session)

| | |
|---|---|
| Last session | Phone (cloud), 23 Oct 2026, afternoon (started from the playbook repo) |
| Ended cleanly? | Committed locally; first push waits for Leo to create the empty GitHub repo |
| Mid-flight work | None in the code. GitHub Pages not switched on yet |
| Next step | Leo reviews entries and rings on the site; marks checked ones |
| Check first | docs/METHOD.md (how research is done), SPEC.md open questions |
| Note | Cloud sessions can't fetch most websites directly (403); WebSearch works |

## Where we are

Prototype built: 10 categories, 17 firms, 6 outside analyses, all AI drafts
with sources. The site has a map, filterable company list, detail pages with
sources, a sources page and an about page; checked at phone and desktop width
in light and dark. AI tools can read `llms.txt`, `data/radar.json` or the
Markdown files.

## Next steps

1. Switch on GitHub Pages (Settings → Pages → Deploy from branch `main`, `/`).
2. Leo reviews a few entries against their sources; set `verification: checked`.
3. Agree the open questions in SPEC.md (regions, who the rings are judged for).
4. Widen coverage with `/research-firm`, one category per session.
5. Then SPEC "Later" items: signals and trends, a visual radar, a ring rubric.

## Open questions

- See SPEC.md: regions, rings per client type, which AI tools will read it.
