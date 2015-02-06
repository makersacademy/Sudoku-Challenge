function Solver() {}

Solver.prototype.solveBoard = function(board) {
	for (var cell in board.grid) {
		if (Array.isArray(board.grid[cell])) {
			this.checkCellRow(cell, board);
			this.checkCellColumn(cell, board);
			this.checkCellBlock(cell, board);
		}
	}
};

Solver.prototype.checkCellRow = function(cell, board) {
	var row = board.findRow(cell);
	row.forEach(function(coord) {
		if (board.grid[cell].indexOf(board.grid[coord]) > -1) {
			var index = board.grid[cell].indexOf(board.grid[coord]);
			board.grid[cell].splice(index, 1);
		}
	});
};

Solver.prototype.checkCellColumn = function(cell, board) {
	var column = board.findColumn(cell);
	column.forEach(function(coord) {
		if (board.grid[cell].indexOf(board.grid[coord]) > -1) {
			var index = board.grid[cell].indexOf(board.grid[coord]);
			board.grid[cell].splice(index, 1);
		}
	});
};

Solver.prototype.checkCellBlock = function(cell, board) {
	var block = board.findBlock(cell);
	block.forEach(function(coord) {
		if (board.grid[cell].indexOf(board.grid[coord]) > -1) {
			var index = board.grid[cell].indexOf(board.grid[coord]);
			board.grid[cell].splice(index, 1);
		}
	});
};

module.exports = Solver;