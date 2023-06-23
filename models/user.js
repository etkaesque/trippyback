 const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: { type: String, required: true},
  name: { type: String, required: true, min: 3 },
  email: { type: String, required: true},
  password: { type: String, required: true, min: 6 },
  photo:{ type: String, required: false},
  booked_trips: {type: Array, require: false}
 
});

module.exports = mongoose.model("User", userSchema);