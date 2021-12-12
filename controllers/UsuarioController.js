const Usuario = require('../models/Usuario');

module.exports = class UsuarioController {
  static cadastraUsuario(req, res) {
    res.render('usuario/cadastro');
  }

  static async usuarioCadastrado(req, res) {
    const {
      nome,
      sobrenome,
      email,
      celular,
      senha,
      confirmarSenha,
      empreendedor
    } = req.body;

    const validateEmpreendedor = empreendedor == 'on' ? true : false;

    const usuarioCriado = {
      nome,
      sobrenome,
      email,
      celular,
      senha,
      confirmarSenha,
      empreendedor: validateEmpreendedor
    };

    // Validacoes
    if (!nome || nome === ' ') {
      res.status(422).json({ message: `O nome e obrigatorio` });
      return;
    }
    if (!sobrenome || sobrenome === ' ') {
      res.status(422).json({ message: `O sobrenome e obrigatorio` });
      return;
    }
    if (!email || email === ' ') {
      res.status(422).json({ message: `O email e obrigatorio` });
      return;
    }
    if (!celular || celular === ' ') {
      res.status(422).json({ message: `O celular e obrigatorio` });
      return;
    }
    if (!senha || senha === ' ') {
      res.status(422).json({ message: `A senha e obrigatoria` });
      return;
    }
    if (senha !== confirmarSenha) {
      res.status(422).json({
        message: `A senha e a confirmacao de senha precisam ser iguais`
      });
      return;
    }

    if (!confirmarSenha || confirmarSenha === ' ') {
      res
        .status(422)
        .json({ message: `A confirmacao de senha e obrigatoria!` });
      return;
    }

    let userFind = await Usuario.findOne({ where: { email: req.body.email } });

    if (userFind) {
      res.status(422).json({
        message: `Este email ja esta cadastrador, por favor use outro email!`
      });
      return;
    }

    await Usuario.create(usuarioCriado);

    res.redirect('/');
  }
};
