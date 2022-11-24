const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) =>     {
    socket.on('chat message', (nickname, msg) => {
        io.emit('chat message', nickname + ': ' + msg)
    })
})

server.listen(port, () => {
    console.log('Listening server at port 8080')
})