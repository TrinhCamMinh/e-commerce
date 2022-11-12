const express = require('express');
const router = express.Router();
const { getHistory, createHistory } = require('../controller/historyController');

router.get('/:id', getHistory);

router.post('/', createHistory);

module.exports = router;
