const logger = require('./logger');

// error handler middleware that catches all errors
const errorHandler = (err, req, res, next) => {
  const { statusCode } = err;
  const { message, stack } = err;

  // displays the error and the location it occurred
  logger.error(message);
  logger.info(stack);

  // return error message to user
  res.status(statusCode || 500).json({
    status: 'error',
    message: message || 'An error occurred with the server',
  });
  next();
};

module.exports = errorHandler;
