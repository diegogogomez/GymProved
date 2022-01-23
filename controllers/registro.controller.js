
const KindOfDoc = require('../models/kindOfDoc')
const users = require('../models/user.model')

const documentoExiste = async (req, res) => {

    let { id, numDoc } = req.query;
    let numDocumento = Number(numDoc)
    let tipoDocumento = Number(id)

    const esperar = setTimeout( () => {
        console.log('Espera terminada')
    }, 2000);

    const kindOfDoc = await users.findOne({numberDoc: numDocumento, typeOfDoc: tipoDocumento});


    if( !( numDocumento < 2000000000 && numDocumento > 0 && tipoDocumento < 6) ) {
        return res.status(400).json({success: false, codigo: 12, msg: 'Número de documento invalido'})
    }

    if(kindOfDoc) {
        console.log({kindOfDoc})
        return res.status(200).json({ success: true, codigo: 10, msg: 'El número de documento ingresado ya existe en nuestra base de datos.' })
    }

    return res.status(200).json({ success: true, codigo: 11, msg: 'Documento de registro valido.' })
}


let tiposDocumento = [  {nombre: 'Cédula de ciudadanía', codigo: 1},
    {nombre: 'Cédula de extranjería', codigo: 2},
    {nombre: 'Número de identidad', codigo: 3},
    {nombre: 'Número de licencia', codigo: 4},
    {nombre: 'Registro civil', codigo: 5}];

const getKindOfDocs = async (req, res) => {
    const kindOfDoc = await KindOfDoc.find().lean()
    res.json(kindOfDoc);
}

module.exports = {documentoExiste, getKindOfDocs}
