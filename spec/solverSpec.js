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
		solver.checkCellRow('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 4, 6, 8, 9]);
	});

	it('can discount any number already existing in a cell\'s column', function() {
		solver.checkCellColumn('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);;
	});

	it('can discount any number already existing in a cell\'s block', function() {
		solver.checkCellBlock('A3', board);
		expect(board.grid.A3).toEqual([1, 2, 4, 7]);
	});

	it('can iterate through all of the cells in the grid and discount any number already existing in each cell\'s row, column or block', function() {
		solver.solveBoard(board);
		expect(board.grid.A3).toEqual([1, 2, 4]);
		console.log(board);
	});

});