Array.prototype.filter = function (func, thisArg) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		if (i in this){
			if (func.call(thisArg, this[i], i, this)){
				result.push(this[i])
			}
		}
	}
	return result
}
