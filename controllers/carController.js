const Car = require("../models/carModel");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.registration_number);
    if (car) {
      await car.update(req.body);
      res.json(car);
    } else {
      res.status(404).send("Car not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.registration_number);
    if (car) {
      await car.destroy();
      res.send("Car deleted");
    } else {
      res.status(404).send("Car not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
