const Usuario = require('../models/Usuario');

module.exports = class UsuarioController {
  
  static cadastraUsuario(req, res) {
    res.render('usuario/cadastro')
  }

  static async usuarioCadastrado(req, res) {

    const gambiarraDoDomingos = req.body.empreendedor == "on" ? true : false;

    const usuario = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      celular: req.body.celular,
      senha: req.body.senha,
      empreendedor: gambiarraDoDomingos
    }

    console.log(usuario.senha)

    await Usuario.create(usuario)

    res.redirect('/usuario')
  };

  static homePage(req, res) {
    res.render('/');
  }

}
