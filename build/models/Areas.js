"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var AreaSchema = new Schema({
  area: {
    type: String,
    required: true,
    unique: true
  },
  Description: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model('Area', AreaSchema);