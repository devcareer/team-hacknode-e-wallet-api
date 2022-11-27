require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB, DB_HOST } = process.env;
// import env variables for test environment
const { TESTDB_USER, TESTDB_PASSWORD, TESTDB, TESTDB_HOST } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    DB_host: DB_HOST,
    dialect: 'postgres',
  },

  test: {
    username: TESTDB_USER,
    password: TESTDB_PASSWORD,
    database: TESTDB,
    DB_host: TESTDB_HOST,
    dialect: 'postgres',
    logging: false,
  },

  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    DB_host: DB_HOST,
    dialect: 'postgres',
  },
};
