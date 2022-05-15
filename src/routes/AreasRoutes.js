const { Router } = require('express');
const router = Router();

const Areas = require('../models/Areas');

//Devolvemos los datos de las areas
router.get('/', async(req, res) => {
    const areas = await Areas.find();
    res.json(areas);
    
});

//Guardamos area
router.post('/', async(req, res) => {
    const {area, Description} = req.body;
    const areas = new Areas({area, Description});
    await areas.save();
    res.json({message: "Area guardado"});
});

//Eliminamos area
router.delete('/:id', async(req, res) => {
    await Areas.findByIdAndDelete(req.params.id);
    res.json({message: "Area eliminado"});
});

module.exports = router;