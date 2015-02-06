var Solver = require('../src/solver');
var Board = require('../src/board');

describe('Solver', function() {

	var solver = new Solver();
	var board = new Board();
	var initialNumbers = [['A1', 5], ['A2', 3], ['A5', 7],
												['B1', 6], ['B4', 1], ['B5', 9], ['B6', 5],
												['C2', 9], ['C3', 8], ['C8', 6],
												['D1', 8], ['D5', 6], ['D9', 3],
												['E1', 4], ['E4', 8], ['E6', 3], ['E9', 1],
												['F1', 7], ['F5', 2], ['F9', 6],
												['G2', 6], ['G7', 2], ['G8', 8],
												['H4', 4], ['H5', 1], ['H6', 9], ['H9', 5],
												['I5', 8], ['I8', 7], ['I9', 9]];
	
	beforeEach(function() {
		board.createGrid();
		initialNumbers.forEach(function(initialNumber) {
			board.insertInitialNumber(initialNumber[0], initialNumber[1]);
		});
	});

	it('can discount any number already existing in a cell\'s row', function() {
		solver._checkCellRow('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 4, 6, 8, 9]);
	});

	it('can discount any number already existing in a cell\'s column', function() {
		solver._checkCellColumn('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);;
	});

	it('can discount any number already existing in a cell\'s block', function() {
		solver._checkCellBlock('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 4, 7]);
	});

	it('can convert any array of one number into an integer', function() {
		board.grid.A1 = [5];
		solver._removeArrayIfLastNumber('A1', board);
		expect(board.grid.A1).toEqual(5);
	});

	it('can iterate through all of the cells in the grid repeatedly using the above functions until the puzzle is solved', function() {
		solver.solveBoard(board);
		expect(board.grid).toEqual({
			A1: 5, A2: 3, A3: 4, A4: 6, A5: 7, A6: 8, A7: 9, A8: 1, A9: 2,
			B1: 6, B2: 7, B3: 2, B4: 1, B5: 9, B6: 5, B7: 3, B8: 4, B9: 8,
			C1: 1, C2: 9, C3: 8, C4: 3, C5: 4, C6: 2, C7: 5, C8: 6, C9: 7,
			D1: 8, D2: 5, D3: 9, D4: 7, D5: 6, D6: 1, D7: 4, D8: 2, D9: 3,
			E1: 4, E2: 2, E3: 6, E4: 8, E5: 5, E6: 3, E7: 7, E8: 9, E9: 1,
			F1: 7, F2: 1, F3: 3, F4: 9, F5: 2, F6: 4, F7: 8, F8: 5, F9: 6,
			G1: 9, G2: 6, G3: 1, G4: 5, G5: 3, G6: 7, G7: 2, G8: 8, G9: 4,
			H1: 2, H2: 8, H3: 7, H4: 4, H5: 1, H6: 9, H7: 6, H8: 3, H9: 5,
			I1: 3, I2: 4, I3: 5, I4: 2, I5: 8, I6: 6, I7: 1, I8: 7, I9: 9
		});
	});

});