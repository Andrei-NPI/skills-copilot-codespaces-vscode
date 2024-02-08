// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
// create server
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;
// create a body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// create a route
app.get('/comments', function(req, res) {
    res.sendFile(__dirname + '/comments.json');
});

// create a route
app.post('/comments', function(req, res) {
    fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments, null, 4), function(err) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(comments));
        });
    });
});

// create a route
app.get('/bundle.js', function(req, res) {
    res.sendFile(__dirname + '/bundle.js');
});

// create a route
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
});

// create a route
app.get('/socket.io.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/socket.io-client/socket.io.js');
});

// create a route
app.get('/socket.io-stream.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/socket.io-stream/socket.io-stream.js');
});

// create a route
app.get('/socket.io-stream-client.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/socket.io-stream-client/socket.io-stream-client.js');
});

// create a route
app.get('/socket.io-stream-client.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/socket.io-stream-client/socket.io-stream-client.js');
});

// create a route
app.get('/socket.io-stream-client.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/socket.io-stream-client/socket.io-stream-client.js');
});

