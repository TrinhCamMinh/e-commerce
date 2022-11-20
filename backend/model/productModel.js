const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        color: {
            type: Array,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        brand: {
            type: String,
            require: true,
        },
        tags: {
            type: Array,
            require: true,
        },
        configuration: {
            type: Object,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

//* [GET]: view all products - admin functionality
productSchema.statics.viewProduct = async function () {
    const data = await this.find({});
    return data;
};

//* [POST]: create a new product - admin functionality
productSchema.statics.createProduct = async function (
    name,
    price,
    color,
    image,
    brand,
    tags,
    configuration,
    description
) {
    if (!name || !price || !color || !image || !brand || !tags || !configuration || !description) {
        throw Error('All filed must be filled');
    }
    const path = `/productImages/${image.filename}`;

    const data = await this.create({ name, price, color, image: path, brand, tags, configuration, description });
    return data;
};

//* [GET]: get a specific product base on name or brand
productSchema.statics.getSpecificProduct = async function (query) {
    if (!query) {
        throw Error('Query must be defined');
    }
    const data = await this.find({ $or: [{ name: query }, { brand: query }, { tags: query }] });
    return data;
};

// * [GET]: get a product base on ID
productSchema.statics.getSpecificProductById = async function (_id) {
    const data = await this.findById({ _id });
    return data;
};

//* [GET]: get a specific amount of products per page (pagination)
productSchema.statics.getAmountOfProduct = async function (page, productPerPage) {
    const data = await this.find({})
        .skip(page * productPerPage)
        .limit(productPerPage);
    return data;
};

module.exports = mongoose.model('Products', productSchema);
