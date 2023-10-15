const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    dafault: Date.now(),
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
