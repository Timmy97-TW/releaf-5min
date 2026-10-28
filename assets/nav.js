/* The three views, named once. Every page draws its switcher from this list,
   so a rename happens here and nowhere else. */
const VIEWS = [
  {id: 'script',  href: 'index.html',   label: 'Script',
   blurb: 'Every slide with what is said over it, the numbers behind it and the answer if a judge presses.'},
  {id: 'slides',  href: 'show.html',    label: 'Slides',
   blurb: 'The nine slides, whole, one click at a time. This is the view to present from.'},
  {id: 'animate', href: 'animate.html', label: 'With animation',
   blurb: 'Plays itself against the five-minute clock. Each figure arrives as the script reaches it.'}
];

function viewSwitcher(current, dark) {
  return `<nav class="vsw${dark ? ' on-dark' : ''}" aria-label="View">` +
    VIEWS.map(v => `<a href="${v.href}"${v.id === current ? ' aria-current="page"' : ''}>${v.label}</a>`).join('') +
    `</nav>`;
}
