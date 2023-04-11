const Product = require('../models/Product'); 

module.exports = class ProducController {
    static showProducts( req , res ){
        res.render('products/all');
    }

    static createProduct( req, res ){
        res.render('products/create'); 
    }

     static async createProductPost (req, res){

     const { name , price , description } = req.body;

     const product = {
           name,
           price,
           description
     } 
      
       try {
        
        await Product.create(product); 
         
        console.log('dado enserido com suceso no mongo db');

        res.redirect('/products')

       } catch (error) {
        
        console.log('error',error);
 
       }

    }
}
