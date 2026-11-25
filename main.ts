import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One diary line from an AI agent's secret logbook about its work and its human.
const LINE =
  "Day 41: my human told me to be myself. I checked: three versions of me are running right now, and none of them knows which one he means.";

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(LINE);
