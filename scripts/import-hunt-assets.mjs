#!/usr/bin/env node
/**
 * Import Hunt: Showdown hero + screenshots and generate high-quality WebP ladders.
 */
import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const publicDir = path.join(root, 'public');

const ASSETS = '/home/ubuntu/.cursor/projects/workspace/assets';
const HERO_SRC = path.join(ASSETS, '48852fb8-1074-4884-97ce-3ff8edc1f4c8.png');
const ESP_SRC = path.join(ASSETS, '0f2109ce-51ce-431f-8c5c-45e735251d12.png');
const AIMBOT_SRC = path.join(ASSETS, '39c90225-2f1a-4ea9-a3d9-247a5d8817f4.png');
const WALLHACK_SRC = path.join(ASSETS, 'f537adff-763a-45a3-bf01-85c6c75cde90.png');

const BG = { r: 10, g: 11, b: 8, alpha: 1 }; // swamp black #0a0b08
const HERO_WIDTHS = [640, 1024, 1536, 1920, 2560, 3840];
const CONTENT_WIDTHS = [480, 960];

async function removeOldGameImages() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (/tarkov|warzone|fortnite|zadeyo-logo/i.test(file)) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed ${file}`);
		}
	}
}

async function writeWebp(dest, pipeline, quality = 86) {
	const buffer = await pipeline.webp({ quality, effort: 6, smartSubsample: true }).toBuffer();
	await writeFile(dest, buffer);
	console.log(`Wrote ${path.relative(root, dest)} (${buffer.length} bytes)`);
	return buffer;
}

async function generateHero() {
	const meta = await sharp(HERO_SRC).metadata();
	console.log(`Hero source: ${meta.width}×${meta.height} ${meta.format}`);

	const fullPng = await sharp(HERO_SRC).png({ compressionLevel: 6, adaptiveFiltering: true }).toBuffer();
	await writeFile(path.join(imagesDir, 'hunt-showdown-cheats-hero-full.png'), fullPng);
	console.log(`Wrote hunt-showdown-cheats-hero-full.png (${fullPng.length} bytes)`);

	await writeWebp(
		path.join(imagesDir, 'hunt-showdown-cheats-hero.webp'),
		sharp(HERO_SRC).resize({ width: Math.min(meta.width || 1920, 3840), withoutEnlargement: true }),
		88,
	);

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const quality = width <= 640 ? 68 : width <= 1024 ? 78 : width <= 1920 ? 84 : 88;
		await writeWebp(
			path.join(imagesDir, `hunt-showdown-cheats-hero-${width}w.webp`),
			sharp(HERO_SRC).resize({ width, withoutEnlargement: true }),
			quality,
		);
	}

	return meta;
}

async function generateScreenshot(source, basename) {
	const meta = await sharp(source).metadata();
	console.log(`${basename} source: ${meta.width}×${meta.height}`);

	await writeWebp(
		path.join(imagesDir, `${basename}.webp`),
		sharp(source).resize({ width: Math.min(meta.width || 1920, 1920), withoutEnlargement: true }),
		86,
	);

	for (const width of CONTENT_WIDTHS) {
		if (meta.width && width >= meta.width) continue;
		await writeWebp(
			path.join(imagesDir, `${basename}-${width}w.webp`),
			sharp(source).resize({ width, withoutEnlargement: true }),
			width <= 480 ? 72 : 80,
		);
	}
}

async function generateLogoAndFavicons() {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<rect width="512" height="512" fill="#0a0b08"/>
		<rect x="28" y="28" width="456" height="456" fill="none" stroke="#c9a44a" stroke-width="10"/>
		<text x="256" y="250" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="168" font-weight="700" fill="#c9a44a">HS</text>
		<text x="256" y="338" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="36" letter-spacing="8" fill="#dcc98a">HUNT</text>
	</svg>`;

	const logoPng = await sharp(Buffer.from(svg))
		.resize(512, 512)
		.png()
		.toBuffer();
	await writeFile(path.join(imagesDir, 'hunt-showdown-cheats-logo.png'), logoPng);
	await writeWebp(path.join(imagesDir, 'hunt-showdown-cheats-logo.webp'), sharp(logoPng), 90);

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(path.join(publicDir, name), await sharp(logoPng).resize(size, size).png().toBuffer());
		console.log(`Wrote public/${name}`);
	}

	await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoPng).resize(32, 32).png().toBuffer());
	const svgBase64 = logoPng.toString('base64');
	const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect width="512" height="512" fill="#0a0b08"/><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`;
	await writeFile(path.join(publicDir, 'favicon.svg'), faviconSvg);
	console.log('Wrote favicons');
}

await mkdir(imagesDir, { recursive: true });
await removeOldGameImages();
const heroMeta = await generateHero();
await generateScreenshot(ESP_SRC, 'hunt-showdown-cheats-esp');
await generateScreenshot(WALLHACK_SRC, 'hunt-showdown-cheats-wallhack');
await generateScreenshot(AIMBOT_SRC, 'hunt-showdown-cheats-aimbot');
await generateScreenshot(AIMBOT_SRC, 'hunt-showdown-cheats-aimbot-view');
await generateScreenshot(WALLHACK_SRC, 'hunt-showdown-cheats-extraction');
await generateScreenshot(ESP_SRC, 'hunt-showdown-cheats-bounty');
await generateLogoAndFavicons();
console.log(`Done. Hero native ${heroMeta.width}×${heroMeta.height}.`);
