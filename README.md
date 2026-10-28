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

**With animation** — `space` play or pause, `← →` step a beat, `↑ ↓` a whole slide, `1`–`9` jump,
`r` restart, `c` hide the spoken line, `f` full screen. It starts playing on its own, and any
arrow key pauses it so you can sit on a beat.

## How the animation is built

Each slide carries a `beats` array in `assets/deck.js`: one entry per spoken line, saying how far
down the slide to reveal and whether the camera sits wide or on one figure.

The deck holds **four camera moves in five minutes** — slides 2, 3, 4 and 7. Everything else is
revealed on a still frame, because a push of less than about 1.4× is motion without payoff, and a
full-height target cannot zoom at all. A beat with no target after a beat with one is the zoom back
out, and it is usually also the moment new figures arrive.

Two conventions the animation depends on:

- `--d` on a `.st` element is its reveal order, counting from 0 **in the order the speaker reaches
  it**. It doubles as the stagger delay in the other two views, so it must never run backwards down
  the page. Items that should land together share a number.
- `data-f="key"` marks something the camera may move to. Put it on the figure, not on a wrapper —
  a wrapper with empty space beside the figure frames the empty space.

Beat durations come from each slide's `secs`, split by how much there is to say, so the run totals
5:00.

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
