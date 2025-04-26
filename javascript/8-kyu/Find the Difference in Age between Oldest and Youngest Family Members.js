// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// 	You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
	let max = ages[0];
	let min = ages[0];
	for (let i = 0; i < ages.length; i++) {
		if (max <= ages[i]) max = ages[i];
		if (min >= ages[i]) min = ages[i]
	}
	return [min, max, max - min]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))
