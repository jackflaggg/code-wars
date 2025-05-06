function formatMoney(amount){
	const strAmount = String(amount);
	if (!strAmount.includes('.')) {
		return `$${strAmount}.00`;
	} else {
		const parts = strAmount.split('.');
		const decimalPart = parts[1].length === 1 ? parts[1] + '0' : parts[1];
		return `$${parts[0]}.${decimalPart}`;
	}
}

console.log(formatMoney(39));    // \$39.00
console.log(formatMoney(39.8));  // \$39.80
console.log(formatMoney(39.89)); // \$39.89
