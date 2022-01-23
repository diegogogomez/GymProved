const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return system uptime in seconds
console.log(`El tiempo subido del servidor es: ${ os.uptime() } seconds`)

// method return system version
console.log(`la version del servidor es: ${ os.version() }.`)

const currentUser = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentUser)
