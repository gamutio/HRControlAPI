"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isReport = exports.isAdmin = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Empleado = _interopRequireDefault(require("../models/Empleado"));

var _Roles = _interopRequireDefault(require("../models/Roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //recibo el token del usuario
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: 'Usuario no logueado'
            }));

          case 3:
            //compruebo que el token corresponde a un usuario de la bbdd
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            req.userId = decoded.id;
            _context.next = 7;
            return _Empleado["default"].findById(req.userId);

          case 7:
            user = _context.sent;

            if (user) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: 'El usuario no existe'
            }));

          case 10:
            //compruebo que el usuario tiene roles de administración
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Empleado["default"].findById(req.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Roles["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context2.sent;
            console.log('tiene estos roles: ' + roles);
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context2.next = 17;
              break;
            }

            console.log('bucle for num: ' + i);

            if (!(roles[i].rol === 'admin')) {
              _context2.next = 14;
              break;
            }

            console.log('tiene admin');
            next();
            return _context2.abrupt("return");

          case 14:
            i++;
            _context2.next = 8;
            break;

          case 17:
            res.status(403).json({
              message: 'El usuario no tiene permisos'
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isReport = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Empleado["default"].findById(req.userId);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return _Roles["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context3.sent;
            console.log('tiene estos roles: ' + roles);
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context3.next = 17;
              break;
            }

            console.log('bucle for num: ' + i);

            if (!(roles[i].rol === 'reportes')) {
              _context3.next = 14;
              break;
            }

            console.log('tiene reportes');
            next();
            return _context3.abrupt("return");

          case 14:
            i++;
            _context3.next = 8;
            break;

          case 17:
            res.status(403).json({
              message: 'El usuario no tiene permisos'
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isReport(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isReport = isReport;