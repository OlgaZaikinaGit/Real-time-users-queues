import { Server } from 'socket.io'

export default function () {
  const io = new Server(3001, {
    cors: {
      origin: '*'
    }
  })

  io.on('connection', socket => {
    console.log('Connection', socket.id)
  })

  io.on('connect', socket => {
    socket.emit('message', `welcome ${socket.id}`)
    socket.broadcast.emit('message', `${socket.id} joined`)

    socket.on('update', function message (data: any) {
      console.log('message received: %s', data)
      socket.emit('refresh', { message: 'Update data.' })
      socket.broadcast.emit('refresh', { message: 'Update data.' })
    })

    socket.on('disconnecting', () => {
      console.log('disconnected', socket.id)
      socket.broadcast.emit('message', { message: 'Disconnected.' })
    })
  })
}
