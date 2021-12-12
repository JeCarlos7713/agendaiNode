const router = require('express').Router();

const UsuarioController = require('../controllers/UsuarioController');

router.post('/cadastro', UsuarioController.cadastro);
router.post('/login', UsuarioController.login);
router.get('/checkuser', UsuarioController.checkUser);

// router.post('/register', UsuarioController.register);

// const UsuarioController = require('../controllers/UsuarioController');

// router.get('/cadastro', UsuarioController.pageCadastro);
// router.get('/cadastro', UsuarioController.cadastraUsuario);
// router.post('/cadastro', UsuarioController.cadastraUsuarioPost);

module.exports = router;
