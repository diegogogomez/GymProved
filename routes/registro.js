const express = require('express')
const KindOfDoc = require('../models/kindOfDoc')
const router = express.Router();
const {documentoExiste, getKindOfDocs} = require('../controllers/registro.controller');


router.get('/numDocExiste/query', documentoExiste);

router.get('/', (req, res)=> {
    res.send('<h1>hola respuestas</h1>')
})


router.get('/kindOfDocs', getKindOfDocs);

router.post('/insertDoc', async (req, res) => {
    const rtaSaveKindOfDoc = KindOfDoc({idDoc: 10, name: "Pasaporte"})

    try {
        await rtaSaveKindOfDoc.save()
        console.log('guardado')
    } catch (err) {
        console.log({err})
    }
    res.json({msg: "correcto"})
    // const  = await kindOfDocModel.save()
})

module.exports = router
