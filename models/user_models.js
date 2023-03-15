const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name required"], unique: true },
  email: { type: String,required: [true, "Email required"] },
  phone: { type: Number, required: [true, "phone no. required"] },
  place: { type: String, required: [true, "place required"] },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
