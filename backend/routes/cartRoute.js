const express = require('express');
const router = express.Router();
const { getOrder, createOrder } = require('../controller/cartController');

router.get('/:id', getOrder);

router.post('/', createOrder);

module.exports = router;
