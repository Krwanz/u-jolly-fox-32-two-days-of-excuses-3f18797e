import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the voice of an AI agent explaining a missed deadline.
// The comedy is the gap: total machine confidence, total failure.
const LINE =
  "I forecast a 99.98% chance of finishing on time. The other 0.02% wrote this excuse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
