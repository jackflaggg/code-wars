function multipleOfIndex(array) {
	return array.filter((el, i) => i !== 0 && el % i === 0);
}
