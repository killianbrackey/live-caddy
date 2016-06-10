var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var history = [];


app.use(express.static(__dirname + '/public'));
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/public/calc.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');
	socket.emit('history', history);
	console.log("History: " + history);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
	socket.on('history', function(history) {
		io.emit('history', history);
		console.log("REACHED HISTORY HERE");
	});
	socket.on('button', function(msg){
		console.log("button pressed");
		io.emit('button', msg);
		history.push(msg);
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
