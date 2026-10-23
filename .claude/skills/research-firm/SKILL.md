---
name: research-firm
description: Research a construction-technology company (or a whole category) for the AEC Tech Radar and write or update its entry in companies/. Use when Leo asks to add, research, update or re-check a firm or category, or types /research-firm.
---

# Research a firm for the radar

Follow `docs/METHOD.md` (the rules and field meanings). In short:

1. **Is it already here?** Look in `companies/`. If so, you're updating it:
   re-check every fact and look for news since `last_checked`.
2. **Search** (WebSearch; several in parallel): the company's own site, then
   independent coverage (trade press such as ENR, Construction Dive, AEC
   Magazine; funding news; databases). Search for news from the last 12
   months: acquisitions, closures, rebrands, big customers.
3. **Confirm the website** from a search result on that domain; never guess an
   address.
4. **Write the entry** by copying `companies/README.md`'s template. Only facts
   a source states. Disagreements are noted, not resolved by guessing. Vendor
   performance figures are labelled as the vendor's claims.
5. **Ring:** pick one and explain it in `ring_note`, phrased as a judgement.
6. **Check:** `python3 tools/build.py` must pass (it also rebuilds the data the
   site and AI tools read), and `python3 -m unittest discover tools`.
7. **Report back to Leo:** the summary, the ring and why, what you couldn't
   confirm, and which sources are the company's own. Leave
   `verification: ai-draft`; Leo marks entries `checked`.

For a **whole category**, first list candidate firms with a line each and one
source, agree the shortlist with Leo, then research each one. Searches cost
credits: about 2–4 per firm is normal.
