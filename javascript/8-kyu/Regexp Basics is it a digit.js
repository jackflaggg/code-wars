String.prototype.digit = function() {
	return /^[0-9]$/.test(this);
};

console.log('a5'.digit())