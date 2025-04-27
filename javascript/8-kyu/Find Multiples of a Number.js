function findMultiples(integer, limit) {
	return Array.from({length: Math.floor(limit / integer)}, (_, i) => integer * (i + 1))
}

console.log(findMultiples(2, 5))
