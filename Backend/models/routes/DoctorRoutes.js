const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;