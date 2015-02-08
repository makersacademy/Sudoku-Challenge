var controller = function(app) {

	var Board = require('../models/board.js');
	var Solver = require('../models/solver.js');
	var board;
	var solver;
	var rows;

	app.get('/', function(request, response) {
		board = new Board();
		solver = new Solver();
		board.createGrid();
		rows = board.splitGridCoordsIntoRows();
		response.render('index', {rows: rows});
	});

	app.post('/solution', function(request, response) {
		var initialNumbers = request.body;
		for (var coord in initialNumbers) {
			if (board.grid[coord] && initialNumbers[coord] !== '') {
				board.insertInitialNumber(coord, parseInt(initialNumbers[coord]));
			}
		}
		solver.solveBoard(board);
		response.render('solution', {rows: rows, board: board});
	});

};

module.exports = controller;