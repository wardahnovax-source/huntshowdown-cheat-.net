import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Hunt Showdown cheats',
		title: 'Hunt Showdown cheats gallery',
		subtitle: 'Hunt Showdown cheats visuals — Hunter ESP, aimbot, skeleton ESP, and extraction ESP on PC.',
		lead: 'Hunt: Showdown Cheats helps you spot Hunters, bosses, loot, clues, and extraction points with ESP and aimbot in one license.',
		highlights: [
			{ title: 'Hunter ESP', copy: 'See Hunters through walls with Hunter ESP, skeleton ESP, and distance tags.' },
			{ title: 'Extraction ESP', copy: 'Mark extraction points and bounty carriers before you rotate or extract.' },
			{ title: 'Aimbot', copy: 'Tune FOV, smoothness, and bone lock for Hunt: Showdown fights on Windows PC.' },
		],
		updatesLabel: 'Hunt Showdown cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galería Hunt: Showdown',
		subtitle: 'Visuales de Hunt: Showdown con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Hunt: Showdown Cheats está pensado para el loop BR de Hunt: Showdown: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extraction.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y compound clear para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Hunt: Showdown', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galerie Hunt: Showdown',
		subtitle: 'Visuels Hunt: Showdown — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Hunt: Showdown Cheats suit la boucle BR de Hunt: Showdown : lire la carte, suivre les escouades, loot et survivre au extraction.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et compound clear pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Hunt: Showdown', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown Galerie',
		subtitle: 'Hunt: Showdown-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Hunt: Showdown Cheats passt zur Raid-Schleife von Hunt: Showdown: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und compound clear für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Hunt: Showdown Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Hunt: Showdown Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galeria Hunt: Showdown',
		subtitle: 'Visuais de Hunt: Showdown com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Hunt: Showdown Cheats segue o loop BR do Hunt: Showdown: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extraction.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e compound clear para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Hunt: Showdown', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galleria Hunt: Showdown',
		subtitle: 'Immagini Hunt: Showdown — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Hunt: Showdown Cheats è pensato per il loop BR di Hunt: Showdown: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extraction.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e compound clear per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Hunt: Showdown', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown galerij',
		subtitle: 'Hunt: Showdown-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Hunt: Showdown Cheats volgt de raid-loop van Hunt: Showdown: kaart lezen, vijandelijke squads volgen, looten en de extraction overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en compound clear voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Hunt: Showdown Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Hunt: Showdown Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galeria Hunt: Showdown',
		subtitle: 'Grafiki Hunt: Showdown — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Hunt: Showdown Cheats pasuje do pętli BR Hunt: Showdown: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extraction.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i compound clear dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Hunt: Showdown', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Галерея Hunt: Showdown',
		subtitle: 'Визуалы Hunt: Showdown — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Hunt: Showdown Cheats создан для рейд-циклу Hunt: Showdown: читать карту, отслеживать вражеские отряды, лут и выживать в extraction.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и compound clear для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Hunt: Showdown', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Hunt: Showdown Cheats, Hunt: Showdown BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extraction\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve compound clear\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Hunt: Showdown Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Hunt: Showdown Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'معرض Hunt: Showdown',
		subtitle: 'صور Hunt: Showdown — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Hunt: Showdown Cheats مبني لحلقة BR في Hunt: Showdown: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extraction.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وcompound clear لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Hunt: Showdown', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのHunt: Showdownビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Hunt: Showdown CheatsはHunt: ShowdownのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractionを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとcompound clearで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Hunt: Showdownエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Hunt: Showdown Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Hunt: Showdown 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Hunt: Showdown Cheats는 Hunt: Showdown BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extraction 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 compound clear에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Hunt: Showdown 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Hunt: Showdown Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown 图库',
		subtitle: 'Hunt: Showdown 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Hunt: Showdown Cheats 为 Hunt: Showdown BR 循环设计：读图、追踪敌方小队、搜刮并在 extraction 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 compound clear 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Hunt: Showdown 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Hunt: Showdown Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Hunt: Showdown Cheats Hunt: Showdown BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extraction survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और compound clear पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Hunt: Showdown Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Hunt: Showdown Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galeri Hunt: Showdown',
		subtitle: 'Visual Hunt: Showdown — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Hunt: Showdown Cheats untuk loop BR Hunt: Showdown: baca peta, lacak squad musuh, loot, dan selamat di extraction.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan compound clear untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Hunt: Showdown', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'แกลเลอรี Hunt: Showdown',
		subtitle: 'ภาพ Hunt: Showdown — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Hunt: Showdown Cheats สำหรับลูป BR ของ Hunt: Showdown: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extraction',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ compound clear เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Hunt: Showdown', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Thư viện Hunt: Showdown',
		subtitle: 'Hình ảnh Hunt: Showdown — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Hunt: Showdown Cheats cho vòng BR Hunt: Showdown: đọc bản đồ, theo dõi squad địch, loot và sống sót extraction.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và compound clear để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Hunt: Showdown', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Галерея Hunt: Showdown',
		subtitle: 'Візуали Hunt: Showdown — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Hunt: Showdown Cheats для рейд-циклу Hunt: Showdown: читати карту, відстежувати ворожі загони, лут і виживати в extraction.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і compound clear для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Hunt: Showdown', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galerie Hunt: Showdown',
		subtitle: 'Hunt: Showdown vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Hunt: Showdown Cheats pro BR smyčku Hunt: Showdown: číst mapu, sledovat nepřátelské squady, loot a přežít extraction.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a compound clear pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Hunt: Showdown', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Galerie Hunt: Showdown',
		subtitle: 'Vizualuri Hunt: Showdown — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Hunt: Showdown Cheats pentru bucla BR Hunt: Showdown: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extraction.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și compound clear pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Hunt: Showdown', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Hunt: Showdown Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Hunt: Showdown Cheats',
		title: 'Hunt: Showdown galleri',
		subtitle: 'Hunt: Showdown-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Hunt: Showdown Cheats för Hunt: Showdown:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extraction.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och compound clear för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Hunt: Showdown Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Hunt: Showdown Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
