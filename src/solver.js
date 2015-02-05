function Solver() {}

// Solver.prototype.solve = function(board) {
// 	var solution = board;
// 	solution.grid.forEach(function(row) {
// 		row.forEach(function(cell) {
// 			for (var i = 1; i <= 9; i++) {
// 				if (isNaN(cell) && row.indexOf(i) === -1) {
// 					cell = i;
//					break;
// 				}
// 			} 
// 		});
// 	});
// 	return solution;
// };

Solver.prototype.solve = function(board) {
	var solution = board;
	for (var row = 0; row < solution.grid.length; row++) {
		for (var cell = 0; cell < solution.grid[row].length; cell++) {
			for (var i = 1; i <= 9; i++) {
				if (solution.grid[row][cell] === null && solution.grid[row].indexOf(i) === -1) {
				  solution.grid[row][cell] = i;
			 		break;
			 	}
			}
		}
	}
	return solution;
};

module.exports = Solver;