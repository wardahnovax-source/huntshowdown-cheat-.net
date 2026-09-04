/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Hunt: Showdown Cheats',
	/** Short product label if needed */
	shortName: 'Hunt: Showdown',
	/** Canonical origin — no trailing slash */
	url: 'https://huntshowdowncheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@huntshowdowncheat.net',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fhunt-showdown',

	/** Game this template instance targets */
	game: 'Hunt: Showdown',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/hunt-showdown-cheats-logo.webp',
	logoRaster: '/images/hunt-showdown-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Hunt: Showdown Cheats logo',
	defaultOgImage: '/images/hunt-showdown-cheats-hero-1920w.webp',
	heroImage: '/images/hunt-showdown-cheats-hero-1920w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#c9a44a',
		bg: '#0a0b08',
		soft: '#dcc98a',
		deep: '#6e5420',
		hover: '#ddb85c',
		panel: '#0c0d0a',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'Hunt Showdown cheats',
		list: [
			'Hunt Showdown cheats',
			'Hunt Showdown hacks',
			'Hunt Showdown aimbot',
			'Hunt Showdown ESP',
			'Hunt Showdown Hunter ESP',
			'Hunt Showdown cheat',
			'Hunt Showdown trainer',
			'Hunt Showdown wallhack',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /hunt-showdown-cheats/ owns the head term. */
		homeTitle: 'HUNT:SHOWDOWN CHEATS | Aimbot & Hunter ESP',
		homeDescription:
			'Hunt Showdown cheats for Windows PC. Aimbot, Hunter ESP, boss ESP, loot ESP, and extraction ESP with Easy Anti-Cheat updates. Compare plans and buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — aimbot, Hunter ESP, boss ESP, loot ESP, clue ESP, and extraction ESP after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same aimbot and ESP features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a bounty hunt on Windows PC.',
		/** Money page meta — primary target for "Hunt Showdown cheats". */
		previewTitle: 'Hunt Showdown Cheats | Aimbot & Hunter ESP',
		previewDescription:
			'Buy Hunt Showdown cheats for Hunt: Showdown on Windows PC. Aimbot, Hunter ESP, boss ESP, loot ESP, and Easy Anti-Cheat updates with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can hunt faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Hunt: Showdown — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, Hunter ESP, loot ESP, and patch updates for Hunt: Showdown on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — bounty tips, Hunter ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC hunters.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, Hunter ESP, and loot ESP for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, Hunter ESP, boss ESP, loot ESP, and extraction ESP, with {antiCheat} maintenance after patches.',
		heroLede: 'Aimbot, Hunter ESP, and extraction tools for Hunt: Showdown on Windows PC.',
		blogLabel: 'Hunt Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you hunt.',
		previewIntro:
			'{brand} for Hunt: Showdown — Hunter ESP, aimbot, boss ESP, loot ESP, clue ESP, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, Hunter ESP, loot ESP, and support.',
		chipEsp: 'Hunter ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Extraction ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-09-04',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/hunt-showdown-cheats-esp.webp',
				title: 'Hunter ESP overlay in Hunt: Showdown',
				caption: 'Hunter ESP boxes, names, and distance readouts in the bayou',
			},
			{
				src: '/images/hunt-showdown-cheats-wallhack.webp',
				title: 'Wallhack visibility for Hunt: Showdown hunts',
				caption: 'Hunter and grunt outlines through walls, fog, and brush',
			},
			{
				src: '/images/hunt-showdown-cheats-aimbot.webp',
				title: 'Aimbot FOV and skeleton ESP for Hunt: Showdown',
				caption: 'Configurable aimbot FOV, bone lock, and skeleton ESP',
			},
			{
				src: '/images/hunt-showdown-cheats-aimbot-view.webp',
				title: 'Aimbot view in Hunt: Showdown Cheats',
				caption: 'In-match aimbot and ESP overlay for Windows PC',
			},
			{
				src: '/images/hunt-showdown-cheats-extraction.webp',
				title: 'Extraction and loot ESP overlay',
				caption: 'Extraction points, loot, and hunter markers on the map',
			},
			{
				src: '/images/hunt-showdown-cheats-bounty.webp',
				title: 'Hunt: Showdown Cheats in a bounty hunt',
				caption: 'Hunter ESP and snaplines during a live Hunt: Showdown match',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
