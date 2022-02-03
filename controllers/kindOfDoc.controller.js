const { TypeOfDoc2 } = require('../models/user.model')

const getKindOfDocs = async (req, res) => {
    const kindOfDoc = await TypeOfDoc2.find()
    res.json(kindOfDoc);
}

const insertKindOfDocs = async (req, res) => {
    try{
        await TypeOfDoc2.insertMany([
            {
                idDoc: 6,
                name: "Licencia de aviacion",
                active: false
            }
        ])
    }catch (err) {
        console.log({err})
    }finally {
        res.json({msg: 'insertado'})
    }
}

module.exports = { getKindOfDocs, insertKindOfDocs }
