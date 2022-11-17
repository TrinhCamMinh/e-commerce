const Cart = require('../model/cartModel');

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Cart.getCart(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const { userID, productName, productID, productImage, productPrice } = req.body;
        const data = await Cart.postCart(userID, productName, productID, productImage, productPrice);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getOrder,
    createOrder,
};
