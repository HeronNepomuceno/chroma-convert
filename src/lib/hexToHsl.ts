import { hexToRgbHelper } from "./hexToRgbHelper";

export function hexToHsl(hex: string): string | null {
	const rgb = hexToRgbHelper(hex);
	if (!rgb) return null;

	const { r, g, b } = rgb;
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;

	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (delta !== 0) {
		s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

		switch (max) {
			case rNorm:
				h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
				break;
			case gNorm:
				h = ((bNorm - rNorm) / delta + 2) * 60;
				break;
			case bNorm:
				h = ((rNorm - gNorm) / delta + 4) * 60;
				break;
		}
	}



	return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
