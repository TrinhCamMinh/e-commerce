const express = require('express');
const router = express.Router();
const { getAllProducts, getProductByQuery, getAmountOfProductPerPage } = require('../controller/productController');

router.get('/', getAllProducts);
router.get('/:query', getProductByQuery);
router.get('/pagination', getAmountOfProductPerPage);

module.exports = router;
