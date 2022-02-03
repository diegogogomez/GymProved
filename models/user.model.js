const { Schema, model } = require('mongoose')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const usersSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: "El correo electrónico es obligatorio.",
            validate: [ validateEmail, 'invalid email' ]
        },
        dateBorn: {
            type: Date,
            required: ["El numero de documento es obligatorio"]
        },
        typeOfDoc: {
            type: Number,
            required: true
        },
        kindOfDoc2: {
            type: Schema.Types.ObjectId,
            ref: 'TypeOfDoc2'
        },
        numberDocument: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const typeOfDoc2Schema = new Schema({
    _id: Schema.Types.ObjectId,
    idDoc: {
        type: Number
    },
    name: String,
    active: Boolean
},
    {
        timestamps: false,
        versionKey: false
    })

const TypeOfDoc2 = model('TypeOfDoc2', typeOfDoc2Schema)
const User = model('User', usersSchema)

// module.exports = model('user', usersSchema)
module.exports = { User, TypeOfDoc2 }
