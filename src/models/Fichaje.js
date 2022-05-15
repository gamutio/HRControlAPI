const {Schema, model} = require('mongoose');

const FichajeSchema = new Schema({
    idUser: {ref:"Empleado", type: Schema.Types.ObjectId, required: true},
    fecha: {type: Date, required: true},
    horaInicio: {type: String, required: true},
    horaFin: {type: String},
}, {
    timestamps: true, 
    versionKey: false
});

module.exports = model('Fichaje', FichajeSchema);