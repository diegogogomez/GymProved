
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


/*getText('./contenido/first.txt')
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
    })*/

console.log('hola2')



const start = async () => {
    try {
        const first = await getText('./contenido/first.txt');
        const second = await getText('./contenido/second.txt');
        console.log({first, second})
    }catch (err) {
        console.log({err})
    }

    console.log('despues del try catcj')
}

start()

console.log('Antes del tryctch')








