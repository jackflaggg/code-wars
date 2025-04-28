function howMuchILoveYou(nbPetals) {
	const loves = [
		"I love you",
		"a little",
		"a lot",
		"passionately",
		"madly",
		"not at all",
	]
	return loves[(nbPetals - 1) % loves.length]
}

console.log(howMuchILoveYou(1))