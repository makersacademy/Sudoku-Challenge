function Solver() {}

// Solver.prototype.solve = function(board) {
// 	var solution = board;
// 	for (var y = 0; y < solution.grid.length; y++) {
// 		for (var x = 0; x < solution.grid[y].length; x++) {
// 			for (var i = 1; i <= 9; i++) {
// 				if (this.isCellEmpty(solution, y, x) &&
// 						this.isNumberNotInRow(solution, y, i) &&
// 						this.isNumberNotInColumn(solution, x, i)) {
// 				  		solution.grid[y][x] = i;
// 			 				break;
// 			 	}
// 			}
// 		}
// 	}
// 	return solution;
// };

// Solver.prototype.isCellEmpty = function(solution, y, x) {
// 	return (solution.grid[y][x] === null);
// }

// Solver.prototype.isNumberNotInRow = function(solution, y, i) {
// 	return (solution.grid[y].indexOf(i) === -1);
// }

// Solver.prototype.isNumberNotInColumn = function(solution, x, i) {
// 	var column = [];
// 	for (var y = 0; y < 9; y++) {
// 		column.push(solution.grid[y][x]);
// 	}
// 	return (column.indexOf(i) === -1);
// }

module.exports = Solver;