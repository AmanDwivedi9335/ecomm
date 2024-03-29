const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//router to register user
router.post('/register', userController.registerUser);

//router to login user
router.post('/login', userController.loginUser);

module.exports = router;