const express = require('express');
const router = express.Router();
const { getUser, signup, login } = require('../controller/userController');

router.get('/:id', getUser);

router.post('/signup', signup);

router.post('/login', login);

module.exports = router;
