require('dotenv').config();
const express = require('express');
const router = require('./routes/index');

const logger = require('./utils/logger');

require('../database/config');

const app = express();
app.use(express.json());

app.use('/api/v1/', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
