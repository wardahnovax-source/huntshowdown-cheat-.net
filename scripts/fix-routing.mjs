#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Hunt: Showdown source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['hunt-showdown-esp', 'hunt-showdown-esp'],
	['hunt-showdown-aimbot', 'hunt-showdown-aimbot'],
	['eac', 'eac'],
	['undetected-hunt-showdown-cheats', 'undetected-hunt-showdown-cheats'],
	['hunt-showdown-wallhack', 'hunt-showdown-wallhack'],
	['hunt-showdown-extraction-esp', 'hunt-showdown-extraction-esp'],
	['hunt-showdown-cheats-2026', 'hunt-showdown-cheats-2026'],
	['easy-anti-cheat-bypass', 'easy-anti-cheat-bypass'],
	['huntshowdowncheat.net', 'huntshowdowncheat.net'],
	['trucos-hunt-showdown', 'trucos-hunt-showdown'],
	['triche-hunt-showdown', 'triche-hunt-showdown'],
	['hunt-showdown-cheats', 'escape-from-hunt-showdown-cheats'],
	['cheats-hunt-showdown', 'cheats-hunt-showdown'],
	['trucchi-hunt-showdown', 'trucchi-hunt-showdown'],
	['cheaty-hunt-showdown', 'cheaty-hunt-showdown'],
	['chity-hunt-showdown', 'chity-hunt-showdown'],
	['chitov-hunt-showdown', 'chitov-hunt-showdown'],
	['chitiv-hunt-showdown', 'chitiv-hunt-showdown'],
	['cheatow-hunt-showdown', 'cheatow-hunt-showdown'],
	['hile-hunt-showdown', 'hile-hunt-showdown'],
	['hunt-showdown-hile', 'hunt-showdown-hile'],
	['hunt-showdown-esp-chity', 'hunt-showdown-esp-chity'],
	['hunt-showdown-aimbot-chity', 'hunt-showdown-aimbot-chity'],
	['unentdeckte-hunt-showdown-cheats', 'unentdeckte-escape-from-hunt-showdown-cheats'],
	['cheats-hunt-showdown-indetectaveis', 'cheats-hunt-showdown-indetectaveis'],
	['trucchi-hunt-showdown-indetectabili', 'trucchi-hunt-showdown-indetectabili'],
	['niewykrywalne-cheats-hunt-showdown', 'niewykrywalne-cheats-hunt-showdown'],
	['nedecektiruemye-chity-hunt-showdown', 'nedecektiruemye-chity-hunt-showdown'],
	['tespit-edilemeyen-hunt-showdown-hileleri', 'tespit-edilemeyen-hunt-showdown-hileleri'],
	['nedecektovani-chity-hunt-showdown', 'nedecektovani-chity-hunt-showdown'],
	['cheats-hunt-showdown-nedetectabile', 'cheats-hunt-showdown-nedetectabile'],
	['basta-hunt-showdown-cheats', 'basta-escape-from-hunt-showdown-cheats'],
	['easy-anti-cheat-bypass-trucos-hunt-showdown', 'easy-anti-cheat-bypass-trucos-hunt-showdown'],
	['easy-anti-cheat-bypass-triche-hunt-showdown', 'easy-anti-cheat-bypass-triche-hunt-showdown'],
	['easy-anti-cheat-bypass-cheats-hunt-showdown', 'easy-anti-cheat-bypass-cheats-hunt-showdown'],
	['easy-anti-cheat-bypass-chity-hunt-showdown', 'easy-anti-cheat-bypass-chity-hunt-showdown'],
	['easy-anti-cheat-bypass-hunt-showdown', 'easy-anti-cheat-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-hunt-showdown-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-hunt-showdown-cheats-hero.webp',
	'hunt-showdown-esp': '/images/escape-from-hunt-showdown-cheats-esp-wallhack.webp',
	'hunt-showdown-aimbot': '/images/escape-from-hunt-showdown-cheats-aimbot-combat.webp',
	features: '/images/escape-from-hunt-showdown-cheats-package.webp',
	pricing: '/images/escape-from-hunt-showdown-cheats-cover.webp',
	setup: '/images/hunt-showdown-loadout-builder.webp',
	updates: '/images/hunt-showdown-header-art.webp',
	faq: '/images/hunt-showdown-squad-fight.webp',
	support: '/images/escape-from-hunt-showdown-cheats-package.webp',
	undetected: '/images/hunt-showdown-battle-royale-combat.webp',
	wallhack: '/images/escape-from-hunt-showdown-cheats-esp-wallhack.webp',
	radar: '/images/hunt-showdown-player-esp.webp',
	'eac': '/images/hunt-showdown-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-hunt-showdown-cheats-hero.webp',
	privacy: '/images/escape-from-hunt-showdown-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-hunt-showdown-cheats-cover.webp',
	terms: '/images/escape-from-hunt-showdown-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'hunt-showdown-esp', 'hunt-showdown-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'hunt-showdown-esp' | 'hunt-showdown-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractionFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
