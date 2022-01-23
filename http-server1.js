const http = require('http');

const server = http.createServer( (req, res) => {

    if(req.url === '/home') {
        res.end(`<h1>hola</h1>`)
    }

    if(req.url === '/about') {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }

    if(req.url === '/favicon.ico') {
        res.end(`<h1>hola2</h1>`)
    }

    console.log(req.url)

})

server.listen(5000, () => {
    console.log('Server is Listenning on port 5000...')
})
