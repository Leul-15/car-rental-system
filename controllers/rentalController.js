const Rental = require("../models/rentalModel");
const Car = require("../models/carModel");
const Customer = require("../models/customerModel");

exports.getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.findAll();
    res.json(rentals);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createRental = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.body.customer_id);
    if (!customer) {
      return res.status(400).send("Customer not found");
    }

    const car = await Car.findByPk(req.body.car_id);
    if (!car) {
      return res.status(400).send("Car not found");
    }

    if (car.available) {
      const rental = await Rental.create(req.body);
      await car.update({ available: false });
      res.status(201).json(rental);
    } else {
      res.status(400).send("Car not available");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateRental = async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.id);
    if (rental) {
      await rental.update(req.body);
      res.json(rental);
    } else {
      res.status(404).send("Rental not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteRental = async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.id);
    if (rental) {
      const car = await Car.findByPk(rental.car_id);
      await rental.destroy();
      await car.update({ available: true });
      res.send("Rental deleted");
    } else {
      res.status(404).send("Rental not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
