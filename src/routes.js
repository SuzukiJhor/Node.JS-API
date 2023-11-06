const express = require('express')
const router = express.Router()

const CarroController = require('./Controllers/CarroController')

router.get('/carros', CarroController.buscarTodos)

module.exports = router;
