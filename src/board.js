function Board() {
	this.grid = {};
	this.rows = {};
	this.columns = {};
}

Board.prototype.LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
Board.prototype.NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

Board.prototype.createGrid = function() {
	var _this = this;
	this.LETTERS.forEach(function(letter) {
		_this.NUMBERS.forEach(function(number) {
			_this.grid[letter + number] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		});
	});
};

Board.prototype.insertInitialNumber = function(coord, number) {
	this.grid[coord] = number;
};

Board.prototype.findRow = function(coord) {
	var row = [];
	for (var key in this.grid) {
		if (coord[0] === key[0]) {
			row.push(this.grid[key]);
		}
	}
	return row;
};

module.exports = Board;