const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();


require("dotenv/config");
app.use(cors());

const carsRoute = require("./routes/cars");
const usersRoute = require("./routes/users");
const port = process.env.PORT || 5000;
app.use(bodyparser.json());
app.use("/cars", carsRoute);
app.use("/users",usersRoute);


app.listen(port,'0.0.0.0');


// app.use('/posts',function(){
//     console.log("middleware logic will run here each and everytime the api is called")
// })

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.get("/", (req, res) => {
  res.send("Home page");
});

//"start": "NODE_ENV=production node app.js"

//package.json prod remember before sending it to aws