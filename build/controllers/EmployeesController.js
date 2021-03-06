"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEmployeeByID = exports.getEmployees = exports.getEmployeeById = exports.deleteEmployeeByID = exports.createEmployee = void 0;

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createEmployee = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, fechaAlta, activo, tlfFijo, tlfMovil, email, pwd, nuevoEm, empleadoRecibido;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            _req$body = req.body, name = _req$body.name, fechaAlta = _req$body.fechaAlta, activo = _req$body.activo, tlfFijo = _req$body.tlfFijo, tlfMovil = _req$body.tlfMovil, email = _req$body.email, pwd = _req$body.pwd;
            /*const imagePath = req.file.filename;*/

            nuevoEm = new _Empleado["default"]({
              name: name,
              fechaAlta: fechaAlta,
              activo: activo,
              tlfFijo: tlfFijo,
              tlfMovil: tlfMovil,
              email: email,
              pwd: pwd
              /*, imagePath*/

            });
            _context.next = 5;
            return nuevoEm.save();

          case 5:
            empleadoRecibido = _context.sent;
            res.status(201).json(empleadoRecibido);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEmployee(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createEmployee = createEmployee;

var getEmployees = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empleados;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Empleado["default"].find();

          case 2:
            empleados = _context2.sent;
            res.status(200).json(empleados);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getEmployees(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getEmployees = getEmployees;

var getEmployeeById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var empleados;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Empleado["default"].findById(req.params.id);

          case 2:
            empleados = _context3.sent;
            res.json(empleados);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getEmployeeById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getEmployeeById = getEmployeeById;

var updateEmployeeByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedEmployee;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Empleado["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            updatedEmployee = _context4.sent;
            res.status(200).json(updatedEmployee);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateEmployeeByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateEmployeeByID = updateEmployeeByID;

var deleteEmployeeByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var deletedEmployee;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Empleado["default"].findByIdAndDelete(req.params.id);

          case 2:
            deletedEmployee = _context5.sent;
            res.status(204).json(deletedEmployee);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteEmployeeByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteEmployeeByID = deleteEmployeeByID;