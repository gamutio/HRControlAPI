"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var Tarea = require('../models/TareasUsuario'); //Devolvemos los datos de todas las Tareas


router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var iduser, ficha;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            iduser = req.body;
            _context.next = 3;
            return Tarea.find();

          case 3:
            ficha = _context.sent;
            res.json(ficha);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); //Guardamos Tarea

router.post('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, idUser, titulo, description, fechaInicio, fechaFin, Vencido, ficha;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, idUser = _req$body.idUser, titulo = _req$body.titulo, description = _req$body.description, fechaInicio = _req$body.fechaInicio, fechaFin = _req$body.fechaFin, Vencido = _req$body.Vencido;
            ficha = new Tarea({
              idUser: idUser,
              titulo: titulo,
              description: description,
              fechaInicio: fechaInicio,
              fechaFin: fechaFin,
              Vencido: Vencido
            });
            _context2.next = 4;
            return ficha.save();

          case 4:
            res.json({
              message: "Tarea guardada"
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //Eliminamos Tarea

router["delete"]('/', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var idUser, titulo, fechaInicio, params, idUserSelec;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idUser = req.body.idUser;
            titulo = req.body.titulo;
            fechaInicio = req.body.fechaInicio;
            params = {
              idUser: idUser,
              titulo: titulo,
              fechaInicio: fechaInicio
            };
            console.log('Parámetros: ');
            console.log(params);
            _context3.next = 8;
            return Tarea.findOne(params);

          case 8:
            idUserSelec = _context3.sent;
            console.log("Tarea a eliminar: " + idUserSelec);
            _context3.next = 12;
            return Tarea.findByIdAndDelete(idUserSelec.id);

          case 12:
            res.json({
              message: "Tarea del usuario eliminada"
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
module.exports = router;