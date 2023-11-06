const express = require('express')
const router = express.Router()

const CarroController = require('./Controllers/CarroController')

router.get('/carros', CarroController.buscarTodos)
router.get('/carro/:codigo', CarroController.buscar)
router.post('/carro', CarroController.inserir)
router.put('/carro/:codigo', CarroController.alterar)

module.exports = router;
