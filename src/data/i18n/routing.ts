import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'hunt-showdown-esp'
	| 'hunt-showdown-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'hunt-showdown-esp': '/hunt-showdown-esp/',
	'hunt-showdown-aimbot': '/hunt-showdown-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-hunt-showdown-cheats/',
	wallhack: '/hunt-showdown-wallhack/',
	radar: '/hunt-showdown-extraction-esp/',
	'eac': '/easy-anti-cheat-bypass/',
	'cheats-2026': '/hunt-showdown-cheats-2026/',
	hacks: '/hunt-showdown-cheats/',
	'cheat-download': '/hunt-showdown-cheat-download/',
	'mod-menu': '/hunt-showdown-cheat-menu/',
	'soft-aim': '/hunt-showdown-aim-assist/',
	'best-cheats': '/best-hunt-showdown-cheats/',
	'aimbot-hack': '/hunt-showdown-aimbot-hack/',
	'esp-hack': '/hunt-showdown-esp-hack/',
	'unlock-all': '/hunt-showdown-loot-esp/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'hunt-showdown-esp': {
		en: 'hunt-showdown-esp',
		es: 'trucos-hunt-showdown-esp',
		fr: 'triche-hunt-showdown-esp',
		de: 'hunt-showdown-esp-wallhack',
		pt: 'cheats-hunt-showdown-esp',
		it: 'trucchi-hunt-showdown-esp',
		nl: 'hunt-showdown-esp-wallhack',
		pl: 'cheaty-hunt-showdown-esp',
		ru: 'hunt-showdown-esp-chity',
		tr: 'hunt-showdown-esp-hile',
		ar: 'hunt-showdown-esp-wallhack',
		ja: 'hunt-showdown-esp-wallhack',
		ko: 'hunt-showdown-esp-wallhack',
		zh: 'hunt-showdown-esp-wallhack',
		hi: 'hunt-showdown-esp-wallhack',
		id: 'hunt-showdown-esp-wallhack',
		th: 'hunt-showdown-esp-wallhack',
		vi: 'hunt-showdown-esp-wallhack',
		uk: 'hunt-showdown-esp-chity',
		cs: 'hunt-showdown-esp-wallhack',
		ro: 'hunt-showdown-esp-wallhack',
		sv: 'hunt-showdown-esp-wallhack',
	},
	'hunt-showdown-aimbot': {
		en: 'hunt-showdown-aimbot',
		es: 'trucos-hunt-showdown-aimbot',
		fr: 'triche-hunt-showdown-aimbot',
		de: 'hunt-showdown-aimbot',
		pt: 'cheats-hunt-showdown-aimbot',
		it: 'trucchi-hunt-showdown-aimbot',
		nl: 'hunt-showdown-aimbot',
		pl: 'cheaty-hunt-showdown-aimbot',
		ru: 'hunt-showdown-aimbot-chity',
		tr: 'hunt-showdown-aimbot-hile',
		ar: 'hunt-showdown-aimbot',
		ja: 'hunt-showdown-aimbot',
		ko: 'hunt-showdown-aimbot',
		zh: 'hunt-showdown-aimbot',
		hi: 'hunt-showdown-aimbot',
		id: 'hunt-showdown-aimbot',
		th: 'hunt-showdown-aimbot',
		vi: 'hunt-showdown-aimbot',
		uk: 'hunt-showdown-aimbot-chity',
		cs: 'hunt-showdown-aimbot',
		ro: 'hunt-showdown-aimbot',
		sv: 'hunt-showdown-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-hunt-showdown',
		fr: 'fonctionnalites-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-funktionen',
		pt: 'recursos-cheats-hunt-showdown',
		it: 'funzioni-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-functies',
		pl: 'funkcje-cheatow-hunt-showdown',
		ru: 'funkcii-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-ozellikleri',
		ar: 'hunt-showdown-cheats-features',
		ja: 'hunt-showdown-cheats-features',
		ko: 'hunt-showdown-cheats-features',
		zh: 'hunt-showdown-cheats-features',
		hi: 'hunt-showdown-cheats-features',
		id: 'hunt-showdown-cheats-features',
		th: 'hunt-showdown-cheats-features',
		vi: 'hunt-showdown-cheats-features',
		uk: 'funkcii-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-funkce',
		ro: 'functii-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-hunt-showdown',
		fr: 'prix-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-preise',
		pt: 'precos-cheats-hunt-showdown',
		it: 'prezzi-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-prijzen',
		pl: 'ceny-cheatow-hunt-showdown',
		ru: 'ceny-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-fiyatlari',
		ar: 'hunt-showdown-cheats-pricing',
		ja: 'hunt-showdown-cheats-pricing',
		ko: 'hunt-showdown-cheats-pricing',
		zh: 'hunt-showdown-cheats-pricing',
		hi: 'hunt-showdown-cheats-pricing',
		id: 'hunt-showdown-cheats-pricing',
		th: 'hunt-showdown-cheats-pricing',
		vi: 'hunt-showdown-cheats-pricing',
		uk: 'ciny-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-ceny',
		ro: 'preturi-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-hunt-showdown',
		fr: 'installation-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-installation',
		pt: 'instalacao-cheats-hunt-showdown',
		it: 'installazione-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-installatie',
		pl: 'instalacja-cheatow-hunt-showdown',
		ru: 'ustanovka-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-kurulum',
		ar: 'hunt-showdown-cheats-setup',
		ja: 'hunt-showdown-cheats-setup',
		ko: 'hunt-showdown-cheats-setup',
		zh: 'hunt-showdown-cheats-setup',
		hi: 'hunt-showdown-cheats-setup',
		id: 'hunt-showdown-cheats-setup',
		th: 'hunt-showdown-cheats-setup',
		vi: 'hunt-showdown-cheats-setup',
		uk: 'vstanovka-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-instalace',
		ro: 'instalare-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-hunt-showdown',
		fr: 'mises-a-jour-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-updates',
		pt: 'atualizacoes-cheats-hunt-showdown',
		it: 'aggiornamenti-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-updates',
		pl: 'aktualizacje-cheatow-hunt-showdown',
		ru: 'obnovleniya-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-guncellemeleri',
		ar: 'hunt-showdown-cheats-updates',
		ja: 'hunt-showdown-cheats-updates',
		ko: 'hunt-showdown-cheats-updates',
		zh: 'hunt-showdown-cheats-updates',
		hi: 'hunt-showdown-cheats-updates',
		id: 'hunt-showdown-cheats-updates',
		th: 'hunt-showdown-cheats-updates',
		vi: 'hunt-showdown-cheats-updates',
		uk: 'onovlennya-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-aktualizace',
		ro: 'actualizari-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-hunt-showdown',
		fr: 'faq-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-faq',
		pt: 'faq-cheats-hunt-showdown',
		it: 'faq-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-faq',
		pl: 'faq-cheatow-hunt-showdown',
		ru: 'faq-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-sss',
		ar: 'hunt-showdown-cheats-faq',
		ja: 'hunt-showdown-cheats-faq',
		ko: 'hunt-showdown-cheats-faq',
		zh: 'hunt-showdown-cheats-faq',
		hi: 'hunt-showdown-cheats-faq',
		id: 'hunt-showdown-cheats-faq',
		th: 'hunt-showdown-cheats-faq',
		vi: 'hunt-showdown-cheats-faq',
		uk: 'faq-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-faq',
		ro: 'faq-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-hunt-showdown',
		fr: 'support-triche-hunt-showdown',
		de: 'hunt-showdown-cheats-support',
		pt: 'suporte-cheats-hunt-showdown',
		it: 'supporto-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats-support',
		pl: 'wsparcie-cheatow-hunt-showdown',
		ru: 'podderzhka-chitov-hunt-showdown',
		tr: 'hunt-showdown-hile-destek',
		ar: 'hunt-showdown-cheats-support',
		ja: 'hunt-showdown-cheats-support',
		ko: 'hunt-showdown-cheats-support',
		zh: 'hunt-showdown-cheats-support',
		hi: 'hunt-showdown-cheats-support',
		id: 'hunt-showdown-cheats-support',
		th: 'hunt-showdown-cheats-support',
		vi: 'hunt-showdown-cheats-support',
		uk: 'pidtrymka-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheats-podpora',
		ro: 'suport-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats-support',
	},
	undetected: {
		en: 'undetected-hunt-showdown-cheats',
		es: 'trucos-hunt-showdown-indetectables',
		fr: 'triche-hunt-showdown-indetectable',
		de: 'unentdeckte-hunt-showdown-cheats',
		pt: 'cheats-hunt-showdown-indetectaveis',
		it: 'trucchi-hunt-showdown-indetectabili',
		nl: 'undetected-hunt-showdown-cheats',
		pl: 'niewykrywalne-cheats-hunt-showdown',
		ru: 'nedecektiruemye-chity-hunt-showdown',
		tr: 'tespit-edilemeyen-hunt-showdown-hileleri',
		ar: 'undetected-hunt-showdown-cheats',
		ja: 'undetected-hunt-showdown-cheats',
		ko: 'undetected-hunt-showdown-cheats',
		zh: 'undetected-hunt-showdown-cheats',
		hi: 'undetected-hunt-showdown-cheats',
		id: 'undetected-hunt-showdown-cheats',
		th: 'undetected-hunt-showdown-cheats',
		vi: 'undetected-hunt-showdown-cheats',
		uk: 'nedecektovani-chity-hunt-showdown',
		cs: 'undetected-hunt-showdown-cheats',
		ro: 'cheats-hunt-showdown-nedetectabile',
		sv: 'undetected-hunt-showdown-cheats',
	},
	wallhack: {
		en: 'hunt-showdown-wallhack',
		es: 'wallhack-trucos-hunt-showdown',
		fr: 'wallhack-triche-hunt-showdown',
		de: 'hunt-showdown-wallhack',
		pt: 'wallhack-cheats-hunt-showdown',
		it: 'wallhack-trucchi-hunt-showdown',
		nl: 'hunt-showdown-wallhack',
		pl: 'wallhack-cheatow-hunt-showdown',
		ru: 'wallhack-chity-hunt-showdown',
		tr: 'hunt-showdown-wallhack-hile',
		ar: 'hunt-showdown-wallhack',
		ja: 'hunt-showdown-wallhack',
		ko: 'hunt-showdown-wallhack',
		zh: 'hunt-showdown-wallhack',
		hi: 'hunt-showdown-wallhack',
		id: 'hunt-showdown-wallhack',
		th: 'hunt-showdown-wallhack',
		vi: 'hunt-showdown-wallhack',
		uk: 'wallhack-chity-hunt-showdown',
		cs: 'hunt-showdown-wallhack',
		ro: 'wallhack-cheats-hunt-showdown',
		sv: 'hunt-showdown-wallhack',
	},
	radar: {
		en: 'hunt-showdown-extraction-esp',
		es: 'radar-hack-trucos-hunt-showdown',
		fr: 'radar-hack-triche-hunt-showdown',
		de: 'hunt-showdown-extraction-esp',
		pt: 'radar-hack-cheats-hunt-showdown',
		it: 'radar-hack-trucchi-hunt-showdown',
		nl: 'hunt-showdown-extraction-esp',
		pl: 'radar-hack-cheatow-hunt-showdown',
		ru: 'radar-hack-chity-hunt-showdown',
		tr: 'hunt-showdown-extraction-esp',
		ar: 'hunt-showdown-extraction-esp',
		ja: 'hunt-showdown-extraction-esp',
		ko: 'hunt-showdown-extraction-esp',
		zh: 'hunt-showdown-extraction-esp',
		hi: 'hunt-showdown-extraction-esp',
		id: 'hunt-showdown-extraction-esp',
		th: 'hunt-showdown-extraction-esp',
		vi: 'hunt-showdown-extraction-esp',
		uk: 'radar-hack-chity-hunt-showdown',
		cs: 'hunt-showdown-extraction-esp',
		ro: 'radar-hack-cheats-hunt-showdown',
		sv: 'hunt-showdown-extraction-esp',
	},
	'eac': {
		en: 'easy-anti-cheat-bypass',
		es: 'easy-anti-cheat-bypass-trucos',
		fr: 'easy-anti-cheat-bypass-triche',
		de: 'easy-anti-cheat-bypass',
		pt: 'easy-anti-cheat-bypass-cheats',
		it: 'easy-anti-cheat-bypass-trucchi',
		nl: 'easy-anti-cheat-bypass',
		pl: 'easy-anti-cheat-bypass-cheatow',
		ru: 'easy-anti-cheat-bypass-chity',
		tr: 'easy-anti-cheat-bypass',
		ar: 'easy-anti-cheat-bypass',
		ja: 'easy-anti-cheat-bypass',
		ko: 'easy-anti-cheat-bypass',
		zh: 'easy-anti-cheat-bypass',
		hi: 'easy-anti-cheat-bypass',
		id: 'easy-anti-cheat-bypass',
		th: 'easy-anti-cheat-bypass',
		vi: 'easy-anti-cheat-bypass',
		uk: 'easy-anti-cheat-bypass-chity',
		cs: 'easy-anti-cheat-bypass',
		ro: 'easy-anti-cheat-bypass-cheats',
		sv: 'easy-anti-cheat-bypass',
	},
	'cheats-2026': {
		en: 'hunt-showdown-cheats-2026',
		es: 'trucos-hunt-showdown-2026',
		fr: 'triche-hunt-showdown-2026',
		de: 'hunt-showdown-cheats-2026',
		pt: 'cheats-hunt-showdown-2026',
		it: 'trucchi-hunt-showdown-2026',
		nl: 'hunt-showdown-cheats-2026',
		pl: 'cheaty-hunt-showdown-2026',
		ru: 'chity-hunt-showdown-2026',
		tr: 'hunt-showdown-hileleri-2026',
		ar: 'hunt-showdown-cheats-2026',
		ja: 'hunt-showdown-cheats-2026',
		ko: 'hunt-showdown-cheats-2026',
		zh: 'hunt-showdown-cheats-2026',
		hi: 'hunt-showdown-cheats-2026',
		id: 'hunt-showdown-cheats-2026',
		th: 'hunt-showdown-cheats-2026',
		vi: 'hunt-showdown-cheats-2026',
		uk: 'chity-hunt-showdown-2026',
		cs: 'hunt-showdown-cheats-2026',
		ro: 'cheats-hunt-showdown-2026',
		sv: 'hunt-showdown-cheats-2026',
	},
	hacks: {
		en: 'hunt-showdown-cheats',
		es: 'hacks-trucos-hunt-showdown',
		fr: 'hacks-triche-hunt-showdown',
		de: 'hunt-showdown-cheats',
		pt: 'hacks-cheats-hunt-showdown',
		it: 'hacks-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheats',
		pl: 'hacks-cheatow-hunt-showdown',
		ru: 'haksy-chity-hunt-showdown',
		tr: 'hunt-showdown-hile-hacks',
		ar: 'hunt-showdown-cheats',
		ja: 'hunt-showdown-cheats',
		ko: 'hunt-showdown-cheats',
		zh: 'hunt-showdown-cheats',
		hi: 'hunt-showdown-cheats',
		id: 'hunt-showdown-cheats',
		th: 'hunt-showdown-cheats',
		vi: 'hunt-showdown-cheats',
		uk: 'haksy-chity-hunt-showdown',
		cs: 'hunt-showdown-cheats',
		ro: 'hacks-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheats',
	},
	'cheat-download': {
		en: 'hunt-showdown-cheat-download',
		es: 'descarga-trucos-hunt-showdown',
		fr: 'telechargement-triche-hunt-showdown',
		de: 'hunt-showdown-cheat-download',
		pt: 'download-cheats-hunt-showdown',
		it: 'download-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheat-download',
		pl: 'pobieranie-cheatow-hunt-showdown',
		ru: 'skachat-chity-hunt-showdown',
		tr: 'hunt-showdown-hile-indir',
		ar: 'hunt-showdown-cheat-download',
		ja: 'hunt-showdown-cheat-download',
		ko: 'hunt-showdown-cheat-download',
		zh: 'hunt-showdown-cheat-download',
		hi: 'hunt-showdown-cheat-download',
		id: 'hunt-showdown-cheat-download',
		th: 'hunt-showdown-cheat-download',
		vi: 'hunt-showdown-cheat-download',
		uk: 'zavantazhennya-chitiv-hunt-showdown',
		cs: 'hunt-showdown-cheat-download',
		ro: 'descarcare-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheat-download',
	},
	'mod-menu': {
		en: 'hunt-showdown-cheat-menu',
		es: 'menu-mod-trucos-hunt-showdown',
		fr: 'menu-mod-triche-hunt-showdown',
		de: 'hunt-showdown-cheat-menu',
		pt: 'menu-mod-cheats-hunt-showdown',
		it: 'menu-mod-trucchi-hunt-showdown',
		nl: 'hunt-showdown-cheat-menu',
		pl: 'menu-mod-cheatow-hunt-showdown',
		ru: 'mod-menu-chity-hunt-showdown',
		tr: 'hunt-showdown-cheat-menu',
		ar: 'hunt-showdown-cheat-menu',
		ja: 'hunt-showdown-cheat-menu',
		ko: 'hunt-showdown-cheat-menu',
		zh: 'hunt-showdown-cheat-menu',
		hi: 'hunt-showdown-cheat-menu',
		id: 'hunt-showdown-cheat-menu',
		th: 'hunt-showdown-cheat-menu',
		vi: 'hunt-showdown-cheat-menu',
		uk: 'mod-menu-chity-hunt-showdown',
		cs: 'hunt-showdown-cheat-menu',
		ro: 'meniu-mod-cheats-hunt-showdown',
		sv: 'hunt-showdown-cheat-menu',
	},
	'soft-aim': {
		en: 'hunt-showdown-aim-assist',
		es: 'soft-aim-trucos-hunt-showdown',
		fr: 'soft-aim-triche-hunt-showdown',
		de: 'hunt-showdown-aim-assist',
		pt: 'soft-aim-cheats-hunt-showdown',
		it: 'soft-aim-trucchi-hunt-showdown',
		nl: 'hunt-showdown-aim-assist',
		pl: 'soft-aim-cheatow-hunt-showdown',
		ru: 'soft-aim-chity-hunt-showdown',
		tr: 'hunt-showdown-aim-assist',
		ar: 'hunt-showdown-aim-assist',
		ja: 'hunt-showdown-aim-assist',
		ko: 'hunt-showdown-aim-assist',
		zh: 'hunt-showdown-aim-assist',
		hi: 'hunt-showdown-aim-assist',
		id: 'hunt-showdown-aim-assist',
		th: 'hunt-showdown-aim-assist',
		vi: 'hunt-showdown-aim-assist',
		uk: 'soft-aim-chity-hunt-showdown',
		cs: 'hunt-showdown-aim-assist',
		ro: 'soft-aim-cheats-hunt-showdown',
		sv: 'hunt-showdown-aim-assist',
	},
	'best-cheats': {
		en: 'best-hunt-showdown-cheats',
		es: 'mejores-trucos-hunt-showdown',
		fr: 'meilleures-triches-hunt-showdown',
		de: 'beste-hunt-showdown-cheats',
		pt: 'melhores-cheats-hunt-showdown',
		it: 'migliori-trucchi-hunt-showdown',
		nl: 'beste-hunt-showdown-cheats',
		pl: 'najlepsze-cheats-hunt-showdown',
		ru: 'luchshie-chity-hunt-showdown',
		tr: 'en-iyi-hunt-showdown-hileleri',
		ar: 'best-hunt-showdown-cheats',
		ja: 'best-hunt-showdown-cheats',
		ko: 'best-hunt-showdown-cheats',
		zh: 'best-hunt-showdown-cheats',
		hi: 'best-hunt-showdown-cheats',
		id: 'best-hunt-showdown-cheats',
		th: 'best-hunt-showdown-cheats',
		vi: 'best-hunt-showdown-cheats',
		uk: 'naykrashchi-chity-hunt-showdown',
		cs: 'nejlepsi-hunt-showdown-cheats',
		ro: 'cele-mai-bune-cheats-hunt-showdown',
		sv: 'basta-hunt-showdown-cheats',
	},
	'aimbot-hack': {
		en: 'hunt-showdown-aimbot-hack',
		es: 'aimbot-hack-trucos-hunt-showdown',
		fr: 'aimbot-hack-triche-hunt-showdown',
		de: 'hunt-showdown-aimbot-hack',
		pt: 'aimbot-hack-cheats-hunt-showdown',
		it: 'aimbot-hack-trucchi-hunt-showdown',
		nl: 'hunt-showdown-aimbot-hack',
		pl: 'aimbot-hack-cheatow-hunt-showdown',
		ru: 'aimbot-hack-chity-hunt-showdown',
		tr: 'hunt-showdown-aimbot-hack',
		ar: 'hunt-showdown-aimbot-hack',
		ja: 'hunt-showdown-aimbot-hack',
		ko: 'hunt-showdown-aimbot-hack',
		zh: 'hunt-showdown-aimbot-hack',
		hi: 'hunt-showdown-aimbot-hack',
		id: 'hunt-showdown-aimbot-hack',
		th: 'hunt-showdown-aimbot-hack',
		vi: 'hunt-showdown-aimbot-hack',
		uk: 'aimbot-hack-chity-hunt-showdown',
		cs: 'hunt-showdown-aimbot-hack',
		ro: 'aimbot-hack-cheats-hunt-showdown',
		sv: 'hunt-showdown-aimbot-hack',
	},
	'esp-hack': {
		en: 'hunt-showdown-esp-hack',
		es: 'esp-hack-trucos-hunt-showdown',
		fr: 'esp-hack-triche-hunt-showdown',
		de: 'hunt-showdown-esp-hack',
		pt: 'esp-hack-cheats-hunt-showdown',
		it: 'esp-hack-trucchi-hunt-showdown',
		nl: 'hunt-showdown-esp-hack',
		pl: 'esp-hack-cheatow-hunt-showdown',
		ru: 'esp-hack-chity-hunt-showdown',
		tr: 'hunt-showdown-esp-hack',
		ar: 'hunt-showdown-esp-hack',
		ja: 'hunt-showdown-esp-hack',
		ko: 'hunt-showdown-esp-hack',
		zh: 'hunt-showdown-esp-hack',
		hi: 'hunt-showdown-esp-hack',
		id: 'hunt-showdown-esp-hack',
		th: 'hunt-showdown-esp-hack',
		vi: 'hunt-showdown-esp-hack',
		uk: 'esp-hack-chity-hunt-showdown',
		cs: 'hunt-showdown-esp-hack',
		ro: 'esp-hack-cheats-hunt-showdown',
		sv: 'hunt-showdown-esp-hack',
	},
	'unlock-all': {
		en: 'hunt-showdown-loot-esp',
		es: 'unlock-all-trucos-hunt-showdown',
		fr: 'unlock-all-triche-hunt-showdown',
		de: 'hunt-showdown-loot-esp',
		pt: 'unlock-all-cheats-hunt-showdown',
		it: 'unlock-all-trucchi-hunt-showdown',
		nl: 'hunt-showdown-loot-esp',
		pl: 'unlock-all-cheatow-hunt-showdown',
		ru: 'unlock-all-chity-hunt-showdown',
		tr: 'hunt-showdown-loot-esp',
		ar: 'hunt-showdown-loot-esp',
		ja: 'hunt-showdown-loot-esp',
		ko: 'hunt-showdown-loot-esp',
		zh: 'hunt-showdown-loot-esp',
		hi: 'hunt-showdown-loot-esp',
		id: 'hunt-showdown-loot-esp',
		th: 'hunt-showdown-loot-esp',
		vi: 'hunt-showdown-loot-esp',
		uk: 'unlock-all-chity-hunt-showdown',
		cs: 'hunt-showdown-loot-esp',
		ro: 'unlock-all-cheats-hunt-showdown',
		sv: 'hunt-showdown-loot-esp',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('hunt-showdown-aimbot', locale), pageId: 'hunt-showdown-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('hunt-showdown-esp', locale), pageId: 'hunt-showdown-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
