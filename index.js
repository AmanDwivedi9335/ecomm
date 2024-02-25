const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());


// Import product routes
const productRoutes = require('./src/routes/productRoutes');

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});