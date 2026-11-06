/* ReLEAF — the short deck
   ---------------------------------------------------------------------------
   Seven slides instead of ten. The long deck gives the bioreactor two slides
   (hardware, then results) and the plants three (agar, soil, hydroponics).
   Here each of those is one slide, which buys four fewer slide changes and
   about twenty more seconds on the two slides a judge actually argues with.

   The price is that each merged slide carries more than one claim, which the
   title has to admit. That is the trade being explored, not an oversight.

   Slides 1, 2, 3, 6 and 7 are the long deck's own slides, referenced rather
   than copied, so an edit there lands here too. Only the two merged slides are
   authored in this file.

   Loads after deck.js, which provides F(), NODES, nodeBar() and stageHTML().
   =========================================================================== */

const L = n => SLIDES.find(s => s.n === n);

const SLIDES_SHORT = [
  /* ---- 1, 2, 3 are the long deck's, with more time on each ---- */
  {...L(1), n: 1, time: '0:00', secs: 38},
  {...L(2), n: 2, time: '0:38', secs: 38},
  {...L(3), n: 3, time: '1:16', secs: 34},

  /* ---------------------------------------------------------- 4 */
  {
    n: 4, time: '1:50', secs: 54,
    node: [3, 4],
    sub: 'build and run',
    title: 'No cells crossed the 0.2 µm membrane, and the protectant kept coming for 72 hours',
    nav: 'The reactor, built and run',
    stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">No cells crossed the <em>0.2 µm</em> membrane, and the protectant kept coming for <em>72 hours</em></h2></div>
<div class="s-body sbr">
  <div class="col">
    <p class="cap st" style="--d:1">The system we built</p>
    ${F('s4-system', 'Flow schematic: culture chamber, pump, flow meter, inline photometer, hollow-fibre membrane, pressure transducers and output bottle', 416, '', 2)}
    <div class="spec">
      <div class="st" style="--d:3"><b>0.2 µm</b><span>pore size, 11 fibres, 200 cm²</span></div>
      <div class="st" style="--d:3"><b>0.5 L</b><span>culture, 280&ndash;300 mL/min</span></div>
      <div class="st" style="--d:3"><b>72 h</b><span>continuous run</span></div>
    </div>
  </div>
  <div class="col">
    <p class="cap st" style="--d:4">The cells stayed in</p>
    ${F('s5-containment', 'Lumen side plate covered in colonies, shell side plate clear', 258, '', 5)}
    <p class="cap st" style="--d:6;margin-top:20px">The protectant got out</p>
    ${F('s5-secretion', 'ELISA concentrations on the lumen and shell sides at 1, 16, 24 and 40 hours', 258, '', 7)}
  </div>
  <div class="col">
    <p class="cap st" style="--d:8">And kept being made</p>
    <div class="charts">
      ${F('s5-elisa', 'ELISA concentration against time, 1 to 72 hours', 188, '', 9)}
      ${F('s5-dnph', 'DNPH volumetric activity against time, 1 to 72 hours', 188, '', 10)}
      ${F('s5-spec', 'Specific activity against time, 1 to 72 hours', 188, '', 11)}
    </div>
  </div>
</div>`,
    run: {
      say: 'The reactor and what it did, together. Culture runs through a hollow-fibre module with 0.2 µm pores. The lumen plate grows a lawn and the shell plate stays clear, so the cells do not cross. The ELISA finds the protectant on both sides, so it does. And across 72 hours the titre and the activity keep coming, with activity peaking around 18 hours.',
      cues: []
    },
    script: {
      lead: 'To contain the engineered <i class="sp">B. subtilis</i> we built a closed hollow-fibre bioreactor, and ran it.',
      body: [
        'Culture is pumped from a 0.5 L chamber past a flow meter and an inline photometer into a hollow-fibre module of 0.2 µm pores, 11 fibres and 200 cm². The cells stay on the lumen side and return; soluble protectant leaves in the product stream.',
        'Containment is a plate test on both sides. The lumen side grows a lawn, the shell side is clear.',
        'Secretion is the ELISA on both sides of the same run, 7.80 inside against 5.89 outside at 1 h, and by 24 and 40 h the shell side reads at or above the lumen, so the protein crosses freely while the cells do not.',
        'Production runs 72 hours between 2.5 and 6.5 µg/mL. Activity is the sharper signal: it jumps about thirteenfold at 18 h and specific activity then holds between 6 and 8 U/mg to 72 h.'
      ],
      numbers: [
        ['Membrane', '0.2 µm, 11 fibres, 200 cm²'],
        ['Culture', '0.5 L, 280 to 300 mL/min'],
        ['Lumen vs shell, 1 h', '7.80 vs 5.89 µg/mL'],
        ['Lumen vs shell, 40 h', '4.64 vs 5.65 µg/mL'],
        ['Production ELISA', '2.5 to 6.5 µg/mL across 72 h'],
        ['Peak activity', '18 h, 0.038 U/mL — about 13x the 12 h value'],
        ['Replication', 'n = 1 per time point']
      ],
      careful: 'Two claims live on this slide, so say them in order and do not let them blur: containment first, then production. There is no plasmid-free control bar on either reactor ELISA chart, so do not quote 1.3 µg/mL here — that is a light-plate number. The old &ldquo;2.5 to 8.5 µg/mL&rdquo; figure mixed two different charts; this run is 2.5 to 6.5. &ldquo;72 hours&rdquo; is true of the production charts only, as the lumen-versus-shell ELISA stops at 40 h. Every time point is a single sample. The built photometers and their calibration curve are off this slide; they are a Measurement answer, not a containment one.'
    }
  },

  /* ---------------------------------------------------------- 5 */
  {
    n: 5, time: '2:44', secs: 58,
    node: 5,
    sub: 'three systems',
    title: 'ACCD raised chlorophyll in all three systems, and timing decided how much',
    nav: 'Agar, soil and hydroponics together',
    stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">ACCD raised chlorophyll in <em>all three systems</em>, and timing decided how much</h2></div>
<div class="s-body spl">
  <div class="col">
    <div class="hd st" style="--d:1"><h3>On agar</h3>
      <p>ACCD before 37 °C heat, 18-day <i class="sp">Arabidopsis thaliana</i></p></div>
    <div class="pair">
      <div>${F('s6-heat-without', 'Seedling roots without ACCD under heat stress', 196, 'ph', 2)}<p class="lbl">Without</p></div>
      <div>${F('s6-heat-with', 'Seedling roots with ACCD under heat stress', 196, 'ph', 3)}<p class="lbl">With ACCD</p></div>
    </div>
    ${F('s6-heat-chl', 'Relative chlorophyll content under 37 °C heat, with and without ACCD', 236, '', 4)}
    <p class="pv st" style="--d:5">Chlorophyll 1.00 &rarr; 1.40, roots 40.9 &rarr; 46.9 mm</p>
  </div>

  <div class="col">
    <div class="hd st" style="--d:6"><h3>In soil</h3>
      <p>Five days at 37 °C, treating with the stress against treating after</p></div>
    <div class="trio">
      <div>${F('s7-heat-without', 'Heat-stressed pot without ACCD', 196, 'ph', 7)}<p class="lbl">None</p></div>
      <div>${F('s7-heat-co', 'Heat-stressed pot with co-treatment ACCD', 196, 'ph', 8)}<p class="lbl">With</p></div>
      <div>${F('s7-heat-post', 'Heat-stressed pot with post-treatment ACCD', 196, 'ph', 9)}<p class="lbl">After</p></div>
    </div>
    ${F('s7-heat-chart', 'Relative chlorophyll content at 22 °C and under 37 °C heat for the three treatments', 236, '', 10)}
    <p class="pv st" style="--d:11">Co-treatment back to 1.00; treating after, 0.48</p>
  </div>

  <div class="col">
    <div class="hd st" style="--d:12"><h3>In hydroponics</h3>
      <p>ACCD at 1:40, 100 mM NaCl against an unsalted reference</p></div>
    <div>${F('s8-salt-trays', 'Hydroponic rafts in the control condition and in 100 mM NaCl', 196, 'ph', 13)}</div>
    ${F('s8-salt-chlorophyll', 'Relative chlorophyll content at 0 and 100 mM NaCl for the plasmid-free control and ACCD', 236, '', 14)}
    <p class="pv st" style="--d:15">2.23 against 0.99 at 100 mM</p>
    <p class="open st" style="--d:16">Unsalted ACCD sits at 0.82, below its own control, and we cannot yet explain it.</p>
  </div>
</div>`,
    run: {
      say: 'Three cultivation systems, one protectant. On agar, ACCD before the heat holds roots at 46.9 against 40.9 millimetres. In soil the ordering decides it: treating with the heat recovers chlorophyll to the unstressed level, treating afterwards drops to 0.48, below the untreated control. In hydroponics at 100 mM salt it reaches 2.23 against 0.99. The unsalted arm sits below its own control and we do not yet know why.',
      cues: []
    },
    script: {
      lead: 'We tested the protectants in three cultivation systems, from the simplest to the closest to a field.',
      body: [
        'On agar, ACCD applied before 37 °C heat raises chlorophyll and lengthens primary roots, 46.9 against 40.9 mm, and chlorophyll from 1.00 to 1.40, a 40% rise. LEA14 and BoPEP4 both show protective effects under 100 mM NaCl on the same plates.',
        'In soil, following Professor Cheng’s feedback, the timing separates. Co-treatment restores chlorophyll to the unstressed level. Post-treatment does not, and in fact sits below the untreated stressed control.',
        'In hydroponics at a 1:40 dilution, ACCD reaches 2.23 against a control of 0.99 under 100 mM NaCl.'
      ],
      numbers: [
        ['Agar, chlorophyll', '1.00 vs 1.40 — a 40% rise'],
        ['Agar, root length', '40.9 vs 46.9 mm'],
        ['Soil, 22 °C reference', '1.00'],
        ['Soil, heat untreated', '0.83'],
        ['Soil, co-treatment', '1.00 — back to the reference'],
        ['Soil, post-treatment', '0.48 — below the untreated control'],
        ['Hydroponics, 100 mM', '0.99 control vs 2.23 ACCD'],
        ['Hydroponics, 0 mM', '0.99 control vs 0.82 ACCD']
      ],
      careful: 'This slide is three independent experiments under one title, which is the cost of the short deck — say the three claims in order rather than gesturing at the row. Three things a judge can press: post-treatment going below the untreated control, the unsalted ACCD dip at 0.82, and the y-axis changing between systems (mg/L on agar and in soil, relative per plant amount in hydroponics), which means the three cannot be read off one scale. LEA14 and BoPEP4 are spoken, not shown, on this version.'
    }
  },

  /* ---- 6 and 7 are the long deck's closing slides ---- */
  {...L(9),  n: 6, time: '3:42', secs: 32},
  {...L(10), n: 7, time: '4:14', secs: 36}
];

if (typeof module !== 'undefined') module.exports = SLIDES_SHORT;
