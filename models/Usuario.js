const mongoose = require('../db/conn');
const { Schema } = mongoose;
// const { DataTypes } = require('sequelize');
// const db = require('../db/conn');

const Usuario = mongoose.model(
  'Usuario',
  new Schema(
    {
      nome: { type: String, require: true },
      sobrenome: { type: String, require: true },
      email: { type: String, require: true },
      celular: { type: Number, require: true },
      senha: { type: String, require: true },
      confirmarSenha: { type: String, require: true },
      empreendedor: { type: Boolean }
    },
    { timestamps: true }
  )
);

module.exports = Usuario;

// const Usuario = db.define('Usuario', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     required: true,
//     primaryKey: true
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     required: true
//   },
//   sobrenome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     required: true
//   },
//   email: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//     required: true
//   },
//   celular: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     required: true
//   },
//   senha: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     required: true
//   },
//   confirmarSenha: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     required: true
//   },
//   empreendedor: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     required: false
//   }
// });
