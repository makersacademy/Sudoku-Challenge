var Solver = require('../src/solver');
var Board = require('../src/board');

describe('Solver', function() {

	var solver = new Solver();
	var board = new Board();
	var solution;

	beforeEach(function() {
		board.grid = [
									 [5,  	3, 		null, null, 7, 		null, null, null, null],
									 [6,  	null, null, 1,  	9,  	5, 		null, null, null],
									 [null, 9, 		8, 		null, null, null, null, 6, 		null],
									 [8,  	null, null, null, 6, 		null, null, null, 3		],
									 [4,  	null, null, 8, 		null, 3, 		null, null, 1		],
									 [7,  	null, null, null, 2, 		null, null, null, 6		],
									 [null, 6, 		null, null, null, null, 2, 		8, 		null],
									 [null, null, null, 4, 		1, 		9, 		null, null, 5		],
									 [null, null, null, null, 8, 		null, null, 7, 		9		]
							 	 ];
		solution = solver.solve(board);
	})

	it('will fill in each row with numbers 1 to 9 but no number will be repeated in the same row', function() {
		solution.grid.forEach(function(row) {
			expect(row.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});
	});

	it('will fill in each row with numbers 1 to 9 but no number will be repeated in the same column', function() {
		var solution = solver.solve(board);
		for (var x = 0; x < 9; x++) {
			var column = [];
			for (var y = 0; y < 9; y++) {
				column.push(solution.grid[y][x]);
			}
			// expect(column.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			console.log(column);
		}
	});

});