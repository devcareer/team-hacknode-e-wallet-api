/* eslint-disable no-console */
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { development, test, production } = require('./database');

const { NODE_ENV } = process.env;

let sequelize;

// new database connection using sequelize client
if (NODE_ENV === 'development') {
  sequelize = new Sequelize(development);
} else if (NODE_ENV === 'test') {
  sequelize = new Sequelize(test);
} else {
  sequelize = new Sequelize(production);
}

// logger
const logger = require('../src/utils/logger');

// database connection using configuration in db.config.js
const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    logger.info('successfully connected to database');
  } catch (error) {
    logger.error('unable to connect to database');
    logger.info(error);
  }
};

databaseConnection();

// export the instance of the connection
module.exports = sequelize;
