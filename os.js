const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// System uptime seconds
console.log(`The System uptime is ${os.uptime()}`)

// Current Os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOs)
