const { Router } = require('express');
const router = Router();

const RolUser = require('../models/Roles-user');

//Devolvemos listado de usuarios y roles asociados
router.get('/', async(req, res) => {
    const roluser = await RolUser.find();
    res.json(roluser);
    
});

//Asignamos rol  a usuario
router.post('/', async(req, res) => {
    const {idUser, idRol, activo} = req.body;
    const roluser = new RolUser({idUser, idRol, activo});
    await roluser.save();
    res.json({message: "Rol asignado al usuario"});
});

//Eliminamos rol a usuario
router.delete('/:id', async(req, res) => {
    await RolUser.findByIdAndDelete(req.params.id);
    res.json({message: "rol eliminado del usuario"});
});

module.exports = router;