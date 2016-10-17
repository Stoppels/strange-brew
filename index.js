var express = require('express');
var app = express();

// Get the request & response
app.get('/', function(req, res) {
	res.end('Hello, cruel world.');
});

console.log('Server started at port 1337');
app.listen(1337);
