const {VERIFIED, UNVERIFIED} = require(`../../src/utils/constants.js`);

module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define(
      'Wallet',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          unique: true,
            references: {
              model: 'users',
              key: 'id',
        },
        status: {
          type: DataTypes.ENUM(VERIFIED, UNVERIFIED),
          allowNull: false,
        },
        balance: {
          type: DataTypes.DECIMAL(10,2).UNSIGNED,
          allowNull: false,
        },
      },    
    );
  
    return Wallet;
  };