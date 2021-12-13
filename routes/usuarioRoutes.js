const router = require('express').Router();

const UsuarioController = require('../controllers/UsuarioController');

// Middleware
const verifyToken = require('../helpers/verifyToken');
const { imageUpload } = require('../helpers/imageUpload');

router.post('/cadastro', UsuarioController.cadastro);
router.post('/login', UsuarioController.login);
router.get('/checkuser', UsuarioController.checkUser);
router.get('/:id', UsuarioController.getUserById);
router.patch(
  '/edit/:id',
  verifyToken,
  imageUpload.single('image'),
  UsuarioController.editUser
);

module.exports = router;
