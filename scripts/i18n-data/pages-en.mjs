import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Hunt: Showdown Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Hunt Showdown cheats for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.',
		h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Hunt: Showdown Cheats is the undetected Hunt Showdown cheats package for Windows PC — built for Hunt: Showdown on Windows PC. Hunt: Showdown esp wallhack, Extraction ESP, and Hunt Showdown aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "Hunt: Showdown Cheats homepage hero — ESP and aimbot for Hunt: Showdown",
		galleryTitle: 'Hunt: Showdown Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Hunt Showdown cheats in 2026',
				'Hunt: Showdown rewards map awareness. Hunt: Showdown Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, compound clear, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.hunt} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/hunt-showdown-cheats/">Hunt Showdown cheats pillar</a>, <a href="/hunt-showdown-esp/">ESP guide</a>, <a href="/hunt-showdown-aimbot/">Aimbot controls</a>, and <a href="/hunt-showdown-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, extraction ESP, and Aimbot in one license',
				'Instead of stacking separate tools, Hunt: Showdown Cheats bundles player ESP wallhack, loot markers, extraction ESP overlays, and Aimbot profiles in one undetected package built for bounty hunts and compound clears — covering both “Hunt Showdown cheats” and “Hunt Showdown hacks” search intent.',
				'Browse the <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, <a href="/hunt-showdown-esp/">wallhack</a>, and <a href="/hunt-showdown-extraction-esp/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Crytek service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'hunt-showdown-esp': {
		title: 'Hunt: Showdown ESP 2026 | Player Boxes & Wallhack',
		description:
			'Hunt: Showdown ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected Hunt Showdown cheats for Hunt: Showdown.',
		h1: 'Hunt: Showdown ESP — Player Boxes & Wallhack',
		intro:
			'Hunt: Showdown esp visibility tools for raid and compound clear. Read enemy squads, Hunters, grunts, loot, and distance before you commit — toggleable Hunt Showdown ESP wallhack overlays bundled in our Hunt Showdown cheats package.',
		imageAlt: "Hunt: Showdown ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Hunt: Showdown ESP overlay visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Hunt: Showdown wallhack guide',
		ctaSecondaryHref: '/hunt-showdown-esp/',
		sections: [
			section(
				'What Hunt: Showdown ESP solves in raids',
				'Hunt: Showdown maps punish incomplete information. Hunt: Showdown Cheats ESP wallhack helps you spot enemy squads early, spot Hunters and grunts before they push your angle, and mark weapon and loot caches worth the detour.',
				'On raid, compound clear, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with extraction ESP overlays and Aimbot in one license.',
				`Hunt: Showdown’s live seasons and map updates are published by Crytek (${EXT.hunt}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extraction cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports bounty hunts and compound clears lobbies alike.',
				'Compare category detail on the <a href="/hunt-showdown-esp/">wallhack page</a> and pair visibility with the <a href="/hunt-showdown-extraction-esp/">extraction ESP</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extraction awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'Hunt: Showdown Cheats ESP wallhack is maintained for Hunt: Showdown with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/hunt-showdown-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/hunt-showdown-cheats/">Hunt Showdown cheats pillar</a> and <a href="/hunt-showdown-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'hunt-showdown-aimbot': {
		title: 'Hunt: Showdown Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Hunt: Showdown aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our Hunt Showdown cheats package.',
		h1: 'Hunt: Showdown Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Hunt: Showdown firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Hunt: Showdown aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Hunt: Showdown Aimbot combat previews',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/hunt-showdown-esp/',
		sections: [
			section(
				'Aimbot tuned for Hunt: Showdown combat pace',
				'Hunt: Showdown mixes long-range AR fights with close-quarters SMG pushes. Hunt: Showdown Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.hunt}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/hunt-showdown-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/hunt-showdown-esp/">ESP wallhack</a> and <a href="/hunt-showdown-extraction-esp/">Extraction ESP</a> in the same Hunt: Showdown Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'Hunt: Showdown Cheats rebuilds Aimbot behavior when Easy Anti-Cheat or major Hunt: Showdown patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Hunt: Showdown Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full Hunt Showdown cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Hunt: Showdown Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, extraction ESP, and Aimbot control included in the Hunt: Showdown Cheats package for Hunt: Showdown on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "Hunt: Showdown Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Hunt: Showdown Cheats feature gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extraction awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports bounty hunts and compound clears. Deep-dive the <a href="/hunt-showdown-esp/">ESP page</a> and <a href="/hunt-showdown-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.hunt} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Extraction ESP and Aimbot controls',
				'extraction ESP overlay with directional threat cues, configurable range for rotations and late-raid extraction points, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Hunt: Showdown sessions. See <a href="/hunt-showdown-extraction-esp/">radar</a> and <a href="/hunt-showdown-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/hunt-showdown-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@huntshowdowncheat.net.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/hunt-showdown-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Hunt: Showdown Cheats Pricing | $35/mo or $150 Life',
		description:
			'Hunt Showdown cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Hunt: Showdown Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Hunt: Showdown Cheats — ESP wallhack, extraction ESP, and Aimbot for Hunt: Showdown on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Hunt: Showdown Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Hunt: Showdown Cheats package visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Hunt: Showdown Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, extraction ESP, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Hunt: Showdown Cheats package — ideal if you play Hunt: Showdown regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, extraction ESP overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Hunt: Showdown patches.',
				`Season calendars and client updates come from ${EXT.hunt}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a>, <a href="/hunt-showdown-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Hunt: Showdown Cheats Setup | Windows PC Guide',
		description:
			'Set up Hunt Showdown cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'Hunt: Showdown Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Hunt: Showdown Cheats for Hunt: Showdown on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.',
		imageAlt: "Hunt: Showdown Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Hunt: Showdown Cheats setup visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Hunt: Showdown Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Hunt: Showdown.',
				`Also glance at ${EXT.status} if Crytek services look unstable on patch day — a platform outage is not a license fault.`,
				'Hunt: Showdown Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for Hunters, grunts, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, and <a href="/hunt-showdown-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/hunt-showdown-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Hunt: Showdown or Easy Anti-Cheat patches',
				'When Crytek ships a major Hunt: Showdown update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/hunt-showdown-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Hunt: Showdown Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'Hunt Showdown cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Hunt: Showdown Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and Hunt: Showdown patch rebuilds for the undetected ESP wallhack, extraction ESP, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Hunt: Showdown Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'Hunt: Showdown patch and maintenance visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/hunt-showdown-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Hunt: Showdown and Easy Anti-Cheat receive frequent patches. Hunt: Showdown Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Crytek platform health and this page for Hunt: Showdown Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and compound clear.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/hunt-showdown-cheats/">undetected Hunt Showdown cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.hunt}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Hunt: Showdown Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Hunt Showdown cheats FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Hunt: Showdown Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Hunt: Showdown Cheats — ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat maintenance, checkout, and Hunt: Showdown compatibility on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Hunt: Showdown Cheats FAQ visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Hunt: Showdown Cheats?',
				'Hunt: Showdown Cheats is an undetected cheat package for Hunt: Showdown on Windows PC. It includes ESP wallhack, Extraction ESP-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover raid and compound clear. Explore <a href="/features/">Features</a> for the full control list and <a href="/hunt-showdown-esp/">ESP</a> / <a href="/hunt-showdown-aimbot/">Aimbot</a> for module detail.',
				`Hunt: Showdown itself is published by Crytek (${EXT.hunt}). Cheats are third-party tools and may violate Crytek's rules — use is at your own risk.`,
			),
			section(
				'Are Hunt: Showdown Cheats undetected in 2026?',
				'Hunt: Showdown Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/hunt-showdown-cheats/">undetected Hunt Showdown cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@huntshowdowncheat.net or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Hunt: Showdown Cheats Support | Help & Contact',
		description:
			'Contact Hunt Showdown cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Hunt: Showdown Cheats Support — Contact Us',
		intro:
			'Get help with Hunt: Showdown Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Hunt: Showdown on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats support page for license and setup help",
		galleryTitle: 'Hunt: Showdown Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Hunt: Showdown Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Crytek bans.',
				`Account and game policy questions belong with Crytek. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@huntshowdowncheat.net',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Hunt: Showdown Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected Hunt Showdown cheats with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Hunt: Showdown Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How Hunt: Showdown Cheats stays maintained for Hunt: Showdown after Easy Anti-Cheat patches — ESP wallhack, extraction ESP, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Hunt: Showdown Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Hunt: Showdown Cheats visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Hunt: Showdown Cheats',
				'Undetected Hunt: Showdown Cheats means the package is actively maintained against Easy Anti-Cheat and major Hunt: Showdown patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; Hunt: Showdown client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or Hunt: Showdown updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass Hunt: Showdown guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/hunt-showdown-cheats/">Hunt Showdown cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Hunt: Showdown Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Hunt: Showdown wallhack ESP with player boxes and loot markers for Windows PC. Undetected Hunt Showdown cheats — learn overlays and buy.',
		h1: 'Hunt: Showdown Wallhack — ESP Boxes & Visibility',
		intro:
			'Hunt: Showdown wallhack ESP for Hunt: Showdown — see players, loot, bosses, and containers through toggleable wallhack overlays built for bounty hunts and compound clears.',
		imageAlt: "Hunt: Showdown wallhack visibility through walls in a raid",
		galleryTitle: 'Hunt: Showdown wallhack ESP gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Hunt: Showdown ESP page',
		ctaSecondaryHref: '/hunt-showdown-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Hunt: Showdown wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Hunt: Showdown Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extraction holds.',
				'For the broader ESP keyword page see <a href="/hunt-showdown-esp/">Hunt: Showdown ESP</a>; for combat assist see <a href="/hunt-showdown-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, compound clear, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.hunt}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/hunt-showdown-extraction-esp/">extraction ESP</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/hunt-showdown-cheats/">undetected Hunt Showdown cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/hunt-showdown-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Hunt: Showdown Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Hunt: Showdown extraction ESP for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our Hunt Showdown cheats package.',
		h1: 'Hunt: Showdown Radar Hack — 2D Threat Awareness',
		intro:
			'Extraction ESP-style overlay for Hunt: Showdown — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Hunt: Showdown extraction ESP overlay showing nearby threats",
		galleryTitle: 'Hunt: Showdown extraction ESP visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/hunt-showdown-esp/',
		sections: [
			section(
				'Why extraction ESP matters in Hunt: Showdown',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A extraction ESP overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Hunt: Showdown Cheats radar complements <a href="/hunt-showdown-esp/">ESP wallhack</a> markers during squad pushes and extraction camp fights.',
				`Mode rules and seasonal changes come from ${EXT.hunt}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extraction holds. Directional cues highlight flanks during building clears and flank pushes across raid and compound clear.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/hunt-showdown-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/hunt-showdown-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Extraction ESP modules receive Easy Anti-Cheat maintenance rebuilds with the full Hunt: Showdown Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Hunt: Showdown patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/hunt-showdown-cheats/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass Hunt: Showdown | Hunt: Showdown Cheats Maintenance',
		description:
			'How Hunt Showdown cheats rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Easy Anti-Cheat Bypass — Hunt: Showdown Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Hunt: Showdown Cheats — how ESP wallhack, extraction ESP, and Aimbot rebuild after Hunt: Showdown security updates.',
		imageAlt: "Hunt: Showdown Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Crytek' anti-cheat for Hunt: Showdown on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Hunt: Showdown Cheats monitors Easy Anti-Cheat patch notes and Hunt: Showdown seasonal updates from ${EXT.hunt} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Crytek service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/hunt-showdown-cheats/">undetected Hunt Showdown cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Hunt: Showdown Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best Hunt Showdown cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected Hunt Showdown cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'Hunt: Showdown Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Hunt: Showdown Cheats package for Hunt: Showdown — undetected ESP wallhack, extraction ESP, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Hunt: Showdown Cheats product overview for Hunt: Showdown",
		galleryTitle: 'Hunt: Showdown Cheats 2026 gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why Hunt Showdown cheats buyers choose Hunt: Showdown Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Hunt: Showdown Cheats bundles ESP wallhack, extraction ESP, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.hunt}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and compound clear loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, extraction ESP overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/hunt-showdown-cheats/">Hunt Showdown cheats pillar</a>, <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, <a href="/hunt-showdown-esp/">wallhack</a>, <a href="/hunt-showdown-extraction-esp/">radar</a>, <a href="/hunt-showdown-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a> checklist, <a href="/blog/hunt-showdown-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@huntshowdowncheat.net via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Hunt: Showdown Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Hunt Showdown cheats for Windows PC: undetected ESP wallhack, extraction ESP, and Aimbot with Easy Anti-Cheat maintenance. Compare Hunt Showdown cheats options and buy the full package.',
		h1: 'Hunt: Showdown Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Hunt Showdown cheats for raid and compound clear combine ESP wallhack visibility, Extraction ESP-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for Hunt Showdown cheats in 2026.',
		imageAlt: "Hunt: Showdown Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Hunt Showdown cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/hunt-showdown-cheats/',
		sections: [
			section(
				'What Hunt Showdown cheats include in 2026',
				'Players searching for Hunt Showdown cheats usually want visibility and combat tools without stacking separate downloads. Hunt: Showdown Cheats bundles player ESP wallhack, loot markers, extraction ESP overlays, and configurable Aimbot in one maintained package — the same toolkit often called Hunt Showdown cheats.',
				'Coverage spans raid and compound clear with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.hunt}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Hunt Showdown cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/hunt-showdown-cheats/">Hunt Showdown cheats 2026</a> and <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/hunt-showdown-esp/">Hunt: Showdown ESP</a>, <a href="/hunt-showdown-aimbot/">Hunt: Showdown Aimbot</a>, <a href="/hunt-showdown-esp/">wallhack</a>, <a href="/hunt-showdown-extraction-esp/">extraction ESP</a>, and <a href="/hunt-showdown-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/hunt-showdown-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-hunt-showdown-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-hunt-showdown-cheats-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'Hunt Showdown cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Hunt: Showdown Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/hunt-showdown-cheats/">mod menu</a>, <a href="/hunt-showdown-aimbot/">aimbot</a>, <a href="/hunt-showdown-esp/">ESP</a>.',
			),
			section(
				'Undetected Hunt Showdown cheats with Easy Anti-Cheat maintenance',
				'Undetected Hunt Showdown cheats require rebuilds after Easy Anti-Cheat and major Hunt: Showdown patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/hunt-showdown-cheats/">undetected Hunt Showdown cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Hunt: Showdown Hack Download 2026 | Instant Access',
		description:
			'Hunt Showdown cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Hunt: Showdown Hack Download — Instant License Delivery',
		intro:
			'How Hunt Showdown cheat download works for Hunt: Showdown — digital license delivery after payment confirmation, with ESP wallhack, extraction ESP, and Aimbot access on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats download and install delivery flow",
		galleryTitle: 'Hunt Showdown cheat download visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Hunt Showdown cheat download delivery works',
				'After checkout confirms payment, Hunt: Showdown Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Crytek services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Hunt Showdown cheat download includes player ESP wallhack, loot and container markers, extraction ESP overlays, Aimbot profiles, and in-client toggles for bounty hunts and compound clears.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Hunt: Showdown or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/hunt-showdown-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Hunt: Showdown Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Hunt: Showdown mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected Hunt Showdown cheats package.',
		h1: 'Hunt: Showdown Mod Menu — In-Client Control Panel',
		intro:
			'Hunt: Showdown mod menu controls for Hunt: Showdown — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Hunt: Showdown session on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats in-game menu controls",
		galleryTitle: 'Hunt: Showdown mod menu gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Hunt: Showdown mod menu controls',
				'A Hunt: Showdown mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Hunt: Showdown Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Hunt: Showdown.',
				'Control deep-dives: <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, <a href="/hunt-showdown-extraction-esp/">radar</a>.',
			),
			section(
				'Mod menu categories for bounty hunts and compound clears',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extraction holds.',
				'Extraction ESP range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.hunt} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/hunt-showdown-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'Hunt: Showdown mod menu behavior is rebuilt when Easy Anti-Cheat or major Hunt: Showdown updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Hunt: Showdown Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Hunt: Showdown soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our Hunt Showdown cheats with ESP boxes.',
		h1: 'Hunt: Showdown Soft Aim — Smooth Aimbot Controls',
		intro:
			'Hunt: Showdown soft aim settings for Hunt: Showdown — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Hunt: Showdown soft aim FOV and smoothness settings",
		galleryTitle: 'Hunt: Showdown soft aim gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/hunt-showdown-aimbot/',
		sections: [
			section(
				'What Hunt: Showdown soft aim means',
				'Hunt: Showdown soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Hunt: Showdown Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/hunt-showdown-aimbot/">Hunt: Showdown Aimbot</a>. Alternate wording: <a href="/hunt-showdown-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.hunt} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/hunt-showdown-esp/">ESP wallhack</a> and <a href="/hunt-showdown-extraction-esp/">Extraction ESP</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Hunt: Showdown Cheats 2026 | Buyer Guide',
		description:
			'Best Hunt Showdown cheats for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Hunt: Showdown Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Hunt Showdown cheats for Hunt: Showdown in 2026 — undetected ESP wallhack, extraction ESP, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Hunt: Showdown Cheats overview for Hunt: Showdown on PC",
		galleryTitle: 'Best Hunt Showdown cheats gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Hunt Showdown cheats in 2026',
				'The Hunt Showdown cheats combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Hunt: Showdown Cheats covers raid and compound clear with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Hunt Showdown cheats feature checklist',
				'Look for player ESP wallhack, loot markers, extraction ESP overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Hunt: Showdown patches.',
				'Review <a href="/features/">Features</a>, <a href="/hunt-showdown-cheats/">undetected status</a>, and <a href="/hunt-showdown-cheats/">Hunt Showdown cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/hunt-showdown-esp/">ESP</a>, <a href="/hunt-showdown-aimbot/">Aimbot</a>, <a href="/hunt-showdown-cheats/">hacks</a>.',
			),
			section(
				'Buying the Hunt Showdown cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Crytek terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Hunt: Showdown Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Hunt: Showdown aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our Hunt Showdown cheats package.',
		h1: 'Hunt: Showdown Aimbot Hack — Soft Aim Assist',
		intro:
			'Hunt: Showdown aimbot hack tools for Hunt: Showdown — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Hunt: Showdown aimbot hack controls and bone priority",
		galleryTitle: 'Hunt: Showdown aimbot hack gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/hunt-showdown-aimbot/',
		sections: [
			section(
				'Hunt: Showdown aimbot hack vs visibility tools',
				'A Hunt: Showdown aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Hunt: Showdown Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Hunt: Showdown combat pace across bounty hunts and compound clears.',
				'Prefer softer tracking language? See <a href="/hunt-showdown-aimbot/">soft aim</a>. Full settings: <a href="/hunt-showdown-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extraction points.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.hunt} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/hunt-showdown-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Hunt: Showdown ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Hunt: Showdown ESP hack with player boxes and loot markers for Windows PC. Undetected Hunt Showdown cheats with — see overlays and buy.',
		h1: 'Hunt: Showdown ESP Hack — Player Boxes Guide',
		intro:
			'Hunt: Showdown ESP hack overlays for Hunt: Showdown — player outlines, boss threat cues, loot and container markers with distance readouts across raid and compound clear.',
		imageAlt: "Hunt: Showdown ESP hack boxes and loot markers",
		galleryTitle: 'Hunt: Showdown ESP hack gallery',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/hunt-showdown-esp/',
		sections: [
			section(
				'What a Hunt: Showdown ESP hack shows',
				'A Hunt: Showdown ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/hunt-showdown-esp/">Hunt: Showdown ESP</a>. Wallhack wording: <a href="/hunt-showdown-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports bounty hunts and compound clears.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Hunt: Showdown patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/hunt-showdown-extraction-esp/">extraction ESP</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/hunt-showdown-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Hunt: Showdown Unlock All 2026 | What It Really Means',
		description:
			'Hunt: Showdown unlock all explained vs real Hunt Showdown cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Hunt: Showdown Unlock All — What Players Search For',
		intro:
			'Hunt: Showdown unlock all is a common search term for Hunt: Showdown — this page clarifies what unlock-all tools claim versus the ESP wallhack, extraction ESP, and Aimbot tools Hunt: Showdown Cheats actually provides on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats license features overview",
		galleryTitle: 'Hunt: Showdown unlock all guide visuals',
		ctaPrimary: 'Buy Hunt: Showdown Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Hunt: Showdown unlock all usually means',
				'Hunt: Showdown unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Hunt: Showdown Cheats focuses on in-match awareness — player ESP, loot markers, extraction ESP overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.hunt}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and weapon and loot caches during live matches. Extraction ESP adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/hunt-showdown-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a> and <a href="/hunt-showdown-cheats/">Hunt Showdown cheats</a>.',
			),
			section(
				'Buying Hunt: Showdown Cheats for the right reasons',
				'If you need undetected ESP wallhack, extraction ESP, and Aimbot for Hunt: Showdown on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Hunt: Showdown Cheats',
		description:
			'Privacy policy for Hunt: Showdown Cheats. How we handle support emails, order data, and checkout for Hunt Showdown cheats licenses on huntshowdowncheat.net.',
		h1: 'Privacy Policy',
		intro: 'How Hunt: Showdown Cheats handles information when you browse huntshowdowncheat.net or contact support about a Hunt: Showdown license.',
		imageAlt: "Hunt: Showdown Cheats privacy policy page",
		galleryTitle: 'Hunt: Showdown Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Hunt: Showdown Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@huntshowdowncheat.net with your request details.',
				'Policy updates publish on this page. Continued use of huntshowdowncheat.net after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Hunt: Showdown Cheats',
		description:
			'Refund policy for Hunt: Showdown Cheats. Digital delivery terms and eligibility for Hunt Showdown cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Hunt: Showdown Cheats licenses — ESP wallhack, extraction ESP, and Aimbot packages purchased through checkout for Hunt: Showdown.',
		imageAlt: "Hunt: Showdown Cheats refund policy page",
		galleryTitle: 'Hunt: Showdown Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Hunt: Showdown Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@huntshowdowncheat.net with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Hunt: Showdown Cheats Rules',
		description:
			'Terms of use for huntshowdowncheat.net and Hunt: Showdown Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of huntshowdowncheat.net and Hunt: Showdown Cheats licenses for Hunt: Showdown on Windows PC.',
		imageAlt: "Hunt: Showdown Cheats terms of use page",
		galleryTitle: 'Hunt: Showdown Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Hunt: Showdown Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Hunt: Showdown on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Hunt: Showdown may violate Crytek terms and result in account penalties. Hunt: Showdown Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/hunt-showdown-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@huntshowdowncheat.net for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
