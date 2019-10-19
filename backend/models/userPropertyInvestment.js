'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPropertyInvestment = sequelize.define('UserPropertyInvestment', {
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
    investmentGroupId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.UUID,
        references: {
            model: 'UserInvestmentGroups',
            key: 'id'
        }
      },
    propertyId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.UUID,
        references: {
            model: 'Properties',
            key: 'id'
        }
    },
    amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(8,2)
    },    
    amountPercentage: {
        allowNull: false,
        type: DataTypes.DECIMAL(8,2)
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'userpropertyinvestments'
  });
  UserPropertyInvestment.associate = (models) => {

  };
    
  return UserPropertyInvestment;
};
