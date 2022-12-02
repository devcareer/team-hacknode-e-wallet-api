const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();
const secretKey = process.env.JWT_KEY;
/**
 *
 */
export default class jwtHelper {
  /**
   * @param {object} id - The user id  to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async generateacessToken(userid, secret = secretKey) {
    const token = jwt.sign(userid, secret, { expiresIn: '1h' });
    return token;
  }

  /**
   * @param {object} id - The user id to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async refreshToken(userid, secret = secretKey) {
    const token = jwt.sign(userid, secret, { expiresIn: '1d' });
    return token;
  }
}
