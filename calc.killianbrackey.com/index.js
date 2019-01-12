var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var history = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('a user connected');
	socket.emit('history', history);
	console.log("History: " + history);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('button', function(msg){
		io.emit('button', msg);
		history.push(msg);
		if (history.length > 10) {
			history.shift();
		}
	});
});

io.on('button', function(socket) {
	socket.on('button', function(msg) {
		console.log('button press received');
		io.emit('button', msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
