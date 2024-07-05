const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Car = sequelize.define("Car", {
  registration_number: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Car;
