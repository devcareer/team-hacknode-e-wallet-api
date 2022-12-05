/* eslint-disable no-unused-vars */

const { user } = require('pg/lib/defaults');
const { INTEGER } = require('sequelize');

// /** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM('Admin', 'User'),
      allowNull: false,
      defaultValue: 'User',
    },
  });
};

const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
};

module.exports = {
  up,
  down,
};
