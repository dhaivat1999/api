const express = require("express");
const router = express.Router();
const Car = require("../models/cars");

router.get("/", (req, res) => {
  res.send("Car page");
});

router.get("/getAll", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/",(req,res) =>{
    const car = new Car({
        title:req.body.title,
        description:req.body.description,
        manufactureYear:req.body.manufactureYear,
        purchaseYear:req.body.purchaseYear,
        expectedPrice: req.body.expectedPrice,
        condition:req.body.condition,
        registrationLocation:req.body.registrationLocation,
        registrationNumber :req.body.registrationNumber
    });
    car
    .save()
    .then((data) =>{
        res.json(data);
    })
    .catch((err) => {
        res.json({msg:"Error, could not save the new car entry "+ err});
    });
})
module.exports = router;