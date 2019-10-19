'use strict';

var secret = process.env.NODE_ENV === 'production' ? process.env.PASSPORTSECRET : 'secret'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
    email: {
        allowNull: false,
        type: DataTypes.STRING(60),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    verified: {
        allowNull: false,
        type: DataTypes.TINYINT(1),
        defaultValue: 1
    },
    verifiedCode: {
        allowNull: false,
        type: DataTypes.INTEGER(6),
        defaultValue: Math.floor(Math.random() * 900000) + 100000
    }  
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'users'
  });
    
  User.associate = (models) => {

  };
    
  return User;
};

