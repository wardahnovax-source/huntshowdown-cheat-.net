export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/hunt-showdown-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/hunt-showdown-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/hunt-showdown-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/hunt-showdown-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/hunt-showdown-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/hunt-showdown-esp/' },
	{ label: fillBrandTokens('{game} extraction ESP'), href: '/hunt-showdown-extraction-esp/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/hunt-showdown-cheats/' },
	{ label: 'Aimbot', href: '/hunt-showdown-aimbot/' },
	{ label: 'ESP', href: '/hunt-showdown-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/hunt-showdown-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/hunt-showdown-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/hunt-showdown-aimbot/' },
	{ label: fillBrandTokens('{game} extraction ESP'), href: '/hunt-showdown-extraction-esp/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Hunt: Showdown on Windows PC. It includes aimbot, Hunter ESP, boss ESP, loot ESP, clue ESP, and extraction ESP, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-hunt-showdown-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected Hunter ESP, aimbot, and loot ESP for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-hunt-showdown-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in bounty hunts and compound clears?',
		answer:
			'Yes. Aimbot and ESP are built for {game} bounty flow — reading Hunters and bosses, spotting loot and clues, and staying aware near extraction points.',
		slug: 'bounty-hunts-and-compound-clears',
		seoTitle: 'Bounty Hunt and Compound Support | FAQ',
		seoDescription:
			'{brand} works in bounty hunts and compound clears — Hunter ESP, aimbot, and loot ESP for Windows PC.',
	}),
	faq({
		question: 'What is included — Hunter ESP, aimbot, or loot ESP?',
		answer:
			'{brand} bundles aimbot, Hunter ESP, AI / boss ESP, weapon and loot ESP, clue and bounty ESP, extraction ESP, and skeleton ESP in one license. See Features for the full list.',
		slug: 'hunter-esp-aimbot-or-loot-esp',
		seoTitle: 'What Is Included: Hunter ESP, Aimbot, Loot ESP | FAQ',
		seoDescription:
			'One {brand} license includes aimbot, Hunter ESP, boss ESP, loot ESP, clue ESP, and extraction ESP for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Hunt: Showdown or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Hunt: Showdown or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is Hunt Showdown Hunter ESP?',
		answer:
			'Hunter ESP is an overlay that shows other Hunters through walls, fog, and brush. {brand} includes skeleton ESP, box ESP, name ESP, distance ESP, and customizable colors.',
		slug: 'what-is-hunt-showdown-hunter-esp',
		seoTitle: 'What Is Hunt Showdown Hunter ESP? | FAQ',
		seoDescription:
			'Hunter ESP reveals other Hunters through walls — with skeleton, box, name, and distance ESP you can customize.',
	}),
	faq({
		question: 'Does {brand} include extraction ESP?',
		answer:
			'Yes. {brand} includes extraction ESP that marks extraction points and nearby threats — useful for bounty extracts and flanks.',
		slug: 'does-hunt-showdown-cheats-include-extraction-esp',
		seoTitle: 'Does {brand} Include Extraction ESP? | FAQ',
		seoDescription:
			'Yes — {brand} includes extraction ESP overlays for extraction points and nearby threats.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you hunt.',
		slug: 'eac-anti-cheat-and-hunt-showdown-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with aimbot, Hunter ESP, and loot ESP in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-hunt-showdown-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — aimbot, Hunter ESP, and loot ESP in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'bayouGhost_',
		rating: 5,
		text: 'Aimbot in Hunt: Showdown Cheats feels smooth on Stillwater Bayou. The menu took a few minutes to learn. After that, bounty hunts felt easy.',
		short: 'Aimbot in Hunt: Showdown Cheats feels smooth on Stillwater Bayou.',
		slug: 'hunt-showdown-aimbot-review-bayoughost',
		seoTitle: 'Aimbot Review by @bayouGhost_ — 5/5 | {brand}',
		seoDescription: '@bayouGhost_ rates {brand} aimbot 5/5 for Stillwater Bayou on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'Hunter ESP boxes help on compound clears. You can see who is holding a hallway before you push. Still worth the price for Hunt: Showdown Cheats.',
		short: 'Hunter ESP boxes help on compound clears. Still worth the price.',
		slug: 'hunt-showdown-esp-compound-review-buildsr4k',
		seoTitle: 'Hunter ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} Hunter ESP 4/5 for compound clears on Windows PC.',
		date: '2026-07-19',
		tag: 'Hunter ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Hunt: Showdown Cheats this event. Setup was simple. It stayed up after the last Easy Anti-Cheat update when my old cheat failed. Lifetime was a good buy.',
		short: 'Hunt: Showdown Cheats stayed up after the last Easy Anti-Cheat update. Lifetime was a good buy.',
		slug: 'hunt-showdown-update-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Aimbot in Hunt: Showdown Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Aimbot in Hunt: Showdown Cheats is easy to tune on PC.',
		slug: 'hunt-showdown-aimbot-review-ctrl-player99',
		seoTitle: 'Aimbot Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} aimbot 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Hunt: Showdown Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Lawson Delta is solid.',
		short: 'ESP on Lawson Delta is solid. Support helped after a slow first launch.',
		slug: 'hunt-showdown-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Lawson Delta is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot ESP in Hunt: Showdown Cheats pays for the monthly plan. Clue markers and distance make early bounty hunts faster.',
		short: 'Loot ESP in Hunt: Showdown Cheats pays for the monthly plan.',
		slug: 'hunt-showdown-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for early bounty hunts on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Hunt: Showdown Cheats since last event. Aimbot per weapon helps in compounds. Status updates after Easy Anti-Cheat patches could be clearer, but it came back the next day.',
		short: 'Aimbot per weapon in Hunt: Showdown Cheats helps in compounds.',
		slug: 'hunt-showdown-aimbot-hunt-review-rankedgrind42',
		seoTitle: 'Bounty Aimbot by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} aimbot 4/5 for bounty hunts on Windows PC.',
		date: '2026-07-07',
		tag: 'Bounty',
	}),
	reviewMeta({
		handle: 'vanLifeHunt',
		rating: 5,
		text: 'Extraction ESP in Hunt: Showdown Cheats saved me near extracts. Seeing the third party early in duos is huge. Boxes plus extraction ESP look clean.',
		short: 'Extraction ESP in Hunt: Showdown Cheats saved me near extracts.',
		slug: 'hunt-showdown-extraction-esp-review-vanlifehunt',
		seoTitle: 'Extraction ESP Review by @vanLifeHunt — 5/5 | {brand}',
		seoDescription: '@vanLifeHunt rates {brand} extraction ESP 5/5 near extracts on Windows PC.',
		date: '2026-07-28',
		tag: 'Extraction',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Hunt: Showdown Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Hunt: Showdown Cheats was back the next morning after a patch.',
		slug: 'hunt-showdown-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Easy Anti-Cheat updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Long-ammo aimbot plus Hunter ESP in Hunt: Showdown Cheats is excellent for swamp shots. Simple and strong.',
		short: 'Long-ammo aimbot plus Hunter ESP in Hunt: Showdown Cheats is excellent.',
		slug: 'hunt-showdown-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper aimbot 5/5 with Hunter ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
