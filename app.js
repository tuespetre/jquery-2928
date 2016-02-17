var express = require('express');
var app = express();

var counter = 0;

app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/modal-success', function (req, res) {
	res.send(req.headers);
});

app.get('/modal-failure', function (req, res) {
	if (counter % 2 == 0) {
		res.status(401);
	}	
	counter++;
	res.setHeader('Cache-Control', 'no-cache, no-store')
	res.send(req.headers);
});

app.get('/reauthenticate', function (req, res) {
	res.send('Reauthenticate');
});

app.listen(5000, function () {
	console.log('Listening on port 5000. Press CTRL+C to cancel.');
});