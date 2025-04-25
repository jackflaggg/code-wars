function check(a, x) {
	return a.some(elem => elem === x)
}

console.log(check([66, 101], 66))