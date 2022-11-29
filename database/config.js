/* eslint-disable no-console */
const { Sequelize } = require('sequelize');
const { development } = require('./database');
const dbTable = require('../src/models')

// new database connection using sequelize client
const sequelize = new Sequelize(development);

// logger
const { logger } = require('../src/assests/logger');

// database connection using configuration in db.config.js
const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    logger.info('successfully connected to database');
  } catch (error) {
    logger.error('unable to connect to database');
  }
};

databaseConnection();

// Sync all models with the Database
const syncDB = (db) => {
  // force: do not drop the table if it already exist but add to it
  db.sequelize.sync({force: false}).then(() => {
    logger.info('Database & tables(s) synced successfully');
  }).catch(err => {
    logger.error('Unable to sync with the Database', err);
  })
}

syncDB(dbTable);

// export the instance of the connection
module.exports = sequelize;
