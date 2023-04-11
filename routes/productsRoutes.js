const express = require('express'); 
const router = express.Router(); 

const ProducController = require('../controllers/ProducController'); 

router.get('/create', ProducController.createProduct);
router.post('/create', ProducController.createProductPost);
router.get('/', ProducController.showProducts);


module.exports = router;


