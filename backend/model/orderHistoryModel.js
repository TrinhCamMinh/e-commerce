const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderHistorySchema = new Schema({
    userID: {
        type: String,
        require: true,
    },
    productName: {
        type: String,
        require: true,
    },
    productColor: {
        type: String,
        require: true,
    },
    productSize: {
        type: String,
        require: true,
    },
    productPrice: {
        type: Number,
        require: true,
    },
});

//* [GET]: get a specific order history base on user id
orderHistorySchema.statics.getHistory = async function (userID) {
    const data = await this.find({ userID });
    return data;
};

//* [POST]: create an order history when user purchase
orderHistorySchema.statics.createHistory = async function (
    userID,
    productName,
    productColor,
    productSize,
    productPrice
) {
    if (!userID || !productName || !productColor || !productSize || !productPrice) {
        throw Error('All filed must be filled');
    }
    const data = await this.create({ userID, productName, productColor, productSize, productPrice });
    return data;
};

module.exports = mongoose.model('OrderHistory', orderHistorySchema);
