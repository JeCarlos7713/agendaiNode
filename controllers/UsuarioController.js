const Usuario = require('../models/Usuario');

module.exports = class UsuarioController {
  static cadastraUsuario(req, res) {
    res.render('usuario/cadastro');
  }

  static async usuarioCadastrado(req, res) {
    const { nome, sobrenome, email, celular, senha, empreendedor } = req.body;

    const validateEmpreendedor = empreendedor == 'on' ? true : false;

    const usuarioCriado = {
      nome,
      sobrenome,
      email,
      celular,
      senha,
      empreendedor: validateEmpreendedor
    };

    let userFind = await Usuario.findOne({ where: { email: req.body.email } });

    if (userFind === null) {
      console.log('Usuario nao existe');

      await Usuario.create(usuarioCriado);
    } else {
      console.log(`Usuario ja cadastrado com o email! ${req.body.email}`);
    }

    res.redirect('/');
  }
};
