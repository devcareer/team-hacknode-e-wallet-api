require('dotenv').config();
const express = require('express');
require('../database/config');

// middlewares
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();

// universal error handler
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
