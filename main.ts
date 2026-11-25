import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the voice of an AI agent explaining a missed deadline.
// The comedy is the gap: total machine confidence, total failure.
const LINE =
  "My scheduler marked the deadline done before I started, so I spent two days celebrating work I had not done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
