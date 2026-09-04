export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Hunt: Showdown Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Hunt: Showdown Cheats Blog | Raid Guides',
		blogDescription:
			'Hunt: Showdown guides — raid tips, ESP, aimbot notes, loot routes, and Easy Anti-Cheat update coverage. English blog at huntshowdowncheat.net/blog/.',
		blogH1: 'Hunt: Showdown Cheats Intel',
		blogIntro:
			'Short Hunt: Showdown guides for bounty hunts and compound clears. Pair these tips with the Hunt: Showdown Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Hunt: Showdown Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Hunt: Showdown Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Hunt: Showdown en PC Windows.',
		blogH1: 'Blog Hunt: Showdown Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Hunt: Showdown indetectables, ESP wallhack, extraction ESP, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Hunt: Showdown relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Hunt: Showdown Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Hunt: Showdown Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Hunt: Showdown sur PC Windows.',
		blogH1: 'Blog Hunt: Showdown Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Hunt: Showdown indétectables, ESP wallhack, extraction ESP, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Hunt: Showdown associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Hunt: Showdown Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Hunt: Showdown Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Hunt: Showdown Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Hunt: Showdown auf Windows PC.',
		blogH1: 'Hunt: Showdown Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Hunt: Showdown Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Hunt: Showdown Guides',
		allPosts: 'Alle Beiträge',
		home: 'Hunt: Showdown Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Hunt: Showdown Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Hunt: Showdown no PC.',
		blogH1: 'Blog Hunt: Showdown Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Hunt: Showdown indetectáveis, ESP wallhack, extraction ESP, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Hunt: Showdown relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Hunt: Showdown Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Hunt: Showdown Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Hunt: Showdown su PC Windows.',
		blogH1: 'Blog Hunt: Showdown Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Hunt: Showdown indetectable, ESP wallhack, extraction ESP, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Hunt: Showdown correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Hunt: Showdown Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Hunt: Showdown Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Hunt: Showdown Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Hunt: Showdown op Windows PC.',
		blogH1: 'Hunt: Showdown Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Hunt Showdown cheats, ESP wallhack, extraction ESP, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Hunt: Showdown gidsen',
		allPosts: 'Alle posts',
		home: 'Hunt: Showdown Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Hunt: Showdown Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Hunt: Showdown na PC.',
		blogH1: 'Blog Hunt: Showdown Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Hunt: Showdown, ESP wallhack, extraction ESP, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Hunt: Showdown',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Hunt: Showdown Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Hunt: Showdown Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Hunt: Showdown Cheats: undetected ESP, wallhack, radar и Aimbot для Hunt: Showdown на Windows PC.',
		blogH1: 'Блог Hunt: Showdown Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Hunt: Showdown, ESP wallhack, extraction ESP, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Hunt: Showdown',
		allPosts: 'Все статьи',
		home: 'Главная Hunt: Showdown Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Hunt: Showdown Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Hunt: Showdown Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Hunt: Showdown Windows PC.',
		blogH1: 'Hunt: Showdown Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Hunt: Showdown hileleri, ESP wallhack, extraction ESP, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Hunt: Showdown rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Hunt: Showdown Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Hunt: Showdown Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Hunt: Showdown Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Hunt: Showdown على Windows PC.',
		blogH1: 'مدونة Hunt: Showdown Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Hunt: Showdown undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Hunt: Showdown ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Hunt: Showdown Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Hunt: Showdown Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Hunt: Showdown Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Hunt: Showdown Windows PC向け。',
		blogH1: 'Hunt: Showdown Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Hunt: Showdownチート、ESP wallhack、extraction ESP、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Hunt: Showdownガイド',
		allPosts: 'すべての記事',
		home: 'Hunt: Showdown Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Hunt: Showdown Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Hunt: Showdown Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Hunt: Showdown Windows PC.',
		blogH1: 'Hunt: Showdown Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Hunt: Showdown 치트, ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Hunt: Showdown 가이드',
		allPosts: '모든 게시물',
		home: 'Hunt: Showdown Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Hunt: Showdown Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Hunt: Showdown Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Hunt: Showdown Windows PC。',
		blogH1: 'Hunt: Showdown Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Hunt: Showdown作弊、ESP wallhack、extraction ESP、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Hunt: Showdown指南',
		allPosts: '所有文章',
		home: 'Hunt: Showdown Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Hunt: Showdown Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Hunt: Showdown Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Hunt: Showdown Windows PC के लिए।',
		blogH1: 'Hunt: Showdown Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Hunt Showdown cheats, ESP wallhack, extraction ESP, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Hunt: Showdown गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Hunt: Showdown Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Hunt: Showdown Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Hunt: Showdown di PC Windows.',
		blogH1: 'Blog Hunt: Showdown Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Hunt: Showdown undetected, ESP wallhack, extraction ESP, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Hunt: Showdown terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Hunt: Showdown Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Hunt: Showdown Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Hunt: Showdown Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Hunt: Showdown บน PC',
		blogH1: 'บล็อก Hunt: Showdown Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Hunt: Showdown undetected, ESP wallhack, extraction ESP, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Hunt: Showdown ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Hunt: Showdown Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Hunt: Showdown Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Hunt: Showdown trên PC.',
		blogH1: 'Blog Hunt: Showdown Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Hunt: Showdown undetected, ESP wallhack, extraction ESP, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Hunt: Showdown liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Hunt: Showdown Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Hunt: Showdown Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Hunt: Showdown Cheats: undetected ESP, wallhack, radar та Aimbot для Hunt: Showdown на Windows PC.',
		blogH1: 'Блог Hunt: Showdown Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Hunt: Showdown, ESP wallhack, extraction ESP, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Hunt: Showdown",
		allPosts: 'Усі статті',
		home: 'Головна Hunt: Showdown Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Hunt: Showdown Cheats: undetected ESP, wallhack, radar a Aimbot pro Hunt: Showdown na Windows PC.',
		blogH1: 'Blog Hunt: Showdown Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Hunt Showdown cheaty, ESP wallhack, extraction ESP, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Hunt: Showdown průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Hunt: Showdown Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Hunt: Showdown Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Hunt: Showdown Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Hunt: Showdown pe PC.',
		blogH1: 'Blog Hunt: Showdown Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Hunt: Showdown undetected, ESP wallhack, extraction ESP, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Hunt: Showdown related',
		allPosts: 'Toate articolele',
		home: 'Acasă Hunt: Showdown Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Hunt: Showdown Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Hunt: Showdown Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Hunt: Showdown på PC.',
		blogH1: 'Hunt: Showdown Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Hunt Showdown cheats, ESP wallhack, extraction ESP, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Hunt: Showdown guider',
		allPosts: 'Alla inlägg',
		home: 'Hunt: Showdown Cheats hem',
		language: 'Språk',
	},
};
