function isVow(a) {
	const vowels = [97, 101, 105, 111, 117]; // коды гласных
	return a.map(num => vowels.includes(num) ? String.fromCharCode(num) : num);
}
