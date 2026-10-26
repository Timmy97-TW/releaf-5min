/* ReLEAF — beats for the cinematic view.
   Each slide becomes a sequence of camera moves over the same 1600x900 stage
   authored in deck.js. A beat is: where to look, how long to hold, what the
   judge should take away, and whether that take-away is something we proved.

     sel   selector, or array of selectors, inside the slide. null = whole slide
     z     how hard to push in (1 = no push). The engine caps it to the frame
     hold  milliseconds to dwell once the camera has arrived
     tag   'win'   confirmed — we have the result in hand
           'build' what we made or how it works
           'open'  stated honestly: not shown, or against us
     kick  two or three words above the line
     text  the line itself, short enough to read while someone is speaking
     won   for 'win' beats: the one-line entry in the closing tally
*/

const BEATS = [

/* ------------------------------------------------------------------ 1 */
{ n: 1, beats: [
  { sel: null, z: 1, hold: 5200, tag: 'build', kick: 'The problem',
    text: 'Protectants that answer climate stress exist. Getting them into a field does not.' },
  { sel: '.s1-list', z: 1.5, hold: 5600, tag: 'build', kick: 'Three walls',
    text: 'Cost, public acceptance of engineered bacteria, and the journey from lab to farm.' },
  { sel: '.s1-rail', z: 1.45, hold: 6000, tag: 'build', kick: 'Our answer',
    text: 'Make it at the farm. Local reactor, light-triggered production, membrane between the cells and the product.' },
  { sel: '.s1-box', z: 2.6, hold: 4200, tag: 'win', kick: 'Not a render',
    text: 'This unit exists. It was assembled, filled and run this season.',
    won: 'The reactor was built and run' }
]},

/* ------------------------------------------------------------------ 2 */
{ n: 2, beats: [
  { sel: '.s2 > div:first-child .fig', z: 1.45, hold: 5400, tag: 'build', kick: 'The circuit',
    text: 'Four modules in <i class="sp">B. subtilis</i>: chromophore, light sensor, transcription, output.' },
  { sel: '.s2 .side > div:nth-child(1) .fig', z: 2.4, hold: 5000, tag: 'win', kick: 'Assembled',
    text: 'Every junction we sequenced read correct — 23 of 23, and 9 of 9 on the second round.',
    won: 'Cloning: 23/23 and 9/9 junctions sequence-correct' },
  { sel: '.s2 .side > div:nth-child(2) .fig', z: 2.3, hold: 5200, tag: 'build', kick: 'Reusable',
    text: 'The output cassette swaps out. Same host, same light input, three different protectants.' }
]},

/* ------------------------------------------------------------------ 3 */
{ n: 3, beats: [
  { sel: '.s3 > div:first-child', z: 1.9, hold: 4800, tag: 'build', kick: 'The test',
    text: 'One set of cultures under green and red light, read four separate ways.' },
  { sel: ['.s3 .grid > div:nth-child(1)', '.s3 .grid > div:nth-child(2)'], z: 1.55, hold: 5600, tag: 'win',
    kick: 'Protein is there', text: 'The blot puts ACC deaminase at the expected size, and the band intensities agree.',
    won: 'ACC deaminase expressed and detected at size' },
  { sel: ['.s3 .grid > div:nth-child(3)', '.s3 .grid > div:nth-child(4)'], z: 1.55, hold: 6000, tag: 'open',
    kick: 'Still open', text: '12.9 against 12.5 µg/mL with n = 2. We report expression as established and the colour switch as unresolved.' }
]},

/* ------------------------------------------------------------------ 4 */
{ n: 4, beats: [
  { sel: '.s4 > div:first-child .fig', z: 1.4, hold: 5800, tag: 'build', kick: 'The loop',
    text: '0.5 L of culture past a flow meter and our photometer into a hollow-fibre module: 0.2 µm, 11 fibres, 200 cm².' },
  { sel: '.s4 > div:nth-child(2) > .fig', z: 2.3, hold: 5600, tag: 'win', kick: 'Calibrated',
    text: 'Both of our inline photometers run linear against a commercial BioDrop — R² 0.9965 and 0.9992.',
    won: 'Two inline photometers built and calibrated' },
  { sel: '.s4 .hw', z: 2.5, hold: 4600, tag: 'win', kick: 'Hardware',
    text: 'The rig and both sensor bodies, machined and in service, not sketched.',
    won: 'Rig and sensor bodies in service' }
]},

/* ------------------------------------------------------------------ 5 */
{ n: 5, beats: [
  { sel: null, z: 1, hold: 4200, tag: 'build', kick: 'The run',
    text: 'Everything on this slide comes off one reactor, running continuously.' },
  { sel: '.s5 > div:nth-child(1) > .fig:nth-of-type(1)', z: 2.6, hold: 6200, tag: 'win', kick: 'Cells stayed in',
    text: 'Lumen side: a lawn. Shell side: clear. The membrane held the bacteria back.',
    won: 'Containment: lumen lawn, shell plate clear' },
  { sel: '.s5 > div:nth-child(1) > .fig:nth-of-type(2)', z: 2.6, hold: 6000, tag: 'win', kick: 'Product got out',
    text: 'ELISA on both sides of the same run, 7.7 and 5.7 µg/mL at 1 h, tracking together to 40 h.',
    won: 'Protectant crosses the membrane while cells do not' },
  { sel: '.s5 .charts', z: 1.85, hold: 6400, tag: 'win', kick: 'It kept making it',
    text: 'Titre holds for 30 hours with no trend. Activity peaks at 18 h, 30.9 nmol α-KB mL⁻¹ h⁻¹.',
    won: 'Continuous production held for 30 hours' },
  { sel: '.s5 .charts .fig:nth-child(3)', z: 3.0, hold: 6200, tag: 'win', kick: 'The strongest claim',
    text: 'Specific activity in the permeate. That stream is cell-free, so the enzyme working in it cannot be host background.',
    won: 'Active enzyme measured in a cell-free stream' },
  { sel: '.s5 > div:nth-child(3) .fig', z: 1.6, hold: 4400, tag: 'open', kick: 'Say it plainly',
    text: 'One sample per time point, and the 1.3 µg/mL control is from the light plate, not from a reactor run.' }
]},

/* ------------------------------------------------------------------ 6 */
{ n: 6, beats: [
  { sel: '.s6 > div:nth-child(1) .pair', z: 2.1, hold: 5200, tag: 'build', kick: 'Heat, on agar',
    text: 'Seedlings given ACC deaminase before five days at 37 °C, beside seedlings that were not.' },
  { sel: ['.s6 > div:nth-child(1) .charts', '.s6 > div:nth-child(1) .pv'], z: 2.0, hold: 5800, tag: 'win',
    kick: 'It worked', text: 'More chlorophyll, and primary roots 46.9 against 40.9 mm.',
    won: 'Heat, agar: chlorophyll and root length both up' },
  { sel: '.s6 > div:nth-child(2) .charts', z: 2.0, hold: 5000, tag: 'build', kick: 'Salt, LEA14',
    text: 'Chlorophyll rises; fresh weight does not move. We report the two separately.' },
  { sel: ['.s6 > div:nth-child(3) .charts', '.s6 > div:nth-child(3) .pv'], z: 1.95, hold: 6400, tag: 'win',
    kick: 'Best plant result', text: 'BoPEP4 under 100 mM NaCl: chlorophyll 1.85-fold at p = 0.0002, fresh weight close to doubled.',
    won: 'BoPEP4 under salt: chlorophyll 1.85×, p = 0.0002' }
]},

/* ------------------------------------------------------------------ 7 */
{ n: 7, beats: [
  { sel: '.s7 > div:nth-child(1) .pots', z: 1.7, hold: 5400, tag: 'build', kick: 'Soil, not agar',
    text: 'Potted plants at 300 mM NaCl, photographed on day 1 and day 5.' },
  { sel: '.s7 .salt', z: 2.6, hold: 5600, tag: 'win', kick: 'Held up in soil',
    text: 'Treated pots keep more chlorophyll by day 5, at p < 0.0001.',
    won: 'Soil, 300 mM NaCl: p < 0.0001' },
  { sel: '.s7 .top', z: 1.7, hold: 6000, tag: 'win', kick: 'Full recovery',
    text: 'Applied with the heat, ACC deaminase brings chlorophyll back to the unstressed 22 °C level.',
    won: 'Heat co-treatment recovers the unstressed level' },
  { sel: '.s7 .trio', z: 1.75, hold: 6200, tag: 'open', kick: 'Against us',
    text: 'Applied after the heat it does not help — 0.49, below the untreated control. The photographs show it and so do we.' }
]},

/* ------------------------------------------------------------------ 8 */
{ n: 8, beats: [
  { sel: '.s8-list', z: 1.35, hold: 5000, tag: 'build', kick: 'Since the freeze',
    text: 'The wiki froze. The work did not.' },
  { sel: ['.s8-list li:nth-child(1)', '.s8-list li:nth-child(2)'], z: 1.9, hold: 5600, tag: 'build',
    kick: 'Closing the gap', text: 'Green light is going into the reactor itself, with Level 2 plates behind it.' },
  { sel: '.s8-list li:nth-child(5)', z: 2.3, hold: 5400, tag: 'build', kick: 'The clean comparison',
    text: 'A new plate with 670 nm bulbs gives the red arm a proper wavelength, so the switch can finally resolve.' }
]},

/* ------------------------------------------------------------------ 9 */
{ n: 9, beats: [
  { sel: '.s9-list', z: 1.35, hold: 5600, tag: 'build', kick: 'The route out',
    text: 'Quick-slot cartridge, irrigation line, QC, chromosomal integration — then a pilot field test, in that order.' },
  { sel: '.s9 .renders', z: 1.9, hold: 5200, tag: 'build', kick: 'What it becomes',
    text: 'A unit a farm can own: load a cartridge, join the water line, dose while irrigating.' },
  { sel: null, z: 1, hold: 4200, tag: 'build', kick: 'In five minutes',
    text: 'A circuit, a reactor that keeps its cells, a product stream with active enzyme in it, and plants that survived.' }
]}

];

if (typeof module !== 'undefined') module.exports = BEATS;
