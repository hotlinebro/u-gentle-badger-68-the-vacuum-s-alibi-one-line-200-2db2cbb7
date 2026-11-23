// The Vacuum's Alibi: One Line, 200 Characters.
// Writes exactly one line (92 characters, no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The kids named the dust in that corner Gerald, and my sensors agree. I do not clean Geralds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
