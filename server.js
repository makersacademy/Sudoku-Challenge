var express = require('express');
var app = express();
var server = require('http').createServer(app);
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/public'));

var controller = require('./app/controllers/controller.js')(app);

var port = process.env.PORT || 3000;

server.listen(3000, function() {
	console.log('Server listening on port ' + port);
});

module.exports = server;
