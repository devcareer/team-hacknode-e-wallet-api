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
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('Active', 'Inactive'),
          allowNull: false,
        },
        balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      },    
    );
  
    return Wallet;
  };