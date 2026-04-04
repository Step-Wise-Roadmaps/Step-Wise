const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.post('/add-course', adminController.addCourse);

module.exports = router;