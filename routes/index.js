const express = require('express');
const router = express.Router();

// users routes
router.use('/users', require('./users'));

module.exports = router;
