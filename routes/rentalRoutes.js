const express = require("express");
const rentalController = require("../controllers/rentalController");
const router = express.Router();

router.get("/", rentalController.getAllRentals);
router.post("/", rentalController.createRental);
router.put("/:id", rentalController.updateRental);
router.delete("/:id", rentalController.deleteRental);

module.exports = router;
