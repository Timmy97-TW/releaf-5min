# ReLEAF — 5-minute judging presentation

The GEMS Taiwan 2026 five-minute judging deck, rebuilt as a web page.

- **[Slides and script](https://timmy97-tw.github.io/releaf-5min/)** — the nine slides stacked
  vertically, each with its speaking script, the numbers behind it, and the line to hold if a
  judge pushes back.
- **[Presentation view](https://timmy97-tw.github.io/releaf-5min/show.html)** — full-screen,
  one slide at a time, with a running clock.
- **[Focus view](https://timmy97-tw.github.io/releaf-5min/cinema.html)** — the same nine slides as
  33 camera moves. It pushes into one figure at a time, whites out everything around it, holds long
  enough to read it, and keeps a running tally of the 13 results we can prove.

## Focus view

The deck is the same; the camera does the pointing. Each beat names where to look, how long to dwell
there, and whether the take-away is **Confirmed** (a result in hand), **How it works** (what we made),
or **Stated honestly** (a limit, including the two that go against us). Thirteen beats are confirmed
results, and the closing card lists all thirteen.

| Key | Does |
| --- | --- |
| space | Pause or resume on the current beat |
| → ← | Step a beat |
| ↓ ↑ | Jump to the next or previous slide |
| 1–9 | Go to a slide |
| p | Deep pace (5:06) or brisk (2:58) |
| f | Full screen |
| r | Start over |

`cinema.html#go` skips the opening card and starts straight away. Beats live in `assets/beats.js`:
each one is a selector on the 1600×900 stage, a dwell time, and the line the judge reads while you
speak, so retiming or re-aiming the camera means editing one array.

## Presenting

| Key | Does |
| --- | --- |
| → ↓ space | Next slide |
| ← ↑ | Previous slide |
| 1–9 | Jump to a slide |
| f | Full screen |
| t | Start or reset the clock |

The clock starts on the first advance and turns red past 5:00. Clicking the left or right half of
the slide also moves between slides, and `show.html#4` opens straight at slide 4.

## Build

No build step and no external requests. Every slide is authored on a 1600×900 stage in
`assets/deck.js` and scaled to fit, so both views render the same markup.

```
index.html       slides with the script beside them
show.html        the presentation
cinema.html      the focus view and its camera engine
assets/deck.js   slide content and the speaking script
assets/beats.js  the camera beats: where to look, how long, what it proves
assets/deck.css  the stage and the nine slide layouts
img/             figures exported from the team deck
```

Editing a slide or its script means editing `assets/deck.js` once; both pages follow.
