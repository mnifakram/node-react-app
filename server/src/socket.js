const socketIO = require('socket.io');
const Server = require('./server');

// create a WebSocket server
const io = socketIO(Server, {
  cors: {
    origin: "*",
    methods: ["OPTIONS", "GET", "POST"]
  }
});

// listen for connection
io.on( 'connection', ( client ) => {
  console.log( 'SOCKET: ', 'A client connected', client.id );
});

module.exports = io;