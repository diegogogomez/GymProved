require('./database')
const express = require('express');
const registro = require('./routes/registro')
const cors = require('cors');
var exportado = require('./libreria1')
var morgan = require('morgan')

var app = express();

app.use(express.static('./public'));
app.use(cors());


app.use(morgan('dev'))

// Routes
app.use('/api/registro', registro)


app.listen(5000, () => {
    console.log('<<<Servidor iniciado en el puerto 5000!>>>')
});

















