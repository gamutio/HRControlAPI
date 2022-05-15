const { Router } = require('express');
const router = Router();

const Fichaje = require('../models/Fichaje');

//Devolvemos los datos de todos los fichajes
router.get('/', async(req, res) => {
    const ficha = await Fichaje.find();
    res.json(ficha);
    
});

//Guardamos fichaje
router.post('/', async(req, res) => {
    const {idUser, fecha, horaInicio, horaFin} = req.body;
    const ficha = new Fichaje({idUser, fecha, horaInicio, horaFin});
    await ficha.save();
    res.json({message: "Fichaje guardado"});
});


//Eliminamos fichaje
router.delete('/:id', async(req, res) => {
    await Fichaje.findByIdAndDelete(req.params.id);
    res.json({message: "Fichaje del usuario eliminado"});
});

router.patch('/:id-:horaFin', async(req, res) => {
    console.log(req.body.horaFin);
    await Fichaje.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: "Fichaje del usuario actualizado"});
});

module.exports = router;