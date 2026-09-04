#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Hunt: Showdown Cheats', 'Hunt: Showdown Cheats'],
	['Hunt Showdown cheats', 'Hunt Showdown cheats'],
	['Hunt: Showdown Cheats', 'Hunt: Showdown Cheats'],
	['Hunt: Showdown', 'Hunt: Showdown'],
	['Hunt: Showdown', 'Hunt: Showdown'],
	['Call of Duty', 'Hunt: Showdown'],
	['Hunt: Showdown PC', 'Hunt: Showdown PC'],
	['for Hunt: Showdown', 'for Hunt: Showdown'],
	['Hunt: Showdown ', 'Hunt: Showdown '],
	['hunt-showdown ', 'hunt-showdown '],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['operatorEsp', 'playerEsp'],
	['extractionFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['Hunters', 'players'],
	['operator', 'player'],
	['Hunters', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['compound clear', 'compound clear'],
	['extraction', 'extraction'],
	['huntshowdowncheat.net', 'huntshowdowncheat.net'],
	['Trucos Hunt: Showdown', 'Trucos Hunt: Showdown'],
	['Triches Hunt: Showdown', 'Triches Hunt: Showdown'],
	['Cheats Hunt: Showdown', 'Cheats Hunt: Showdown'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac': {");
pagesEn = pagesEn.replace(/Hunt: Showdown Hunt: Showdown/g, 'Hunt: Showdown');
pagesEn = pagesEn.replace(/for Hunt: Showdown Hunt: Showdown/g, 'for Hunt: Showdown');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'eac'/g, "'eac'");
pagesI18n = pagesI18n.replace(/eac:/g, "'eac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
