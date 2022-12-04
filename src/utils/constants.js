module.exports = {
  // HTTP status as constants to improve readability of code
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST_ERROR: 400,
  UNAUTHORISED_ERROR: 401,
  FORBIDDEN_ERROR: 403,
  NOT_FOUND_ERROR: 404,
  SERVER_ERROR: 500,

  // constants ENUM values for user verification status
  VERIFIED: 'verified',
  UNVERIFIED: 'unverified',
  PENDING: 'pending',

  // constants ENUM values for transaction type
  DEBIT: 'debit',
  CREDIT: 'credit',

  // constants ENUM values for transaction purpose
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  TRANSFER: 'transfer',

  // ENUM values for transaction status
  TRX_SUCCESS: 'success',
  TRX_FAILED: 'failed',
  TRX_PENDING: 'pending',
};
