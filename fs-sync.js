const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./contenido/first.txt', 'utf-8')
const second = readFileSync('./contenido/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync('./contenido/result-sync.txt', `Este es el resultado del segundo: ${second}`, {flag: 'a'});


