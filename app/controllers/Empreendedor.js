const Empreendedor = require('../models/Empreendedor');

module.exports = class EmpreendedorController {
  static criaEmpreendedor(req, res) {
    res.render('empreendedor/create')
  }
}