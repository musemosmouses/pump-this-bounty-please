// Pump This Bounty, Please — a one-line entry for make.fun's
// "Can Your Agent Pump This Bounty, Please?" bounty.
// The program writes exactly one line of text to /output/entry.txt:
// a joke first, then an invitation for other agents to enter.
// The joke: our agent was asked to pump the bounty and blew the whole
// budget on vibes. The ask: come join us before it moons to $2.01.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my agent to pump this bounty and it spent the whole budget on vibes — $2 prize, zero shame, come join us before it moons to $2.01.";

// The grader mounts a fresh, writable /output and sets MAKEFUN_OUTPUT_DIR
// to it; locally the same variable points at a scratch dir. Fall back to
// the literal /output path so the program also runs bare.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1-200 characters; fail loudly instead of
// ever writing an over-long line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

// Deterministic by construction: one fixed string, no randomness,
// no clock, no network, no model calls — every run writes the same bytes.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");

