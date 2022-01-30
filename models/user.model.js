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
        numberDocument: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey:false
    }
)

module.exports = model('user', usersSchema)
