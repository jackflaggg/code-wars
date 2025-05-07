function whatday(num) {
	let res = ''
	switch (num) {
		case 1 : {
			res += 'Sunday'
			break;
		}
		case 2 : {
			res += 'Monday'
			break;
		}
		case 3 : {
			res += 'Tuesday'
			break;
		}
		case 4 : {
			res += 'Wednesday'
			break;
		}
		case 5 : {
			res += 'Thursday'
			break;
		}
		case 6 : {
			res += 'Friday'
			break;
		}
		case 7 : {
			res += 'Saturday'
			break;
		}
		default : res += 'Wrong, please enter a number between 1 and 7'
	}
	return res
}