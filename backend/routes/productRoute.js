const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadFiles');
const {
    getAllProducts,
    getProductByQuery,
    getProductByID,
    getAmountOfProductPerPage,
    postProduct,
} = require('../controller/productController');

router.get('/pagination', getAmountOfProductPerPage);
router.get('/id/:id', getProductByID);
router.get('/query/:query', getProductByQuery);
router.get('/', getAllProducts);
router.post('/', upload.single('image'), postProduct);

module.exports = router;
