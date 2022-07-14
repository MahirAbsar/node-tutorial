const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
  } else {
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err)
      } else {
        const second = result
        writeFile(
          './content/result-async.txt',
          `Result: ${first} ${second}`,
          { flag: 'a' },
          (err, result) => {
            if (err) {
              console.log(err)
            } else {
              console.log(result)
            }
          }
        )
      }
    })
  }
})
