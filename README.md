# E-Commerce API with Node.js

This project is an E-Commerce API built using Node.js, Express.js, and PostgreSQL. It provides endpoints for managing products, user authentication.

## Features

- RESTful API endpoints for various E-Commerce operations
- User authentication using JSON Web Tokens (JWT)
- Integration with PostgreSQL database for storing product, user.
- Error handling and meaningful error messages

## Requirements

- Node.js
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:

git clone "https://github.com/AmanDwivedi9335/ecomm"

2. Install dependencies:

npm install

3. Set up PostgreSQL database and configure database connection in `config/database.js` file.

4. Start the server:

npm start


## Usage

1. Once the server is running, you can explore the API endpoints using tools like Postman or by integrating them into your frontend application.


2. Use user authentication endpoints (`/login`, `/register`) to obtain a JWT token for accessing protected endpoints.

3. Access protected endpoint by including the JWT token in the Authorization header of your requests.

## API Endpoints

- **GET /api/products**: Retrieve a list of products.
- **GET /api/products/:id**: Retrieve details of a specific product.
- **POST /api/products/**: Add a product.
- **PUT /api/products/:id**: Update the products in database.
- **DELETE /api/products/:id**: Remove a product from the user's cart.
- **POST /register**: Register a new user.
- **POST /login**: Login and obtain a JWT token for authentication.

## Documentation

API documentation is available. Visit `/api-docs` endpoint to explore the documentation interactively.

## Contributors

- Aman Dwivedi (https://github.com/AmanDwivedi9335)

