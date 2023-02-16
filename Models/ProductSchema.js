const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    countInStock: {
        type: String,
        required: true
    }
})

const Product = new mongoose.model('product', ProductSchema)


module.exports = Product