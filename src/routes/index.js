const { Router } = require('express');
const userRoutes = require('./user');

const router = new Router();

router.use('/auth', userRoutes);

module.exports = router;
