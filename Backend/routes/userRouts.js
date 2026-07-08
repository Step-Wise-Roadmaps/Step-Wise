const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

router.post('/register', userController.registerUsers); 

router.post('/login', userController.loginUsers);

router.get('/getMe', auth, userController.getMe);

router.get('/getUsers', userController.getUsers);

router.post('/forgotPassword', userController.forgotPassword);

router.post('/resetpassword/:token', userController.resetPassword);

// get lessons
router.get('/getLesson', auth, userController.getLessons);

// get Cources
router.get('/course', auth, userController.getCourses);

router.get('/getLessonsWithCourcesId', auth, userController.getLessonsWithCourcesId);

router.get('/getCoursesLessonsByCourcesId/:id', auth, userController.getCoursesLessonsByCourcesId);

router.post('/complete-lesson', auth, userController.progress);

router.put('/change-profile', auth, userController.changeUserProfile);

router.put('/change-password', auth, userController.changePassword);

module.exports = router;