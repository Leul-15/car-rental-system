const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Car = require("./carModel");
const Customer = require("./customerModel");

const Rental = sequelize.define("Rental", {
  car_id: {
    type: DataTypes.STRING,
    references: {
      model: Car,
      key: "registration_number",
    },
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: "id",
    },
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rental_fee: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    validate: {
      async isAvailable(value) {
        const car = await Car.findByPk(this.car_id);
        if (!car || !car.available) {
          throw new Error("Car is not available.");
        }
      },
    },
  },
});

module.exports = Rental;
