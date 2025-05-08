function grabDoll(dolls){
	var bag=[];
	for (let index = 0; index < dolls.length; index++){
		if (bag.length === 3) break;
		if (dolls[index] === 'Hello Kitty' || dolls[index] === 'Barbie doll'){
			bag.push(dolls[index]);
			continue;
		}
	}
	return bag;
}