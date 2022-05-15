"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.signin = void 0;

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Roles = _interopRequireDefault(require("../models/Roles"));

var _Areas = _interopRequireDefault(require("../models/Areas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, pwd, tlfFijo, roles, area, emp, foundRoles, role, foundAreas, areas, savedEmployee, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, pwd = _req$body.pwd, tlfFijo = _req$body.tlfFijo, roles = _req$body.roles, area = _req$body.area; //const userFound = await empleado.find({email});

            _context.t0 = _Empleado["default"];
            _context.t1 = name;
            _context.t2 = email;
            _context.next = 6;
            return _Empleado["default"].encryptPassword(pwd);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = {
              name: _context.t1,
              email: _context.t2,
              pwd: _context.t3
            };
            emp = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 17;
              break;
            }

            _context.next = 12;
            return _Roles["default"].find({
              rol: {
                $in: req.body.roles
              }
            });

          case 12:
            foundRoles = _context.sent;
            emp.roles = foundRoles.map(function (roles) {
              return roles._id;
            });
            console.log(emp.roles);
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return _Roles["default"].findOne({
              name: 'user'
            });

          case 19:
            role = _context.sent;
            emp.roles = [role._id];

          case 21:
            if (!area) {
              _context.next = 28;
              break;
            }

            _context.next = 24;
            return _Areas["default"].find({
              name: {
                $in: area
              }
            });

          case 24:
            foundAreas = _context.sent;
            emp.area = foundAreas.map(function (area) {
              return area._id;
            });
            _context.next = 32;
            break;

          case 28:
            _context.next = 30;
            return _Areas["default"].findOne({
              name: 'Sistemas'
            });

          case 30:
            areas = _context.sent;
            emp.area = [areas._id];

          case 32:
            _context.next = 34;
            return emp.save();

          case 34:
            savedEmployee = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: savedEmployee._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24 horas

            });
            res.status(200).json({
              token: token
            });

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, pwdOk, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Empleado["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Usuario no encontrado"
            }));

          case 5:
            _context2.next = 7;
            return _Empleado["default"].compararPassword(req.body.pwd, userFound.pwd);

          case 7:
            pwdOk = _context2.sent;

            if (pwdOk) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              token: null,
              message: "Password incorrecto"
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;