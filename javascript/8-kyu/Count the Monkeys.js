function monkeyCount(n) {
	return Array.from({length: n }, (_, i) => ++i)
}
console.log(monkeyCount(3))