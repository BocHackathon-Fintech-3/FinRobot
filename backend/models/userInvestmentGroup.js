
'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInvestmentGroup = sequelize.define('UserInvestmentGroup', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
    },
    userId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.UUID,
        references: {
            model: 'Users',
            key: 'id'
        }
      },
    referenceNo: {
        allowNull: false,
        type: DataTypes.STRING(10)
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(8,2)
      },    
      amountPercentage: {
        allowNull: false,
        type: DataTypes.DECIMAL(8,2)
      },
      status: {
          allowNull: false,
          type: DataTypes.CHAR(1),
          DataTypes: 'P'
      },
      paymentType: {
        allowNull: false,
        type: DataTypes.CHAR(1)
      },
      purchaseOrderNumber: {
          allowNull: true,
          type: DataTypes.STRING(255)
      },
      hash: {
        allowNull: true,
        type: DataTypes.TEXT
      }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'userinvestmentgroups'
  });
  UserInvestmentGroup.associate = (models) => {

  };
    
  return UserInvestmentGroup;
};

