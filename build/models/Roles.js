"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var RolSchema = new Schema({
  rol: {
    type: String,
    required: true
  },
  Description: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model('Roles', RolSchema);