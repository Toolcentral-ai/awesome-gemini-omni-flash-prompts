#!/usr/bin/env node
import { readFileSync } from "node:fs";

const prompts = JSON.parse(readFileSync(new URL("../data/gemini-omni-flash-prompts.json", import.meta.url), "utf8"));
console.log(`${prompts.length} Gemini Omni Flash prompts`);
for (const prompt of prompts.slice(0, 5)) {
  console.log(`- [${prompt.inputMode}] ${prompt.title}: ${prompt.source.caseUrl}`);
}
