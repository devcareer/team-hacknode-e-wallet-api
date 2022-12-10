const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();
const secretKey = process.env.JWT_KEY;
/**
 *
 */
export default class jwtHelper {
  /**
   * @param {object} userId - The user id  to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async generateacessToken(userId, secret = secretKey) {
    const token = jwt.sign(userId, secret, { expiresIn: '1h' });
    return token;
  }

  /**
   * @param {object} userId - The user id to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async refreshToken(userId, secret = secretKey) {
    const token = jwt.sign(userId, secret, { expiresIn: '1d' });
    return token;
  }

  // authorization for logged in user
  static async verifyUser(token, secret = secretKey) {
    const user = jwt.verify(token, secret);
    return user;
  }

  // authorization for admin
  static async verifyAdmin(user) {
    if (user.role === 'admin') {
      return true;
    }
    return false;
  }
}
