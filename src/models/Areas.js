const {Schema, model} = require('mongoose');

const AreaSchema = new Schema({
    area: {type: String, required: true, unique: true},
    Description: {type: String}
}, {
    timestamps: true, 
    versionKey: false
});

module.exports = model('Area', AreaSchema);