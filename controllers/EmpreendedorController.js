const Empreendedor = require('../models/Empreendedor');

module.exports = class EmpreendedorController {
  static createEmpreendedor(req, res) {
    res.render('empreendedor/create')
  }
  
  static showEmpreendedor(req, res) {
    res.render('empreendedor/all')
  }
}
