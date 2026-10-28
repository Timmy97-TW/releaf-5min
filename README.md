# ReLEAF — 5-minute judging presentation

The GEMS Taiwan 2026 five-minute judging deck, rebuilt as a web page. Three views of one source:

- **[Script](https://timmy97-tw.github.io/releaf-5min/)** — every slide with what is said over it,
  the numbers behind it, and the answer to hold if a judge presses.
- **[Slides](https://timmy97-tw.github.io/releaf-5min/show.html)** — the nine slides, whole, one
  click at a time. This is the view to present from.
- **[With animation](https://timmy97-tw.github.io/releaf-5min/animate.html)** — plays itself
  against the five-minute clock, each figure arriving as the script reaches it.

## Presenting

**Slides** — `→ ↓ space` next, `← ↑` back, `1`–`9` jump, `f` full screen, `t` start or reset the
clock, `Esc` back to the script. The clock turns red past 5:00. `show.html#4` opens at slide 4.

**With animation** — `→` forward, `←` back, `space` play or pause, `1`–`9` jump, `r` restart,
`c` hide the spoken line, `f` full screen. Forward means the next slide, unless that slide still
has an animation waiting, in which case it fires that first. Nine slides and three animations is
twelve presses for the whole talk. It starts playing on its own against the 5:00 clock, and any
arrow key pauses it.

## How the animation is built

Five rules, Timmy's, 28 Oct:

1. Landing on a slide shows most of its content. Hold something back only when the
   delay is a key result and it means something.
2. Never hold back two results.
3. At most two animations on a slide, and most slides want none. The agar slide
   gets a highlight, not a zoom.
4. Nobody has time to drive this during a talk, so steps stay few.

Which comes to **three animations in the whole deck**, and **twelve steps** for
five minutes. Every slide lands whole; nothing anywhere is held back:

| Slide | Lands with | Animation |
| --- | --- | --- |
| 1 Why manufacture on the farm | everything | — |
| 2 The light-controlled circuit | everything | push onto the module diagram |
| 3 Does the circuit answer to light | everything | push onto the DNPH panel |
| 4 The hardware that contains it | everything | — |
| 5 What the reactor produced | everything | — |
| 6 Does the protectant protect | everything | the two key numbers highlight in place |
| 7 The same test in soil | everything | — |
| 8 What has moved since the freeze | everything | — |
| 9 Where this goes next | everything | — |

Each slide carries a `run` block in `assets/deck.js`: `cues` is zero to two
steps, each `{reveal}`, `{focus}` or `{hi: true}`. There is also a `base`, the
`--d` to reveal on landing — no slide uses it now, and a value there means
content is being held back, so it needs a reason. A slide lands in one quiet
fade with no stagger and no movement, and slide to slide is a plain cross-fade.

Slide 4 had a push onto its flow schematic, because the diagram read small. The
answer there was to crop the figure's own margins — the export carried 425 px of
white down its right edge — so it renders about 40 % wider in the same frame and
needs no camera at all. Reach for that before a zoom.

Three conventions to keep:

- `--d` on a `.st` element is its reveal order, counting from 0 **in the order the
  speaker reaches it**. It doubles as the stagger delay in the other two views, so
  it must never run backwards down the page. Items that land together share a
  number, and `base` / `reveal` name a `--d`.
- `data-f="key"` marks something the camera may move to. Put it on the figure, not
  on a wrapper — a wrapper with empty space beside the figure frames the empty
  space. A target earns a push only if it is worth 1.4x or more; anything
  full-height cannot zoom at all. Only two survive, on slides 2 and 3.
- `data-hi` marks a key result the highlight lifts in place, without moving it.

Each slide's `secs` is split between its steps, so the run totals 5:00.

## Build

No build step and no external requests.

```
index.html       the script page, with the contents index
show.html        the slideshow
animate.html     the animated run
assets/deck.js   slide markup, speaking script, numbers and beats
assets/deck.css  the 1600x900 stage and the nine slide layouts
assets/nav.js    the three view names, in one place
img/             figures exported from the team deck
```

Editing a slide, its script or its beats means editing `assets/deck.js` once; all three views
follow.
