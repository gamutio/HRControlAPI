"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _Employees = _interopRequireDefault(require("./routes/Employees"));

var _login = _interopRequireDefault(require("./routes/login"));

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAreas)();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.set('pkg', _package["default"]);
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name
  });
});
app.use('/api/employee', _Employees["default"]);
app.use('/api/login', _login["default"]);
var _default = app;
exports["default"] = _default;