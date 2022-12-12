const {VERIFIED, UNVERIFIED} = require(`../../src/utils/constants.js`);

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('wallets', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        user_id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            references: {
              model: 'users',
              key: 'id',
            }
          },
        status: {
            type: Sequelize.ENUM(VERIFIED, UNVERIFIED),
            allowNull: false,
          },
        balance: {
            type: Sequelize.DECIMAL(10,2).UNSIGNED,
            allowNull: false,
        },
    });
  },
   
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('wallets');
    },
};