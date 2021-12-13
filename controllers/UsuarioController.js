const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helpers
const createUserToken = require('../helpers/createUserToken');
const getToken = require('../helpers/getToken');
module.exports = class UsuarioController {
  static async cadastro(req, res) {
    const {
      nome,
      sobrenome,
      email,
      celular,
      senha,
      confirmarSenha,
      empreendedor
    } = req.body;

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

    // Verificando se o usuario existe
    const userExist = await Usuario.findOne({ email: email });

    if (userExist) {
      res.status(422).json({
        message: `Usuario ja cadastrado com este emai, utilize outro!`
      });
      return;
    }

    // Criando uma senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(senha, salt);

    const usuario = new Usuario({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      celular: celular,
      senha: passwordHash,
      empreendedor: empreendedor
    });

    try {
      const newUser = await usuario.save();

      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, senha } = req.body;

    if (!email) {
      res.status(422).json({ message: 'O email e obrigatorio' });
      return;
    }
    if (!senha) {
      res.status(422).json({ message: 'A senha e obrigatoria' });
      return;
    }

    // Verificando se o usuario existe
    const user = await Usuario.findOne({ email: email });

    if (!user) {
      res.status(422).json({
        message: `Nenhum usuario cadastrado com este email`
      });
      return;
    }

    // check if password match with db password
    const checkPassword = await bcrypt.compare(senha, user.senha);

    if (!checkPassword) {
      res.status(422).json({
        message: 'Senha invalida'
      });
      return;
    }

    await createUserToken(user, req, res);
  }

  static async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, 'nossoscret');

      currentUser = await Usuario.findById(decoded.id);

      currentUser.senha = undefined;
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const id = req.params.id;

    const user = await Usuario.findById(id).select('-senha');

    if (!user) {
      res.status(422).json({
        message: 'Usuario invalido'
      });
      return;
    }

    res.status(200).json({ user });
  }
};
