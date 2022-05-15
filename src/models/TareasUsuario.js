const {Schema, model} = require('mongoose');

const TareasUserSchema = new Schema({
    idUser: {ref:"Empleado", type: Schema.Types.ObjectId, required: true},
    titulo: {type: String, required: true},
    description: {type: String},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: String},
    Vencido: {type: Boolean}
}, {
    timestamps: true, 
    versionKey: false
});

module.exports = model('TareasUser', TareasUserSchema);