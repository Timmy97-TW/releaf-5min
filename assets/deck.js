/* ReLEAF — 5-minute judging presentation
   ---------------------------------------------------------------------------
   One slide source, three views:
     index.html    Script      every slide with what is said over it
     show.html     Slides      click through at your own pace
     animate.html  With animation   plays itself, timed to the script

   Every slide is authored on a 1600x900 stage; the body box is 1448x652 at
   (76,190).

   `run` is what the animated view does with a slide, and it is kept deliberately
   thin. Five rules, in Timmy's words, that an edit must not break:

     1. Landing on a slide shows most of its content. Hold something back only
        when the delay is a key result and means something.
     2. Never hold back two results.
     3. At most two animations on a slide, and most slides want none. The agar
        slide gets a highlight, not a zoom.
     4. Nobody has time to drive this during a talk, so steps stay few.

   Which gives five animations in the whole deck: one reveal (slide 1), three
   camera pushes (2, 3, 4) and one highlight (6). Slides 5, 7, 8 and 9 land
   whole and never move.

     base    the --d revealed on landing. Omitted means all of it.
     cues    0 to 2 steps, each {reveal: <--d>} | {focus: <data-f>} | {hi: true}

   Three conventions the view depends on:
   * `--d` on a `.st` element is its reveal order, counting up from 0 **in the
     order the speaker reaches it**. It is a stagger delay in the other two
     views and a reveal threshold here, so it must never go backwards down the
     page. Items that land together share a number.
   * `data-f="key"` marks something the camera may move to. Put it on the figure,
     never on a wrapper with empty space beside it. A target earns a push only
     if it is worth 1.4x or more; anything full-height cannot zoom at all.
   * `data-hi` marks a key result the highlight cue lifts in place, without
     moving anything.
   --------------------------------------------------------------------------- */

const F = (src, alt, h, cls, d, f) =>
  `<figure class="fig ${cls || ''} st zoom"${f ? ` data-f="${f}"` : ''} style="height:${h}px;--d:${d || 0}">` +
  `<img src="img/${src}.webp" alt="${alt}"></figure>`;

const SLIDES = [
  /* ---------------------------------------------------------- 1 */
  {
    n: 1, time: '0:00', secs: 50,
    kicker: 'The problem',
    title: 'On-site manufacturing',
    nav: 'Why manufacture on the farm',
    stage: `
<div class="s1">
  <div class="s1-left st" style="--d:0">
    <img src="img/s1-field.webp" alt="Cracked, dry farmland under a low sun">
    <div class="s1-scrim"></div>
    <div class="s1-copy">
      <p class="s1-kick st" style="--d:1">The problem</p>
      <ul class="s1-list">
        <li class="st" style="--d:2"><b>Rising climate stress on crops</b></li>
        <li class="st" style="--d:3"><b>Field deployment challenge for academic protectants</b></li>
        <li class="st" style="--d:4"><b>High costs</b><span>Production, transport and storage</span></li>
        <li class="st" style="--d:5"><b>Public concerns</b><span>GMO bacteria in the field</span></li>
      </ul>
    </div>
  </div>
  <div class="s1-right">
    <p class="s-kick st" style="--d:6">Our ReLEAF system</p>
    <h2 class="s-title st" style="--d:7">On-site <em>biomanufacturing</em></h2>
    <ol class="s1-rail">
      <li class="st" style="--d:8"><b>Local bioreactors</b><span>Cut transport cost, bridging the gap to farmers</span></li>
      <li class="st" style="--d:9"><b>Optogenetic control</b><span>On-demand production to minimise storage</span></li>
      <li class="st" style="--d:10"><b><i class="sp">Bacillus subtilis</i> and hollow-fibre filtration</b><span>Separates bacteria from protectants, bypasses processing and prevents bacterial release</span></li>
      <li class="st" style="--d:11"><b>A new platform</b><span>Practical field deployment of engineered bioprotectants</span></li>
    </ol>
    <img class="s1-box st zoom" style="--d:12" src="img/s1-reactor.webp" alt="The ReLEAF bioreactor unit, front view">
  </div>
</div>`,
    run: {
      base: 5,
      say: 'As temperatures rise, crops fail under the stress — and the protectants that answer it stay in the lab, behind cost, public acceptance and the journey to the farm.',
      cues: [
        {reveal: 12, say: 'That is why we created ReLEAF: an on-site biomanufacturing unit that makes the protectant where and when the crop needs it.'}
      ]
    },
    script: {
      lead: 'As temperatures rise year by year, crops increasingly fail to respond to the rising climate stress.',
      body: [
        'Protectants exist, yet they are ready only in labs and often come at costs too high for farmers to access them.',
        'Three things keep them there. Production, transport and storage are expensive. Spraying engineered bacteria on a field is not acceptable to the public. And a protectant made centrally has to survive the journey to the farm.',
        'That is why we created ReLEAF — an on-site biomanufacturing unit to respond to crop stress precisely when and where it is needed.',
        'ReLEAF moves manufacturing to the farm. A local bioreactor removes the transportation costs, optogenetic control produces protein on demand instead of in a warehouse, and a hollow-fibre membrane keeps <i class="sp">Bacillus subtilis</i> safely contained while the protectant is released.'
      ],
      numbers: [],
      careful: 'The claim here is a platform for deployment, not a finished product. Say "enabling practical field deployment", which is what the four pieces together support.'
    }
  },

  /* ---------------------------------------------------------- 2 */
  {
    n: 2, time: '0:50', secs: 30,
    kicker: 'Design',
    title: 'The optogenetic circuit',
    nav: 'The light-controlled circuit',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Optogenetic <em>circuit</em></h2></div>
<div class="s-body s2">
  <div>
    <p class="cap st" style="--d:1">Four modules in <i class="sp">B. subtilis</i></p>
    ${F('s2-modules', 'Four-module optogenetic circuit: PCB synthesis, light sensing, transcriptional output and protectant output', 490, '', 2, 'modules')}
  </div>
  <div class="side">
    <div>
      <p class="cap-s st" style="--d:3">Production circuit</p>
      ${F('s2-plasmid', 'Circular map of the optogenetic bioprotectant production circuit', 250, '', 4)}
    </div>
    <div>
      <p class="cap-s st" style="--d:5">Output module, pSTK-1D</p>
      ${F('s2-output', 'Replaceable output cassettes: BoPEP4 variants, LEA14 and acdS, each with a 6x His-tag', 300, '', 6)}
    </div>
  </div>
</div>`,
    run: {
      say: 'With the framework in place, the next step is the circuit that makes on-demand production possible.',
      cues: [
        {focus: 'modules', say: 'Under red light CcaS stays inactive. Green light makes it autophosphorylate and pass its phosphate to CcaR, which switches on the output promoter. The output is a dropout cassette, so the protectant can be swapped without touching the core.'}
      ]
    },
    script: {
      lead: 'With this framework in place, the next step is the circuit that makes on-demand production possible.',
      body: [
        'The CcaS/CcaR two-component system is the optogenetic core of the circuit. Its chromophore, PCB, is made from the cell’s own heme by the ho1–pcyA fusion protein and attaches to the sensor kinase CcaS.',
        'Under red light, CcaS stays inactive and the circuit remains off. When stress is detected, green light is applied, causing CcaS to autophosphorylate and change conformation. CcaS then transfers its phosphate to the response regulator CcaR, which activates the output promoter and initiates transcription of the protectant genes.',
        'Because the output module includes a dropout cassette, the protectant and secretion signal peptide can be swapped without altering this light-controlled core.'
      ],
      numbers: [
        ['Host', '<i class="sp">B. subtilis</i> WB800'],
        ['Sensor', 'CcaS / CcaR, green-on at P<sub>cpcG2</sub>'],
        ['Secretion tags', 'SamyQ, Csn'],
        ['Detection tag', '6x His']
      ],
      careful: 'If asked why both SamyQ and Csn: they are two secretion routes tested against each other, and the plate that compares them reads Csn-ACCD above the codon-optimised SamyQ arm.'
    }
  },

  /* ---------------------------------------------------------- 3 */
  {
    n: 3, time: '1:20', secs: 35,
    kicker: 'Wet lab',
    title: 'Light activation tests',
    nav: 'Does the circuit answer to light',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Light <em>activation</em></h2></div>
<div class="s-body s3">
  <div>
    <p class="cap st" style="--d:1">Light plate apparatus</p>
    ${F('s3-lpa', 'The light plate apparatus running green and red wells', 420, 'ph', 2)}
    <p class="s-note st" style="--d:3;margin-top:18px">Green at 3,850 lux against red, 13 h and 16 h. Three readouts from the same colony culture.</p>
  </div>
  <div class="grid">
    <div><p class="cap-s st" style="--d:4">Western blot</p>
      ${F('s3-blot', 'Anti-His western blot, green and red light at 13 and 16 hours', 272, '', 5)}</div>
    <div><p class="cap-s st" style="--d:6">Band intensity</p>
      ${F('s3-blot-quant', 'Relative expression of ACCD from band intensity, G13 R13 G16 R16', 272, '', 7)}</div>
    <div><p class="cap-s st" style="--d:8">ELISA</p>
      ${F('s3-elisa', 'Anti-His ELISA concentrations, G13 R13 G16 R16', 272, '', 9)}</div>
    <div><p class="cap-s st" style="--d:10">DNPH activity</p>
      ${F('s3-dnph', 'DNPH assay, ACCD activity under green and red light at 13 and 16 hours', 272, '', 11, 'dnph')}</div>
  </div>
</div>`,
    run: {
      say: 'Three readouts from the same colony culture. The blot shows more secretion under green light; the ELISA reads green and red as nearly identical.',
      cues: [
        {focus: 'dnph', say: 'The DNPH assay shows much higher enzymatic activity under green light by 13 hours, pointing to light-controlled behaviour.'}
      ]
    },
    script: {
      lead: 'So the next question is light dependence.',
      body: [
        'To test whether our system truly responds to light signals under controlled conditions, we cultured our cells in the light plate apparatus. Three readouts were taken from the same colony culture.',
        'After LPA exposure, western blots verified and quantified secretion of the protectant. There was more secretion of our protectant under green light.',
        'ELISA showed that ACC deaminase concentrations under green and red light were nearly identical.',
        'The DNPH assay, however, showed much higher enzymatic activity under green light by 13 hours, pointing to light-controlled behaviour. This highlights the success of our circuit.'
      ],
      numbers: [
        ['Blot, 13 h', 'green 1.00 vs red 0.75'],
        ['ELISA, 13 h', 'green 12.9 vs red 12.5 µg/mL'],
        ['DNPH, 13 h', 'green 10.4 vs red 0.7 nmol α-KB mL⁻¹ h⁻¹'],
        ['DNPH, 16 h', 'green 1.0 vs red 3.7 — reverses'],
        ['Green high tier', '3,850 lux'],
        ['Replicates', 'n = 2 per arm']
      ],
      careful: 'The case rests on the blot ratio and the 13 h DNPH point. The ELISA is flat and the 16 h DNPH point runs the other way, with n = 2 and no statistic behind either. If a judge presses, say that colour is supported at 13 h and not yet resolved at 16 h — and go straight to slide 8, which is where it gets closed.'
    }
  },

  /* ---------------------------------------------------------- 4 */
  {
    n: 4, time: '1:55', secs: 35,
    kicker: 'Hardware',
    title: 'The bioreactor',
    nav: 'The hardware that contains it',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Hardware <em>bioreactor</em></h2></div>
<div class="s-body s4">
  <div>
    <p class="cap st" style="--d:1">Full system</p>
    ${F('s4-schematic', 'Flow schematic: culture chamber, pump, flow meter, inline photometer, hollow-fibre membrane, pressure transducers and output bottle', 560, '', 2, 'schematic')}
  </div>
  <div>
    <p class="cap st" style="--d:3">Calibrated photometer</p>
    ${F('s4-calib', 'A600 against monodisperse silica concentration for the BioDrop, Pro inline and Slim inline photometers', 330, '', 4)}
    <p class="cap st" style="--d:5;margin-top:24px">Built units</p>
    <div class="hw">
      ${F('s4-rig', 'The assembled bioreactor rig on its frame', 215, '', 6)}
      ${F('s4-photo-pro', 'Pro inline photometer, 163 mm tall', 215, '', 7)}
      ${F('s4-photo-slim', 'Slim inline photometer, 99 mm long', 215, '', 8)}
    </div>
  </div>
</div>`,
    run: {
      say: 'To contain the engineered bacteria we built specialised bioreactor hardware, with two self-built inline photometers calibrated against a commercial BioDrop.',
      cues: [
        {focus: 'schematic', say: 'Culture is pumped past a flow meter and an inline photometer into a hollow-fibre module: 0.2 µm pores, 11 fibres, 200 cm². Cells stay on the lumen side and the protectant leaves in the product stream.'}
      ]
    },
    script: {
      lead: 'To ensure complete containment of the engineered <i class="sp">B. subtilis</i>, we engineered specialised bioreactor hardware.',
      body: [
        'Culture is pumped from the chamber, passing a flow meter and an inline photometer, and into a hollow-fibre module featuring 0.2 µm pores, 11 fibres and 200 cm² of surface area. The cells remain on the lumen side and return to the chamber, while the protectants are released in the product stream.',
        'Our bioreactor is supported by two self-built inline photometers, both calibrated against a commercial BioDrop.'
      ],
      numbers: [
        ['Culture volume', '0.5 L'],
        ['Membrane', '0.2 µm, 11 fibres, 200 cm²'],
        ['Flow rate', '280 to 300 mL/min'],
        ['Stirring', '200 to 600 rpm'],
        ['Pro photometer', 'slope 2.3675, R² 0.9965'],
        ['Slim photometer', 'slope 0.4248, R² 0.9992']
      ],
      careful: 'The photometers are calibrated against silica, not against cells. If a judge asks for OD600 accuracy on culture, that cross-check is not done yet.'
    }
  },

  /* ---------------------------------------------------------- 5 */
  {
    n: 5, time: '2:30', secs: 45,
    kicker: 'Results',
    title: 'What the reactor produced',
    nav: 'Containment, secretion, 72 hours of run',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Bioreactor <em>results</em></h2></div>
<div class="s-body s5">
  <div>
    <p class="cap st" style="--d:1">Confirmed bacteria containment</p>
    ${F('s5-containment', 'Lumen side plate covered in colonies, shell side plate clear', 275, '', 2)}
    <p class="cap st" style="--d:3;margin-top:24px">Confirmed protectant secretion</p>
    ${F('s5-secretion', 'ELISA concentrations on the lumen and shell sides at 1, 16, 24 and 40 hours', 275, '', 4)}
  </div>
  <div>
    <p class="cap st" style="--d:5">Continuous production</p>
    <div class="charts">
      ${F('s5-elisa', 'ELISA concentration against time, 1 to 72 hours', 194, '', 6)}
      ${F('s5-dnph', 'DNPH volumetric activity against time, 1 to 72 hours', 194, '', 7)}
      ${F('s5-spec', 'Specific activity against time, 1 to 72 hours', 194, '', 8)}
    </div>
  </div>
  <div>
    <p class="cap st" style="--d:9">Running system</p>
    ${F('s5-incubator', 'The reactor running inside the incubator with pumps, bottles and tubing', 600, 'ph', 10)}
  </div>
</div>`,
    run: {
      say: 'Three things confirmed: the cells stay in, the protein gets out at 7.7 against 5.7 µg per mL across the membrane, and the run holds between 2.5 and 8.5 µg per mL for thirty hours.',
      cues: []
    },
    script: {
      lead: 'Three things are confirmed: the bacteria stay in, the protein gets out, and the run keeps producing.',
      body: [
        'Containment is a plate test on both sides of the membrane. The lumen side grows a lawn, the shell side is clear.',
        'Secretion is the ELISA on both sides of the same run: 7.7 and 5.7 µg/mL at 1 h, tracking together to 40 h, so the protein is crossing while the cells are not.',
        'Production holds across the first 30 hours with no trend, between 2.5 and 8.5 µg/mL across both runs. After 30 hours the titre halves. Activity peaks at 18 h, about six hours after the protein maximum.'
      ],
      numbers: [
        ['Reactor ELISA', '2.5 to 8.5 µg/mL'],
        ['Plasmid-free control', '1.3 µg/mL'],
        ['Lumen vs shell, 1 h', '7.7 vs 5.7 µg/mL'],
        ['Peak activity', '18 h, 30.9 nmol α-KB mL⁻¹ h⁻¹'],
        ['After 30 h', 'titre halves, p = 0.006'],
        ['Replication', 'n = 1 per time point']
      ],
      careful: 'Quote the control beside the number and never subtract it: 1.3 µg/mL is a light-plate control, and no plasmid-free reactor run exists. Every time point is a single sample.'
    }
  },

  /* ---------------------------------------------------------- 6 */
  {
    n: 6, time: '3:15', secs: 40,
    kicker: 'Plants',
    title: 'Plant tests on agar',
    nav: 'Does the protectant protect',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Plant <em>assays, agar</em></h2></div>
<div class="s-body s6">
  <div>
    <div class="hd st" style="--d:1"><h3>ACCD, 37 °C heat</h3>
      <p>Pre-treatment, 18-day-old <i class="sp">Arabidopsis thaliana</i></p></div>
    <div class="pair">
      <div>${F('s6-heat-without', 'Seedling roots without ACCD under heat stress', 270, 'ph', 2)}<p class="lbl">Without ACCD</p></div>
      <div>${F('s6-heat-with', 'Seedling roots with ACCD under heat stress', 270, 'ph', 3)}<p class="lbl">With ACCD</p></div>
    </div>
    <div class="charts c2">
      ${F('s6-heat-chl', 'Relative chlorophyll content under 37 °C heat, with and without ACCD', 210, '', 4)}
      ${F('s6-heat-root', 'Primary root length box plot under 37 °C heat', 210, '', 5)}
    </div>
    <p class="pv st" data-hi style="--d:6">Mean root length 40.9 against 46.9 mm</p>
  </div>

  <div>
    <div class="hd st" style="--d:7"><h3>LEA14, 100 mM NaCl</h3>
      <p>Post-treatment, 10-day-old <i class="sp">Arabidopsis thaliana</i></p></div>
    <div class="pair">
      <div>${F('s6-lea-without', 'Plate of seedlings in 100 mM NaCl without LEA14', 223, 'ph', 8)}<p class="lbl">Without LEA14</p></div>
      <div>${F('s6-lea-with', 'Plate of seedlings in 100 mM NaCl with LEA14', 223, 'ph', 9)}<p class="lbl">With LEA14</p></div>
    </div>
    <div class="charts c2">
      ${F('s6-lea-chl', 'Relative chlorophyll content, 100 mM NaCl, with and without LEA14', 210, '', 10)}
      ${F('s6-lea-fw', 'Fresh weight, 100 mM NaCl, with and without LEA14', 210, '', 11)}
    </div>
  </div>

  <div>
    <div class="hd st" style="--d:12"><h3>BoPEP4, 100 mM NaCl</h3>
      <p>Post-treatment, 10-day-old <i class="sp">Arabidopsis thaliana</i></p></div>
    <div class="pair">
      <div>${F('s6-bopep-without', 'Plate of seedlings in 100 mM NaCl without BoPEP4', 223, 'ph', 13)}<p class="lbl">Without BoPEP4</p></div>
      <div>${F('s6-bopep-with', 'Plate of seedlings in 100 mM NaCl with BoPEP4', 223, 'ph', 14)}<p class="lbl">With BoPEP4</p></div>
    </div>
    <div class="charts c2">
      ${F('s6-bopep-chl', 'Relative chlorophyll content, 100 mM NaCl, with and without BoPEP4', 210, '', 15)}
      ${F('s6-bopep-fw', 'Fresh weight, 100 mM NaCl, with and without BoPEP4', 210, '', 16)}
    </div>
    <p class="pv st" data-hi style="--d:17">Chlorophyll, p = 0.0002</p>
  </div>
</div>`,
    run: {
      say: 'Three protectants, two stresses, the same readouts: chlorophyll, fresh weight and root length.',
      cues: [
        {hi: true, say: 'ACC deaminase holds roots at 46.9 against 40.9 mm under heat. BoPEP4 is the strongest arm on the plate: chlorophyll up 1.85-fold at p equals 0.0002.'}
      ]
    },
    script: {
      lead: 'Three protectants, two stresses, the same readouts: chlorophyll, fresh weight and root length.',
      body: [
        'Under 37 °C, seedlings given ACC deaminase before the stress keep more chlorophyll and grow longer primary roots, 46.9 against 40.9 mm.',
        'Under 100 mM NaCl, LEA14 applied after the stress raises chlorophyll with fresh weight unchanged. BoPEP4 is the strongest arm on this plate: chlorophyll up 1.85-fold at p = 0.0002, and fresh weight almost doubled.'
      ],
      numbers: [
        ['Heat, root length', '40.9 vs 46.9 mm'],
        ['Heat, chlorophyll', '1.00 vs 1.41, p < 0.05'],
        ['LEA14, chlorophyll', '1.00 vs 1.36'],
        ['BoPEP4, chlorophyll', '1.00 vs 1.85, p = 0.0002'],
        ['BoPEP4, fresh weight', '0.17 vs 0.33 g']
      ],
      careful: 'Chlorophyll is relative to the untreated control on the same plate, not normalised to fresh weight. Normalising to weight inverts results in salt groups, so the two are reported separately.'
    }
  },

  /* ---------------------------------------------------------- 7 */
  {
    n: 7, time: '3:55', secs: 35,
    kicker: 'Plants',
    title: 'Plant tests in soil',
    nav: 'The same test in soil',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Plant <em>assays, soil</em></h2></div>
<div class="s-body s7">
  <div>
    <div class="hd st" style="--d:1"><h3>300 mM NaCl</h3><p>ACCD, potted <i class="sp">Arabidopsis thaliana</i></p></div>
    <div class="pots">
      <div></div>
      <p class="colh st" style="--d:2">Without ACCD</p>
      <p class="colh st" style="--d:2">With ACCD</p>
      <p class="d st" style="--d:3">Day 1</p>
      ${F('s7-d1-without', 'Pot without ACCD on day 1', 160, 'ph', 3)}
      ${F('s7-d1-with', 'Pot with ACCD on day 1', 160, 'ph', 3)}
      <p class="d st" style="--d:4">Day 5</p>
      ${F('s7-d5-without', 'Pot without ACCD on day 5', 160, 'ph', 4)}
      ${F('s7-d5-with', 'Pot with ACCD on day 5', 160, 'ph', 4)}
    </div>
    <div class="salt">
      ${F('s7-salt-chart', 'Relative chlorophyll content at 300 mM NaCl, with and without ACCD', 200, '', 5, 'saltchart')}
    </div>
  </div>

  <div>
    <div class="hd st" style="--d:6"><h3>5 days at 37 °C</h3><p>Co-treatment and post-treatment against an unstressed reference</p></div>
    <div class="top">
      <div>${F('s7-22c', 'Reference pot held at 22 °C without ACCD', 200, 'ph', 7)}<p class="lbl">22 °C, without ACCD</p></div>
      ${F('s7-heat-chart', 'Relative chlorophyll content at 22 °C and under 37 °C heat stress for the three treatments', 222, '', 8)}
    </div>
    <p class="band st" style="--d:9">5 days of 37 °C heat stress</p>
    <div class="trio">
      <div>${F('s7-heat-without', 'Heat-stressed pot without ACCD', 248, 'ph', 10)}<p class="lbl">Without ACCD</p></div>
      <div>${F('s7-heat-co', 'Heat-stressed pot with co-treatment ACCD', 248, 'ph', 11)}<p class="lbl">Co-treatment</p></div>
      <div>${F('s7-heat-post', 'Heat-stressed pot with post-treatment ACCD', 248, 'ph', 12)}<p class="lbl">Post-treatment</p></div>
    </div>
  </div>
</div>`,
    run: {
      say: 'Soil separates the two ways of applying the enzyme. At 300 mM salt the treated pots hold more chlorophyll; under heat, co-treatment recovers to the unstressed level and post-treatment does not.',
      cues: []
    },
    script: {
      lead: 'Soil is the harder test, and it separates the two ways of applying the enzyme.',
      body: [
        'At 300 mM NaCl, pots given ACC deaminase hold more chlorophyll by day 5, and the difference is significant.',
        'Under five days at 37 °C the ordering matters. Co-treatment, applied with the stress, recovers chlorophyll to the unstressed level. Post-treatment does not: it sits below the untreated stressed control. The photographs agree, with the post-treatment pot showing the most leaf damage.'
      ],
      numbers: [
        ['300 mM NaCl', '1.00 vs 1.17, p < 0.0001'],
        ['22 °C reference', '1.00'],
        ['Heat, untreated', '0.84'],
        ['Heat, co-treatment', '1.00, p < 0.0001'],
        ['Heat, post-treatment', '0.49']
      ],
      careful: 'The post-treatment result goes against us and should be stated, not skipped. On agar the pre-treatment arm helped under heat, so what these runs separate is timing, not the enzyme.'
    }
  },

  /* ---------------------------------------------------------- 8 */
  {
    n: 8, time: '4:30', secs: 15,
    kicker: 'Since the freeze',
    title: 'Since the wiki freeze',
    nav: 'What has moved since the freeze',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">After <em>wiki freeze</em></h2></div>
<div class="s-body">
  <ol class="s8-list">
    <li class="st" style="--d:1">Green light integration into the bioreactor</li>
    <li class="st" style="--d:2">More light plate results<span>Level 2, aiming to resolve green against red</span></li>
    <li class="st" style="--d:3">More plant results</li>
    <li class="st" style="--d:4">Droplet</li>
    <li class="st" style="--d:5">New red light plate with 670 nm bulbs</li>
  </ol>
</div>`,
    run: {
      say: 'Five things have moved since the wiki froze. The first two go straight at the open question on slide three.',
      cues: []
    },
    script: {
      lead: 'Five things have moved since the wiki froze.',
      body: [
        'The first two go straight at the open question from slide 3. Green light goes into the reactor itself, and a new light plate with 670 nm red bulbs gives the red arm a clean wavelength so the comparison can finally resolve.'
      ],
      numbers: [],
      careful: 'This slide is the answer to "the 16 h point runs the other way". Lead with it instead of waiting to be asked.'
    }
  },

  /* ---------------------------------------------------------- 9 */
  {
    n: 9, time: '4:45', secs: 15,
    kicker: 'Next',
    title: 'Future work',
    nav: 'Where this goes next',
    stage: `
<div class="s-head"><h2 class="s-title st" style="--d:0">Future <em>work</em></h2></div>
<div class="s-body s9">
  <ol class="s9-list">
    <li class="st" style="--d:1">Quick-slot bacteria and medium</li>
    <li class="st" style="--d:2">Water supply and irrigation line</li>
    <li class="st" style="--d:3">Quality assurance and quality control</li>
    <li class="st" style="--d:4">Chromosomal integration</li>
    <li class="st" style="--d:5">Regulatory approval</li>
    <li class="st" style="--d:6">Pilot field testing</li>
  </ol>
  <div class="renders">
    <img class="r-unit st zoom" style="--d:7" src="img/s9-unit.webp" alt="Field unit with water inlet and outlet lines">
    <img class="r-core st zoom" style="--d:8" src="img/s9-reactor.webp" alt="Bioreactor core with a quick-slot culture cartridge seated on top">
  </div>
</div>`,
    run: {
      say: 'A quick-slot cartridge, an irrigation line, quality control, then chromosomal integration before any pilot field test. Thank you.',
      cues: []
    },
    script: {
      lead: 'The route from this prototype to something a farmer can own.',
      body: [
        'A quick-slot cartridge for bacteria and medium removes aseptic handling from the farm. The unit joins the irrigation line so dosing is part of watering. Chromosomal integration retires the plasmid and its antibiotic marker, which is what a regulator will ask for before a pilot field test.'
      ],
      numbers: [],
      careful: 'Order matters: containment and QC come before field testing. Say the regulatory step out loud, since judges read a GMO in a field as the risk.'
    }
  }
];

if (typeof module !== 'undefined') module.exports = SLIDES;
