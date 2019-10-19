'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AutoNumberSchemas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      code: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING(3)
      },
      prefix: {
          allowNull: true,
          type: Sequelize.STRING(5)
      },
      postfix: {
          allowNull: true,
          type: Sequelize.STRING(5)
      },
      format: {
          allowNull: false,
          type: Sequelize.STRING(10)
      },
      seqNo: {
          allowNull: false,
          type: Sequelize.INTEGER(10),
          defaultValue: 0
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AutoNumberSchemas');
  }
};
