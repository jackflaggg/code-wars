function defineSuit(card) {
	switch (true) {  // переключаемся по true
		case card.includes('♣'):
			return 'clubs';
		case card.includes('♦'):
			return 'diamonds';
		case card.includes('♥'):
			return 'hearts';
		case card.includes('♠'):
			return 'spades';
	}
}
