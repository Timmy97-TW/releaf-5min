# ReLEAF — 5-minute judging presentation

The GEMS Taiwan 2026 five-minute judging deck, rebuilt as a web page. Four views of one source:

- **[Script](https://timmy97-tw.github.io/releaf-5min/)** — every slide with what is said over it,
  the numbers behind it, and the answer to hold if a judge presses.
- **[Slides](https://timmy97-tw.github.io/releaf-5min/show.html)** — the ten slides, whole, one
  click at a time. This is the view to present from.
- **[Slides + script](https://timmy97-tw.github.io/releaf-5min/notes.html)** — one slide at a time
  with its script beside it and who says it. This is the view to rehearse from.
- **[Short deck](https://timmy97-tw.github.io/releaf-5min/short.html)** — the same five minutes in
  seven slides: the bioreactor on one slide, all three plant systems on another.

There is no animated view and no camera moves. A slide lands whole in one quiet fade, and slide to
slide is a plain cross-fade. If a figure reads too small, crop the figure's own margins rather
than zooming at it.

## The titles say the finding

Every title is a sentence with a verb that states what the slide proves, written against
[Say It In The Title](https://timmy97-tw.github.io/say-it-in-the-title/principles.html). The old
topic labels — "Optogenetic Circuit", "Plant Assays - Agar", "After Wiki Freeze" — named the
folder the work lives in. A judge has about thirty seconds a slide and came for the finding.

Where a title carries a number, that number is read off the chart on the same slide, so the
speaker cannot drift from what the audience can see.

| # | Title | At |
| --- | --- | --- |
| 1 | Build the protectant on the farm, not in a factory | 0:00 |
| 2 | Green light switches the cells on, red light switches them off | 0:34 |
| 3 | Equal ACCD under both lights, but activity only under green at 13 h | 1:08 |
| 4 | A 0.2 µm hollow-fibre membrane keeps the cells in and lets the protectant out | 1:38 |
| 5 | Nothing grew from the shell side, but the protectant crossed it | 2:08 |
| 6 | ACCD raised chlorophyll 40% under heat; LEA14 and BoPEP4 under salt | 2:42 |
| 7 | Treating with the heat restored chlorophyll; treating after did not | 3:10 |
| 8 | In hydroponics, ACCD more than doubled chlorophyll under salt | 3:34 |
| 9 | Since the freeze, green light runs inside the reactor | 3:58 |
| 10 | Make it swappable, make it checkable, then put it in a field | 4:22 |

## Who says what

Taken from the 6 Nov script's own Name column, and carried on every slide's data so the views
cannot disagree about it:

| Slides | Speaker |
| --- | --- |
| 1–3 | Chloe |
| 4–5 | Jac |
| 6–8 | Abigail |
| 9–10 | Jac |

Three handovers. The contents index rules a line at each one and marks it **takes over**; the
Slides view puts the speaker in a chip beside the title, filled olive on a handover slide; the
Slides + script view names the speaker above the script and heads it "Chloe says". The speaker is
deliberately **not** printed on the slide itself — that is for the team, not the judges.

## The node strip

The deck used to return to a full-screen five-thumbnail menu between every section — five slide
changes spent on navigation inside a five-minute talk. The strip replaces it: the same five
things, small, in the same order, across the top of **every** slide, with the current one lit and
the ones already spoken dimmed.

It lives inside the 1600x900 stage rather than in the browser chrome, so it is part of the slide
in all four views. It also replaces the per-slide kicker — the strip is what says where you are.

A slide declares `node: 1`–`5`, `node: [3,4]` when one slide covers two of them (the short deck's
bioreactor slide), or `node: 0` for the opening and the two closing slides, which are not part of
the five. `sub` puts one word under the lit node, which is how the three plant slides say which
system they are on.

## The progress hint, and landing at 4:50

Beside the nodes is a rail of one segment per slide, each as wide as that slide's share of the
running time, so it says both which slide and how much talk is left. The label reads `by 2:42` —
the clock reading the speaker should see on landing there.

The plan totals **4:50**, not 5:00, so the ten seconds of overrun that every talk collects still
land inside the limit. Press `t` in the Slides or Short deck view and a caret appears on the rail
showing the real clock against the plan. Caret to the right of the lit segment means you are
running behind; it turns red when you are more than four seconds late on that slide. That is the
only thing worth knowing mid-sentence.

## Presenting

**Slides / Short deck** — `→ ↓ space` next, `← ↑` back, `1`–`9` and `0` for ten jump, `f` full
screen, `t` start or reset the clock, `Esc` back to the script. `show.html#4` opens at slide 4.

**Slides + script** — the same keys, minus full screen. The clock starts on the first advance and
the pace caret runs on the slide's own rail, so you can rehearse against 4:50 while reading the
script. `notes.html#4` opens at slide 4.

## Entrances

A slide lands in one fade with a short stagger and nothing else. `--d` on a `.st` element is its
entrance order, counting from 0 in the order the speaker reaches it; it is the stagger delay, so
it must never run backwards down the page, and items that land together share a number.

Slide 4's flow schematic used to get a camera push because the diagram read small. The answer was
to crop the figure's own margins — the export carried 425 px of white down its right edge — so it
renders about 40 % wider in the same frame. Reach for that, not for a zoom.

## Numbers

Every number on a slide was read off this deck's own charts, not carried over from an earlier
version. Four things the written script gets wrong against them, all corrected here and flagged
in each slide's **If pressed** note:

- Agar chlorophyll is **40%** (1.00 → 1.40), not 35%, and not the 53% an older deck printed.
- Agar root length rose about **6 mm** (40.9025 → 46.857), not "4.8 cm".
- The rebuilt red light plate is **660 nm**, which is what the slide shows; the script says 670.
- The reactor run is **2.5 to 6.5 µg/mL**. The old "2.5 to 8.5, control 1.3" mixed two different
  charts and a light-plate control, and there is no plasmid-free control bar on either reactor
  ELISA.

The deck states no n and no statistical test anywhere, so no title claims significance.

## Build

No build step and no external requests.

```
index.html           the script page, with the contents index
show.html            the ten-slide show
notes.html           one slide at a time with its script beside it
short.html           the seven-slide show
assets/deck.js       slide markup, speaker, speaking script, numbers, and the node strip
assets/deck-short.js the two merged slides; the other five reference the long deck
assets/present.js    the slideshow, shared by show.html and short.html
assets/deck.css      the 1600x900 stage and every slide layout
assets/nav.js        the four view names, in one place
img/                 figures exported from the team deck
```

Editing a slide, its script or its beats means editing `assets/deck.js` once; every view follows.
The short deck references slides 1, 2, 3, 9 and 10 rather than copying them, so an edit there
lands on both decks.
