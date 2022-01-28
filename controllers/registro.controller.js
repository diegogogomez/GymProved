
const KindOfDoc = require('../models/kindOfDoc')
const users = require('../models/user.model')

/*
* Helper function, used for detect if user exist and is active in the system
* return an object with two fields, first for indicate if user exist, second for indicate if user is active
* */
const userExist = async (req, res) => {

    let { id, numDoc } = req.query;
    let numDocumento = Number(numDoc);
    let tipoDocumento = Number(id);
    let userInfoReturn = {
        exist: false,
        active: false,
        valid: false,
        msg: ''
    };

    const existKindOfDoc = await KindOfDoc.findOne({ idDoc: tipoDocumento });
    const kindOfDoc = await users.findOne({numberDocument: numDocumento, typeOfDoc: tipoDocumento});

    // console.log("Existen: ", {kindOfDoc, existKindOfDoc});

    if( !( numDocumento < 2000000000 && numDocumento > 1000 && existKindOfDoc) ) {
        userInfoReturn.msg = 'El número o tipo de documento no es valido.'
        return userInfoReturn;
    }

    if(kindOfDoc) {
        // console.log({kindOfDoc})
        return res.status(200).json
            ({ existKindOfDoc,
                success: true,
                codigo: 10,
                msg: 'El número de documento ingresado ya existe en nuestra base de datos.'
            })
    }

    return res.status(200).json({ existKindOfDoc, success: true, codigo: 11, msg: 'Documento de registro valido.' })

    return false;
}


const documentoExiste = async (req, res) => {
    userExist(req, res).then( (respuesta) => {
        if(!respuesta?.valid){
            return res.status(400)
                .json({
                    "respuesta" : respuesta?.valid,
                    success: false,
                    codigo: 12,
                    msg: respuesta?.msg
                })
        }


        /*if(!respuesta.valid) {
            return res.status(400)
                .json({success: false, codigo: 12, msg: 'Número de documento invalido'})
        }*/

        console.log(respuesta);
    })

}

const usuarioNuevo = async (req, res) => {
    try{
        console.log('body', req.body);
        const uNuevo = await users.create(req.body);
        res.status(200).json(req.body);
    }catch (error){
        console.log('Error');
        res.status(400).json(error);
    }
}

const getUsers = async (req, res) => {
    try{
        const usuarios = await users.find({});
        res.status(200).json(usuarios);
    }catch (error){
        console.log(error)
    }
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

module.exports = {documentoExiste, getKindOfDocs, usuarioNuevo, getUsers}
