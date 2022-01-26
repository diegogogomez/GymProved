const { Schema, model } = require('mongoose')

const usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        typeOfDoc: {
            type: Number,
            required: true
        },
        numberDoc: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey:false
    }
)

module.exports =model('user', usersSchema)
