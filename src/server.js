require('dotenv').config();

const express = require('express');

const { logger } = require('./assests/logger');

// eslint-disable-next-line no-unused-vars
const db = require('../database/config');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
