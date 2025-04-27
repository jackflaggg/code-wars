function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return []
	let sum = 0;
	const arrNegative = [];
	for (let i = 0; i < input.length; i++) {
		if (input[i] > 0) sum++;
		if (input[i] < 0) arrNegative.push(input[i])
	}

	return [sum, arrNegative.reduce((acc, el) => acc + el,0)]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))