// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
// 	each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.
const lst = [3, 5, 8, 13];

function eachCons(array, n) {
	let result = [];

	array.map((_, index, arr) => {
		const slice = arr.slice(index, index + n);
		if (slice.length === n) {
			result.push(slice);
		}
	});

	return result;
}


console.log(eachCons(lst, 3))