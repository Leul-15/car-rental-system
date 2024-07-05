const ReturnCar = require("../models/returnCarModel");
const Car = require("../models/carModel");
const Rental = require("../models/rentalModel");

exports.getAllReturns = async (req, res) => {
  try {
    const returns = await ReturnCar.findAll();
    res.json(returns);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createReturn = async (req, res) => {
  try {
    const rental = await Rental.findOne({
      where: {
        car_id: req.body.car_id,
        customer_id: req.body.customer_id,
      },
    });

    if (rental) {
      const daysElapsed = Math.ceil(
        (new Date(req.body.date) - new Date(rental.due_date)) /
          (1000 * 60 * 60 * 24)
      );
      const fine = daysElapsed > 0 ? daysElapsed * 20 : 0;

      const returnCar = await ReturnCar.create({
        car_id: req.body.car_id,
        customer_id: req.body.customer_id,
        date: req.body.date,
        days_elapsed: daysElapsed,
        fine: fine,
      });

      const car = await Car.findByPk(req.body.car_id);
      await car.update({ available: true });

      res.status(201).json(returnCar);
    } else {
      res.status(400).send("Rental not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
