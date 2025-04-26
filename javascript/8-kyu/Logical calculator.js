// Given an array of Boolean values and a
// logical operator, return a Boolean result
// based on sequentially applying the operator
// to the values in the array.


function logicalCalc(array, op){
	let arr = array.map(el => Number(el));

	switch (op) {
		case 'AND':
			arr = arr.reduce((acc, el) => acc * el,1)
			break;
		case 'OR':
			arr = arr.reduce((acc, el) => acc + el,0)
			break;
		case 'XOR':
			arr = arr.reduce((acc, el) => acc ^ el,0)
			break;
	}
	return Boolean(arr)
}

console.log(logicalCalc([false, false], "XOR"))