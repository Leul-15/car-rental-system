const express = require("express");
const carController = require("../controllers/carController");
const router = express.Router();

router.get("/", carController.getAllCars);
router.post("/", carController.createCar);
router.put("/:registration_number", carController.updateCar);
router.delete("/:registration_number", carController.deleteCar);

module.exports = router;
