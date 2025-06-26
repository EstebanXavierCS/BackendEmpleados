const expres = require('express');
const empleadoRouter = expres.Router();


//declaramos un objeto de nuestro modelo
const Empleado = require('../models/Empleado');


///agregar un empleado
empleadoRouter.route('/agregar').post((req, res) => {
    Empleado.create(req.body)
    .then((data) =>{
        console.log('Empleado agregado correctamente');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})


//obtener todos los empleados
empleadoRouter.route('/empleados').get((req, res) => {
    Empleado.find()
    .then((data) => {
        console.log('Empleados obtenidos correctamente');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//obtener un empleado por id
empleadoRouter.route('/empleado/:id').get((req, res) => {
    Empleado.findById(req.params.id)
    .then((data) => {
        console.log('Empleado obtenido correctamente');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//actualizar un empleado 
empleadoRouter.route('/actualizar/:id').put((req, res) => {
    Empleado.findByIdAndUpdate(req.params.id,
    { $set: req.body })
    .then((data) => {
        console.log('Empleado actualizado correctamente');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})

//eliminar un empleado
empleadoRouter.route('/eliminar/:id').delete((req, res) => {
    Empleado.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log('Empleado eliminado correctamente');
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
    })
})


module.exports = empleadoRouter;