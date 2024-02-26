const Product = require('../models/productsModel');
const pool = require('../config/database');

//controller function to get all products
const getAllProducts = async (req, res) => {
    try {
        const result = await Product.getAllProducts();
        res.json(result);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Oh! Internal server error while getting products' });
    }
};

//controller function to get a single product by ID
const getProductById = async(req, res) =>{
    const productId = req.params.id;
    try{
        const product = await Product.getProductById(productId);
        if(!product){
            return res.status(404).json({error: 'Product not found!'});
        }
        res.json(product);
    } catch (error){
        console.error('Error in fetching the product by ID: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

//controller function to create a product
const createProduct = async(req, res) => {
    const {title, description, price, availability} = req.body;
    try{
        const product = await Product.createProduct(title, description, price, availability);
        res.status(201).json(product);
    }catch(error){
        console.error('Error creating Product: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

//controller function to update product
const updateProduct =  async(req, res) =>{
    const productId = req.params.id;
    const {title, description, price, availability} = req.body;
    try{
        const product = await Product.updateProduct(productId,{ title, description, price, availability});
        if(!product){
            return res.status(404).json({error: 'Product not found'});
        }
        res.status(200).json(product);
    }catch(error){
        console.error('Error while updating product: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

//controller function to delete product by Id
const deleteProduct = async(req, res) => {
    const productId = req.params.id;
    try{
        const product = await Product.deleteProduct(productId);
        if(!product){
            return res.status(404).json({error: 'Product not deleted'});
        }
    }catch(error){
        console.error('Error deleting product: ', error);
        res.status(500).json({error: 'Internal server error!'})
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};