var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = 3000;

server.listen(port, function(){
  console.log('Server listening on port: ' + port);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});
