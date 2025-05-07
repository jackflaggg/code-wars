function HQ9(code) {
	if (code === 'H') return 'Hello World!';
	if (code === 'Q') return code;
	if (code === '9') {
		let res = '';
		for (let count = 99; count > 0; count--) {
			let bottleCurrent = count === 1 ? 'bottle' : 'bottles';
			let bottleNext = (count - 1) === 1 ? 'bottle' : 'bottles';

			// Следующее количество бутылок для строки "Take one down..."
			let nextCount = count - 1 > 0 ? (count - 1) : 'no more';

			res += `${count} ${bottleCurrent} of beer on the wall, ${count} ${bottleCurrent} of beer.\n`;
			res += `Take one down and pass it around, ${nextCount} ${bottleNext} of beer on the wall.
`;
		}
		res += `No more bottles of beer on the wall, no more bottles of beer.\n`;
		res += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
		return res;
	}
	return;
}

console.log(HQ9('9'));
