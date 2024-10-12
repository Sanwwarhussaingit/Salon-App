const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    salonId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Salon", // Reference to the Salon model
    },
    service: {
      type: String,
      required: true,
    },
    bookingTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Create the Booking model
const BookingModel = mongoose.model("Booking", bookingSchema);
module.exports = BookingModel;
