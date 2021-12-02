const { DataTypes } = require('sequelize');
const db = require('../../db/conn');

const Empreendedor = db.define('Empreendedor', {
  empreendedorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    required: true,
  },
  nomeEmpreendedor: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  emailEmpreendedor: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  nomeEmpresa: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  descricaoEmpresa: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
});

module.exports = Empreendedor;