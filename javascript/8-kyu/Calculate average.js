function findAverage(array) {
	// your code here
	return array.length === 0 ? 0 : array.reduce((acc, elem) => acc + elem, 0)/array.length;
}