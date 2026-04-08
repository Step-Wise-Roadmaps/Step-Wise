const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

router.get('/getMe', auth, userController.getMe);

module.exports = router;