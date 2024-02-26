const User = require('../models/userModel');
const pool = require('../config/database');
const bcrypt = require('bcrypt');

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

module.exports = {
    registerUser
}