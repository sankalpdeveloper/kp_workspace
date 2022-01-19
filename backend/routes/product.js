var express = require('express');
var router = express.Router();
const productController = require('../controller/product.controller')

/* GET users listing. */
router.post('/getproduct', productController.getproduct);
router.post('/addproduct', productController.insertproduct);
router.get('/getall',productController.getallproduct)

module.exports = router; 