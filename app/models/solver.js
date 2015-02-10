function Solver() {}

Solver.prototype.solveBoard = function(board) {
	for (var cell in board.grid) {
		if (Array.isArray(board.grid[cell])) {
			this._checkRelevantCells(cell, board);
			this._removeArrayIfLastNumber(cell, board);
		}
	}
	this._repeatIfAnyCellNotSolved(board);
};

Solver.prototype._checkRelevantCells = function(cell, board) {
	this._checkCellRow(cell, board);
	this._checkCellColumn(cell, board);
	this._checkCellBlock(cell, board);
};

Solver.prototype._checkCellRow = function(cell, board) {
	var row = board.findRow(cell);
	this._removeExistingNumbers(cell, board, row);
};

Solver.prototype._checkCellColumn = function(cell, board) {
	var column = board.findColumn(cell);
	this._removeExistingNumbers(cell, board, column);
};

Solver.prototype._checkCellBlock = function(cell, board) {
	var block = board.findBlock(cell);
	this._removeExistingNumbers(cell, board, block);
};

Solver.prototype._removeExistingNumbers = function(cell, board, section) {
	section.forEach(function(otherCell) {
		if (board.grid[cell].indexOf(board.grid[otherCell]) > -1) {
			var index = board.grid[cell].indexOf(board.grid[otherCell]);
			board.grid[cell].splice(index, 1);
		}
	});
};

Solver.prototype._removeArrayIfLastNumber = function(cell, board) {
	if (board.grid[cell].length === 1) {
		board.grid[cell] = board.grid[cell][0];
	}
};

Solver.prototype._repeatIfAnyCellNotSolved = function(board) {
	for (var cell in board.grid) {
		if (Array.isArray(board.grid[cell])) {
			this.solveBoard(board);
		}
	}
};

module.exports = Solver;
