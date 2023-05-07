const express = require("express")
const productRouter = express.Router()
const ProductModel = require("../models/productModel")

require("dotenv").config();

productRouter.get("/", async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(201).send(products)
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

productRouter.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        const product = await ProductModel.find({ _id: id });
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

productRouter.post("/", async (req, res) => {
    try {
        const product = new ProductModel(req.body);
        await product.save();
        res.status(201).send({ msg: "New Product Added", product })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

productRouter.patch("/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndUpdate({ _id: id }, payload)
        res.status(201).send({ msg: "Product Updated" })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

productRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ "msg": "Product has been Deleted" })
    } catch (e) {
        res.send({ msg: e.message })
    }
})

module.exports = productRouter

