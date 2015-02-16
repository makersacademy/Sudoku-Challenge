"use strict";

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var Grid = require('./src/grid.js');
var Cell = require('./src/cell.js');

app.use(express.static(__dirname + '/public'));

var grid;

app.get('/', function (req, res) {
   grid = new Grid(Cell)
   grid.init();
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/', function (req, res) {
  var buf = "";
  req.on('data', function(chunk) {
    buf += chunk.toString();
  })
  .on('end', function() {
    grid.loadPuzzle(buf.split("=")[1]);
    grid.solve();
    res.send(grid.printSolution());
  });
});

server.listen(3000, function(){
    console.log('Server listening on port 3000');
});

module.exports = server;
