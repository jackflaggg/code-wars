function createArray(number) {
	const newArray = [];
	for (let counter = 1; counter <= number; counter++) {
		newArray.push(counter);
	}
	return newArray;
}

console.log(createArray(5))