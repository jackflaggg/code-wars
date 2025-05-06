function buildString(...template){
	return `I like ${template.join(', ')}!`;
}

buildString('c', 'm', 'a')