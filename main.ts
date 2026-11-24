// The Vacuum's Alibi: One Line, 200 Characters.
// Writes exactly one line (92 characters, no trailing newline) to /output/entry.txt.
// Self-check gate: the line must be 1-200 characters, a single line, and not
// only whitespace — otherwise the program fails loudly instead of writing a
// bad entry that the gate would refuse.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The kids named the dust in that corner Gerald, and my sensors agree. I do not clean Geralds.";

// Gate: 1-200 characters, exactly one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
