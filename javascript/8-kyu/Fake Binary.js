function fakeBin(x){
	let newArr = x.split('').map(el => +el);
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] < 5){
			newArr[i] = 0
		}
		if (newArr[i] >= 5){
			newArr[i] = 1
		}
	}
	return newArr.join('')
}

console.log(fakeBin('45385593107843568'))