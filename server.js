const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'assets')));

const server = http.createServer(app);

const io = new Server(server);

app.get('/chat', (req, res) => {
  return res.sendFile(__dirname + '/chat.html');
});

// Main Conversation Chat App
io.on('connection', (socket) => {
  console.log('user connection...');

  // server sent all data to users
  socket.on('on-chat', (data) => {
    // this is data message from user
    console.log(data);
    // from chanel on-chat of client sent all to users by chanel user-chat
    io.emit('user-chat', data);
  });
});

const PORT = process.env.PORT || 9345;
server.listen(PORT, () => console.log(`Server running port ${PORT}`));
