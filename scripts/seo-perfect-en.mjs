#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromhunt-showdown.com)
	['published by ${EXT.activision}', 'published by Crytek (${EXT.hunt})'],
	['from ${EXT.activision}', 'from ${EXT.hunt}'],
	['via ${EXT.activision}', 'via ${EXT.hunt}'],
	['belong with ${EXT.activision}', 'belong with Crytek'],
	['${EXT.activision} terms', 'Crytek terms'],
	['${EXT.activision} season updates', '${EXT.hunt} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Hunt: Showdown
	['vehicles, loot', 'Hunters, grunts, loot'],
	['notice vehicles before they push your position', 'spot Hunters and grunts before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, extraction cues, and loot pins so only raid-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and extraction awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extraction awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'weapon and loot caches worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'Hunters, grunts, and loot'],
	['players, loot, vehicles', 'Hunters, grunts, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full raid loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'raid-critical'],
	['endgame circles', 'extraction holds'],
	['final circles', 'late-raid extraction points'],
	['final-circle scrims', 'extraction camp fights'],
	['before your first ranked block', 'before your first raid'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every raid',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'Hunters, grunts, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and extraction points'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['REasy Anti-Cheat out for', 'Reach out for'],
	['an Easy Anti-Cheat', 'a Easy Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['Hunt Showdown cheats & Hunt Showdown cheats', 'Hunt Showdown cheats'],
	[
		'covering both Hunt Showdown cheats and Hunt Showdown cheats search intent',
		'covering both “Hunt Showdown cheats” and “Hunt Showdown hacks” search intent',
	],
	[
		'also searched as Hunt Showdown cheats and Hunt Showdown cheat.',
		'built for Hunt: Showdown on Windows PC.',
	],
	[
		'Hunt Showdown cheats vs Hunt Showdown cheats — same stack, clear pages',
		'How this Hunt Showdown cheats pillar fits nearby pages',
	],
	[
		'Searchers use Hunt Showdown cheats and Hunt Showdown cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/hunt-showdown-esp-hack/', '/hunt-showdown-esp/'],
	['/hunt-showdown-aimbot-hack/', '/hunt-showdown-aimbot/'],
	['/best-hunt-showdown-cheats/', '/hunt-showdown-cheats/'],
	['best Hunt Showdown cheats guide', 'Hunt Showdown cheats pillar'],
	['best Hunt Showdown cheats checklist', 'Hunt Showdown cheats checklist'],
	['best Hunt Showdown cheats', 'Hunt Showdown cheats'],
	[
		'Prefer softer tracking? Read the <a href="/hunt-showdown-aim-assist/">soft aim guide</a>. Want the search term most players use? See <a href="/hunt-showdown-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/hunt-showdown-aim-assist/">soft aim guide</a>.',
	],
	['Related landings: <a href="/hunt-showdown-cheat-download/">cheat download</a>, <a href="/hunt-showdown-cheat-menu/">mod menu</a>, <a href="/hunt-showdown-aimbot/">aimbot hack</a>, <a href="/hunt-showdown-esp/">ESP hack</a>.',
		'Related landings: <a href="/hunt-showdown-cheat-download/">cheat download</a>, <a href="/hunt-showdown-cheat-menu/">mod menu</a>, <a href="/hunt-showdown-aimbot/">aimbot</a>, <a href="/hunt-showdown-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
