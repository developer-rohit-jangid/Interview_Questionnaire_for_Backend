const express = require("express");
const router = express.Router();

const Order = require("../models/Order");


router.get("/", async (req, res) => {
  try {
    const orderCollection = await Order.find();
    
    res.send({ orderCollection });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
});





router.post("/add-Order", async (req, res) => {
  try {
    const newOrder = await Order.create({
      orderId: req.body.orderId,
      userId: req.body.userId,
      subtotal: req.body.subtotal,
      date : req.body.date
    });
    
    res.send({ newOrder });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});




module.exports = router;
