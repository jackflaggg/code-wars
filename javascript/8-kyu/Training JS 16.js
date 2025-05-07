function cutIt(arr){
	let arrNew = [];
	const findMinLength = Math.min(...arr.map(el => el.length));
	for (let index = 0; index < arr.length; index++){
		if (arr[index].length <= findMinLength) {
			arrNew.push(arr[index])
		} else {
			arrNew.push(arr[index].slice(0, findMinLength))
		}
	}
	return arrNew
}