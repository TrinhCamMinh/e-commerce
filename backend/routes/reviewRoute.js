const express = require('express');
const router = express.Router();
const { getAllReviews, getSpecificReview, createNewReview } = require('../controller/reviewController');

router.get('/:id', getSpecificReview);

router.get('/', getAllReviews);

router.post('/', createNewReview);

module.exports = router;
