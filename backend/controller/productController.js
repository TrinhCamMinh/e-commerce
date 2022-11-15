const Product = require('../model/productModel');

const getAllProducts = async (req, res) => {
    try {
        const data = await Product.viewProduct();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductByName = (req, res) => {
    res.json('get specific product by name');
};

const getProductByBrand = (req, res) => {
    res.json('get specific product by brand');
};

module.exports = {
    getAllProducts,
    getProductByName,
    getProductByBrand,
};
