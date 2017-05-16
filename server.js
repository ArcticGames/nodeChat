var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

const port = 3000;

server.listen(port, function(){
  console.log('Server listening on port: ' + port);
});

app.get('')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
  console.log('A user has joined. His ID is: ' + socket.id)
  socket.emit('event', {message:'A user has joined'});
  socket.on('chatMsg', function(msg){
    socket.emit('chatMsg', msg);
    console.log('Message: ' + msg);
  })
})
