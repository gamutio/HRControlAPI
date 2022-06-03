const { Router } = require('express');
const router = Router();

const Tarea = require('../models/TareasUsuario');

//Devolvemos los datos de todas las Tareas
router.get('/', async(req, res) => {
    //const iduser = req.body;
    const ficha = await Tarea.find();
    res.json(ficha);
    
});

//Guardamos Tarea
router.post('/', async(req, res) => {
    const {idUser, titulo, description, fechaInicio, fechaFin, Vencido} = req.body;
    const ficha = new Tarea({idUser, titulo, description, fechaInicio, fechaFin, Vencido});
    await ficha.save();
    res.json({message: "Tarea guardada"});
});

//Eliminamos Tarea
router.delete('/', async(req, res) => {
    const idUser=req.body.idUser;
    const titulo=req.body.titulo;
    const fechaInicio=req.body.fechaInicio;
    const params = ({idUser, titulo, fechaInicio});
    console.log('Parámetros: ');
    console.log(params);
    const idUserSelec = await Tarea.findOne(params);
    console.log("Tarea a eliminar: " + idUserSelec);
    await Tarea.findByIdAndDelete(idUserSelec.id);
    res.json({message: "Tarea del usuario eliminada"});
});

module.exports = router;