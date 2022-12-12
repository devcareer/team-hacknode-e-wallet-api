module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('wallets', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        user_id: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        status: {
            type: Sequelize.ENUM('Active', 'Inactive'),
            allowNull: false,
          },
        balance: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
    });
  },
   
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('wallets');
    },
};