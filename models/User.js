const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  noOfOrders: {
    type: Number,
    required: false
  },
  averageBillValue: {
    type: Number,
    required: false
  }

});

module.exports = mongoose.model("UserSchema", menuSchema);
