function stringClean(s){
	const reg = `[0-9]`;
	const newArr = s.split('');
	let newStr = '';
	for (let i = 0; i < newArr.length; i++) {
		if (!newArr[i].match(reg)){
			newStr += newArr[i]
		}
	}
	return newStr
}

console.log(stringClean('This looks5 grea8t!'))