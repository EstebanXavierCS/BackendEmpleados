const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');


//conexion con la BD
mongoose
    //.connect('mongodb://127.0.0.1:27017/empleados')
    //despues de .net/
    .connect('mongodb+srv://xavier:12345@cluster0.oigcrop.mongodb.net/empleados?retryWrites=true&w=majority&appName=Cluster0')
    .then((x)=>{
        console.log(`Conectado a la base de datos: "${x.connections[0].name}"`);     
    })
    .catch((error) => {
        console.error('Error de conexión a la base de datos:', error.reason);
    });

//Configurar servidor web 
const empleadoRutas = require('./routes/empleado.routes');
const app = express();
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false,
    })
)

app.use(cors());
app.use('/api', empleadoRutas);

//Habilitamos el puerto 
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
}
);

//manejador de error 404
app.use((req, res, next) => {
    next(createError(404))
});

//manejador de errores
app.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});