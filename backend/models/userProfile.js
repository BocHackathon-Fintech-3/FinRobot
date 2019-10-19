'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define('UserProfile', {
        userId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
      firstName: {
          allowNull: false,
          type: DataTypes.STRING(60)
      },
      lastName: {
          allowNull: false,
          type: DataTypes.STRING(60)
      },
      countryId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.UUID,
        references: {
            model: 'Countries',
            key: 'id'
        }
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },
      dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
            isDate: true  
        }
      },
      addressLine1: {
          allowNull: false,
          type: DataTypes.STRING(100)
      },
      addressLine2: {
          allowNull: true,
          type: DataTypes.STRING(100)
      },
      postalCode: {
          allowNull: false,
          type: DataTypes.CHAR(6)
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING(20)
      },
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        tableName: 'userprofiles'
    });
    UserProfile.associate = (models) => {
        UserProfile.belongsTo(models.User);
        UserProfile.belongsTo(models.Country)
    };

  return UserProfile;
};
