/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const registerValidation = require('../validation/user');
const User = require('../services/user');
const { successResponse, handleError, errorResponse } = require('../utils/response');

/**
 * @class UserController
 * @description create, verify and log in user
 * @exports UserController
 */
module.exports = class UserController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async createUser(req, res) {
    try {
      const { error } = registerValidation(req.body);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const { email, first_name, last_name, password, phone_number } = req.body;
      const Email = email.toLowerCase();
      const emailExist = await User.emailExist(Email);
      if (emailExist) return errorResponse(res, 409, 'Email already used by another user.');
      const phoneExist = await User.phoneExist(phone_number);
      if (phoneExist) return errorResponse(res, 409, 'Phone already used by another user.');
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email: Email, first_name, last_name, password: hashedPassword, phone_number };
      const createdUser = await User.createUser(newUser);
      return successResponse(res, 200, 'User Created successfully!', createdUser);
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, 'Server error.');
    }
  }
};
