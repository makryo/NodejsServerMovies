const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  nombre: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },

  apellido: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  identificacion: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    timestamps: true
  },
  telefono: {
    type: Number,
    require: true,
    trim: true,
    lowercase: true,
    timestamps: true
  },
  metodoPag: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    timestamps: true
  },
  pelicula: {
    Nombre_peli: String,
    NoSala: Number,
    NoButaca: Number,
    Precio: Number,
    Horario: String,
    Total: Number,
  },
  
});

const model = mongoose.model("usuarios", userSchema);

module.exports = model;