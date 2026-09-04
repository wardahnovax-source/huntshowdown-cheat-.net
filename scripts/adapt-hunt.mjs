#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Hunt: Showdown Cheats.
 * Domain: huntshowdowncheat.net
 * Run from project root: node scripts/adapt-hunt.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'hunt-showdown-aimbot'],
	['tarkov-esp', 'hunt-showdown-esp'],
	['tarkov-wallhack', 'hunt-showdown-wallhack'],
	['tarkov-radar-hack', 'hunt-showdown-extraction-esp'],
	['undetected-tarkov-cheats', 'undetected-hunt-showdown-cheats'],
	['tarkov-cheats-2026', 'hunt-showdown-cheats-2026'],
	['battleye-bypass', 'easy-anti-cheat-bypass'],
	['tarkov-cheats', 'hunt-showdown-cheats'],
	['tarkov-cheat-download', 'hunt-showdown-cheat-download'],
	['tarkov-mod-menu', 'hunt-showdown-cheat-menu'],
	['tarkov-soft-aim', 'hunt-showdown-aim-assist'],
	['best-tarkov-cheats', 'best-hunt-showdown-cheats'],
	['tarkov-aimbot-hack', 'hunt-showdown-aimbot-hack'],
	['tarkov-esp-hack', 'hunt-showdown-esp-hack'],
	['tarkov-unlock-all', 'hunt-showdown-loot-esp'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://huntshowdowncheat.net'],
	['https://www.tarkovcheats.org', 'https://www.huntshowdowncheat.net'],
	['www.tarkovcheats.org', 'www.huntshowdowncheat.net'],
	['tarkovcheats.org', 'huntshowdowncheat.net'],
	['support@tarkovcheats.org', 'support@huntshowdowncheat.net'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fhunt-showdown'],
	['/products/escape-from-tarkov', '/products/hunt-showdown'],
	['/products/tarkov', '/products/hunt-showdown'],
	['project-name=tarkovcheats', 'project-name=huntshowdowncheat'],
	['project-name=besttarkovcheats', 'project-name=huntshowdowncheat'],
	['name = "tarkovcheats"', 'name = "huntshowdowncheat"'],
	['name = "besttarkovcheats"', 'name = "huntshowdowncheat"'],
	['"name": "tarkov-cheats"', '"name": "hunt-showdown-cheats"'],
	['https://www.escapefromtarkov.com/support/', 'https://www.huntshowdown.com/support/'],
	['https://www.escapefromtarkov.com/support', 'https://www.huntshowdown.com/support'],
	['https://www.escapefromtarkov.com/', 'https://www.huntshowdown.com/'],
	['https://www.escapefromtarkov.com', 'https://www.huntshowdown.com'],
	['https://www.battleye.com/', 'https://www.easy.ac/'],
	['https://www.battleye.com', 'https://www.easy.ac'],
	['tarkov-esp-player-tags', 'hunt-showdown-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'hunt-showdown-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'hunt-showdown-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'hunt-showdown-aimbot-skeleton'],
	['tarkov-esp-radar', 'hunt-showdown-esp-extraction'],
	['tarkov-cheats-combat', 'hunt-showdown-cheats-combat'],
	['tarkov-cheats-logo', 'hunt-showdown-cheats-logo'],
	['tarkov-hero-banner', 'hunt-showdown-hero-banner'],
	['tarkov-hero-ghost', 'hunt-showdown-hero-ghost'],
	['tarkov-hero-source', 'hunt-showdown-hero-source'],
	['tarkov-cheats-aimbot-view', 'hunt-showdown-cheats-aimbot-view'],
	['tarkov-cheats-wallhack', 'hunt-showdown-cheats-wallhack'],
	['tarkov-cheats-aimbot', 'hunt-showdown-cheats-aimbot'],
	['tarkov-cheats-radar', 'hunt-showdown-cheats-extraction'],
	['tarkov-cheats-raid', 'hunt-showdown-cheats-bounty'],
	['tarkov-cheats-esp', 'hunt-showdown-cheats-esp'],
	['tarkov-cheats-hero', 'hunt-showdown-cheats-hero'],
	['undetected-tarkov-cheats', 'undetected-hunt-showdown-cheats'],
	['best-tarkov-cheats', 'best-hunt-showdown-cheats'],
	['tarkov-cheat-download', 'hunt-showdown-cheat-download'],
	['tarkov-cheats-2026', 'hunt-showdown-cheats-2026'],
	['tarkov-radar-hack', 'hunt-showdown-extraction-esp'],
	['tarkov-aimbot-hack', 'hunt-showdown-aimbot-hack'],
	['tarkov-esp-hack', 'hunt-showdown-esp-hack'],
	['tarkov-unlock-all', 'hunt-showdown-loot-esp'],
	['tarkov-soft-aim', 'hunt-showdown-aim-assist'],
	['tarkov-mod-menu', 'hunt-showdown-cheat-menu'],
	['tarkov-wallhack', 'hunt-showdown-wallhack'],
	['tarkov-cheats', 'hunt-showdown-cheats'],
	['tarkov-aimbot', 'hunt-showdown-aimbot'],
	['tarkov-esp', 'hunt-showdown-esp'],
	['battleye-bypass', 'easy-anti-cheat-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'hunt-showdown-cheats'],
	['Escape from Tarkov', 'Hunt: Showdown'],
	['Tarkov Cheats', 'Hunt: Showdown Cheats'],
	['Tarkov cheats', 'Hunt Showdown cheats'],
	['Tarkov cheat', 'Hunt Showdown cheat'],
	['Tarkov hacks', 'Hunt Showdown hacks'],
	['Tarkov hack', 'Hunt Showdown hack'],
	['TarkovCheatsSite', 'HuntShowdownCheatsSite'],
	['Tarkov Intel', 'Hunt Intel'],
	['tarkov cheats', 'Hunt Showdown cheats'],
	['tarkov cheat', 'Hunt Showdown cheat'],
	['tarkov hacks', 'Hunt Showdown hacks'],
	['tarkov hack', 'Hunt Showdown hack'],
	['tarkov esp', 'Hunt Showdown ESP'],
	['tarkov aimbot', 'Hunt Showdown aimbot'],
	['tarkov wallhack', 'Hunt Showdown wallhack'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['Battlestate Games', 'Crytek'],
	['2D radar overlays', 'extraction ESP overlays'],
	['2D radar overlay', 'extraction ESP overlay'],
	['2D radar', 'Extraction ESP'],
	['radar hack', 'extraction ESP'],
	['Radar hack', 'Extraction ESP'],
	['radar overlays', 'extraction ESP overlays'],
	['radar overlay', 'extraction ESP overlay'],
	['Customs, Woods, and Streets of Tarkov', 'Stillwater Bayou, Lawson Delta, and DeSalle'],
	['Customs, Woods and Streets of Tarkov', 'Stillwater Bayou, Lawson Delta and DeSalle'],
	['Customs, Woods et Streets of Tarkov', 'Stillwater Bayou, Lawson Delta et DeSalle'],
	['Customs, Woods e Streets of Tarkov', 'Stillwater Bayou, Lawson Delta e DeSalle'],
	['Customs, Woods und Streets of Tarkov', 'Stillwater Bayou, Lawson Delta und DeSalle'],
	['PMC raids and Scav runs', 'bounty hunts and compound clears'],
	['PMC raids and scav-runs', 'bounty hunts and compound clears'],
	['PMC & Scav', 'Hunter & AI'],
	['scav-run', 'compound clear'],
	['scav run', 'compound clear'],
	['Scav runs', 'compound clears'],
	['Scav run', 'compound clear'],
	['extract fights', 'extraction fights'],
	['extract fight', 'extraction fight'],
	['extracts', 'extraction points'],
	['extract', 'extraction'],
	['Operators', 'Hunters'],
	['operators', 'Hunters'],
	['PMCs', 'Hunters'],
	['PMC', 'Hunter'],
	['Scavs', 'grunts'],
	['Scav', 'grunt'],
	['high-value loot', 'weapon and loot caches'],
	['huntImages', 'huntImages'],
	["from './tarkov'", "from './hunt'"],
	["from '../data/tarkov'", "from '../data/hunt'"],
	["from '../../data/tarkov'", "from '../../data/hunt'"],
	['fetch-tarkov-images', 'fetch-hunt-images'],
	['tarkov-hack-overlays', 'hunt-hack-overlays'],
	['fix-tarkov-copy', 'fix-hunt-copy'],
	['tarkovImages', 'huntImages'],
	['trucos-tarkov', 'trucos-hunt-showdown'],
	['triche-tarkov', 'triche-hunt-showdown'],
	['cheats-tarkov', 'cheats-hunt-showdown'],
	['trucchi-tarkov', 'trucchi-hunt-showdown'],
	['cheaty-tarkov', 'cheaty-hunt-showdown'],
	['chity-tarkov', 'chity-hunt-showdown'],
	['chitov-tarkov', 'chitov-hunt-showdown'],
	['chitiv-tarkov', 'chitiv-hunt-showdown'],
	['cheatow-tarkov', 'cheatow-hunt-showdown'],
	['hile-tarkov', 'hile-hunt-showdown'],
	['tarkov-hile', 'hunt-showdown-hile'],
	['Buy Tarkov Cheats', 'Buy Hunt: Showdown Cheats'],
	['Buy Tarkov', 'Buy Hunt: Showdown'],
	['Tarkov', 'Hunt: Showdown'],
	['tarkov', 'hunt-showdown'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-warzone.mjs', 'adapt-fortnite.mjs', 'adapt-tarkov.mjs', 'adapt-hunt.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameHuntTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'hunt.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → hunt.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-hunt-images.mjs'],
		['tarkov-hack-overlays.mjs', 'hunt-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-hunt-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'hunt-showdown-aimbot': 'hunt-showdown-aimbot',
		'hunt-showdown-esp': 'hunt-showdown-esp',
		'hunt-showdown-wallhack': 'wallhack',
		'hunt-showdown-extraction-esp': 'radar',
		'undetected-hunt-showdown-cheats': 'undetected',
		'hunt-showdown-cheats-2026': 'cheats-2026',
		'easy-anti-cheat-bypass': 'eac',
		'hunt-showdown-cheats': 'hacks',
		'hunt-showdown-cheat-download': 'cheat-download',
		'hunt-showdown-cheat-menu': 'mod-menu',
		'hunt-showdown-aim-assist': 'soft-aim',
		'best-hunt-showdown-cheats': 'best-cheats',
		'hunt-showdown-aimbot-hack': 'aimbot-hack',
		'hunt-showdown-esp-hack': 'esp-hack',
		'hunt-showdown-loot-esp': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
			console.log(`Wrote pageId ${pageId} → ${dir}`);
		} catch {
			// ignore missing dirs
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Hunt: Showdown Cheats (huntshowdowncheat.net)...\n');
	await renamePageDirs();
	await renameHuntTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	console.log('\nDone. Next: fix brand.ts identity, images, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
