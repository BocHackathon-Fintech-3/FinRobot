'use strict';

module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
    },
    referenceNo: {
        allowNull: false,
        type: DataTypes.STRING(20)
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(60)
    },
    totalAmount: {
      allowNull: false,
      type: DataTypes.DECIMAL(8,2)
    },
    estimationRent: {
      allowNull: false,
      type: DataTypes.DECIMAL(8,2)
    }
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'properties'
  });
  Property.associate = (models) => {

  };
    
  return Property;
};


