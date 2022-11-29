require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, TESTDB_USER, TESTDB_PASSWORD, TESTDB_NAME, TESTDB_HOST } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },

  test: {
    username: TESTDB_USER,
    password: TESTDB_PASSWORD,
    database: TESTDB_NAME,
    host: TESTDB_HOST,
    dialect: 'postgres',
    logging: false,
  },

  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
};
