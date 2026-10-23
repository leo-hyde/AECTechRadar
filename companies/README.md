# Companies

One file per company, named after it in lower case with hyphens
(`one-click-lca.md`). The fields are explained in
[docs/METHOD.md](../docs/METHOD.md). After any change run
`python3 tools/build.py`: it checks every file and rebuilds the data the site
reads. Template:

```markdown
---
name: Example Ltd
summary: One sentence on what it does.
website: https://www.example.com
hq: City, Country
founded: 2020
type: startup
status: active
categories: [site-capture-progress]
ai_role: core
ring: assess
ring_note: "Why this ring, phrased as a judgement. Quote text containing ': '."
verification: ai-draft
last_checked: 2026-10-23
sources:
  - title: The article or page title
    publisher: Who published it
    url: https://...
    kind: news
    supports: which facts this source backs
    date: 2026-01-31
  - title: Company product page
    publisher: Example Ltd
    url: https://www.example.com/product
    kind: company
    supports: what the product does
---
## What it does

## Why it matters for an AI-native firm

## Evidence and caveats

## To check
```
