import { siteConfig } from './site';
import { huntImages } from './hunt';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	huntImages.espWallhack,
	huntImages.aimbotCombat,
	huntImages.aimbotSkeleton,
	huntImages.playerEsp,
	huntImages.cheatsCombat,
	'/images/hunt-showdown-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/hunt-showdown-cheats-hero-1920w.webp',
	'hunt-showdown-esp': huntImages.playerEsp,
	'hunt-showdown-aimbot': huntImages.aimbotCombat,
	features: huntImages.aimbotSkeleton,
	pricing: huntImages.cheatsCombat,
	setup: huntImages.playerEsp,
	updates: '/images/hunt-showdown-cheats-hero-1920w.webp',
	faq: huntImages.aimbotSkeleton,
	support: huntImages.cheatsCombat,
	undetected: huntImages.espWallhack,
	wallhack: huntImages.espWallhack,
	radar: huntImages.playerEsp,
	eac: huntImages.aimbotCombat,
	'cheats-2026': '/images/hunt-showdown-cheats-hero-1920w.webp',
	hacks: huntImages.cheatsCombat,
	'cheat-download': huntImages.cheatsCombat,
	'mod-menu': huntImages.playerEsp,
	'soft-aim': huntImages.aimbotSkeleton,
	'best-cheats': '/images/hunt-showdown-cheats-hero-1920w.webp',
	'aimbot-hack': huntImages.aimbotSkeleton,
	'esp-hack': huntImages.espWallhack,
	'unlock-all': huntImages.playerEsp,
	privacy: huntImages.aimbotCombat,
	refund: huntImages.cheatsCombat,
	terms: huntImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
