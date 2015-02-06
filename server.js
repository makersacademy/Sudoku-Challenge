var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
	response.render(path.join(__dirname + '/public/views/index'));
});

var port = process.env.PORT || 3000;

server.listen(3000, function() {
	console.log('Server listening on port ' + port);
});

module.exports = server;
