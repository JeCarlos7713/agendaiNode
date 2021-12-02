const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('agendai', 'gbr', 'Gbr1234!', {
  host: 'localhost',
  dialect: 'mysql'
});

try{

  sequelize.authenticate()
  console.log('Conexao com o banco de dados realizada com sucesso!');

} catch(error){
  console.log(`Falha na conexao com o banco de dados: ${error}`);
}

module.exports = sequelize;