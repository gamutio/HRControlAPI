const {Schema, model} = require('mongoose');

const RolesUserSchema = new Schema({
    idUser: {ref:"Empleado", type: Schema.Types.ObjectId},
    idRol: {ref:"Roles", type: Schema.Types.ObjectId},
    activo: {type: Boolean}
}, {
    timestamps: true, 
    versionKey: false
});

module.exports = model('RolesUser', RolesUserSchema);