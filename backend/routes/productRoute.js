const express = require('express');
const router = express.Router();
const { getAllProducts, getProductByQuery, getAmountOfProductPerPage } = require('../controller/productController');

router.get('/pagination', getAmountOfProductPerPage);
router.get('/:query', getProductByQuery);
router.get('/', getAllProducts);

module.exports = router;
