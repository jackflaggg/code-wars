function amIWilson(p) {
	let factorial = 1;
	for (let i = 1; i < p; i++) {
		factorial *= i
	}
	return (factorial + 1) % (p * p) === 0
}

console.log(amIWilson(13))