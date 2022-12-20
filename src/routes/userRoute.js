const express = require('express');
const { signin, validateLogin } = require('../controllers/signinController')
const router = express.Router();

router.post('/', validateLogin, signin);

module.exports = router;