var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('images'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/miroir', function (req, res) {
    res.sendFile(__dirname + '/miroir.html');
});


io.on('connection', function (socket) {
    socket.on('position', function (posX, posY) {
        io.sockets.emit('miror', posX, posY);
    });
});

http.listen(3000, function () {
  console.log('Port 3000');
});
