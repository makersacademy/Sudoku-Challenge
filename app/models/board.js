function Board() {
	this.grid = {};
}

Board.prototype.LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
Board.prototype.NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
Board.prototype.LETTER_ARRAYS = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
Board.prototype.NUMBER_ARRAYS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

Board.prototype.createGrid = function() {
	var _this = this;
	this.LETTERS.forEach(function(letter) {
		_this.NUMBERS.forEach(function(number) {
			_this.grid[letter + number] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		});
	});
};

Board.prototype.insertInitialNumber = function(coord, number) {
	if (number < 1 || number > 9 || Math.floor(number) !== number) {
		throw "Invalid number. Please only insert numbers 1 to 9.";
	}
	this.grid[coord] = number;
};

Board.prototype.findRow = function(coord) {
	return this._findSelectedCells(coord, 0);
};

Board.prototype.findColumn = function(coord) {
	return this._findSelectedCells(coord, 1);
};

Board.prototype.findBlock = function(coord) {
	var letters = this._findLetterArray(coord);
	var numbers = this._findNumberArray(coord);
	return ([letters[0] + numbers[0], letters[0] + numbers[1], letters[0] + numbers[2],
					 letters[1] + numbers[0], letters[1] + numbers[1], letters[1] + numbers[2],
					 letters[2] + numbers[0], letters[2] + numbers[1], letters[2] + numbers[2]]);
};

Board.prototype.splitGridCoordsIntoRows = function() {
	var coords = Object.keys(this.grid);
	var rows = [];
	while (coords.length > 0) {
		rows.push(coords.splice(0, 9));
	}
	return rows;
};

Board.prototype._findSelectedCells = function(coord, characterNumber) {
	var array = [];
	for (var cell in this.grid) {
		if (coord[characterNumber] === cell[characterNumber]) {
			array.push(cell);
		}
	}
	return array;
}

Board.prototype._findLetterArray = function(coord) {
	var letters;
	this.LETTER_ARRAYS.forEach(function(array) {
		if (array.indexOf(coord[0]) > -1) {
			letters = array;
		}
	});
	return letters;
};

Board.prototype._findNumberArray = function(coord) {
	var numbers;
	this.NUMBER_ARRAYS.forEach(function(array) {
		if (array.indexOf(coord[1]) > -1) {
			numbers = array;
		}
	});
	return numbers;
};

module.exports = Board;
