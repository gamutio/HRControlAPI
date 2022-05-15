"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb+srv://HRControlAdmin:HRControlAdmin@cluster0.hmtz6.mongodb.net/HRControl?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(function (db) {
  return console.log('Conectado');
})["catch"](function (err) {
  return console.log(err);
});