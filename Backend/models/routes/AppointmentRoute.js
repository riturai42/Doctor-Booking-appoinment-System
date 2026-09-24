const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { user, doctor, date, time } = req.body;

    const appointment = await Appointment.create({
      user,
      doctor,
      date,
      time,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/my/:userId", async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.params.userId,
    }).populate("doctor");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;