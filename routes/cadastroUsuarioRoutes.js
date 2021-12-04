const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.get('/cadastro', UsuarioController.cadastraUsuario);

module.exports = router;
