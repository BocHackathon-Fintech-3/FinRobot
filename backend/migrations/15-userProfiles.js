'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserProfiles', {
      refennceNo: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      userId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.UUID,
        references: {
            model: 'Users',
            key: 'id'
        }
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(60),
        validate: {
            is: ["^[a-z]+$",'i'],
        }
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(60),
        validate: {
            is: ["^[a-z]+$",'i'],
        }
      },
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.DATE,  
        validate: {
            isDate: true
        }
      },
      countryId: {
        allowNull: true,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.UUID,
        references: {
            model: 'Countries',
            key: 'id'
        }
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(60)
      },
      addressLine1: {
          allowNull: true,
          type: Sequelize.STRING(100)
      },
      addressLine2: {
          allowNull: true,
          type: Sequelize.STRING(100)
      },
      postalCode: {
          allowNull: true,
          type: Sequelize.CHAR(6)
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING(20)
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
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserProfiles');
  },
    
};
