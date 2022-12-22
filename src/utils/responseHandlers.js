/**
 * @param {string} code - The http status code to be sent
 * @param {string} message - The message to send to the user
 * @param {object} data - contains the details of the response if any (optional)
 * @param {object} res - response object from the controller
 */
const successResponse = (code, message, res, data = {}) => {
  const body = {
    status: 'success',
    message,
    data,
  };

  res.status(code).json(body);
};

/**
 * @param {string} code - The http status code to be sent
 * @param {string} message - The error message to send to the user
 * @param {object} res - response object from the controller

 */
const errorResponse = (code, message, res) => {
  const body = {
    status: 'error',
    message,
  };

  res.status(code).json(body);
};

module.exports = {
  successResponse,
  errorResponse,
};
