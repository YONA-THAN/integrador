var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/',productsController.products);
router.get('/agregarProducto',productsController.agregar);

router.post('/agregarProducto',productsController.add);

module.exports = router;