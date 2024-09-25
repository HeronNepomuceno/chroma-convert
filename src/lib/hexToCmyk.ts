import { hexToRgbHelper } from "./hexToRgbHelper";

export function hexToCmyk(hex: string): string | null {
	const rgb = hexToRgbHelper(hex);
	if (!rgb) return null;

	const { r, g, b } = rgb;
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const k = 1 - Math.max(rNorm, gNorm, bNorm);
	const c = k < 1 ? (1 - rNorm - k) / (1 - k) : 0;
	const m = k < 1 ? (1 - gNorm - k) / (1 - k) : 0;
	const y = k < 1 ? (1 - bNorm - k) / (1 - k) : 0;

	return `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`
}
