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
			row.push(key);
		}
	}
	return row;
};

Board.prototype.findColumn = function(coord) {
	var column = [];
	for (var key in this.grid) {
		if (coord[1] === key[1]) {
			column.push(key);
		}
	}
	return column;
}

Board.prototype.findBlock = function(coord) {
	var xBlock = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
	var yBlock = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
	xBlock.forEach(function(blockOption) {
		if (blockOption.indexOf(coord[1]) > -1) { xBlock = blockOption; }
	});
	yBlock.forEach(function(blockOption) {
		if (blockOption.indexOf(coord[0]) > -1) { yBlock = blockOption; }
	});
	return ([yBlock[0]+xBlock[0], yBlock[0]+xBlock[1], yBlock[0]+xBlock[2],
					 yBlock[1]+xBlock[0], yBlock[1]+xBlock[1], yBlock[1]+xBlock[2],
					 yBlock[2]+xBlock[0], yBlock[2]+xBlock[1], yBlock[2]+xBlock[2]]);
};

module.exports = Board;