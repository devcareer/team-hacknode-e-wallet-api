const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();
const secretKey = process.env.JWT_KEY;
/**
 *
 */
export default class jwtHelper {
  /**
   * @param {object} payload - The details to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async generateToken(payload, secret = secretKey) {
    const token = await jwt.sign(payload, secret, { expiresIn: '1h' });
    return token;
  }

  /**
   * @param {object} payload - The details to be signed
   * @param {string} secret - The JWT secret key
   * @returns {string} The JWT signed token
   */
  static async refreshToken(payload, secret = secretKey) {
    const token = await jwt.sign(payload, secret, { expiresIn: '10d' });
    return token;
  }
}
