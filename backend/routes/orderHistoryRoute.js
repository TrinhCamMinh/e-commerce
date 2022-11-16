const express = require('express');
const router = express.Router();
const { getHistoryForUser, createHistoryForUser } = require('../controller/orderHistoryController');

router.get('/:id', getHistoryForUser);
router.post('/', createHistoryForUser);

module.exports = router;
