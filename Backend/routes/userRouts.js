const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

router.post('/register', userController.registerUsers); 

router.post('/login', userController.loginUsers);

router.get('/getMe', auth, userController.getMe);

router.get('/getUsers', userController.getUsers);

router.post('forgotPassword', userController.forgotPassword);

router.post('/reset-password/:token', userController.resetPassword);

module.exports = router;