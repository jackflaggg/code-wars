function addLength(str) {
	const arrayStr = str.split(' ');
	return arrayStr.map(elem => elem = elem + ' ' + elem.length);
}
