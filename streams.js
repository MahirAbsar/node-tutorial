// const fs = require('fs')
// for (let i = 1; i <= 1000; i++) {
//   fs.writeFileSync('./content/big.txt', `hello world - ${i}\n`, { flag: 'a' })
// }

// const { createReadStream } = require('fs')
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
// stream.on('data', (result) => {
//   console.log(result)
// })

const http = require('http')
const fs = require('fs')
http
  .createServer((req, res) => {
    const stream = fs.createReadStream('./content/big.txt', {
      encoding: 'utf8',
    })
    stream.on('open', () => {
      stream.pipe(res)
    })
    stream.on('error', (err) => {
      console.log(err)
      res.end()
    })
  })
  .listen(5000)
