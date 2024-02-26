const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtKey');

//Middleware to verify JWT Token
const verifyToken = (req, res, next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error: 'Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error){
        console.error('Error verifying token', error);
        res.status(401).json({error: 'Unauthorised due to error'});
    }
}

module.exports = {
    verifyToken
}