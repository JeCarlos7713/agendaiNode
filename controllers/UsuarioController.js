const Usuario = require('../models/Usuario');

module.exports = class UsuarioController {
  static cadastraUsuario(req, res) {
    res.render('cadastro');
  }
};
