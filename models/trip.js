const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  id: { type: String, required: true},
  destination: { type: String, required: true },
  date: { type: Date, required: true},
  duration: { type: Number, required: true},
  imageUrl:{ type: String, required: true},
  free_food: {type: Boolean, required: true},
  price:{ type: Number, required: true},
 
});

module.exports = mongoose.model("Trip", tripSchema);