import { Router } from 'express';
import {createRole,getRoleById, getRoles} from "../controllers/RolesController";


const router = Router();

const Rol = require('../models/Roles');

//Devolvemos los datos de los roles
router.get('/', getRoles);

//Guardamos Rol
router.post('/', createRole);

//Buscamos rol
router.get('/:id', getRoleById)

module.exports = router;