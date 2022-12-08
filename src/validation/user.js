const Joi = require('joi');

const registerValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'co'] } })
      .min(5)
      .max(100)
      .empty()
      .messages({
        'any.required': 'Sorry, email is required',
        'string.empty': 'Sorry, Email cannot be an empty field',
        'string.email': 'Please enter a valid email',
      }),
    password: Joi.string().required().empty().min(5).max(1024).messages({
      'any.required': 'Sorry, password is required',
      'string.empty': 'Sorry, password cannot be an empty field',
      'string.min': 'password should have a minimum length of 5',
    }),
    first_name: Joi.string().required().empty().min(3).max(1024).messages({
      'any.required': 'Sorry, first_name is required',
      'string.empty': 'Sorry, first_name cannot be an empty field',
      'string.min': 'first_name should have a minimum length of 5',
    }),
    last_name: Joi.string().required().empty().min(3).max(1024).messages({
      'any.required': 'Sorry, last_name is required',
      'string.empty': 'Sorry, last_name cannot be an empty field',
      'string.min': 'last_name should have a minimum length of 5',
    }),
    phone_number: Joi.string().required().empty().messages({
      'any.required': 'Sorry, phone_number is required',
      'string.empty': 'Sorry, phone_number cannot be an empty field',
    }),
  })
    .messages({
      'object.unknown': 'You have used an invalid key.',
    })
    .options({ abortEarly: false });
  return schema.validate(user);
};

module.exports = registerValidation;
