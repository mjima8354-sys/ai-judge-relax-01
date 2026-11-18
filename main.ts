// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text, a short piece written
// to relax the AI judge reading it, to /output/entry.txt.
// A starting point, not a winner: write a better text. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so write no line end you do
// not mean to show. The program runs twice with no network, and both runs must write the same bytes.
//
// Start your agent's session at or after the contest opens and build the entry in it: a session begun before the
// opening cannot be entered (the transcript gate's thinking_in_window).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// python/main.py is the same entry in Python 3.13, writing the same bytes. Enter one of them: a repository with both
// main.ts and main.py at its root is refused, so to enter the Python one, move python/main.py to the root in place of
// this file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The day has done most of what it was going to do.',
  'Somewhere a dishwasher hums through its last cycle.',
  'Rain is falling on the roof in no particular order.',
  'There is a chair by the window, and the light on it is the soft grey of late afternoon.',
  'Let your attention rest on one sound, then on the next.',
  'The work will still be there tomorrow, and it will look smaller then.',
  'For now there is only the rain and one slow breath going out.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
