//definindo campos da tabela USUARIO

const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  nome_usuario: String,
  tipo_usuario:{type:Number, default:1},
  email_usuario: String, 
  telefone: Number,
  cep: Number,
  logradouro: String,
  numero_logra: Number,
  complemento_logra: String,
  bairro: String,
  cidade: String,
  estado: String,
},{
  timestamps: true
});

const usuarios = mongoose.model("Usuarios", DataSchema);
module.exports = usuarios;