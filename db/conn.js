const { Sequelize } = require('sequelize');
const configDB = require('../config/database');

const sequelize = new Sequelize(configDB);

module.exports = sequelize;
