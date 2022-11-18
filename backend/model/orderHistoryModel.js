const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderHistorySchema = new Schema({
    userID: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: Array,
        require: true,
    },
    configuration: {
        type: Array,
        require: true,
    },
});

//* [GET]: get a specific order history base on user id
orderHistorySchema.statics.getHistory = async function (userID) {
    const data = await this.find({ userID });
    return data;
};

//* [POST]: create an order history when user purchase
orderHistorySchema.statics.createHistory = async function (userID, name, image, configuration) {
    const data = await this.create({ userID, name, image, configuration });
    return data;
};

module.exports = mongoose.model('OrderHistory', orderHistorySchema);
