const express = require('express')
const Products = require('../Models/ProductSchema')
const router = express.Router()

//get all products
router.get('/getproducts', async (req, res) => {
    try {
        const ProductData = await Products.find()
        res.status(200).json(ProductData)

    } catch (error) {
        res.status(404).json(error)
    }
})

//get one product
router.get('/getproduct/:id', async (req, res) => {

    const id = req.params.id
    try {
        const productData = await Products.findOne({ _id: id })
        res.status(200).json(productData)
    } catch (error) {
        res.status(404).json(error)
    }
})



//add product
router.post('/add-products', async (req, res) => {
    const { name, brand, image, price, description, rating, countInStock } = req.body
    console.log(req.body)
    if (!name || !brand || !image || !price || !description || !rating || !countInStock) {
        res.status(404).send('please fill the data')
    } else {
        try {
            const newProduct = new Products({
                name, brand, image, price, description, rating, countInStock
            })
            await newProduct.save()
            res.status(200).json(newProduct)
            console.log(newProduct)
        } catch (error) {
            res.status(404).json(error)
        }
    }


})

module.exports = router