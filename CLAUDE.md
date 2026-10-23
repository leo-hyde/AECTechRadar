# Instructions for Claude

Claude reads this file at the start of every session in this project,
including cloud sessions started from Leo's phone. Keep it short and stable.
Leo's general rules are in `.claude/rules/playbook.md` (synced from
github.com/leo-hyde/claude-playbook): don't repeat them here.

What we're building: [SPEC.md](SPEC.md). How it looks: [DESIGN.md](DESIGN.md).
How it's built: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). How research is
done: [docs/METHOD.md](docs/METHOD.md). Where we are:
[docs/STATUS.md](docs/STATUS.md). Why: [docs/decisions.md](docs/decisions.md).

## About this project
- A research map of construction (AEC) technology firms, for Leo's advisory
  work, readable by people (the site) and AI tools (Markdown, JSON, llms.txt).
  Live at https://leo-hyde.github.io/AECTechRadar/
- **This repo is public.** No client names, client notes, or paid-database
  exports. Client-specific work belongs in a private repo.

## Commands
- Check and rebuild: `python3 tools/build.py` (needs `pip3 install pyyaml`)
- Tests: `python3 -m unittest discover tools`
- Preview: `python3 tools/serve.py 8000 .` then http://localhost:8000 (or open `index.html`; on the Mac, copy to the scratchpad first, see the playbook)
- Research a firm: the `/research-firm` skill

## Conventions
- **The `.md` files are the source of truth.** `data/radar.json`,
  `data/radar.js` and `llms.txt` are built from them: never edit those by
  hand; rebuild and commit them with the change.
- **Never let a fact in without a source**, and never guess a web address.
  Judgements (rings) are labelled as judgements. Only Leo sets
  `verification: checked`.
- Plain HTML/CSS/JS, no build step for the page; libraries are copied into
  `vendor/` (exact versions in the file names).
- Follow DESIGN.md for anything visual; check at 375px and desktop, light and
  dark.

## Gotchas
- YAML: quote any value containing `: ` (build.py says which line).
- Cloud sessions can't open most websites with curl (403); use WebSearch.
- `.nojekyll` must stay, or GitHub Pages turns the `.md` files into HTML pages
  and AI tools lose the raw Markdown.
