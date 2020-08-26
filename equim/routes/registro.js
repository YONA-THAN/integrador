const express = require ('express');
const router = express.Router();

const controller= require('../controllers/registroController') //requiero el controlador

router.get('/', controller.registro)

module.exports = router;