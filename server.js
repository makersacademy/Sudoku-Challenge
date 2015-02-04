"use strict";

var express = require('express');
var app = express();
var server = require('http').createServer(app);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

server.listen(3000, function(){
    console.log('Server listening on port 3000');
});

module.exports = server;
