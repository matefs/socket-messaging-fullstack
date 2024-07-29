const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const path = require("path");


const app = express();
const PORT =  process.env.PORT || 32132;

const server = app.listen(PORT, () => {
  console.log("Server listening on port http://localhost:" + PORT);
});

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
  

var connectedClients = [] 
io.on("connection", (socket) => {
  console.log("New client connected", socket.client.id);
  connectedClients.push(socket);
 

  socket.on('messageBroadcast',(mensagem) => socket.broadcast.emit('messageBroadcast', mensagem))

  socket.on("disconnect", () => {
      console.log("Client disconnected");
    });



});
 


