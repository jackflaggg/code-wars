function firstNonConsecutive (arr) {
	const copyArr = Array.from({length: Math.abs(arr.at(-1) - arr.at(0)) + 1}, (_, i) => arr.at(0)+i);
	if (copyArr.length === arr.length) return null;
	let value = 0;

	for (let i = 0; i < copyArr.length; i++) {
		if (!arr.includes(copyArr[i])) return value = copyArr[i] + 1
	}
	return value
}

console.log(firstNonConsecutive([-8,-6,-4,-3,-2,-1,0,1]))