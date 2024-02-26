const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const { verifyToken } = require('../middleware/authentication');

//route to get all products
router.get('/', productController.getAllProducts);

//route to get a single product by id
router.get('/:id', productController.getProductById);

//route to create a new product
router.post('/', verifyToken, productController.createProduct);

//route to update a product by id
router.put('/:id',verifyToken, productController.updateProduct);

//router to delete product by ID
router.delete('/:id',verifyToken, productController.deleteProduct);

module.exports = router;

