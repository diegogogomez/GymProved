const { connect } =  require('mongoose')

const conexion = async () => {
    try {
        let db = null;
        if(process.env.NODE_ENV == 'production') {

            // const db = await connect('mongodb://localhost/dbGym')
            db = await connect(process.env.MONGODB_URI_PROD)

        } else if(process.env.NODE_ENV == 'development') {

            // const db = await connect('mongodb://localhost/dbGym')
            db = await connect(process.env.MONGODB_URI_DEV)

        }
        // const db = await connect('mongodb+srv://diego:gomez@cluster0.rhwax.mongodb.net/dbGym?retryWrites=true&w=majority')
        console.log('Nombre de la conexion: ', db.connection.name)
        console.log('conexión exitosa!.')
    } catch (err) {
        db.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
        console.log('Error de conección: ', err.message)
    }
}

conexion()
