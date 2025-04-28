function positiveSum(arr) {
	if (arr.length === 0) return 0
	return arr.reduce((acc, el) => {
		if (el >= 0){
			return acc + el;
		}
		return acc
	}, 0)
}