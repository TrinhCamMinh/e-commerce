const getAllProducts = (req, res) => {
    res.json('get all products');
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