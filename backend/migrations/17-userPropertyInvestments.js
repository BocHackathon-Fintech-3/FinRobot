'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserPropertyInvestments', {
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
      investmentGroupId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.UUID,
        references: {
            model: 'UserInvestmentGroups',
            key: 'id'
        }
      },
      propertyId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.UUID,
        references: {
            model: 'Properties',
            key: 'id'
        }
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },    
      amountPercentage: {
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
    return queryInterface.dropTable('UserPropertyInvestments');
  }
    
};
