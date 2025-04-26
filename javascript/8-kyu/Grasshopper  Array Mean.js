function findAverage(nums) {
	return nums.reduce((acc, el) => acc + el, 0) / nums.length;
}