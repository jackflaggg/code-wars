function countBy(x, n) {
	return Array.from({length: n}, (_, i) => (i + 1) * x)
}
console.log(countBy(2, 5))