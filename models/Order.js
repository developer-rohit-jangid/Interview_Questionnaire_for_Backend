const mongoose = require("mongoose");
const { number } = require("prop-types");

const restaurantSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true
  },
  userId : {
    type: Number,
    required: true,
    trim: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("OrderSchema", restaurantSchema);
