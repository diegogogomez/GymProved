const { createReadStream } = require('fs')

const stream = createReadStream('./contenido/big.txt');

stream.on('data', (result) => {
    console.log(result)
})












