import { Router } from 'express';
import {createEmployee, getEmployeeById, getEmployees, updateEmployeeByID, deleteEmployeeByID} from '../controllers/EmployeesController.js'
const router = Router();

import {authJwt, verifySignup} from '../middlewares'

//Devolvemos los datos de los empleados
router.get('/', getEmployees);

//Para utilizar los siguientes métodos el usuario debe estar logueado y ser admin
router.get('/:id', /*[authJwt.verifyToken, authJwt.isAdmin],*/ getEmployeeById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkMailUser] ,createEmployee);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin],updateEmployeeByID);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin],deleteEmployeeByID);


module.exports = router;