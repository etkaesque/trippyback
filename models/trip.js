const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  id: { type: String, required: true},
  destination_city: { type: String, required: true },
  destination_country: { type: String, required: true },
  date: { type: Date, required: true},
  duration: { type: Number, required: true},
  imageUrl:{ type: String, required: true},
  free_food: {type: Boolean, required: true},
  price:{ type: Number, required: true},
  date_uploaded:{ type: Date, required: true},
  travel_by: { type: String, required: true},
  description: { type: String, required: true},
 
});

module.exports = mongoose.model("Trip", tripSchema);