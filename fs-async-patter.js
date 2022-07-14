const { readFile, writeFile } = require('fs').promises

async function start() {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/fs-async-pattern.txt',
      `Result:${first} ${second}`
    )
  } catch (error) {
    console.log(error)
  }
}

start()
