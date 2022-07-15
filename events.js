const EventEmitter = require('events')
const customEvent = new EventEmitter()
customEvent.on('abc', (name, age) => {
  console.log(`data received ${name} ${age}`)
})
customEvent.on('abc', () => {
  console.log(`data received`)
})
customEvent.emit('abc', 'john', 34)
console.log('Hello World')

const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  if (req == '/') {
    res.end('Welcome')
  }
})
server.listen(5000, () => {
  console.log('Server Listening....')
})
