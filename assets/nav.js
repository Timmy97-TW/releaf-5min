/* The four views, named once. Every page draws its switcher from this list,
   so a rename happens here and nowhere else. */
const VIEWS = [
  {id: 'script',  href: 'index.html',   label: 'Script',
   blurb: 'Every slide with what is said over it, the numbers behind it and the answer if a judge presses.'},
  {id: 'slides',  href: 'show.html',    label: 'Slides',
   blurb: 'The ten slides, whole, one click at a time. This is the view to present from.'},
  {id: 'notes',   href: 'notes.html',   label: 'Slides + script',
   blurb: 'One slide at a time with its script beside it, and who says it. The view to rehearse from.'},
  {id: 'short',   href: 'short.html',   label: 'Short deck',
   blurb: 'The same five minutes in seven slides: the bioreactor on one, all three plant systems on another.'}
];

function viewSwitcher(current, dark) {
  return `<nav class="vsw${dark ? ' on-dark' : ''}" aria-label="View">` +
    VIEWS.map(v => `<a href="${v.href}"${v.id === current ? ' aria-current="page"' : ''}>${v.label}</a>`).join('') +
    `</nav>`;
}

/* The two originals this site is built from, named once like the views.
   They are the team's working documents, so they open in a new tab and this
   site never tries to read them. */
const SOURCES = [
  {id: 'canva', label: 'Canva deck',
   href: 'https://www.canva.com/design/DAHY4r-W8bo/mDhTtt1rfbU4dYojBM1x4g/edit',
   blurb: 'The slides themselves, where the team edits them.'},
  {id: 'doc', label: 'Script doc',
   href: 'https://docs.google.com/document/d/177lxIp4KvbF6ruB3DkdfH3BUx79MHEJS33VinNvWumg/edit?tab=t.0',
   blurb: 'The speaking script, with its per-slide timings and the Name column.'}
];

function sourceLinks(dark) {
  return `<nav class="src${dark ? ' on-dark' : ''}" aria-label="The originals">` +
    SOURCES.map(s =>
      `<a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label}<i aria-hidden="true">&#8599;</i></a>`
    ).join('') + `</nav>`;
}
