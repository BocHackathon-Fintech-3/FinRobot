'use strict';
module.exports = (sequelize, DataTypes) => {
    const AutoNumberSchema = sequelize.define('AutoNumberSchema', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
     code: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING(3),
          validate: {
            notEmpty: false
          }
      },
      prefix: {
          allowNull: true,
          type: DataTypes.STRING(5)
      },
      postfix: {
          allowNull: true,
          type: DataTypes.STRING(5)
      },
      format: {
        allowNull: false,
        type: DataTypes.STRING(10),
        validate: {
            notEmpty: false
        }   
      },
      seqNo: {
          allowNull: false,
          type: DataTypes.INTEGER(10),
          defaultValue: 0,
          validate: {
            notEmpty: false
          }   
      }
    }, {
        timestamps: false,
        paranoid: false,
        freezeTableName: true,
        tableName: 'autonumberschemas'
    });
    AutoNumberSchema.associate = (models) => {

    };
      
  return AutoNumberSchema;
};