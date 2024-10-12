const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salonSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    waitingCustomers: {
      type: Number,
      default: 0,
    }, // Number of customers waiting
    estimatedWaitTime: {
      type: {
        hours: { type: Number, default: 0 },
        minutes: { type: Number, default: 0 },
      },
      default: { hours: 0, minutes: 0 },
    },
    services: [String], // List of services offered by the salon
  }
  //   { timestamps: true }
);

module.exports = mongoose.model("Salon", salonSchema);
