import * as fs from "node:fs";
import * as path from "node:path";

const IDEA =
  "You don't need to learn code — just describe your app idea in plain words, like texting a friend, and an AI agent builds it for you";
const FIX = "if it gets something wrong, you say so in plain words and it fixes it.";

const ENTRY = [IDEA, FIX].join("; ");

const MAX_LENGTH = 240;
if (ENTRY.length === 0 || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Pitch length must be between 1 and ${MAX_LENGTH} characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
