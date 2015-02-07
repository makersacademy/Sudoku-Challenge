var express = require('express');
var app = express();
var server = require('http').createServer(app);
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var Board = require('./src/board.js');
var Solver = require('./src/solver.js');
var board;
var solver;
var rows;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
		if (board.grid[coord] && initialNumbers[coord] !== '')
			board.insertInitialNumber(coord, parseInt(initialNumbers[coord]));
	}
	solver.solveBoard(board);
	response.render('solution', {rows: rows, board: board});
});

var port = process.env.PORT || 3000;

server.listen(3000, function() {
	console.log('Server listening on port ' + port);
});

module.exports = server;
