var Board = require('../src/board');

describe('Board', function() {

	var board = new Board();

	it('begins with an empty grid', function() {
		expect(board.grid).toEqual({});
	});

	it('can create a grid of 81 cells with each cell having a coordinate as its key ranging from A1 to I9', function() {
		board.createGrid();
		expect(Object.keys(board.grid).length).toEqual(81);
		expect(Object.keys(board.grid)[0]).toEqual('A1');
		expect(Object.keys(board.grid)[Object.keys(board.grid).length-1]).toEqual('I9');
	});

	it('initially sets the value of each cell to an array of nine numbers, being 1 to 9', function() {
		board.createGrid();
		for (var key in board.grid) {
			expect(board.grid[key]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		}
	});

	it('allows starting numbers to be allocated to the relevant coordinates', function() {
		board.createGrid();
		board.insertInitialNumber('A1', 1);
		expect(board.grid.A1).toEqual(1);
	});

	it('knows which row a cell is in', function() {
		board.createGrid();
		expect(board.findRow('A1')).toEqual([board.grid.A1, board.grid.A2, board.grid.A3,
																				 board.grid.A4, board.grid.A5, board.grid.A6,
																				 board.grid.A7, board.grid.A8, board.grid.A9]);
	})

});