# AEC Tech Radar: Design Guide

Based on the playbook's design guide and tokens (`style.css`).

## Principles
1. **Glance first.** The map's top card shows how many firms sit in each ring.
2. **Evidence is always one tap away.** Every firm page lists its sources and
   says which are the company's own.
3. **Judgements look different from facts.** The ring sits in its own
   bordered "Radar view" box, labelled as a judgement.
4. **Never colour alone.** Rings are coloured and named.
5. **Phone first.** Bottom tab bar under 600px; nothing wider than the screen.
6. **Follow the phone** for light or dark.

## Ring colours
| Ring | Light (text / background) | Dark |
|---|---|---|
| Adopt | #15803d / #dcfce7 | #86efac / #12301f |
| Trial | #1d4ed8 / #dbeafe | #93c5fd / #172a4d |
| Assess | #92400e / #fef3c7 | #fcd34d / #3a2e0c |
| Hold | #4b5563 / #e5e7eb | #cbd5e1 / #2a313c |

## Components
Cards, chips (firm names with a ring dot), tags (small grey labels), ring
badges, a facts list, and "See the source file" / "Correct it on GitHub"
buttons on every detail page.

## UX review
First check (23 Oct 2026): all pages at 375px and 1280px, light and dark: no
sideways scrolling, no script errors. A full pass through the playbook's
`reference/ux-checklist.md` hasn't been done yet.
