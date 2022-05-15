"use strict";

var _express = require("express");

var _RolesController = require("../controllers/RolesController");

var router = (0, _express.Router)();

var Rol = require('../models/Roles'); //Devolvemos los datos de los roles


router.get('/', _RolesController.getRoles); //Guardamos Rol

router.post('/', _RolesController.createRole); //Buscamos rol

router.get('/:id', _RolesController.getRoleById);
module.exports = router;