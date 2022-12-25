const Joi = require('joi');

const registerValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string()
      .lowercase()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk', 'co'] } })
      .trim()
      .messages({
        'any.required': 'email is required',
        'string.email': 'Please enter a valid email',
      }),
    password: Joi.string().required().trim().messages({
      'any.required': 'password is required',
    }),
    first_name: Joi.string().required().trim().messages({
      'any.required': 'first_name is required',
    }),
    last_name: Joi.string().required().trim().messages({
      'any.required': 'last_name is required',
    }),
    phone_number: Joi.string().required().trim().min(13).max(13).messages({
      'any.required': 'phone_number is required',
    }),
  })
    .messages({
      'object.unknown': 'You have used an invalid key.',
    })
    .options({ abortEarly: false });
  return schema.validate(user);
};

module.exports = registerValidation;
