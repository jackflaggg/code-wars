// Get ASCII value of a character.
//
// 	For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c){
	return typeof c === 'string' ? c.charCodeAt(0) : null;
}