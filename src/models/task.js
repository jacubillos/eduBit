const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    correo: String,
    direccion: String,
    telefono: Number
});

module.exports = mongoose.model('tasks', TaskSchema);