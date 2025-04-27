function sumOfDifferences(arr) {
	if (arr.length < 2) return 0;
	const arrSort = [...arr].sort((a, b) => b - a)
	let sum = 0;
	for (let i = 0; i < arrSort.length - 1; i++) {
		sum += arrSort[i] - arrSort[i + 1]
	}
	return sum
}