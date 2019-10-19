'use strict';

module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
    },
    name: {
        allowNull: false,
        type:DataTypes.STRING(100),
        validate: {
            is: ["^[a-z]+$",'i'],
            notEmpty: false
        }
    },
    code: {
        allowNull: false,
        unique: true,
        type:DataTypes.STRING(2),
        validate: {
            is: ["^[a-z]+$",'i'],
            notEmpty: false
        }
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'countries'
  });
  Country.associate = (models) => {

  };
    
  return Country;
};

