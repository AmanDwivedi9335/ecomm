const User = require('../models/userModel');
const pool = require('../config/database');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config/jwtKey');
const jwt = require('jsonwebtoken');





const registerUser = async(req, res) =>{
    try{
        const { username, password } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        const result = await User.registerUser(username, hashedPass);
        res.status(200).json(result);
    }catch(error){
        console.error('Error while registering User', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const loginUser = async(req, res) =>{
    try{
        const {username, password} = req.body;
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if(result.rows.length === 0){
            return res.status(401).json({error: 'Username not found!'});
        }
        const user = result.rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({error: 'Invalid Password, Please try again!'});
        }
        const token = jwt.sign({userId: user.id}, JWT_SECRET);
        res.json({token});
    }catch(error){
        console.log('Error while logging in: ', error);
        res.status(500).json({error: 'Internal Server error'});
    }
}

module.exports = {
    registerUser,
    loginUser
}