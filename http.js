const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('<h1> Welcome to Homepage </h1>')
  } else if (req.url == '/about') {
    res.end('<h1>About Page<h1>')
  } else {
    res.end(`<h1>OOOPS!!!!</h1>
  <h3>No Page Exists!!!!</h3>
  <a href="/">Home</a>
  `)
  }
})

server.listen(5000)
