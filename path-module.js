const path = require('path');

console.log(path.sep);

const filePath = path.join('/contenido/', 'subcontenido', 'test2.txt');
console.log(filePath)

const base = path.basename(filePath);
console.log(base)


const absolute = path.resolve(__dirname, 'contenido', 'subcontenido', 'test2.txt');
console.log(absolute)
