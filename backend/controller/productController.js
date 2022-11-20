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

const getProductByID = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Product.getSpecificProductById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAmountOfProductPerPage = async (req, res) => {
    try {
        const page = req.query.page || 0;
        const productPerPage = 15;
        const data = await Product.getAmountOfProduct(page, productPerPage);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postProduct = async (req, res) => {
    try {
        const image = req.file;
        const {
            name,
            price,
            color,
            brand,
            tag,
            screen,
            OS,
            BackCamera,
            FrontCamera,
            Chip,
            Ram,
            Sim,
            Battery,
            description,
        } = req.body;
        const tags = tag.split(',');
        const configuration = {
            screen,
            OS,
            BackCamera,
            FrontCamera,
            Chip,
            Ram,
            Sim,
            Battery,
        };
        const data = await Product.createProduct(name, price, color, image, brand, tags, configuration, description);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductByQuery,
    getProductByID,
    getAmountOfProductPerPage,
    postProduct,
};
