/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const { User } = require('../models');
const registerValidation = require('../validation/user');
const { errorResponse } = require('../utils/response');

module.exports = class UserService {
  static async registerService(req, res) {
    const { error } = registerValidation(req.body);
    if (error) {
      return errorResponse(res, 400, error.message);
    }
    const { email, password } = req.body;
    const emailExist = await User.findOne({
      where: {
        email,
      },
    });
    if (emailExist) return errorResponse(res, 404, 'Email exists.');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashedPassword });
    return newUser;
  }
};
