const {Schema, model} = require('mongoose');

const RolSchema = new Schema({
    rol: {type: String, required: true},
    Description: {type: String}
}, {
    timestamps: true, 
    versionKey: false
});

module.exports = model('Roles', RolSchema);