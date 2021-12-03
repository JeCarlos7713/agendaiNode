const { DataTypes } =  require('sequelize');
const db = require('../db/conn');

const Usuario = db.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    required: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    primaryKey: true,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    required: true,
    primaryKey: true,
  },
  celular: {
    type: DataTypes.BIGINT(14),
    allowNull: false,
    required: true,
    primaryKey: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    primaryKey: true,
  },
  empreendedor: {
    type: DataTypes.BOOLEAN,
  }
});

module.exports = Usuario;
