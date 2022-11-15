const express = require('express');
const router = express.Router();
const { getAllReviews, createNewReview } = require('../controller/reviewController');

router.get('/', getAllReviews);

router.post('/', createNewReview);

module.exports = router;
