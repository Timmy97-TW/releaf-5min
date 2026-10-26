# ReLEAF — 5-minute judging presentation

The GEMS Taiwan 2026 five-minute judging deck, rebuilt as a web page.

- **[Slides and script](https://timmy97-tw.github.io/releaf-5min/)** — the nine slides stacked
  vertically, each with its speaking script, the numbers behind it, and the line to hold if a
  judge pushes back.
- **[Presentation view](https://timmy97-tw.github.io/releaf-5min/show.html)** — full-screen,
  one slide at a time, with a running clock.

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
index.html      slides with the script beside them
show.html       the presentation
assets/deck.js  slide content and the speaking script
assets/deck.css the stage and the nine slide layouts
img/            figures exported from the team deck
```

Editing a slide or its script means editing `assets/deck.js` once; both pages follow.
