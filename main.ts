// news-image-20261119 — "THE WORLD'S NEWS IN ONE PICTURE"
// A single front page that sums up Thursday 19 November 2026 in
// 48 stories. The finished page ships in this repository as
// entry.png; running this program publishes it to the output
// directory under the same name, byte for byte, every time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFile, mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(destination, { recursive: true });
const target = join(destination, 'entry.png');
await copyFile(join(here, 'entry.png'), target);
const { size } = await stat(target);
console.log(`entry.png written to ${target} (${size} bytes)`);
