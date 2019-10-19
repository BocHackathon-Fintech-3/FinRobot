'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      email: {
        allowNull: false,
        isEmail: true, 
        type: Sequelize.STRING(60)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(100)  
      },    
      verified: {
        allowNull: false,
        type: Sequelize.TINYINT(1),
        defaultValue: 1
      },
      verifiedCode: {
        allowNull: false,
        type: Sequelize.INTEGER(6),
        defaultValue: Math.floor(Math.random() * 900000) + 100000
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
    return queryInterface.dropTable('Users');
  }
    
};
