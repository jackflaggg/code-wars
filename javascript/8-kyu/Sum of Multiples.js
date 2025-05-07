function sumMul(n,m){
	if (n <= 0 || m <= 0) return 'INVALID';
	if (n >= m) return 'INVALID';
	let p = Math.floor((m - 1) / n);
	return n * p * (p + 1) / 2;
}