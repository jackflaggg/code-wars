function countSheeps(sheep) {
	return sheep.reduce((acc, el) => {
		if (el === true) {
			return acc + 1;
		}
		return acc;
	},0)
}