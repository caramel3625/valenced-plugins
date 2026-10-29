/// <reference types="@valenced/themes-api" />

import type { FontVariant } from '@valenced/themes-api/types'

const Font = 'assets/fonts/Figtree-VariableFont_wght.ttf'
const FontItalic = 'assets/fonts/Figtree-Italic-VariableFont_wght.ttf'

/** Discord asks for these family names. The style is part of the name. */
const Weights: Record<string, number> = {
	Normal: 400,
	Medium: 500,
	Semibold: 600,
	Bold: 700,
	ExtraBold: 800,
}

const families: Record<string, FontVariant[]> = {}
for (const [style, wght] of Object.entries(Weights))
	families[`ggsans-${style}`] = [
		{ path: Font, weight: wght, axes: { wght } },
		{ path: FontItalic, weight: wght, italic: true, axes: { wght } },
	]

export default plugin({
	preInit({ themes }) {
		themes.registerGroup('more-fonts', {
			name: 'more fonts',
			description: 'a few font packs for valenced',
		})

		themes.registerFontPack('more-fonts', 'figtree', {
			name: 'Figtree',
			description: 'Variable font, replaces gg sans',
			// Families is declared above and generated programatically by a for loop.
			families
		})

		themes.registerFontPack('more-fonts', 'ibm-plex-mono', {
			name: 'IBM Plex Mono',
			description: 'static monospaced font, replaces all discord fonts',
			families: {
				'ggsans-Normal': [
					{ path: 'assets/fonts/IBMPlexMono-Regular.ttf', weight: 400 },
		       		{ path: 'assets/fonts/IBMPlexMono-Italic.ttf', weight: 400, italic: true },
				],
				'ggsans-Medium': [
					{ path: 'assets/fonts/IBMPlexMono-Medium.ttf', weight: 500 },
		         	{ path: 'assets/fonts/IBMPlexMono-MediumItalic.ttf', weight: 500, italic: true },
				],
				'ggsans-Semibold': [
					{ path: 'assets/fonts/IBMPlexMono-SemiBold.ttf', weight: 600 },
		       		{ path: 'assets/fonts/IBMPlexMono-SemiBoldItalic.ttf', weight: 600, italic: true },
				],
				'ggsans-Bold': [
					{ path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 },
		         	{ path: 'assets/fonts/IBMPlexMono-BoldItalic.ttf', weight: 700, italic: true },
				],
				'ggsans-ExtraBold': [
					{ path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 },
		       		{ path: 'assets/fonts/IBMPlexMono-BoldItalic.ttf', weight: 700, italic: true },
				],
				'ggmono-normal': [
					{ path: 'assets/fonts/IBMPlexMono-Regular.ttf', weight: 400 },
		         	{ path: 'assets/fonts/IBMPlexMono-Italic.ttf', weight: 400, italic: true },
				],
				'ggmono-Bold': [
					{ path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 },
		       		{ path: 'assets/fonts/IBMPlexMono-BoldItalic.ttf', weight: 700, italic: true },
				],
				'NotoSans-Normal': [
					{ path: 'assets/fonts/IBMPlexMono-Regular.ttf', weight: 400 },
		       		{ path: 'assets/fonts/IBMPlexMono-Italic.ttf', weight: 400, italic: true },
				],
				'NotoSans-Medium': [
					{ path: 'assets/fonts/IBMPlexMono-Medium.ttf', weight: 500 },
		         	{ path: 'assets/fonts/IBMPlexMono-MediumItalic.ttf', weight: 500, italic: true },
				],
				'NotoSans-Semibold': [
					{ path: 'assets/fonts/IBMPlexMono-SemiBold.ttf', weight: 600 },
		       		{ path: 'assets/fonts/IBMPlexMono-SemiBoldItalic.ttf', weight: 600, italic: true },
				],
				'NotoSans-Bold': [
					{ path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 },
		         	{ path: 'assets/fonts/IBMPlexMono-BoldItalic.ttf', weight: 700, italic: true },
				],
				'NotoSans-ExtraBold': [
					{ path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 },
		       		{ path: 'assets/fonts/IBMPlexMono-BoldItalic.ttf', weight: 700, italic: true },
				],
				'SourceCodePro-Semibold': [
					{path: 'assets/fonts/IBMPlexMono-SemiBold.ttf', weight: 600 },
				],
				'ABCGintoNord-ExtraBold': [
					{path: 'assets/fonts/IBMPlexMono-Bold.ttf', weight: 700 }
				]
			},
		})

		themes.registerFontPack('more-fonts', 'open-dyslexic', {
			name: 'OpenDyslexic',
			description: 'static font, replaces all discord fonts. bold and italic letters are not supported for monospaced text.',
			families: {
				'ggsans-Normal': [
					{ path: 'assets/fonts/OpenDyslexic-Regular.otf', weight: 400 },
		       		{ path: 'assets/fonts/OpenDyslexic-Italic.otf', weight: 400, italic: true },
				],
				'ggsans-Medium': [
					{ path: 'assets/fonts/OpenDyslexic-Regular.otf', weight: 400 },
		         	{ path: 'assets/fonts/OpenDyslexic-Italic.otf', weight: 400, italic: true },
				],
				'ggsans-Semibold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		       		{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 600, italic: true },
				],
				'ggsans-Bold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		         	{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 700, italic: true },
				],
				'ggsans-ExtraBold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		       		{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 700, italic: true },
				],
				'ggmono-normal': [
					{ path: 'assets/fonts/OpenDyslexicMono-Regular.otf', weight: 400 },
				],
				'ggmono-Bold': [
					{ path: 'assets/fonts/OpenDyslexicMono-Regular.otf', weight: 400 },
				],
				'NotoSans-Normal': [
					{ path: 'assets/fonts/OpenDyslexic-Regular.otf', weight: 400 },
		       		{ path: 'assets/fonts/OpenDyslexic-Italic.otf', weight: 400, italic: true },
				],
				'NotoSans-Medium': [
					{ path: 'assets/fonts/OpenDyslexic-Regular.otf', weight: 400 },
		         	{ path: 'assets/fonts/OpenDyslexic-Italic.otf', weight: 400, italic: true },
				],
				'NotoSans-Semibold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		       		{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 700, italic: true },
				],
				'NotoSans-Bold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		         	{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 700, italic: true },
				],
				'NotoSans-ExtraBold': [
					{ path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 },
		       		{ path: 'assets/fonts/OpenDyslexic-BoldItalic.otf', weight: 700, italic: true },
				],
				'SourceCodePro-Semibold': [
					{path: 'assets/fonts/OpenDyslexicMono-Regular.otf', weight: 400 },
				],
				'ABCGintoNord-ExtraBold': [
					{path: 'assets/fonts/OpenDyslexic-Bold.otf', weight: 700 }
				]
			},
		})
	}
})
