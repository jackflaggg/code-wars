function nextId(ids){
	const newSetAndSort = [...new Set(ids)].sort((a, b) => a - b)
	let arr = []
	for (let i = 0; i < newSetAndSort.length; i++) {
		if (newSetAndSort[i] === newSetAndSort.at(-1)) break;
		if (newSetAndSort[i] !== newSetAndSort[i + 1] - 1){
			arr.push(newSetAndSort[i + 1] - 1)
		}
	}
	return arr.length > 0 ? arr.reduce((min, val) => val < min ? val : min, arr[0]) : ids.at(-1)+1;
}


console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))