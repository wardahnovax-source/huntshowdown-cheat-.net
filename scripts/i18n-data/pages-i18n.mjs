import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Hunt: Showdown indetectables para Hunt: Showdown en PC. ESP wallhack, extraction ESP y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Hunt: Showdown Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Hunt: Showdown en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galería Hunt: Showdown Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Hunt: Showdown Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y compound clear.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Hunt: Showdown indétectables pour Hunt: Showdown sur PC. ESP wallhack, extraction ESP et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Hunt: Showdown Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Hunt: Showdown sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galerie Hunt: Showdown Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Hunt: Showdown Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et compound clear.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Hunt: Showdown Cheats für Hunt: Showdown auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Hunt: Showdown: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Hunt: Showdown Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Hunt: Showdown Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und compound clear zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Hunt: Showdown indetectáveis para Hunt: Showdown no PC. ESP wallhack, extraction ESP e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Hunt: Showdown Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Hunt: Showdown no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galeria Hunt: Showdown Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Hunt: Showdown Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e compound clear.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Hunt: Showdown indetectable per Hunt: Showdown su PC. ESP wallhack, extraction ESP e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Hunt: Showdown Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Hunt: Showdown su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galleria Hunt: Showdown Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Hunt: Showdown Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e compound clear.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Hunt Showdown cheats voor Hunt: Showdown op PC. ESP wallhack, extraction ESP en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Hunt: Showdown: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Hunt: Showdown Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Hunt: Showdown Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en compound clear.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Hunt: Showdown dla Hunt: Showdown na PC. ESP wallhack, extraction ESP i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Hunt: Showdown na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galeria Hunt: Showdown Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Hunt: Showdown Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i compound clear.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Hunt: Showdown для Hunt: Showdown на PC. ESP wallhack, extraction ESP и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Hunt: Showdown на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Галерея Hunt: Showdown Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Hunt: Showdown Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и compound clear.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Hunt: Showdown için undetected hileler. ESP wallhack, extraction ESP ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Hunt: Showdown Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Hunt: Showdown Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Hunt: Showdown Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve compound clear\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Hunt: Showdown Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Hunt: Showdown undetected لـ Hunt: Showdown على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Hunt: Showdown Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Hunt: Showdown على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'معرض Hunt: Showdown Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Hunt: Showdown Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وcompound clear.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Hunt: Showdown Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Hunt: Showdown向けundetectedチート。ESP wallhack、extraction ESP、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Hunt: Showdown Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Hunt: Showdown Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Hunt Showdown cheats hero ESP aimbot wallhack', gallery: 'Hunt: Showdown Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にHunt: Showdown Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとcompound clearで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Hunt: Showdown undetected 치트. ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Hunt: Showdown Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Hunt Showdown cheats hero ESP aimbot wallhack', gallery: 'Hunt: Showdown Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Hunt: Showdown Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 compound clear에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Hunt: Showdown Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Hunt: Showdown undetected作弊。ESP wallhack、extraction ESP、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Hunt: Showdown Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Hunt: Showdown Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Hunt Showdown cheats hero ESP aimbot wallhack', gallery: 'Hunt: Showdown Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Hunt: Showdown Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和compound clear中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Hunt: Showdown undetected cheats. ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Hunt: Showdown Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Hunt Showdown cheats hero ESP aimbot wallhack', gallery: 'Hunt: Showdown Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Hunt: Showdown Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और compound clear में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Hunt: Showdown undetected untuk Hunt: Showdown di PC. ESP wallhack, extraction ESP, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Hunt: Showdown di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galeri Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Hunt: Showdown Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan compound clear.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Hunt: Showdown undetected สำหรับ Hunt: Showdown บน PC. ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Hunt: Showdown บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'แกลเลอรี Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Hunt: Showdown Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ compound clear', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Hunt: Showdown undetected cho Hunt: Showdown trên PC. ESP wallhack, extraction ESP, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Hunt: Showdown trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Thư viện Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Hunt: Showdown Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và compound clear.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Hunt: Showdown для Hunt: Showdown на PC. ESP wallhack, extraction ESP, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Hunt: Showdown на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Галерея Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Hunt: Showdown Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і compound clear.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Hunt Showdown cheaty pro Hunt: Showdown na PC. ESP wallhack, extraction ESP, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Hunt: Showdown na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galerie Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Hunt: Showdown Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a compound clear.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Hunt: Showdown undetected pentru Hunt: Showdown pe PC. ESP wallhack, extraction ESP, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Hunt: Showdown pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Galerie Hunt: Showdown Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Hunt: Showdown Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și compound clear.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Hunt: Showdown Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Hunt Showdown cheats för Hunt: Showdown på PC. ESP wallhack, extraction ESP, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Hunt: Showdown Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Hunt: Showdown på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Hunt: Showdown ESP player tags hack', gallery: 'Hunt: Showdown Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Hunt: Showdown Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och compound clear.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'hunt-showdown-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'hunt-showdown-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: 'Extraction ESP cues for flanks and rotations', altKeyword: 'extraction ESP overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Hunt: Showdown hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Hunt Showdown cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Hunt: Showdown hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Hunt Showdown cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Hunt: Showdown', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'hunt-showdown-esp': 'Cajas de jugador y wallhack',
		'hunt-showdown-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'hunt-showdown-esp': 'Boîtes joueur et wallhack',
		'hunt-showdown-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'hunt-showdown-esp': 'Spielerboxen & Wallhack',
		'hunt-showdown-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'hunt-showdown-esp': 'Caixas de jogador e wallhack',
		'hunt-showdown-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'hunt-showdown-esp': 'Box giocatore e wallhack',
		'hunt-showdown-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'hunt-showdown-esp': 'Боксы игроков и wallhack',
		'hunt-showdown-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Hunt: Showdown Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Hunt: Showdown Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'hunt-showdown-esp': { en: 'Hunt: Showdown ESP', es: 'ESP Hunt: Showdown', fr: 'ESP Hunt: Showdown', de: 'Hunt: Showdown ESP', pt: 'ESP Hunt: Showdown', it: 'ESP Hunt: Showdown', nl: 'Hunt: Showdown ESP', pl: 'ESP Hunt: Showdown', ru: 'ESP Hunt: Showdown', tr: 'Hunt: Showdown ESP', ar: 'ESP Hunt: Showdown', ja: 'Hunt: Showdown ESP', ko: 'Hunt: Showdown ESP', zh: 'Hunt: Showdown ESP', hi: 'Hunt: Showdown ESP', id: 'ESP Hunt: Showdown', th: 'Hunt: Showdown ESP', vi: 'ESP Hunt: Showdown', uk: 'ESP Hunt: Showdown', cs: 'Hunt: Showdown ESP', ro: 'ESP Hunt: Showdown', sv: 'Hunt: Showdown ESP' },
	'hunt-showdown-aimbot': { en: 'Hunt: Showdown Aimbot', es: 'Aimbot Hunt: Showdown', fr: 'Aimbot Hunt: Showdown', de: 'Hunt: Showdown Aimbot', pt: 'Aimbot Hunt: Showdown', it: 'Aimbot Hunt: Showdown', nl: 'Hunt: Showdown Aimbot', pl: 'Aimbot Hunt: Showdown', ru: 'Aimbot Hunt: Showdown', tr: 'Hunt: Showdown Aimbot', ar: 'Aimbot Hunt: Showdown', ja: 'Hunt: Showdown Aimbot', ko: 'Hunt: Showdown Aimbot', zh: 'Hunt: Showdown Aimbot', hi: 'Hunt: Showdown Aimbot', id: 'Aimbot Hunt: Showdown', th: 'Hunt: Showdown Aimbot', vi: 'Aimbot Hunt: Showdown', uk: 'Aimbot Hunt: Showdown', cs: 'Hunt: Showdown Aimbot', ro: 'Aimbot Hunt: Showdown', sv: 'Hunt: Showdown Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Hunt: Showdown Wallhack', es: 'Wallhack Hunt: Showdown', fr: 'Wallhack Hunt: Showdown', de: 'Hunt: Showdown Wallhack', pt: 'Wallhack Hunt: Showdown', it: 'Wallhack Hunt: Showdown', nl: 'Hunt: Showdown Wallhack', pl: 'Wallhack Hunt: Showdown', ru: 'Wallhack Hunt: Showdown', tr: 'Hunt: Showdown Wallhack', ar: 'Wallhack Hunt: Showdown', ja: 'Hunt: Showdown Wallhack', ko: 'Hunt: Showdown Wallhack', zh: 'Hunt: Showdown Wallhack', hi: 'Hunt: Showdown Wallhack', id: 'Wallhack Hunt: Showdown', th: 'Hunt: Showdown Wallhack', vi: 'Wallhack Hunt: Showdown', uk: 'Wallhack Hunt: Showdown', cs: 'Hunt: Showdown Wallhack', ro: 'Wallhack Hunt: Showdown', sv: 'Hunt: Showdown Wallhack' },
	radar: { en: 'Radar Hack', es: 'Extraction ESP', fr: 'Extraction ESP', de: 'Radar Hack', pt: 'Extraction ESP', it: 'Extraction ESP', nl: 'Radar Hack', pl: 'Extraction ESP', ru: 'Extraction ESP', tr: 'Extraction ESP', ar: 'Extraction ESP', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Extraction ESP', th: 'Radar Hack', vi: 'Extraction ESP', uk: 'Extraction ESP', cs: 'Radar Hack', ro: 'Extraction ESP', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Hunt: Showdown Cheats 2026', es: 'Trucos Hunt: Showdown 2026', fr: 'Triches Hunt: Showdown 2026', de: 'Hunt: Showdown Cheats 2026', pt: 'Cheats Hunt: Showdown 2026', it: 'Cheat Hunt: Showdown 2026', nl: 'Hunt: Showdown Cheats 2026', pl: 'Cheaty Hunt: Showdown 2026', ru: 'Читы Hunt: Showdown 2026', tr: 'Hunt: Showdown Hileleri 2026', ar: 'غش Hunt: Showdown 2026', ja: 'Hunt: Showdown Cheats 2026', ko: 'Hunt: Showdown Cheats 2026', zh: 'Hunt: Showdown作弊 2026', hi: 'Hunt: Showdown Cheats 2026', id: 'Cheat Hunt: Showdown 2026', th: 'Hunt: Showdown Cheats 2026', vi: 'Cheat Hunt: Showdown 2026', uk: 'Чіти Hunt: Showdown 2026', cs: 'Hunt Showdown cheaty 2026', ro: 'Cheats Hunt: Showdown 2026', sv: 'Hunt: Showdown Cheats 2026' },
	hacks: { en: 'Hunt: Showdown Cheats', es: 'Trucos Hunt: Showdown', fr: 'Triches Hunt: Showdown', de: 'Hunt: Showdown Cheats', pt: 'Cheats Hunt: Showdown', it: 'Cheat Hunt: Showdown', nl: 'Hunt: Showdown Cheats', pl: 'Cheaty Hunt: Showdown', ru: 'Читы Hunt: Showdown', tr: 'Hunt: Showdown Hileleri', ar: 'غش Hunt: Showdown', ja: 'Hunt: Showdown Cheats', ko: 'Hunt: Showdown Cheats', zh: 'Hunt: Showdown作弊', hi: 'Hunt: Showdown Cheats', id: 'Cheat Hunt: Showdown', th: 'Hunt: Showdown Cheats', vi: 'Cheat Hunt: Showdown', uk: 'Чіти Hunt: Showdown', cs: 'Hunt Showdown cheaty', ro: 'Cheats Hunt: Showdown', sv: 'Hunt: Showdown Cheats' },
	'cheat-download': { en: 'Hunt: Showdown Cheat Download', es: 'Descarga Hunt: Showdown Cheats', fr: 'Téléchargement Hunt: Showdown Cheats', de: 'Hunt: Showdown Cheat Download', pt: 'Download Hunt: Showdown Cheats', it: 'Download Hunt: Showdown Cheats', nl: 'Hunt: Showdown Cheat Download', pl: 'Pobieranie Hunt: Showdown Cheats', ru: 'Скачать Hunt: Showdown Cheats', tr: 'Hunt: Showdown Hile İndir', ar: 'تحميل Hunt: Showdown Cheats', ja: 'Hunt: Showdown Cheat Download', ko: 'Hunt: Showdown Cheat Download', zh: 'Hunt: Showdown作弊下载', hi: 'Hunt: Showdown Cheat Download', id: 'Download Cheat Hunt: Showdown', th: 'ดาวน์โหลด Hunt: Showdown Cheats', vi: 'Tải Cheat Hunt: Showdown', uk: 'Завантаження Hunt: Showdown Cheats', cs: 'Stáhnout Hunt: Showdown Cheats', ro: 'Descărcare Hunt: Showdown Cheats', sv: 'Hunt: Showdown Cheat Download' },
	'mod-menu': { en: 'Hunt: Showdown Mod Menu', es: 'Menú mod Hunt: Showdown', fr: 'Menu mod Hunt: Showdown', de: 'Hunt: Showdown Mod-Menü', pt: 'Menu mod Hunt: Showdown', it: 'Mod menu Hunt: Showdown', nl: 'Hunt: Showdown Mod Menu', pl: 'Mod menu Hunt: Showdown', ru: 'Мод-меню Hunt: Showdown', tr: 'Hunt: Showdown Mod Menü', ar: 'قائمة مود Hunt: Showdown', ja: 'Hunt: Showdown Mod Menu', ko: 'Hunt: Showdown 모드 메뉴', zh: 'Hunt: Showdown修改菜单', hi: 'Hunt: Showdown Mod Menu', id: 'Menu mod Hunt: Showdown', th: 'เมนูมอด Hunt: Showdown', vi: 'Mod menu Hunt: Showdown', uk: 'Мод-меню Hunt: Showdown', cs: 'Hunt: Showdown mod menu', ro: 'Meniu mod Hunt: Showdown', sv: 'Hunt: Showdown Mod-meny' },
	'soft-aim': { en: 'Hunt: Showdown Soft Aim', es: 'Soft aim Hunt: Showdown', fr: 'Soft aim Hunt: Showdown', de: 'Hunt: Showdown Soft Aim', pt: 'Soft aim Hunt: Showdown', it: 'Soft aim Hunt: Showdown', nl: 'Hunt: Showdown Soft Aim', pl: 'Soft aim Hunt: Showdown', ru: 'Soft aim Hunt: Showdown', tr: 'Hunt: Showdown Soft Aim', ar: 'Soft aim Hunt: Showdown', ja: 'Hunt: Showdown Soft Aim', ko: 'Hunt: Showdown Soft Aim', zh: 'Hunt: Showdown Soft Aim', hi: 'Hunt: Showdown Soft Aim', id: 'Soft aim Hunt: Showdown', th: 'Hunt: Showdown Soft Aim', vi: 'Soft aim Hunt: Showdown', uk: 'Soft aim Hunt: Showdown', cs: 'Hunt: Showdown Soft Aim', ro: 'Soft aim Hunt: Showdown', sv: 'Hunt: Showdown Soft Aim' },
	'best-cheats': { en: 'Best Hunt: Showdown Cheats', es: 'Mejores trucos Hunt: Showdown', fr: 'Meilleures triches Hunt: Showdown', de: 'Beste Hunt: Showdown Cheats', pt: 'Melhores cheats Hunt: Showdown', it: 'Migliori cheat Hunt: Showdown', nl: 'Beste Hunt: Showdown Cheats', pl: 'Najlepsze cheaty Hunt: Showdown', ru: 'Лучшие читы Hunt: Showdown', tr: 'En İyi Hunt: Showdown Hileleri', ar: 'أفضل غش Hunt: Showdown', ja: '最強Hunt: Showdownチート', ko: '최고의 Hunt: Showdown 치트', zh: '最佳Hunt: Showdown作弊', hi: 'सर्वश्रेष्ठ Hunt: Showdown Cheats', id: 'Cheat Hunt: Showdown terbaik', th: 'Cheat Hunt: Showdown ที่ดีที่สุด', vi: 'Cheat Hunt: Showdown tốt nhất', uk: 'Найкращі чіти Hunt: Showdown', cs: 'Nejlepší Hunt Showdown cheaty', ro: 'Cele mai bune cheats Hunt: Showdown', sv: 'Bästa Hunt: Showdown Cheats' },
	'aimbot-hack': { en: 'Hunt: Showdown Aimbot Hack', es: 'Hack aimbot Hunt: Showdown', fr: 'Hack aimbot Hunt: Showdown', de: 'Hunt: Showdown Aimbot Hack', pt: 'Hack aimbot Hunt: Showdown', it: 'Hack aimbot Hunt: Showdown', nl: 'Hunt: Showdown Aimbot Hack', pl: 'Hack aimbot Hunt: Showdown', ru: 'Хак aimbot Hunt: Showdown', tr: 'Hunt: Showdown Aimbot Hilesi', ar: 'هاك Aimbot Hunt: Showdown', ja: 'Hunt: Showdown Aimbot Hack', ko: 'Hunt: Showdown 에임봇 핵', zh: 'Hunt: Showdown自瞄外挂', hi: 'Hunt: Showdown Aimbot Hack', id: 'Hack aimbot Hunt: Showdown', th: 'Hack Aimbot Hunt: Showdown', vi: 'Hack aimbot Hunt: Showdown', uk: 'Хак aimbot Hunt: Showdown', cs: 'Hunt: Showdown aimbot hack', ro: 'Hack aimbot Hunt: Showdown', sv: 'Hunt: Showdown Aimbot Hack' },
	'esp-hack': { en: 'Hunt: Showdown ESP Hack', es: 'Hack ESP Hunt: Showdown', fr: 'Hack ESP Hunt: Showdown', de: 'Hunt: Showdown ESP Hack', pt: 'Hack ESP Hunt: Showdown', it: 'Hack ESP Hunt: Showdown', nl: 'Hunt: Showdown ESP Hack', pl: 'Hack ESP Hunt: Showdown', ru: 'Хак ESP Hunt: Showdown', tr: 'Hunt: Showdown ESP Hilesi', ar: 'هاك ESP Hunt: Showdown', ja: 'Hunt: Showdown ESP Hack', ko: 'Hunt: Showdown ESP 핵', zh: 'Hunt: Showdown ESP外挂', hi: 'Hunt: Showdown ESP Hack', id: 'Hack ESP Hunt: Showdown', th: 'Hack ESP Hunt: Showdown', vi: 'Hack ESP Hunt: Showdown', uk: 'Хак ESP Hunt: Showdown', cs: 'Hunt: Showdown ESP hack', ro: 'Hack ESP Hunt: Showdown', sv: 'Hunt: Showdown ESP Hack' },
	'unlock-all': { en: 'Hunt: Showdown Unlock All', es: 'Unlock all Hunt: Showdown', fr: 'Unlock all Hunt: Showdown', de: 'Hunt: Showdown Unlock All', pt: 'Unlock all Hunt: Showdown', it: 'Unlock all Hunt: Showdown', nl: 'Hunt: Showdown Unlock All', pl: 'Unlock all Hunt: Showdown', ru: 'Unlock all Hunt: Showdown', tr: 'Hunt: Showdown Unlock All', ar: 'Unlock all Hunt: Showdown', ja: 'Hunt: Showdown Unlock All', ko: 'Hunt: Showdown Unlock All', zh: 'Hunt: Showdown Unlock All', hi: 'Hunt: Showdown Unlock All', id: 'Unlock all Hunt: Showdown', th: 'Hunt: Showdown Unlock All', vi: 'Unlock all Hunt: Showdown', uk: 'Unlock all Hunt: Showdown', cs: 'Hunt: Showdown Unlock All', ro: 'Unlock all Hunt: Showdown', sv: 'Hunt: Showdown Unlock All' },
};

const CTA2_HREF = {
	'hunt-showdown-esp': '/hunt-showdown-cheats/',
	'hunt-showdown-aimbot': '/hunt-showdown-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/hunt-showdown-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/hunt-showdown-cheats/',
	wallhack: '/hunt-showdown-esp/',
	radar: '/hunt-showdown-esp/',
	eac: '/updates/',
	'cheats-2026': '/hunt-showdown-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/hunt-showdown-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/hunt-showdown-aimbot/',
	'esp-hack': '/hunt-showdown-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Hunt: Showdown Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Hunt: Showdown Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for huntshowdowncheat.net and Hunt: Showdown licenses.`),
		imageAlt: 'Hunt Showdown cheats',
		galleryTitle: 'Hunt Showdown cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on huntshowdowncheat.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@huntshowdowncheat.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
