'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserInvestmentGroups', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      userId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.UUID,
        references: {
            model: 'Users',
            key: 'id'
        }
      },
      referenceNo: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },    
      amountPercentage: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },
      status: {
          allowNull: false,
          type: Sequelize.CHAR(1),
          defaultValue: 'P'
      },
      paymentType: {
        allowNull: false,
        type: Sequelize.CHAR(1)
      },
      purchaseOrderNumber: {
          allowNull: true,
          type: Sequelize.STRING(255)
      },
      hash: {
        allowNull: true,
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('UserInvestmentGroups');
  }
    
};
