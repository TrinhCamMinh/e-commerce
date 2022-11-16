const Product = require('../model/productModel');

const getAllProducts = async (req, res) => {
    try {
        const data = await Product.viewProduct();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductByQuery = async (req, res) => {
    try {
        const { query } = req.params;
        const data = await Product.getSpecificProduct(query);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAmountOfProductPerPage = async (req, res) => {
    try {
        const page = req.query.page || 0;
        const productPerPage = 3;
        const data = await Product.getAmountOfProduct(page, productPerPage);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductByQuery,
    getAmountOfProductPerPage,
};
