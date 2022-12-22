const registerService = require('../services/user');
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
      const createdUser = await registerService(req, res);
      return successResponse(res, 200, 'User Created successfully!', createdUser);
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, 'Server error.');
    }
  }
};
// BIG HEAD
