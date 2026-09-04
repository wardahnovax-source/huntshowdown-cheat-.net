#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'Hunt Showdown cheats', espWallhack: 'Hunt Showdown cheats wallhack', aimbotCombat: 'Hunt Showdown cheats aimbot', squadFight: 'Hunt Showdown cheats', playerEsp: 'Hunt Showdown cheats esp', headerArt: 'Hunt Showdown cheats aimbot', cheatsPackage: 'Hunt Showdown cheats radar', rebootFight: 'Hunt Showdown cheats aimbot', battleRoyale: 'Hunt Showdown cheats', battleRoyaleIsland: 'Hunt Showdown cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Hunt: Showdown ESP player tags hack'", "imageAlt: 'Hunt Showdown cheats esp'"],
	["imageAlt: 'Hunt: Showdown ESP extraction ESP'", "imageAlt: 'Hunt Showdown cheats radar'"],
	["imageAlt: 'Hunt: Showdown aimbot sniper kill'", "imageAlt: 'Hunt Showdown cheats aimbot'"],
	["imageAlt: 'Hunt: Showdown aimbot skeleton targeting'", "imageAlt: 'Hunt Showdown cheats aimbot'"],
	["imageAlt: 'Hunt Showdown cheats ADS combat'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats setup PC activation'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats FAQ ESP aimbot'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats support license help'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Undetected Hunt Showdown cheats ESP wallhack'", "imageAlt: 'undetected Hunt Showdown cheats'"],
	["imageAlt: 'Hunt: Showdown wallhack skeleton ESP'", "imageAlt: 'Hunt Showdown cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass hunt-showdown ESP aimbot'", "imageAlt: 'Hunt Showdown cheats eac'"],
	["imageAlt: 'Hunt Showdown cheats 2026 ESP aimbot'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats combat aimbot'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheat download ESP aimbot'", "imageAlt: 'Hunt Showdown cheats download'"],
	["imageAlt: 'Hunt: Showdown mod menu ESP aimbot'", "imageAlt: 'Hunt Showdown cheats mod menu'"],
	["imageAlt: 'Hunt: Showdown soft aim aimbot settings'", "imageAlt: 'Hunt Showdown cheats soft aim'"],
	["imageAlt: 'Best Hunt Showdown cheats 2026 ESP'", "imageAlt: 'best Hunt Showdown cheats'"],
	["imageAlt: 'Hunt: Showdown aimbot hack combat'", "imageAlt: 'Hunt Showdown cheats aimbot'"],
	["imageAlt: 'Hunt: Showdown ESP hack wallhack'", "imageAlt: 'Hunt Showdown cheats esp'"],
	["imageAlt: 'Hunt: Showdown unlock all ESP aimbot guide'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats privacy policy'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats refund policy'", "imageAlt: 'Hunt Showdown cheats'"],
	["imageAlt: 'Hunt Showdown cheats terms of use'", "imageAlt: 'Hunt Showdown cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Hunt: Showdown ${meta.altKeyword}`")
	.join("imageAlt: 'Hunt Showdown cheats'")
	.split("galleryTitle: `Hunt: Showdown Cheats ${topicName}`")
	.join("galleryTitle: 'Hunt Showdown cheats'")
	.split("imageAlt: `Hunt Showdown cheats ${kind} policy`")
	.join("imageAlt: 'Hunt Showdown cheats'")
	.split("galleryTitle: `Hunt: Showdown Cheats ${kind} resources`")
	.join("galleryTitle: 'Hunt Showdown cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
