function isOpposite(s1,s2){
	if (!s1.length && !s2.length || (s1.length !== s2.length)) return false;
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] === s2[i]) return false;
		if (s1[i].toLowerCase() !== s2[i].toLowerCase()) return false;
		const isS1Upper = s1[i] === s1[i].toUpperCase();
		const isS2Upper = s2[i] === s2[i].toUpperCase();

		if (isS1Upper === isS2Upper) return false;
	}
	return true
}

console.log(isOpposite("KiIgQvBBm","kIiGqVbbM"))