const { writeFileSync } = require('fs')

for (let i = 0; i < 100; i++) {
    writeFileSync('./contenido/big.txt', `holamundo ${i}\n`, {flag: 'a'})
}
