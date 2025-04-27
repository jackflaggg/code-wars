function well(x){
	const arr = []
	for (let i = 0; i < x.length; i++) {
		if (x[i] === 'good') arr.push(x[i])
	}
	if (!arr.length) return 'Fail!'
	return arr.length >= 3 ?  'I smell a series!' : 'Publish!'
}