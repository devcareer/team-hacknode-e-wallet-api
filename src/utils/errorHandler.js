const logger = require('./logger');

// error handler middleware that catches all errors
const errorHandler = (err, req, res, next) => {
  let { statusCode } = err;
  const { message, stack } = err;

  // displays the error and the location it occurred
  logger.error(message);
  logger.info(stack);

  // if no status code has been set, set to 500 as default
  if (!statusCode) statusCode = 500;

  // return error message to user
  res.status(statusCode).json({
    status: 'error',
    message: message || 'An error occurred with the server',
  });
  next();
};

module.exports = errorHandler;
