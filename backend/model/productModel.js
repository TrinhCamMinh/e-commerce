const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    color: {
        type: Array,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: Array,
        require: true,
        unique: true,
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
        type: Array,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.Schema('Products', productSchema);
