function correctPolishLetters (string) {
	const repObject = {
		'ą' : 'a',
		'ć' : 'c',
		'ę' : 'e',
		'ł' : 'l',
		'ń' : 'n',
		'ó' : 'o',
		'ś' : 's',
		'ź' : 'z',
		'ż' : 'z'
	};

	let newStr = '';
	const arrString = string.split('');
	for (let i = 0; i < arrString.length; i++) {
		console.log(i);
		if (arrString[i] in repObject){
			newStr += repObject[arrString[i]]
		} else {
			newStr += arrString[i]
		}
	}
	return newStr
}
console.log('Jędrzej'.length)
correctPolishLetters('Jędrzej')
