"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasOne(models.Transaction, {
        foreignKey: "orderId",
        as: "transaction",
      });
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Order.belongsTo(models.Package, {
        foreignKey: "packageId",
        as: "package",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
      gameUserId: DataTypes.STRING,
      serverId: DataTypes.STRING,
      status: DataTypes.STRING,
      paymentMethod: DataTypes.STRING,
      supplierTransactionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    },
  );
  return Order;
};
