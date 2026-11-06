/* The presenting view, shared by show.html (ten slides) and short.html (seven).
   ---------------------------------------------------------------------------
   Both pages are the same machine pointed at a different slide array, so a fix
   to the clock, the keys or the pace caret lands on both. Call it with the deck
   to mount and the id the view switcher should mark as current.

   Keys: arrows / space / Page / Enter to move, Home and End, 1-9 and 0 for
   slide ten, f for full screen, t to start or reset the clock, Escape to leave.
*/
function mountDeck(DECK, viewId) {
  document.getElementById('vsw').innerHTML = viewSwitcher(viewId);
  const srcSlot = document.getElementById('src');
  if (srcSlot) srcSlot.innerHTML = sourceLinks();

  const frame = document.getElementById('frame');
  frame.innerHTML = DECK.map((s, i) =>
    `<div class="slide" data-i="${i}"><div class="stage">${stageHTML(DECK, i)}</div></div>`).join('');
  const slides = [...frame.querySelectorAll('.slide')];
  const dots = document.getElementById('dots');
  dots.innerHTML = DECK.map((s, i) => `<b data-i="${i}" title="${s.title}"></b>`).join('');
  const dotEls = [...dots.querySelectorAll('b')];
  const planTotal = DECK.reduce((a, s) => a + s.secs, 0);

  let cur = 0;

  function fit() {
    const pad = 56;
    const w = innerWidth - pad * 2, h = innerHeight - pad * 2;
    const s = Math.min(w / 1600, h / 900);
    frame.style.width = (1600 * s) + 'px';
    frame.style.height = (900 * s) + 'px';
    frame.querySelectorAll('.stage').forEach(st => st.style.transform = `scale(${s})`);
  }
  addEventListener('resize', fit); fit();

  function go(i, instant) {
    i = Math.max(0, Math.min(DECK.length - 1, i));
    if (i === cur && !instant) return;
    slides[cur].classList.remove('on');
    cur = i;
    const el = slides[cur];
    el.classList.add('on');
    /* restart the entrance steps each time the slide is shown */
    const st = el.querySelector('.stage');
    st.classList.remove('go');
    void st.offsetWidth;
    st.classList.add('go');
    dotEls.forEach((d, k) => d.classList.toggle('on', k === cur));
    document.getElementById('ct').textContent =
      String(cur + 1).padStart(2, '0') + ' / ' + String(DECK.length).padStart(2, '0');
    const handover = cur === 0 || DECK[cur-1].speaker !== DECK[cur].speaker;
    document.getElementById('where').innerHTML =
      `<i class="spk${handover ? ' hand' : ''}">${DECK[cur].speaker}</i>` +
      `<b>${DECK[cur].title}</b>`;
    document.getElementById('barI').style.width = ((cur + 1) / DECK.length * 100) + '%';
    location.hash = cur + 1;
  }

  addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) { e.preventDefault(); go(cur + 1); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(DECK.length - 1);
    else if (e.key === 'f') toggleFull();
    else if (e.key === 't') toggleTimer();
    else if (e.key === 'Escape') location.href = 'index.html';
    else if (/^[0-9]$/.test(e.key)) go(e.key === '0' ? 9 : +e.key - 1);
  });
  document.getElementById('next').onclick = () => go(cur + 1);
  document.getElementById('prev').onclick = () => go(cur - 1);
  document.getElementById('full').onclick = toggleFull;
  dotEls.forEach(d => d.onclick = () => go(+d.dataset.i));
  frame.addEventListener('click', e => go(e.clientX < innerWidth / 2 ? cur - 1 : cur + 1));

  function toggleFull() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }

  /* The pace caret on the node strip's progress rail. The rail is planned time;
     the caret is the clock. Caret past the lit segment means the talk is running
     behind, which is the only thing a speaker needs to know mid-sentence.
     Painted on every slide so switching shows it at once. */
  function paintCaret(sec) {
    frame.querySelectorAll('.nodebar').forEach(bar => {
      const c = bar.querySelector('.caret');
      if (!c) return;
      const due = +bar.dataset.at + DECK[+bar.dataset.slide].secs;
      c.classList.add('on');
      c.style.left = Math.min(100, sec / (+bar.dataset.total) * 100) + '%';
      c.classList.toggle('late', sec > due + 4);
    });
  }

  /* presentation clock: starts on the first advance, t resets it */
  let t0 = null, tick = null;
  const tm = document.getElementById('tm');
  function startClock() {
    if (t0) return;
    t0 = Date.now();
    tick = setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000);
      tm.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
      tm.style.color = s > planTotal ? '#a33' : '';
      paintCaret(s);
    }, 250);
  }
  function toggleTimer() {
    if (tick) { clearInterval(tick); tick = null; t0 = null; tm.textContent = '0:00'; tm.style.color = ''; }
    else startClock();
  }
  ['next', 'prev'].forEach(id => document.getElementById(id).addEventListener('click', startClock));
  addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === ' ') startClock(); });

  /* chrome fades out while idle */
  const chrome = [...document.querySelectorAll('.chr')];
  let idle;
  function wake() {
    chrome.forEach(c => c.classList.add('show'));
    clearTimeout(idle);
    idle = setTimeout(() => chrome.forEach(c => c.classList.remove('show')), 2600);
  }
  ['mousemove', 'keydown', 'click', 'touchstart'].forEach(ev => addEventListener(ev, wake));
  wake();

  /* touch */
  let tx = null;
  addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive: true});
  addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) go(dx < 0 ? cur + 1 : cur - 1);
    tx = null;
  }, {passive: true});

  const hashIndex = () => {
    const n = parseInt(location.hash.slice(1), 10);
    return Number.isFinite(n) && n >= 1 ? n - 1 : 0;
  };
  addEventListener('hashchange', () => { if (hashIndex() !== cur) go(hashIndex()); });
  go(hashIndex(), true);
}
