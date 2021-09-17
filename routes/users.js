const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", (req, res) => {
  res.send("User page");
});

router.get("/getAll", async (req, res) => {
  try {
    const user = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/",(req,res) =>{
    const user = new User({
        userName:req.body.userName,
        password:req.body.password,
        dateOfBirth:req.body.dateOfBirth,
        city:req.body.city,
    });
    user
    .save()
    .then((data) =>{
        res.json(data);
    })
    .catch((err) => {
        res.json({msg:"Error, could not save the new user entry"});
    });
})
module.exports = router;