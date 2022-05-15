import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

//Esquema de la tabla
const EmployeeSchema = new Schema({
    name: {type: String, required: true, unique: true},
    fechaAlta: {type: Date, default: Date.now, required: true},
    activo: {type: Boolean},
    tlfFijo: {type: Number},
    tlfMovil: {type: Number},    
    email: {type: String, required: true, unique: true},
    imagePath: {type: String},
    pwd: {type: String},
    area: [{ref:"Area", type: Schema.Types.ObjectId}],
    roles:[
        {
            ref:"Roles",
            type: Schema.Types.ObjectId,
        },
    ],
}, {
    timestamps: true, 
    versionKey: false
});

//Encriptado de pass
EmployeeSchema.statics.encryptPassword = async (pwd) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pwd, salt);
}

EmployeeSchema.statics.compararPassword = async (pwd, receivedPassword) => {
    return await bcrypt.compare(pwd, receivedPassword);
}

export default model('Empleado', EmployeeSchema);