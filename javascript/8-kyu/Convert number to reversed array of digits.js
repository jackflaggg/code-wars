// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
	const arr = String(n).split('');
	return arr.map(el => +el).reverse()
}

console.log(digitize(35231))