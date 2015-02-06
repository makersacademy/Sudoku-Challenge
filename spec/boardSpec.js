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
		expect(board.findRow('A1')).toEqual(['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9']);
	});

	it('knows which column a cell is in', function() {
		board.createGrid();
		expect(board.findColumn('A1')).toEqual(['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1']);
	});

	it('knows which block a cell is in', function() {
		board.createGrid();
		console.log(board.findBlock('I7'));
		expect(board.findBlock('A1')).toEqual(['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']);
	});

});