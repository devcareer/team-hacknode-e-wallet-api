/**
 * @param {object} res - response object from the controller
 * @param {string} code - The http status code to be sent
 * @param {string} message - The message to send to the user
 * @param {object} data - contains the details of the response if any (optional)
 */
const successResponse = (code, message, data, res) => {
  const body = {
    status: 'success',
    message,
    data: data || {},
  };

  res.status(code).json(body);
};

/**
 * @param {object} res - response object from the controller
 * @param {string} code - The http status code to be sent
 * @param {string} message - The error message to send to the user
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
