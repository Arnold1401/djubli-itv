"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car, { foreignKey: "carId" });
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  CarComment.init(
    {
      carId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CarComment",
    }
  );
  return CarComment;
};
