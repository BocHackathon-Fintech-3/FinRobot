'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      referenceNo: {
          allowNull: false,
          type: Sequelize.STRING(20)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      totalAmount: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },
      estimationRent: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
    
};
