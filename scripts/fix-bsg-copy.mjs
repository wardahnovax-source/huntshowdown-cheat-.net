#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Crytek'"],
	['Activision\u2019', "Crytek'"],
	['Activision services', 'Crytek services'],
	['Activision service', 'Crytek service'],
	['Activision platform', 'Crytek platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Crytek bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Hunt: Showdown Support'],
	['Activision Hunt: Showdown', 'Hunt: Showdown'],
	['Activision Support', 'Hunt: Showdown Support'],
	['Activision', 'Crytek'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromhunt-showdown.com/support'],
	['www.epicgames.com/hunt-showdown', 'www.escapefromhunt-showdown.com'],
	['www.hunt-showdown.com/competitive', 'www.escapefromhunt-showdown.com'],
	['https://www.hunt-showdown.com/', 'https://www.huntshowdown.com/'],
	['Hunt: Showdown.com', 'Hunt: Showdown'],
	['Hunt: Showdown Competitive', 'Hunt: Showdown'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
