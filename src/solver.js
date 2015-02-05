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
	for (var y = 0; y < solution.grid.length; y++) {
		for (var x = 0; x < solution.grid[y].length; x++) {
			for (var i = 1; i <= 9; i++) {
				if (solution.grid[y][x] === null && solution.grid[y].indexOf(i) === -1) {
				  solution.grid[y][x] = i;
			 		break;
			 	}
			}
		}
	}
	return solution;
};

module.exports = Solver;