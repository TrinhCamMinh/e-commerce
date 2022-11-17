const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        userID: {
            type: String,
            require: true,
        },
        productName: {
            type: String,
            require: true,
        },
        productID: {
            type: String,
            require: true,
        },
        productImage: {
            type: String,
            require: true,
        },
        productPrice: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

cartSchema.statics.getCart = async function (userID) {
    const data = await this.find({ userID });
    return data;
};

cartSchema.statics.postCart = async function (userID, productName, productID, productImage, productPrice) {
    if (!userID || !productName || !productID || !productImage || !productPrice) {
        throw Error('All filed must be filled');
    }
    const data = await this.create({ userID, productName, productID, productImage, productPrice });
    return data;
};

module.exports = mongoose.model('cart', cartSchema);
