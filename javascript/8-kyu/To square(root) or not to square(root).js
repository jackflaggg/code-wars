function squareOrSquareRoot(array) {
	const copyArr = [];
	for (let i = 0; i < array.length; i++) {
		const root = Math.sqrt(array[i]);
		if (Number.isInteger(root)) {
			copyArr.push(root);
		} else {
			copyArr.push(array[i] ** 2);
		}
	}
	return copyArr;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))