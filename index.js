require("dotenv").config();
const express = require('express')
const cors = require("cors");
const app = express()
const tripRouter = require("./routes/trip.js")
const userRouter = require("./routes/user.js")
const mongoose = require('mongoose')


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 


mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log("Failed to connect to database.", error);
  });


app.use(tripRouter)
app.use(userRouter)
app.listen(process.env.PORT, () => {
    console.log(`Server is running.`)
  })