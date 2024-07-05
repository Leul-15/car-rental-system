const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ReturnCar = sequelize.define("ReturnCar", {
  car_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  days_elapsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fine: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = ReturnCar;
