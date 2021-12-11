const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Usuario = db.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    required: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    required: true
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  empreendedor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    required: false
  }
});

module.exports = Usuario;
