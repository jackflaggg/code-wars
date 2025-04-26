// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// 	name is a property of Player objects, e.g Player.name

function duckDuckGoose(players, goose) {
	return players.at((goose - 1) % players.length).name
}

class Player {
	constructor(name) {
		this.name = name;
	}
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
console.log(duckDuckGoose(players, 10))