function aliasGen(first, last) {
	// Берём первые буквы
	const firstCharName = first[0].toUpperCase();
	const firstCharSurname = last[0].toUpperCase();

	// Проверяем, что они в диапазоне A-Z
	if (!firstCharName.match(/[A-Z]/) || !firstCharSurname.match(/[A-Z]/)) {
		return "Your name must start with a letter from A - Z.";
	}

	// Берём значения из словарей
	const firstPart = firstName[firstCharName];
	const secondPart = surname[firstCharSurname];

	return `${firstPart} ${secondPart}`;
}
