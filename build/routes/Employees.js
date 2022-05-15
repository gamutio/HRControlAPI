"use strict";

var _express = require("express");

var _EmployeesController = require("../controllers/EmployeesController.js");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
//Devolvemos los datos de los empleados
router.get('/', _EmployeesController.getEmployees); //Para utilizar los siguientes métodos el usuario debe estar logueado y ser admin

router.get('/:id',
/*[authJwt.verifyToken, authJwt.isAdmin],*/
_EmployeesController.getEmployeeById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkMailUser], _EmployeesController.createEmployee);
router.put('/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _EmployeesController.updateEmployeeByID);
router["delete"]('/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _EmployeesController.deleteEmployeeByID);
module.exports = router;