const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        productID: {
            type: String,
            require: true,
        },
        review: {
            type: Object,
            require: true,
        },
    },
    { timestamps: true }
);

//* [GET]: get all reviews
reviewSchema.statics.viewReview = async function () {
    const data = await this.find({});
    return data;
};

// * [GET]: get specific review according to product ID
reviewSchema.statics.getReview = async function (productID) {
    const data = await this.find({ productID });
    return data;
};

//* [POST]: create specific review
reviewSchema.statics.createReview = async function (productID, review) {
    if (!productID || !review) {
        throw Error('All field must be filled');
    }
    const data = await this.create({ productID, review });
    return data;
};

module.exports = mongoose.model('review', reviewSchema);
