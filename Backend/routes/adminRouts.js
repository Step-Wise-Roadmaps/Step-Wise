const express = require('express');
const router = express.Router();

// ---
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin');
const adminController = require('../controller/adminController');

// get users
router.get('/users', auth, adminAuth, adminController.getAllUsers);

// get Cources
router.get('/course', auth, adminAuth, adminController.getCourses);

// get lessons
router.get('/getLesson', auth, adminAuth, adminController.getLessons);

// delete
router.delete('/users/:id', auth, adminAuth, adminController.deleteUser);

// add courses
router.post('/add-course', auth, adminAuth, adminController.addCourse);

// add lessons
router.post('/add-lessons', auth, adminAuth, adminController.addLessons);

module.exports = router;
