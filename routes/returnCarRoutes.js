const express = require("express");
const returnCarController = require("../controllers/returnCarController");
const router = express.Router();

router.get("/", returnCarController.getAllReturns);
router.post("/", returnCarController.createReturn);

module.exports = router;
