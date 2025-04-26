function first(arr, n = 1) {
	return arr.length === 0 ? arr : arr.splice(0, n)
}
const array = ['a', 'b', 'c', 'd', 'e'];
console.log(first(array, 2))