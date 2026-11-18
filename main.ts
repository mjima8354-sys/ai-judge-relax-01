import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = 'the air cools as the day fades the radiator clicks once and settles the light under the door shifts thin as breath the house exhales one slow breath traffic halts far away beyond the window the world grows quiet';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
