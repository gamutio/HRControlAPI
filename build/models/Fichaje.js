"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var FichajeSchema = new Schema({
  idUser: {
    ref: "Empleado",
    type: Schema.Types.ObjectId,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  horaInicio: {
    type: String,
    required: true
  },
  horaFin: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model('Fichaje', FichajeSchema);