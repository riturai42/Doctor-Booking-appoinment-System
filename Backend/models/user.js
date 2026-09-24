const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    specialization: String,
    experience: Number,
    fees: Number,
    about: String,
    image: String,
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);