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

   Which gives three animations in the whole deck: a camera push on slide 2 and
   on slide 3, and the highlight on slide 6. Every other slide lands whole and
   never moves. Nothing anywhere is held back. Slide 4 had a push onto its flow
   schematic; the fix for a figure too small to read is to crop its margins, not
   to send the camera at it.

     base    the --d revealed on landing. Omitted means all of it, which is the
             normal case; a value here is holding content back, so justify it.
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
    n: 1, time: '0:00', secs: 34,
    node: 0,
    title: 'Build the protectant on the farm, not in a factory',
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
    <h2 class="s-claim two st" style="--d:6">Build the protectant <em>on the farm</em>, not in a factory</h2>
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
      say: 'Crops are failing under climate stress, and the protectants that answer it stay in the lab — behind cost, public acceptance, and the journey to the farm. ReLEAF makes the protectant on the farm, where and when the crop needs it.',
      cues: []
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
    n: 2, time: '0:34', secs: 34,
    node: 1,
    title: 'Green light switches the cells on, red light switches them off',
    nav: 'The light-controlled circuit',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Green light switches the cells <em>on</em>, red light switches them <em>off</em></h2></div>
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
    n: 3, time: '1:08', secs: 30,
    node: 2,
    title: 'Equal ACCD under both lights, but activity only under green at 13 h',
    nav: 'Does the circuit answer to light',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Equal ACCD under both lights, but <em>activity only under green</em> at 13 h</h2></div>
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
      say: 'Three readouts from the same colony culture. The blot shows more secretion under green light, and the ELISA reads the two almost the same, 6.3 against 5.7 micrograms per millilitre.',
      cues: [
        {focus: 'dnph', say: 'The activity assay does not agree with that. At 13 hours green reads 7.2 against red at 0.8 — the same amount of enzyme, doing far more work under green light.'}
      ]
    },
    script: {
      lead: 'So the next question is light dependence.',
      body: [
        'To test whether our system truly responds to light signals under controlled conditions, we cultured our cells in the light plate apparatus. Three readouts were taken from the same colony culture.',
        'After LPA exposure, western blots verified and quantified secretion of the protectant. There was more secretion of our protectant under green light.',
        'ELISA showed that ACC deaminase concentrations under green and red light were nearly identical, 6.31 against 5.72 µg/mL at 13 h.',
        'The DNPH assay, however, showed much higher enzymatic activity under green light by 13 hours, 7.19 against 0.78 nmol α-KB mL⁻¹ h⁻¹. The same amount of enzyme is doing far more work under green, which is what the circuit was built to do.'
      ],
      numbers: [
        ['Blot, 13 h', 'green 1.00 vs red 0.75'],
        ['ELISA, 13 h', 'green 6.31 vs red 5.72 µg/mL'],
        ['ELISA, 16 h', 'green 6.13 vs red 5.87 µg/mL'],
        ['DNPH, 13 h', 'green 7.19 ± 2.50 vs red 0.78 ± 0.86'],
        ['DNPH, 16 h', 'green 1.25 vs red 1.25 — level'],
        ['Units', 'nmol α-KB mL⁻¹ h⁻¹'],
        ['Green high tier', '3,850 lux']
      ],
      careful: 'The whole case is the 13 h DNPH point, so do not let the title grow past it. The ELISA is deliberately flat — equal protein under both lights is the setup, not a weakness. At 16 h the two bars are level, 1.25 and 1.25, so the switch is shown at 13 h and not across the time course. The chart carries an asterisk, but the deck states no n, no test and no p anywhere, so never say &ldquo;significant&rdquo; and never quote a fold-change: 7.19 over 0.78 is 9x at the means and 4.4x at the top of red&rsquo;s error bar. The team&rsquo;s own speaker note says the 16 h difference is insignificant. Slide 9 carries the fuller 2 to 16 h version of this same assay, where the gap is not consistent — show it yourself rather than letting a judge find it.'
    }
  },

  /* ---------------------------------------------------------- 4 */
  {
    n: 4, time: '1:38', secs: 30,
    node: 3,
    title: 'A 0.2 µm hollow-fibre membrane keeps the cells in and lets the protectant out',
    nav: 'The hardware that contains it',
    stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">A <em>0.2 µm</em> hollow-fibre membrane keeps the cells in and lets the protectant out</h2></div>
<div class="s-body s4">
  <div>
    <p class="cap st" style="--d:1">Full system</p>
    ${F('s4-system', 'Flow schematic: culture chamber, pump, flow meter, inline photometer, hollow-fibre membrane, pressure transducers and output bottle', 560, '', 2)}
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
      say: 'To contain the engineered bacteria we built specialised bioreactor hardware. Culture is pumped into a hollow-fibre module — 0.2 µm pores, 11 fibres, 200 cm² — so the cells stay on the lumen side while the protectant leaves in the product stream. Both inline photometers are calibrated against a commercial BioDrop.',
      cues: []
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
      careful: 'The photometers are calibrated against monodisperse silica, not against cells, so an OD600 accuracy claim on real culture is not yet backed. Both units are linear — R² 0.9965 and 0.9992 — but the Slim unit&rsquo;s slope is 0.4248 against the BioDrop&rsquo;s 2.6377, about a sixth of the reference. The Pro unit at 2.3675 is the one to quote. If asked, the honest answer is that both track linearly and only the Pro unit reads on the same scale.'
    }
  },

  /* ---------------------------------------------------------- 5 */
  {
    n: 5, time: '2:08', secs: 34,
    node: 4,
    title: 'Nothing grew from the shell side, but the protectant crossed it',
    nav: 'Containment, secretion, 72 hours of run',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0"><em>Nothing grew</em> from the shell side, but the protectant crossed it</h2></div>
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
      say: 'Three things confirmed: the cells stay in, the protein gets out at 7.8 inside against 5.9 outside, and across 72 hours production holds between 2.5 and 6.5 micrograms per millilitre with activity jumping at 18 hours.',
      cues: []
    },
    script: {
      lead: 'Three things are confirmed: the bacteria stay in, the protein gets out, and the run keeps producing.',
      body: [
        'Containment is a plate test on both sides of the membrane. The lumen side grows a lawn, the shell side is clear.',
        'Secretion is the ELISA on both sides of the same run: 7.80 inside and 5.89 outside at 1 h, and by 24 and 40 h the shell side reads at or above the lumen, so the protein is crossing freely while the cells are not.',
        'Production runs 72 hours between 2.5 and 6.5 µg/mL, peaking at 12 h. Activity is the sharper signal: it jumps about thirteenfold at 18 h and specific activity then holds between 6 and 8 U/mg all the way to 72 h.'
      ],
      numbers: [
        ['Production ELISA', '2.5 to 6.5 µg/mL across 72 h'],
        ['Lumen vs shell, 1 h', '7.80 vs 5.89 µg/mL'],
        ['Lumen vs shell, 40 h', '4.64 vs 5.65 µg/mL'],
        ['Secretion run', '1, 16, 24 and 40 h'],
        ['Peak activity', '18 h, 0.038 U/mL — about 13x the 12 h value'],
        ['Specific activity', '6 to 8 U/mg from 18 h to 72 h'],
        ['Replication', 'n = 1 per time point']
      ],
      careful: 'Three traps. There is no plasmid-free control bar on either reactor ELISA chart, so do not quote 1.3 µg/mL here — that is a light-plate number and no plasmid-free reactor run exists. The old &ldquo;2.5 to 8.5 µg/mL&rdquo; figure mixed two different charts; this run is 2.5 to 6.5. And &ldquo;72 hours&rdquo; is true of the production charts only — the lumen-versus-shell secretion ELISA stops at 40 h. Every time point is a single sample, n = 1.'
    }
  },

  /* ---------------------------------------------------------- 6 */
  {
    n: 6, time: '2:42', secs: 28,
    node: 5,
    sub: 'agar',
    title: 'ACCD raised chlorophyll 40% under heat; LEA14 and BoPEP4 under salt',
    nav: 'Does the protectant protect',
    stage: `
<div class="s-head"><h2 class="s-claim two st" style="--d:0">ACCD raised chlorophyll <em>40%</em> under heat; LEA14 and BoPEP4 under salt</h2></div>
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
    <p class="pv st" data-hi style="--d:6">Chlorophyll 1.00 &rarr; 1.40, roots 40.9 &rarr; 46.9 mm</p>
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
    <p class="pv st" data-hi style="--d:17">Chlorophyll 0.99 &rarr; 1.84</p>
  </div>
</div>`,
    run: {
      say: 'Three protectants, two stresses, the same readouts: chlorophyll, fresh weight and root length.',
      cues: [
        {hi: true, say: 'ACC deaminase takes chlorophyll from 1.00 to 1.40 under heat, a forty per cent rise, and holds roots at 46.9 against 40.9 mm. BoPEP4 is the strongest arm on the plate, nearly doubling chlorophyll under salt.'}
      ]
    },
    script: {
      lead: 'Three protectants, two stresses, the same readouts: chlorophyll, fresh weight and root length.',
      body: [
        'Under 37 °C, seedlings given ACC deaminase before the stress hold chlorophyll at 1.40 against the control&rsquo;s 1.00, a 40% rise, and grow longer primary roots, 46.9 against 40.9 mm.',
        'Under 100 mM NaCl, LEA14 applied after the stress raises chlorophyll from 1.00 to 1.37 with fresh weight unchanged. BoPEP4 is the strongest arm on this plate, taking chlorophyll from 0.99 to 1.84 and nearly doubling fresh weight.'
      ],
      numbers: [
        ['ACCD heat, chlorophyll', '1.00 vs 1.40 — a 40% rise'],
        ['ACCD heat, root length', '40.9 vs 46.9 mm'],
        ['LEA14 salt, chlorophyll', '1.00 vs 1.37'],
        ['BoPEP4 salt, chlorophyll', '0.99 vs 1.84'],
        ['BoPEP4, fresh weight', '0.17 vs 0.33 g'],
        ['Root plot', 'means 40.9025 and 46.857, about 9 and 8 points'],
        ['Readout', 'relative to the control on the same plate']
      ],
      careful: 'Two numbers in the written script are wrong against this deck&rsquo;s own charts. Chlorophyll is 40%, not 35% — the chart runs 1.00 to 1.40, and an older deck printed 53%. Root length rose about 6 mm, not 4.8 cm: the printed means are 40.9025 and 46.857 mm, a difference of 5.95 mm, and no reading of the plot yields 4.8 in any unit. The title is set from the chart so the spoken number cannot drift. The y-axis is labelled mg/L but the quantity is a ratio to the control on the same plate, so call it relative chlorophyll, never a concentration — and &ldquo;normalised by sample number&rdquo; belongs to the hydroponics slide, not this one. The three charts carry different marks: ACCD one asterisk, BoPEP4 three, LEA14 none, and LEA14&rsquo;s treated bar has almost no error bar. The deck states no n and no test anywhere, so answer that out loud — about nine and eight seedlings are plotted on the root box plot, and that is the only count the deck offers. Chlorophyll is not normalised to fresh weight; normalising inverts the salt arms, which is why the two are reported separately.'
    }
  },

  /* ---------------------------------------------------------- 7 */
  {
    n: 7, time: '3:10', secs: 24,
    node: 5,
    sub: 'soil',
    title: 'Treating with the heat restored chlorophyll; treating after did not',
    nav: 'The same test in soil',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Treating <em>with</em> the heat restored chlorophyll; treating <em>after</em> did not</h2></div>
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
      ${F('s7-salt-chart', 'Relative chlorophyll content at 300 mM NaCl, with and without ACCD', 200, '', 5)}
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
      say: 'Soil separates the two ways of applying the enzyme. At 300 mM salt the treated pots gain 16 per cent. Under heat, treating alongside the stress brings chlorophyll from 0.83 back to the unstressed 1.00; treating afterwards falls to 0.48, below the untreated control.',
      cues: []
    },
    script: {
      lead: 'Soil is the harder test, and it separates the two ways of applying the enzyme.',
      body: [
        'At 300 mM NaCl, pots given ACC deaminase hold more chlorophyll by day 5, 1.16 against 1.00, a 16% rise.',
        'Under five days at 37 °C the ordering matters. Co-treatment, applied with the stress, recovers chlorophyll to the unstressed level. Post-treatment does not: it sits below the untreated stressed control. The photographs agree, with the post-treatment pot showing the most leaf damage.'
      ],
      numbers: [
        ['300 mM NaCl', '1.00 vs 1.16 — a 16% rise'],
        ['22 °C reference', '1.00'],
        ['Heat, untreated', '0.83'],
        ['Heat, co-treatment', '1.00 — back to the reference'],
        ['Heat, post-treatment', '0.48 — below the untreated control'],
        ['Salt here', '300 mM, against 100 mM everywhere else']
      ],
      careful: 'Post-treatment at 0.48 sits below the untreated stressed control at 0.83, so late dosing does not merely help less — on this chart it looks harmful. Say it before a judge finds it; it is the most attackable number in the deck. On agar the pre-treatment arm helped under heat, so what these runs separate is timing, not the enzyme. Two more: this is the only experiment at 300 mM salt, while agar and hydroponics run at 100 mM, and nothing on the slide says why — have the reason ready. Both charts here do carry four-asterisk brackets, but the deck states no n and no test anywhere, so be ready to say how many pots.'
    }
  },

  /* ---------------------------------------------------------- 8 */
  {
    n: 8, time: '3:34', secs: 24,
    node: 5,
    sub: 'hydroponics',
    title: 'In hydroponics ACCD more than doubled chlorophyll under salt',
    nav: 'The third cultivation system',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">In hydroponics, ACCD <em>more than doubled</em> chlorophyll under salt</h2></div>
<div class="s-body s8">
  <div class="col">
    <div class="hd st" style="--d:1"><h3>37 °C heat</h3>
      <p>ACCD at 1:40 against a plasmid-free control at the same dilution</p></div>
    <div>${F('s8-heat-trays', 'Hydroponic rafts at 22 °C and under 37 °C heat stress, plasmid-free control beside ACCD', 232, 'ph', 2)}</div>
    ${F('s8-heat-chlorophyll', 'Relative chlorophyll content at 22 °C and 37 °C for the plasmid-free control and ACCD', 256, '', 3)}
    <p class="pv st" style="--d:4">Under heat, 1.28 against 1.00 in the control</p>
  </div>
  <div class="col">
    <div class="hd st" style="--d:5"><h3>100 mM NaCl</h3>
      <p>The same dilution, salt against an unsalted reference</p></div>
    <div>${F('s8-salt-trays', 'Hydroponic rafts in the control condition and in 100 mM NaCl', 232, 'ph', 6)}</div>
    ${F('s8-salt-chlorophyll', 'Relative chlorophyll content at 0 and 100 mM NaCl for the plasmid-free control and ACCD', 256, '', 7, 'salt')}
    <p class="open st" style="--d:8">At 100 mM, 2.23 against 0.99. Unsalted ACCD sits at 0.82, below its own control, and we cannot yet explain it.</p>
  </div>
</div>`,
    run: {
      say: 'The third system is hydroponics, at the same 1 to 40 dilution. Under heat ACCD holds chlorophyll at 1.28 against 1.00. Under 100 mM salt it reaches 2.23 against 0.99 — more than double. The unsalted ACCD arm sits below its own control, and we do not yet know why.',
      cues: []
    },
    script: {
      lead: 'Finally, we tested the protectants in the hydroponic system.',
      body: [
        'Under 37 °C heat stress and under salinity stress, ACCD showed rescue at a 1:40 dilution, supported by higher relative chlorophyll content than the control group.',
        'Across all three cultivation systems, these protectants improve stress tolerance.'
      ],
      numbers: [
        ['Heat, control', '1.00 at 22 °C, 1.00 at 37 °C'],
        ['Heat, ACCD 1:40', '1.60 at 22 °C, 1.28 at 37 °C'],
        ['Salt, control', '0.99 at 0 mM, 0.99 at 100 mM'],
        ['Salt, ACCD 1:40', '0.82 at 0 mM, 2.23 at 100 mM'],
        ['Readout', 'relative chlorophyll per plant amount']
      ],
      careful: 'Three things a judge can press. The unsalted ACCD arm reads 0.82, below its own control — say so before being asked. The right-hand photographs are labelled BoPEP4 while the chart beside them plots ACCD. And this y-axis is relative chlorophyll per plant amount, not the mg/L used on agar and in soil, so the three systems cannot be put on one scale.'
    }
  },

  /* ---------------------------------------------------------- 9 */
  {
    n: 9, time: '3:58', secs: 24,
    node: 0,
    title: 'Since the freeze, green light runs inside the reactor',
    nav: 'What has moved since the freeze',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Since the freeze, green light runs <em>inside the reactor</em></h2></div>
<div class="s-body s9f">
  <div class="col">
    <div class="hd st" style="--d:1"><h3>Green light, in the chamber</h3>
      <p>Illumination moved from the plate onto the reactor itself</p></div>
    <div class="grow">${F('s9f-rig', 'The bioreactor rig rebuilt with green light fed into the culture chamber', 500, 'ph', 2)}</div>
  </div>
  <div class="col">
    <div class="hd st" style="--d:3"><h3>Level 2 light plate, 2 to 16 h</h3>
      <p>Six time points per arm, and a rebuilt red plate at 660 nm</p></div>
    <div class="grow">${F('s9f-dnph-timecourse', 'DNPH activity under green and red light across six time points from 2 to 16 hours', 500, '', 4)}</div>
  </div>
  <div class="col">
    <div class="hd st" style="--d:5"><h3>More plant data</h3>
      <p>ACCD and LEA14, fresh trays since the freeze</p></div>
    <div class="stack">
      <div>${F('s9f-accd-tray', 'Tray of seedlings treated with ACCD', 232, 'ph', 6)}<p class="lbl">ACCD</p></div>
      <div>${F('s9f-lea14-tray', 'Tray of seedlings treated with LEA14', 232, 'ph', 7)}<p class="lbl">LEA14</p></div>
    </div>
  </div>
  <div class="foot st" style="--d:8">
    <span class="tag">Also</span>
    <b>Droplet-based testing</b>
    <span>A smaller assay format, so a protectant can be screened without a full plate run.</span>
  </div>
</div>`,
    run: {
      say: 'Since the freeze the green light moved inside the reactor, the light plate ran a full time course from two to sixteen hours against a rebuilt 660 nm red plate, and both protectants went back onto trays. Droplet testing is running alongside.',
      cues: []
    },
    script: {
      lead: 'Since the wiki freeze, we have kept pushing the project forward.',
      body: [
        'Green light is now integrated directly into the bioreactor, so the switch is tested where the protectant is actually made rather than on a separate plate.',
        'The light plate ran a Level 2 time course, two to sixteen hours, and the red plate was rebuilt with deep-red LEDs so the off-state has a clean wavelength. Together these go straight at the question the light slide leaves open.',
        'More plant data came in for ACCD and LEA14, and droplet-based testing was added.'
      ],
      numbers: [],
      careful: 'This is the answer to "you did not resolve green against red". Lead with it rather than waiting to be asked. The slide prints 660 nm; the written script says 670 — say 660, which is what the deck shows.'
    }
  },

  /* ---------------------------------------------------------- 10 */
  {
    n: 10, time: '4:22', secs: 28,
    node: 0,
    title: 'Make it swappable, make it checkable, then put it in a field',
    nav: 'Where this goes next',
    stage: `
<div class="s-head"><h2 class="s-claim st" style="--d:0">Make it <em>swappable</em>, make it <em>checkable</em>, then put it in a field</h2></div>
<div class="s-body s10">
  <div class="steps">
    <div class="step st" style="--d:1">
      <div class="k">01</div>
      <div><h3>A cartridge the farmer slots in</h3>
        <p>Quick-slot bacteria and medium, and a connection to the water or irrigation line, so dosing is part of watering and no aseptic work happens on the farm.</p></div>
    </div>
    <div class="step st" style="--d:2">
      <div class="k">02</div>
      <div><h3>Fluorescence reports what the cells made</h3>
        <p>Translational coupling to mScarlet: red cells mean the protectant is being expressed, read on a spectrophotometer instead of a biochemical assay.</p></div>
    </div>
    <div class="step st" style="--d:3">
      <div class="k">03</div>
      <div><h3>The circuit moves into the chromosome</h3>
        <p>Plasmids are lost once the antibiotic goes, and antibiotics cannot go into a field reactor. Chromosomal integration first, then regulatory approval, then a pilot field test.</p></div>
    </div>
  </div>
  <div class="renders">
    <img class="r-unit st zoom" style="--d:4" src="img/s10-unit-water.webp" alt="Field unit with its water inlet and outlet lines">
    <img class="r-core st zoom" style="--d:5" src="img/s10-reactor-cartridge.webp" alt="The bioreactor opened, with a quick-slot culture cartridge seated on top">
  </div>
</div>`,
    run: {
      say: 'Three things turn this prototype into something a farmer could own. A cartridge they slot in and an irrigation line they already have. Fluorescence that reports what the cells made. And the circuit moved into the chromosome, because a field reactor cannot carry antibiotics. Then regulatory approval, then a pilot field test. Thank you.',
      cues: []
    },
    script: {
      lead: 'Our next step is making ReLEAF practical for farmers.',
      body: [
        'Quick-slot cartridges for bacteria and medium, and a connection to a water or irrigation line, take the aseptic handling off the farm.',
        'For quality control we plan to couple protectant expression to mScarlet through translational coupling, so fluorescence indicates production in real time and a spectrophotometer replaces a biochemical assay.',
        'The plasmid is the weak point: without antibiotic selection the cells throw it away, and antibiotics cannot be added to a field reactor. Moving the circuit into the chromosome fixes that. Then regulatory approval, then pilot field testing.'
      ],
      numbers: [],
      careful: 'Order matters, and it is the order a regulator reads: containment, then QC, then chromosomal integration, then a field test. If asked why not field-test sooner, the honest answer is plasmid instability.'
    }
  }
];

if (typeof module !== 'undefined') module.exports = SLIDES;

/* ===========================================================================
   THE NODE STRIP
   ---------------------------------------------------------------------------
   The deck used to return to a full-screen five-thumbnail menu between every
   section. That is five slide changes spent on navigation out of a five-minute
   talk. The strip replaces it: the same five things, small, in the same order,
   on screen the whole time, with the current one lit.

   A slide declares:
     node   1-5, or [3,4] when one slide covers two of them, or 0 for none
            (the opening and the two closing slides are not part of the five)
     sub    optional word under the lit node's label, for when a node spans
            several slides and the speaker needs to say which one

   The progress rail is one segment per slide, each as wide as that slide's
   share of the planned running time, so it says both "which slide" and "how
   much talk is left". `by 2:30` is the clock reading the speaker should see on
   landing here; show.html and animate.html paint a live caret against it.
   =========================================================================== */

const NODES = [
  {label: 'Circuit', img: 'nav-circuit'},
  {label: 'Light',   img: 'nav-light'},
  {label: 'Reactor', img: 'nav-reactor'},
  {label: 'Results', img: 'nav-results'},
  {label: 'Plants',  img: 'nav-plants'}
];

const mmss = s => Math.floor(s / 60) + ':' + String(Math.round(s) % 60).padStart(2, '0');

/* planned running time: [startOfSlide0, startOfSlide1, …], plus the total */
function planned(slides) {
  const out = [];
  let t = 0;
  for (const s of slides) { out.push(t); t += s.secs; }
  out.total = t;
  return out;
}

function nodeBar(slides, i) {
  const s = slides[i];
  const at = s.node === undefined ? 0 : s.node;
  const on = Array.isArray(at) ? at : (at ? [at] : []);
  const furthest = Math.max(0, ...slides.slice(0, i + 1).map(x => {
    const a = x.node === undefined ? 0 : x.node;
    return Array.isArray(a) ? Math.max(...a) : a;
  }));

  const nodes = NODES.map((n, k) => {
    const idx = k + 1;
    const now = on.includes(idx);
    const done = !now && idx <= furthest;
    const span = now && on.length > 1 && idx < Math.max(...on);
    return `<li class="nd${now ? ' now' : ''}${done ? ' done' : ''}${span ? ' span' : ''}">` +
      `<span class="ndi"><img src="img/${n.img}.webp" alt=""></span>` +
      `<span class="ndl">${n.label}${now && s.sub && idx === on[0] ? `<em>${s.sub}</em>` : ''}</span></li>`;
  }).join('');

  const p = planned(slides);
  const segs = slides.map((x, k) =>
    `<i class="${k < i ? 'past' : k === i ? 'at' : ''}" style="flex:${x.secs}"></i>`).join('');

  return `<div class="nodebar" data-slide="${i}" data-at="${p[i]}" data-total="${p.total}">` +
    `<ol class="nodes">${nodes}</ol>` +
    `<div class="prog"><span class="pr">${segs}<span class="caret"></span></span>` +
    `<span class="pt">by <b>${mmss(p[i] + s.secs)}</b></span></div></div>`;
}

/* every view renders a slide through this, so the strip is never out of step */
function stageHTML(slides, i) { return nodeBar(slides, i) + slides[i].stage; }
