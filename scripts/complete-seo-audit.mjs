#!/usr/bin/env node
/**
 * Completes escape-from-hunt-showdown-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'hunt-showdown-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'hunt-showdown-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'hunt-showdown-cheat-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'hunt-showdown-aim-assist', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-hunt-showdown-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'hunt-showdown-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'hunt-showdown-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'hunt-showdown-loot-esp', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/hunt-showdown-hunt-showdown/g, 'hunt-showdown'],
	[/easy-anti-cheat-bypass-hunt-showdown/g, 'easy-anti-cheat-bypass'],
	[/Hunt: Showdown/g, 'Hunt: Showdown'],
	[/Hunt: Showdown/g, 'Hunt: Showdown'],
	[/Call of Duty/g, 'Hunt: Showdown'],
	[/Hunt: Showdown Wallhack/g, 'Hunt: Showdown Wallhack'],
	[/Hunt: Showdown Radar Hack/g, 'Hunt: Showdown Radar Hack'],
	[/Hunt: Showdown Cheat Features/g, 'Hunt: Showdown Cheat Features'],
	[/Hunt: Showdown Cheat Pricing/g, 'Hunt: Showdown Cheat Pricing'],
	[/Hunt: Showdown Cheat Setup/g, 'Hunt: Showdown Cheat Setup'],
	[/Hunt: Showdown Cheat Status/g, 'Hunt: Showdown Cheat Status'],
	[/Hunt: Showdown Cheat Support/g, 'Hunt: Showdown Cheat Support'],
	[/Hunt: Showdown squad fight/g, 'Hunt: Showdown squad fight'],
	[/Hunt: Showdown squad builder/g, 'Hunt: Showdown loadout builder'],
	[/Hunt: Showdown store header/g, 'Hunt: Showdown header'],
	[/Hunt: Showdown wasteland combat/g, 'Hunt: Showdown battle royale combat'],
	[/Hunt: Showdown loadout builder/g, 'Hunt: Showdown loadout builder'],
	[/Hunt: Showdown pricing/g, 'Hunt: Showdown pricing'],
	[/Hunt: Showdown Easy Anti-Cheat/g, 'Hunt: Showdown Easy Anti-Cheat'],
	[/on Hunt: Showdown/g, 'on Hunt: Showdown'],
	[/for Hunt: Showdown/g, 'for Hunt: Showdown'],
	[/Hunt: Showdown guides/g, 'Hunt: Showdown guides'],
	[/Hunt: Showdown guide/g, 'Hunt: Showdown guide'],
	[/Hunt: Showdown hileleri/g, 'Hunt: Showdown hileleri'],
	[/Hunt: Showdown hile/g, 'Hunt: Showdown hile'],
	[/Hunt: Showdown hileleri/g, 'Hunt: Showdown hileleri'],
	[/cheatów Hunt: Showdown/g, 'cheatów Hunt: Showdown'],
	[/cheat Hunt: Showdown/g, 'cheat Hunt: Showdown'],
	[/cheats Hunt: Showdown/g, 'cheats Hunt: Showdown'],
	[/trucos Hunt: Showdown/g, 'trucos Hunt: Showdown'],
	[/triche Hunt: Showdown/g, 'triche Hunt: Showdown'],
	[/trucchi Hunt: Showdown/g, 'trucchi Hunt: Showdown'],
	[/Wallhack Hunt: Showdown/g, 'Hunt: Showdown Wallhack'],
	[/cheat Hunt: Showdown undetected/g, 'cheat Hunt: Showdown undetected'],
	[/cheats Hunt: Showdown undetected/g, 'cheats Hunt: Showdown undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/compound clear room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and compound clear'],
	[/Verdansk, Urzikstan/g, 'Verdansk, compound clear'],
	[/raid and compound clear/g, 'raid and compound clear'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-hunt-showdown-cheats/g, 'escape-from-hunt-showdown-cheats'],
	[/escape-from-hunt-showdown/g, 'hunt-showdown'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Hunt: Showdown'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Hunt: Showdown anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Hunt: Showdown Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Hunt: Showdown guides/g, 'Hunt: Showdown guides');
	content = content.replace(/Hunt: Showdown guide/g, 'Hunt: Showdown guide');
	content = content.replace(/Hunt: Showdown hileleri/g, 'Hunt: Showdown hileleri');
	content = content.replace(/Hunt: Showdown hile/g, 'Hunt: Showdown hile');
	content = content.replace(/cheat Hunt: Showdown/g, 'cheat Hunt: Showdown');
	content = content.replace(/cheats Hunt: Showdown/g, 'cheats Hunt: Showdown');
	content = content.replace(/trucos Hunt: Showdown/g, 'trucos Hunt: Showdown');
	content = content.replace(/triche Hunt: Showdown/g, 'triche Hunt: Showdown');
	content = content.replace(/trucchi Hunt: Showdown/g, 'trucchi Hunt: Showdown');
	content = content.replace(/cheatów Hunt: Showdown/g, 'cheatów Hunt: Showdown');
	content = content.replace(/читов Hunt: Showdown/g, 'читов Hunt: Showdown');
	content = content.replace(/читів Hunt: Showdown/g, 'читів Hunt: Showdown');
	content = content.replace(/Hunt: Showdownチート/g, 'Hunt: Showdownチート');
	content = content.replace(/Hunt: Showdown 치트/g, 'Hunt: Showdown 치트');
	content = content.replace(/Hunt: Showdown作弊/g, 'Hunt: Showdown作弊');
	content = content.replace(/Hunt: Showdown rehberleri/g, 'Hunt: Showdown rehberleri');
	content = content.replace(/Hunt: Showdown gidsen/g, 'Hunt: Showdown gidsen');
	content = content.replace(/Hunt: Showdown průvodce/g, 'Hunt: Showdown průvodce');
	content = content.replace(/Hunt: Showdown guider/g, 'Hunt: Showdown guider');
	content = content.replace(/Hunt: Showdown related/g, 'Hunt: Showdown related');
	content = content.replace(/Hunt: Showdown ガイド/g, 'Hunt: Showdown ガイド');
	content = content.replace(/Hunt: Showdown 가이드/g, 'Hunt: Showdown 가이드');
	content = content.replace(/Hunt: Showdown指南/g, 'Hunt: Showdown指南');
	content = content.replace(/Hunt: Showdown गाइड/g, 'Hunt: Showdown गाइड');
	content = content.replace(/Hunt: Showdown panduan/g, 'Hunt: Showdown panduan');
	content = content.replace(/Hunt: Showdown คู่มือ/g, 'Hunt: Showdown คู่มือ');
	content = content.replace(/Hunt: Showdown hướng dẫn/g, 'Hunt: Showdown hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Hunt: Showdown Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
