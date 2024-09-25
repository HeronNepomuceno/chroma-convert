export function hexToRgbHelper(hex: string): { r: number, g: number, b: number } | null {
	let sanitizedHex = hex.replace(/^#/, '');

	if (sanitizedHex.length === 3) {
		sanitizedHex = sanitizedHex.split('').map(char => char + char).join('');
	}

	if (sanitizedHex.length !== 6) {
		return null;
	}

	const r = parseInt(sanitizedHex.slice(0, 2), 16);
	const g = parseInt(sanitizedHex.slice(2, 4), 16);
	const b = parseInt(sanitizedHex.slice(4, 6), 16);

	return { r, g, b };
}
