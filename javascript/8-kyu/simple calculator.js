function calculator(a,b,sign){
	const symbolBi = {
		'+': '+',
		'-': '-',
		'*': '*',
		'/': '/'
	}
	if (typeof a !== 'number' || typeof b !== 'number' || !symbolBi.hasOwnProperty(sign)){
		return "unknown value"
	}
	let result = 0;
	switch (sign) {
		case '+': {
			result = a + b;
			break;
		}
		case '-': {
			result = a - b;
			break;
		}
		case '*': {
			result = a * b;
			break;
		}
		case '/': {
			result = a / b;
			break;
		}
	}
	return result;
}