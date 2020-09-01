var express =require('express');
var router = express.Router();

 const carritoController= require('../controllers/carritoControllers')

router.get('/carrito',carritoController.carrito)
    

    


module.exports=router;