#!/usr/bin/env node
/** Final pass: fix remaining Hunt: Showdown references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['huntImages', 'huntImages'],
	["from '../data/hunt'", "from '../data/hunt'"],
	["from './hunt'", "from './hunt'"],
	['/undetected-hunt-showdown-cheats/', '/undetected-hunt-showdown-cheats/'],
	['/hunt-showdown-wallhack/', '/hunt-showdown-wallhack/'],
	['/hunt-showdown-extraction-esp/', '/hunt-showdown-extraction-esp/'],
	['/easy-anti-cheat-bypass/', '/easy-anti-cheat-bypass/'],
	['/hunt-showdown-cheats-2026/', '/hunt-showdown-cheats-2026/'],
	['/hunt-showdown-aimbot/', '/hunt-showdown-aimbot/'],
	['/hunt-showdown-esp/', '/hunt-showdown-esp/'],
	['/hunt-showdown-cheats/', '/hunt-showdown-esp/'],
	['Hunt: Showdown Cheats', 'Hunt: Showdown Cheats'],
	['Hunt Showdown cheats', 'Hunt Showdown cheats'],
	['Hunt: Showdown wallhack', 'Hunt: Showdown wallhack'],
	['Hunt: Showdown radar', 'Hunt: Showdown radar'],
	['Hunt: Showdown Aimbot', 'Hunt: Showdown Aimbot'],
	['Hunt: Showdown ESP', 'Hunt: Showdown ESP'],
	['Hunt: Showdown', 'Hunt: Showdown'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['huntshowdowncheat.net', 'huntshowdowncheat.net'],
	['operatorEsp', 'playerEsp'],
	['extractionFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
