const express = require('express');
const router = express.Router();
const { getAllProducts, getProductByName, getProductByBrand } = require('../controller/productController');

router.get('/', getAllProducts);
router.get('/name/:name', getProductByName);
router.get('/brand/:brand', getProductByBrand);

module.exports = router;
