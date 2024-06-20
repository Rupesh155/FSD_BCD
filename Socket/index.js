const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        // console.log(msg);
      io.emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});