function arr2bin(arr){
	if (arr.some(el => typeof el === 'number' && Number.isNaN(el))) {
		return 'NaN';
	}
	const sum = arr.reduce((acc, el) => {
		if (typeof el === 'number' && !Number.isNaN(el)){
			return acc + el
		}
		return acc
	}, 0)
	return sum.toString(2)
}