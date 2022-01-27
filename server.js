require('dotenv').config();
console.log(process.env.NODE_ENV);
require('./database');

const express = require('express');
const registro = require('./routes/registro')
const cors = require('cors');
var exportado = require('./libreria1')
var morgan = require('morgan')
var morganBody = require('morgan-body');

var app = express();

app.use(express.static('./public'));
app.use(cors());


// Middlewares
morganBody(app);
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/registro', registro)


app.listen(5000, () => {
    console.log('<<<Servidor iniciado en el puerto 5000!>>>')
});

















