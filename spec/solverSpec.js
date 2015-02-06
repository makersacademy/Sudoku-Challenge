var Solver = require('../src/solver');
var Board = require('../src/board');

describe('Solver', function() {

	// var solver = new Solver();
	// var board = new Board();
	// var solution;

	// beforeEach(function() {
	// 	board.grid = [
	// 								 [5, 3, 0, 0, 7, 0, 0, 0, 0],
	// 								 [6, 0, 0, 1, 9, 5, 0, 0, 0],
	// 								 [0, 9, 8, 0, 0, 0, 0, 6, 0],
	// 								 [8, 0, 0, 0, 6, 0, 0, 0, 3],
	// 								 [4, 0, 0, 8, 0, 3, 0, 0, 1],
	// 								 [7, 0, 0, 0, 2, 0, 0, 0, 6],
	// 								 [0, 6, 0, 0, 0, 0, 2, 8, 0],
	// 								 [0, 0, 0, 4, 1, 9, 0, 0, 5],
	// 								 [0, 0, 0, 0, 8, 0, 0, 7, 9]
	// 							 ];
	// 	solution = solver.solve(board);
	// })

	// it('will fill in each row with numbers 1 to 9 but no number will be repeated in the same row', function() {
	// 	solution.grid.forEach(function(row) {
	// 		expect(row.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	// 	});
	// });

	// it('will fill in each row with numbers 1 to 9 but no number will be repeated in the same column', function() {
	// 	var solution = solver.solve(board);
	// 	for (var x = 0; x < 9; x++) {
	// 		var column = [];
	// 		for (var y = 0; y < 9; y++) {
	// 			column.push(solution.grid[y][x]);
	// 		}
	// 		// expect(column.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	// 		console.log(column);
	// 	}
	// });

});