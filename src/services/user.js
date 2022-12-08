/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
const database = require('../models');

/**
 * @class User
 * @description User services
 * @exports User
 */
module.exports = class User {
  /**
   * @param {string} username - The user name
   * @returns {object} - An instance of the Users model class
   */
  static async phoneExist(phone) {
    try {
      const phoneExist = await database.User.findOne({
        where: {
          phone_number: phone,
        },
      });
      return phoneExist;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} email  - The user email
   * @returns {object} - An instance of the Users model class
   */
  static async emailExist(email) {
    try {
      return await database.User.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {object} newUser - The user details
   * @returns {object} - An instance of the Users model class
   */
  static async createUser(newUser) {
    try {
      const createUser = await database.User.create(newUser);

      return createUser;
    } catch (error) {
      throw error;
    }
  }
};
