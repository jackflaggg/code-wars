function evenChars(string) {
	if (string.length <= 1 || string.length > 100) return "invalid string"
	return string.split('').filter((el, index) => index % 2 !== 0)
}

console.log(evenChars(''))