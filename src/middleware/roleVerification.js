const roleVerification = (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') {
    return res.status(403).send({ message: 'You do not have permission to do this' });
  }
  return next();
};

module.exports = { roleVerification };
