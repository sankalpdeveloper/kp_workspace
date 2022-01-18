var express = require('express');
var router = express.Router();
const productController = require('../controller/product.controller')

/* GET users listing. */
router.post('/getproduct', productController.getproduct);

router.get('/getall',productController.getallproduct)

module.exports = router; 