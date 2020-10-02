const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
router.get('/', async (req, res) => {
  const userCollection = await User.find({});
  res.send({userCollection})
});
router.get("/userfilldeatail", async (req, res) => {
  try {
    const userCollection = await User.find({});

    res.send(userCollection);
    userCollection.map(async (user, ind) => {
      const AllUserByUserId = await Order.find({ userId: user.userId });
      let  averageValue 
      const sumofsubtotal = AllUserByUserId.reduce(function (previosvalue, user) {      
        return previosvalue + user.subtotal;
      }, 0);

      Order.countDocuments({ userId: user.userId }, function (err, count) {
        averageValue = Math.floor(sumofsubtotal / count);
        User.findByIdAndUpdate(user.id, { noOfOrders: count }, function (
          err,
          docs
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        });
        User.findByIdAndUpdate(user._id, { averageBillValue: averageValue }, function (
          err,
          docs
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        });
      });
    });
  } catch (err) {
    res.status(400).send({ error: err });
    console.lof(err);
  }
});
router.get('/Updatedata' , async (req, res) => {
  const userCollection = await User.find({});
  Add_n_of_order()
  res.status(200).json({success:true, message: "Successfully Updated." });
} )
const Add_n_of_order = async (req, res) => {
  try {
    const userCollection = await User.find({});

    res.send(userCollection);
    userCollection.map(async (user, ind) => {
      const AllUserByUserId = await Order.find({ userId: user.userId });
      let  averageValue 
      const sumofsubtotal = AllUserByUserId.reduce(function (previosvalue, user) {      
        return previosvalue + user.subtotal;
      }, 0);

      Order.countDocuments({ userId: user.userId }, function (err, count) {
        averageValue = Math.floor(sumofsubtotal / count);
        User.findByIdAndUpdate(user.id, { noOfOrders: count }, function (
          err,
          docs
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        });
        User.findByIdAndUpdate(user._id, { averageBillValue: averageValue }, function (
          err,
          docs
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        });
      });
    });
  } catch (err) {
    res.status(400).send({ error: err });
    console.lof(err);
  }
};
module.exports = router;
