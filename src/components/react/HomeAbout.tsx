import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const compareLinks = [
	{
		href: '/hunt-showdown-cheats/',
		labelKey: 'home.aboutPillar',
		hintKey: 'home.aboutPillarHint',
	},
	{
		href: '/hunt-showdown-esp/',
		labelKey: 'home.aboutEsp',
		hintKey: 'home.aboutEspHint',
	},
	{
		href: '/hunt-showdown-aimbot/',
		labelKey: 'home.aboutAimbot',
		hintKey: 'home.aboutAimbotHint',
	},
	{
		href: '/updates/',
		labelKey: 'home.aboutUndetected',
		hintKey: 'home.aboutUndetectedHint',
	},
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();
	const facts = [t('home.aboutFactPc'), t('home.aboutFactEac'), t('home.aboutFactStore')];

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutLede')}</p>
			</header>

			<div className="home-about__panel">
				<p>{t('home.aboutP1')}</p>
				<ul className="home-about__facts">
					{facts.map((fact) => (
						<li key={fact}>{fact}</li>
					))}
				</ul>
			</div>

			<nav className="home-about__links" aria-label={t('home.aboutCompare')}>
				<p className="home-about__links-label">{t('home.aboutCompare')}</p>
				<ul>
					{compareLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href}>
								<span className="home-about__link-title">{t(link.labelKey)}</span>
								<span className="home-about__link-hint">{t(link.hintKey)}</span>
								<span className="home-about__link-arrow" aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
