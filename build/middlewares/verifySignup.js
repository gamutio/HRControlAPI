"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMailUser = void 0;

var _Empleado = require("../models/Empleado");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkMailUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var email, name;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Empleado.User.findOne({
              email: req.body.email
            });

          case 2:
            email = _context.sent;

            if (!email) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'El mail ya se encuentra en la base de datos'
            }));

          case 5:
            _context.next = 7;
            return _Empleado.User.findOne({
              email: req.body.name
            });

          case 7:
            name = _context.sent;

            if (!name) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'El Nombre ya se encuentra en la base de datos'
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkMailUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkMailUser = checkMailUser;