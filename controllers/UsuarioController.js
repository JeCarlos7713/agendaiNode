const Usuario = require('../models/Usuario');

module.exports = app => {
  app.get('/cadastro', (req, res) => res.send('voce esta aqui'))
};
