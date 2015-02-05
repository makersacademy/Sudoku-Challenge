var Board = require('../src/board');

describe('Board', function() {

	var board = new Board();

	it('begins with a grid being an empty array'), function() {
		expect(board.grid.length).toEqual(0);
	}

	it('allows a 9x9 grid with initial numbers to be added', function() {
		board.grid = [
									 [ 5,  3, '', '',  7, '', '', '', ''],
									 [ 6, '', '',  1,  9,  5, '', '', ''],
									 ['',  9,  8, '', '', '', '',  6, ''],
									 [ 8, '', '', '',  6, '', '', '',  3],
									 [ 4, '', '',  8, '',  3, '', '',  1],
									 [ 7, '', '', '',  2, '', '', '',  6],
									 ['',  6, '', '', '', '',  2,  8, ''],
									 ['', '', '',  4,  1,  9, '', '',  5],
									 ['', '', '', '',  8, '', '',  7,  9]
								 ];
		expect(board.grid.length).toEqual(9);
		board.grid.forEach(function(row) {
			expect(row.length).toEqual(9);
		});
	});

});