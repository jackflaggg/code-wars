function peopleWithAgeDrink(old) {
	let res = 'drink '
	if (old < 14) res += 'toddy';
	if (old >= 14 && old < 18) res += 'coke'
	if (old >= 18 && old < 21) res += 'beer'
	if (old >= 21) res += 'whisky'
	return res
};