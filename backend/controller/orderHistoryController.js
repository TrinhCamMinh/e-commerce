const orderHistory = require('../model/orderHistoryModel');

const getHistoryForUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await orderHistory.getHistory(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createHistoryForUser = async (req, res) => {
    try {
        const { userID, productName, productColor, productSize, productPrice } = req.body;
        const data = await orderHistory.createHistory(userID, productName, productColor, productSize, productPrice);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getHistoryForUser,
    createHistoryForUser,
};
