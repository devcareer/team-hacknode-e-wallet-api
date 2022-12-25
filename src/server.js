require('dotenv').config();
const express = require('express');
const router = require('./routes/index');

require('../database/config');

// middlewares
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();
app.use(express.json());

app.use('/api/v1/', router);

// universal error handler
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
