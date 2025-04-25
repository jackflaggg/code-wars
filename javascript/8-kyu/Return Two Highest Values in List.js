function twoHighest(arr) {
	if (arr.length === 0) return arr;
	const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
	return uniqueArr.length > 1 ? uniqueArr.slice(0, 2) : uniqueArr;
}