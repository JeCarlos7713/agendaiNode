const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

router.get('/cadastro', UsuarioController.cadastraUsuario);
router.post('/cadastro', UsuarioController.usuarioCadastrado);

module.exports = router;
