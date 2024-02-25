const pool = require('../config/database')

const getAllProducts = async() => {
    try{
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    } catch (error){
        console.error('Error fetching products: ', error);
        throw error;
    }
}

const getProductById = async(productId) => {
    try{
        const result = await pool.query('SELECT * FROM PRODUCTS WHERE id = $1', [productId]);
        if(result.rows.length === 0){
            return null; 
        }
        return result.rows;
    }catch(error){
        console.error('Error fetching product by ID: ', error);
        throw error;
    }
};

//function to create new product
const createProduct = async(title, description, price, availability) =>{
    try{
        const result = await pool.query('INSERT INTO products (title, description, price, availability) VALUES ($1, $2, $3, $4) RETURNING *', [title, description, price, availability]);
        return result.rows[0];
    }catch(error){
        console.error('Error creating product: ', error);
        throw error;
    }
};

//function to update product
const updateProduct = async(productId, title, description, price, availability) =>{
    try{
        const result = await pool.query('UPDATE products SET title = $1, description = $2, price = $3, availability = $4 WHERE id = $5 RETURNING *', [title, description, price, availability, productId]);
        if(result.rows.length === 0){
            return null;
        }
        console.log(result.rows);
        return result.rows;
    }catch(error){
        console.error('Error while updating product: ', error);
        throw error;
    }
};

//function to delete product
const deleteProduct = async(productId) =>{
    try{
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *',[productId]);
        if(result.rows.length === 0){
            return null;
        }
        return result.rows[0];
    }catch(error){
        console.error('Error while deleting product by this id', error);
        throw error;
    }
};

module.exports = { 
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};   