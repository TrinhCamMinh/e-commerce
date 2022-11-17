const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductByQuery,
    getProductByID,
    getAmountOfProductPerPage,
} = require('../controller/productController');

router.get('/pagination', getAmountOfProductPerPage);
router.get('/id/:id', getProductByID);
router.get('/query/:query', getProductByQuery);
router.get('/', getAllProducts);

module.exports = router;
