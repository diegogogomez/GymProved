
console.log('hola1')

const { readFile } = require('fs')

const getText = (path) => {
    return new Promise( (resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}


getText('./contenido/first.txt')
    .then( retorno => {
        console.log({retorno})
    })
    .catch( err => {
        console.log('Error en el retorno de la promesa del retorno de la lectura')
    })

getText('./contenido/second.txt')
    .then( retorno => {
        console.log({retorno})
    })
    .catch( err => {
        console.log('Error en el retorno de la promesa del retorno de la lectura')
    })
