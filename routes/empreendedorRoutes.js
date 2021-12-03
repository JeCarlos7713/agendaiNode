const express = require('express');
const router = express.Router();

const EmpreendedorController = require('../controllers/EmpreendedorController');

router.get('/add', EmpreendedorController.createEmpreendedor);
router.get('/', EmpreendedorController.showEmpreendedor);

module.exports = router;
