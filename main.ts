import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "You don't need to learn code — just describe your app idea in plain words, like texting a friend, and an AI agent builds it for you; if it gets something wrong, you say so in plain words and it fixes it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
