# AEC Tech Radar: how it looks

Based on the design guide in Leo's playbook, and the shared colours and
sizes set in `style.css`.

## Principles
1. **See the picture at a glance.** The map's top card shows how many firms
   sit in each ring.
2. **Evidence is always one tap away.** Every firm's page lists its sources
   and says which ones the company wrote itself.
3. **Judgements look different from facts.** The ring sits in its own box
   with a border, headed "Radar view" and labelled as a judgement.
4. **Never rely on colour alone.** Each ring has a colour and its name.
5. **Phone first.** On screens narrower than 600 pixels, the menu becomes a
   bar of tabs at the bottom. Nothing is wider than the screen.
6. **Follow the phone's setting** for light or dark mode.

## Ring colours
| Ring | Light mode (text / background) | Dark mode |
|---|---|---|
| Adopt | #15803d / #dcfce7 | #86efac / #12301f |
| Trial | #1d4ed8 / #dbeafe | #93c5fd / #172a4d |
| Assess | #92400e / #fef3c7 | #fcd34d / #3a2e0c |
| Hold | #4b5563 / #e5e7eb | #cbd5e1 / #2a313c |

## Building blocks
Cards (boxes of content); chips (firm names with a dot in their ring's
colour); tags (small grey labels); ring badges; a list of facts; and two
buttons on every entry's page: "See the source file" and "Correct it on
GitHub".

## Usability check
First check (23 Oct 2026): every page at phone width (375 pixels) and desktop
width (1280), in light and dark mode. No sideways scrolling and no errors. We
haven't yet done a full pass through the playbook's usability checklist
(`reference/ux-checklist.md`).
