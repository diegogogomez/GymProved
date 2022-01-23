const { Schema, model } = require('mongoose')

const kindOfDocSchema = new Schema({
    idDoc: {
        type: Number,
        required: true
    },
    name: String
}, {
    timestamps: true,
    versionKey:false
})

module.exports =model('KindOfDoc', kindOfDocSchema)

