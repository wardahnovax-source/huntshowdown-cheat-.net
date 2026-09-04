import { siteConfig } from './site';

/** Screenshots used across product pages — Hunt Showdown cheats keyword alts. */
export const huntImages = {
	hero: '/images/hunt-showdown-cheats-hero-full.png',
	espWallhack: '/images/hunt-showdown-cheats-wallhack.webp',
	aimbotCombat: '/images/hunt-showdown-cheats-aimbot.webp',
	aimbotSkeleton: '/images/hunt-showdown-cheats-aimbot-view.webp',
	playerEsp: '/images/hunt-showdown-cheats-esp.webp',
	cheatsCombat: '/images/hunt-showdown-cheats-bounty.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/hunt-showdown-cheats-bounty.webp',
	loadoutBuilder: '/images/hunt-showdown-cheats-extraction.webp',
	squadFight: '/images/hunt-showdown-cheats-aimbot-view.webp',
	cheatsPackage: '/images/hunt-showdown-cheats-extraction.webp',
	headerArt: '/images/hunt-showdown-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/hunt-showdown-cheats-bounty.webp',
	extractionFight: '/images/hunt-showdown-cheats-aimbot.webp',
	rebootFight: '/images/hunt-showdown-cheats-aimbot.webp',
	scavRunCombat: '/images/hunt-showdown-cheats-wallhack.webp',
	scavRunMode: '/images/hunt-showdown-cheats-esp.webp',
	battleRoyaleIsland: '/images/hunt-showdown-cheats-esp.webp',
	raidMap: '/images/hunt-showdown-cheats-esp.webp',
	product: [
		{ src: '/images/hunt-showdown-cheats-esp.webp', alt: 'Hunter ESP boxes and distance tags in Hunt: Showdown' },
		{ src: '/images/hunt-showdown-cheats-wallhack.webp', alt: 'Hunter wallhack outlines through fog and brush' },
		{ src: '/images/hunt-showdown-cheats-aimbot.webp', alt: 'Aimbot FOV circle and skeleton ESP in Hunt: Showdown' },
		{ src: '/images/hunt-showdown-cheats-extraction.webp', alt: 'Loot, clue, and extraction ESP markers' },
		{ src: '/images/hunt-showdown-cheats-wallhack.webp', alt: 'Through-wall Hunter ESP during a bounty hunt' },
		{ src: '/images/hunt-showdown-cheats-aimbot.webp', alt: 'Aimbot bone lock and FOV customization' },
	],
	gallery: [
		{ src: '/images/hunt-showdown-cheats-esp.webp', alt: 'Hunter ESP overlay showing enemy distance', featured: true },
		{ src: '/images/hunt-showdown-cheats-wallhack.webp', alt: 'Wallhack view through swamp terrain' },
		{ src: '/images/hunt-showdown-cheats-aimbot.webp', alt: 'Aimbot FOV ring and skeleton ESP in combat' },
		{ src: '/images/hunt-showdown-cheats-extraction.webp', alt: 'Extraction and loot ESP pins' },
		{ src: '/images/hunt-showdown-cheats-bounty.webp', alt: 'Hunter ESP snaplines during a bounty hunt' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/hunt-showdown-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/hunt-showdown-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/hunt-showdown-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/hunt-showdown-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/hunt-showdown-cheats-extraction.webp', title: '', caption: '' },
		{ src: '/images/hunt-showdown-cheats-bounty.webp', title: '', caption: '' },
	],
} as const;
