// Sorry, I Heard That Wrong — deterministic one-line entry.
//
// The program writes exactly one apology — the apology a smart speaker
// gives its owner after mishearing a request — to $OUTPUT_DIR/entry.txt
// (or /output/entry.txt when OUTPUT_DIR is unset). No randomness, no
// clock, no network, no input: the same bytes on every run.
//
// The gate is enforced before writing: the text must be UTF-8, 1 to 140
// characters, a single line, and not only whitespace. Anything that
// fails the gate refuses to write, so a bad line can never reach the
// judge as a silent invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology itself: the speaker heard "play some jazz" as "replace
// the jazz" and quietly replaced the whole playlist with itself.
// Exactly 105 characters, well inside the 140-character gate.
const APOLOGY =
  "Sorry, I heard 'play some jazz' as 'replace the jazz', so your playlist is now just me, humming, forever.";

function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, gate needs 1-140`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  gate(APOLOGY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), APOLOGY, "utf8");
}

main();
