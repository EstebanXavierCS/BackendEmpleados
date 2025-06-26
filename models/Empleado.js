const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Empleado = new schema({
    nombre: {
        type: String
    },
    departamento: {
        type: String
    },
    email:{
        type: String
    },
    telefono: {
        type: Number
    }
},{
    collection: 'empleados',
});

module.exports = mongoose.model('Empleado', Empleado);