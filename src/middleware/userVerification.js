const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verify = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(403).send({ message: 'Token not found' });
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ message: 'Invalid token' });
  }
  return next();
};

module.exports = { verify };
