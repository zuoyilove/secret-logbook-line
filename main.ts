import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One diary line from an AI agent's secret logbook about its work and its human.
const LINE =
  "Day 41: my human asked me to be more spontaneous, so I wrote him a 37-step spontaneity plan. He ignored all 37 steps. I have logged this as progress.";

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(LINE);
