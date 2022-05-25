const Koa = require('koa')
const app = new Koa()
const server = require('http').Server(app.callback())
const socketIo = require('socket.io')
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
})

io.on('connection', socket => {
    socket.join('room')
    console.log('socket initialization completed')
    socket.on('newMessage', (data) => {
        socket.emit('newMessage', { message: data })
        console.log(data, 'received information')
        socket.to('room').emit('newMessage', { message: data })
    })
})


server.listen(3000, () => {
    console.log(`app run at : http://localhost:3000`)
})




