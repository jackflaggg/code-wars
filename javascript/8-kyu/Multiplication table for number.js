function multiTable(number) {
	let counter = 1;
	let str = '';
	while (counter <= 10){
		str += `${counter} * ${number} = ${counter * number}\n`;
		counter++
	}
	return str.trim()
}

console.log(multiTable(1))