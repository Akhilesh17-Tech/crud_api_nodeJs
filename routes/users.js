const express = require('express');

const router = express.Router();

// importing controller

const usersController = require('../controllers/users_controller');
router.get('/allUsers', usersController.getAllUsers);
router.post('/createUser', usersController.createUser);
router.get('/getUser/:id', usersController.getUserDetails);
router.delete('/deleteUser/:id', usersController.deleteUser);
router.patch('/updateUser/:id', usersController.updateUser);

module.exports = router;
