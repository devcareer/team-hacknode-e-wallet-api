/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const database = require('../models');
const registerValidation = require('../validation/user');
const { errorResponse } = require('../utils/response');

const registerService = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.message });
  }
  const { email, first_name, last_name, password, phone_number } = req.body;
  const Email = email.toLowerCase();
  const emailExist = await await database.User.findOne({
    where: {
      email,
    },
  });
  if (emailExist) return errorResponse(res, 409, 'Email already used by another user.');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email: Email, first_name, last_name, password: hashedPassword, phone_number };
  const createdUser = await await database.User.create(newUser);
  return createdUser;
};

module.exports = registerService;
