"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.belongsTo(models.Game, {
        foreignKey: "gameId",
        as: "game",
      });
      Package.hasMany(models.Order, {
        foreignKey: "packageId",
        as: "orders",
      });
    }
  }
  Package.init(
    {
      gameId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      iconUrl: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      supplierCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Package",
    },
  );
  return Package;
};
