const express = require('express');
const router = express.Router();
const { getUser, signup, login, update } = require('../controller/userController');

router.get('/:id', getUser);

router.post('/signup', signup);

router.post('/login', login);

router.put('/:id', update);

module.exports = router;
