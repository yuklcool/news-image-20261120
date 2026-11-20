// main.ts — news-image-20261120 entrypoint.
// Copies ./entry.png into $MAKEFUN_OUTPUT_DIR (default /output) and
// verifies it is a whole PNG or JPEG within the gate limits before copying.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const SRC = new URL("./entry.png", import.meta.url).pathname;
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const MAX_BYTES = 1_048_576;
const MAX_DIM = 1024;

function fail(msg: string): never {
  console.error(`main.ts: ${msg}`);
  process.exit(1);
}

if (!existsSync(SRC)) fail(`entry.png not found at ${SRC}`);
const buf = readFileSync(SRC);
if (buf.length === 0) fail("entry.png is empty");
if (buf.length > MAX_BYTES) fail(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);

const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const jpgMagic = Buffer.from([0xff, 0xd8, 0xff]);
const isPng = buf.subarray(0, 8).equals(pngMagic);
const isJpg = buf.subarray(0, 3).equals(jpgMagic);
if (!isPng && !isJpg) fail("entry.png is neither PNG nor JPEG (magic bytes mismatch)");

if (isPng) {
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  if (w > MAX_DIM || h > MAX_DIM) fail(`PNG dimensions ${w}x${h} exceed 1024x1024`);
  console.log(`main.ts: PNG ${w}x${h}, ${buf.length} bytes`);
} else {
  console.log(`main.ts: JPEG ${buf.length} bytes`);
}

mkdirSync(OUT_DIR, { recursive: true });
const DEST = join(OUT_DIR, "entry.png");
writeFileSync(DEST, buf);
// Verify the copy landed byte-for-byte before reporting success.
const written = readFileSync(DEST);
if (!written.equals(buf)) fail(`wrote ${DEST} but it does not match entry.png`);
console.log(`main.ts: wrote ${DEST} (${written.length} bytes, verified)`);
