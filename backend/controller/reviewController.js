const Review = require('../model/reviewModel');

const getAllReviews = async (req, res) => {
    try {
        const data = await Review.viewReview();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createNewReview = async (req, res) => {
    try {
        const { productID, review } = req.body;
        const data = await Review.createReview(productID, review);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllReviews,
    createNewReview,
};
