'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {foreignKey: "authorId"})
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:{msg:'Email must be unique'},
      validate:{
        notEmpty:{msg:'Email is required'},
        notNull:{msg:'Email is required'},
        isEmail:{msg:'Invalid email format'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{msg:'Password is required'},
        notNull:{msg:'Password is required'},
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(instance.password , salt);
    instance.password = hash;
  })
  return User;
};