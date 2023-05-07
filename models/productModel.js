const mongoose = require("mongoose")

const produtSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: {type: [String]},
})

const ProductModel = mongoose.model("product", produtSchema);
module.exports = ProductModel