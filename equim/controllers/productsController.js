const dbUsers = require('../data/productos.json');
const fs = require('fs');
const path = require('path');


const productsController = {
    products: function (req, res) {
        res.render('productDetail')
    },
    agregar: function (req, res) {
        res.render('productAdd')
    },
    add:function(req,res,next){
        let lastID = 1;
        dbproductos.forEach(user=>{
            if(user.id > lastID){
                lastID = user.id
            }
        })
        let newProducto = {
            id:lastID + 1,
            name:req.body.firstName,
            description:req.body.description,
            imagen:req.body.imagen,
            category:req.body.category,
            price:req.body.price,
        }
        dbproductos.push(newProducto);
        
        fs.writeFileSync(path.join(__dirname,"..","data","products.json"),JSON.stringify(dbproductos),'utf-8')

        res.redirect('/')
}
};

module.exports = productsController;