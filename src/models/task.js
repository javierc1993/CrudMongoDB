//esquema de como va a lucir las tablas de la base de datos.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema= new Schema({
    title: String,
    description: String,
    status:{
        type: Boolean,
        default: false
    }

});
module.exports = mongoose.model('task', TaskSchema);