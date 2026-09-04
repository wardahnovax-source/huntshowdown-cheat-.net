#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Hunt: Showdown source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['hunt-showdown-esp', 'hunt-showdown-esp'],
	['hunt-showdown-aimbot', 'hunt-showdown-aimbot'],
	["'eac'", "'eac'"],
	['easy-anti-cheat-bypass', 'easy-anti-cheat-bypass'],
	['undetected-hunt-showdown-cheats', 'undetected-hunt-showdown-cheats'],
	['hunt-showdown-wallhack', 'hunt-showdown-wallhack'],
	['hunt-showdown-extraction-esp', 'hunt-showdown-extraction-esp'],
	['hunt-showdown-cheats-2026', 'hunt-showdown-cheats-2026'],
	['escape-from-hunt-showdown-cheats', 'escape-from-hunt-showdown-cheats'],
	['escape-from-hunt-showdown', 'hunt-showdown'],
	['Hunt: Showdown', 'Hunt: Showdown'],
	['Hunt: Showdown', 'Hunt: Showdown'],
	['Hunt: Showdown Cheats', 'Hunt: Showdown Cheats'],
	['Hunt Showdown cheats', 'Hunt Showdown cheats'],
	['Hunt Showdown cheat', 'Hunt Showdown cheat'],
	['Hunt: Showdown ESP', 'Hunt: Showdown ESP'],
	['Hunt: Showdown Aimbot', 'Hunt: Showdown Aimbot'],
	['Hunt: Showdown wallhack', 'Hunt: Showdown wallhack'],
	['Hunt: Showdown radar', 'Hunt: Showdown radar'],
	['Hunt: Showdown firefights', 'Hunt: Showdown firefights'],
	['Hunt: Showdown combat', 'Hunt: Showdown combat'],
	['Hunt: Showdown patches', 'Hunt: Showdown patches'],
	['Hunt: Showdown updates', 'Hunt: Showdown updates'],
	['Hunt: Showdown setup', 'Hunt: Showdown setup'],
	['Hunt: Showdown license', 'Hunt: Showdown license'],
	['Hunt: Showdown licenses', 'Hunt: Showdown licenses'],
	['Hunt: Showdown sessions', 'Hunt: Showdown sessions'],
	['in Hunt: Showdown', 'in Hunt: Showdown'],
	['for Hunt: Showdown', 'for Hunt: Showdown'],
	['Hunt: Showdown on', 'Hunt: Showdown on'],
	['Hunt: Showdown or', 'Hunt: Showdown or'],
	['Hunt: Showdown\'s', 'Hunt: Showdown\'s'],
	['Hunt: Showdown ', 'Hunt: Showdown '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@huntshowdowncheat.net', 'support@huntshowdowncheat.net'],
	['Stillwater Bayou, Lawson Delta, and DeSalle', 'Stillwater Bayou, Lawson Delta, and DeSalle'],
	['Stillwater Bayou, Lawson Delta and DeSalle', 'Stillwater Bayou, Lawson Delta and DeSalle'],
	['extraction fights', 'extraction fights'],
	['extraction fight', 'extraction fight'],
	['raid rounds', 'raid rounds'],
	['extraction', 'extraction'],
	['Hunters', 'players'],
	['operator', 'player'],
	['Hunters', 'Players'],
	['Operator', 'Player'],
	['extraction timer', 'extraction timer'],
	['bounty hunts and compound clears', 'bounty hunts and compound clears'],
	['bounty hunts and compound clears', 'bounty hunts and compound clears'],
	['Hunter & AI', 'Hunter & AI'],
	['weapon and loot caches', 'weapon and loot caches'],
	['weapon and loot caches', 'weapon and loot caches'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Hunt: Showdown combat pace'],
	['COD', 'Hunt: Showdown'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'extraction ESP',
	aimbot: 'Aimbot',
	product: 'Hunt: Showdown Cheats',
	game: 'Hunt: Showdown',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Stillwater Bayou, Lawson Delta, and DeSalle'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
